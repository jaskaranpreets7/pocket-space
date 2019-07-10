import React, { useState, Fragment } from 'react'
import solarImg from '../assets/yat.gif';
import planetList from '../planets.json';

export default function SolarSytem() {
    const [check, setCheck] = useState(false);
    const [compare1, setCompare1] = useState('');
    const [secondValue, setSecondValue] = useState(false);
    const [compare2, setCompare2] = useState('');
    const onCheck = () => {
        setCheck(true);
    }

    const renderList = () => {
        return Object.keys(planetList.sections).map((planet) => {
            return (
                <div className="ui card" key={planet} draggable="true" onDragStart={(e) => { onDragStart(e, planet) }} style={{ cursor: 'pointer' }}>
                    <div className="content">{planet}</div>
                </div>
            )
        })
    }

    const onDragStart = (e, id) => {
        e.dataTransfer.setData('id', id)
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop1 = (e) => {
        let id = e.dataTransfer.getData('id');
        setCompare1(id)

    }

    const onDrop2 = (e) => {
        let id = e.dataTransfer.getData('id');
        setCompare2(id);
        setSecondValue(true);
    };

    const showImage = () => {
        setCheck(false)
    };

    const compare1Details = (compare1) => {
        if (compare1.length > 0) {
            return planetList.sections[compare1].map((item, index) => {
                return (
                    <div key={index}>
                        <h4>Distance</h4><em>{item.Distance}</em>
                        <h4>Mass</h4><em>{item.Mass}</em>
                        <h4>Volume</h4><em>{item.Volume}</em>
                        <h4>Temperature</h4><em>{item.Temperature}</em>
                    </div>
                )
            })
        }
    }


    const compare2Details = (compare2) => {
        if (compare2.length > 0) {
            return planetList.sections[compare2].map((item, index) => {
                return (
                    <div key={index}>
                        <h4>Distance</h4><em>{item.Distance}</em>
                        <h4>Mass</h4><em>{item.Mass}</em>
                        <h4>Volume</h4><em>{item.Volume}</em>
                        <h4>Temperature</h4><em>{item.Temperature}</em>
                    </div>
                )
            })
        }
    }

    const onRefresh = () => {
        setCompare1('');
        setCompare2('');

        console.log(compare1, compare2)
    }

    return (
        <div>
            <div className="ui grid">
                <div className="seven wide column">
                    {renderList()}
                </div>
                <div className="nine wide column">
                    <div style={{ paddingBottom: '15px', textAlign: 'right' }}>
                        {(check) ?
                            <Fragment><button className="ui button" onClick={showImage}><i className="align justify icon"></i>Show Image</button> <button onClick={onRefresh} className="ui button">Refresh</button></Fragment>
                            : <button className="ui button" onClick={onCheck}><i className="align justify icon"></i>Compare two planets</button>}
                    </div>
                    {(check) ?
                        <Fragment>
                            <div className="ui grid">
                                <div className="eight wide column"
                                    onDragOver={(e) => { onDragOver(e) }}
                                    onDrop={(e) => { onDrop1(e) }}
                                >
                                    {(compare1.length) ? <div className="ui card" style={{ textAlign: 'center' }}><div className="content">{compare1}</div></div> : <span>Drag 1st planet and Drop here</span>}
                                </div>
                                <div className="eight wide column"
                                    onDragOver={(e) => { onDragOver(e) }}
                                    onDrop={(e) => { onDrop2(e) }}>
                                    {(compare2.length) ? <div className="ui card" style={{ textAlign: 'center' }} ><div className="content">{compare2}</div></div> : <span>Drag 2nd planet and Drop here</span>}
                                </div>
                            </div>
                            {(secondValue) ?
                                <Fragment>
                                    {(compare1 !== compare2) ?
                                        <div className="ui grid">
                                            <div className="eight wide column">
                                                {compare1Details(compare1)}
                                            </div>
                                            <div className="eight wide column">
                                                {compare2Details(compare2)}
                                            </div>
                                        </div> : <div style={{ textAlign: 'center', paddingTop: '10px' }}>{(compare1.length === 0 && compare2.length === 0) ? null : <h3><em>Can't compare same terrestrial bodies</em></h3>}</div>}
                                </Fragment> : null}
                        </Fragment> : <img src={solarImg} alt="solar-system" />}
                </div>
            </div>
        </div>

    )
}
