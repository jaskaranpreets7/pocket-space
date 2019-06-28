import React from 'react'
import solarImg from '../assets/yat.gif';
import planetList from '../planets.json';

export default function SolarSytem() {
    const renderList = () => {
        return Object.keys(planetList.sections).map((planet) => {
            return (
                <button type="button" className="ui card" key={planet}>
                    <div className="content">{planet}</div>
                </button>
            )
        })
    }

    return (
        <div className="ui grid">
            <div className="seven wide column">
                {renderList()}
            </div>
            <div className="nine wide column">
                <img src={solarImg} alt="solar-system" />
            </div>
        </div>
    )
}
