import React, {useState} from 'react'
import DashboardContent from './DashboardContent';
import '../styles/dashboard.css'

interface Props {
    handleSubHeaderClick : () => void, 
    subHeader: {
        id: number
        title: string
        hasDetails: boolean
    }[],
    isSelected : boolean
}

export default function Dashboard( { subHeader, handleSubHeaderClick, isSelected } :Props  ) {
    const [title, setTitle] = useState('');

    const handleClick = ( e : any ) =>{
        handleSubHeaderClick();
        setTitle(e.currentTarget.dataset.value)
    };

    const renderList = () => {
        return subHeader.map((item) => {
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
                        <button className="ui button" tabIndex={0}  onClick={(e)=>handleClick(e)} data-value={item.title} disabled={!item.hasDetails}>
                            <i className="hand point right icon"></i>
                            &nbsp;&nbsp;More Info.
                        </button>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="ui grid dashboard-wrapper">
            <div className="three wide column">
                {renderList()}
            </div>
            <div className="thirteen wide column">
                {(isSelected)?<div className="select-label"><h2>Select more info</h2></div> : <DashboardContent title={title} />}
            </div>
        </div>
    )
}
