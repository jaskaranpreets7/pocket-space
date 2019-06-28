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
                        <button className="ui button" tabIndex="0" type="click" onClick={(e)=>handleClick(e)} data-value={item.title}>
                            <i className="hand point right icon"></i>
                            &nbsp;&nbsp;More Info.
                        </button>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="ui grid" style={{ marginTop: '15px' }}>
            <div className="three wide column">
                {renderList()}
            </div>
            <div className="thirteen wide column">
                {(props.isSelected)?<div className="ui center aligned placeholder segment"><div><p>Select more info</p></div></div> : <DashboardContent title={title} />}
            </div>
        </div>
    )
}
