import React, {useState} from 'react'
import DashboardContent from './DashboardContent';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');

    const handleClick = (e) =>{
        props.handleClick();
        setTitle(e.currentTarget.dataset.value)
    };

    const renderList = () => {
        return props.result.map((item) => {
            return (
                <div className="ui card" key={item.id}>
                    <div className="content">
                        <div className="header" >{item.title}</div>
                        <div className="description">
                            Some Description of {item.title}
                        </div>
                    </div>
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="extra content">
                        <button className="ui button" tabIndex="0" type="click" onClick={(e)=>handleClick(e)} data-value={item.title} disabled={!item.hasDetails}>
                            <i className="hand point right icon"></i>
                            &nbsp;&nbsp;More Info.
                        </button>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="ui grid" style={{ paddingTop: '15px', maxHeight:'96vh' ,overflow:'auto' }}>
            <div className="three wide column">
                {renderList()}
            </div>
            <div className="thirteen wide column">
                {(props.isSelected)?<div style={{margin:'345px 0px 0px 410px'}}><h2>Select more info</h2></div> : <DashboardContent title={title} />}
            </div>
        </div>
    )
}
