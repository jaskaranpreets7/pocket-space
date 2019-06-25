import React from 'react';
import planets from '../planets.json';
import solorSytem from '../assets/yat.gif';

export default function DashboardContent(props) {
    const renderList = () => {
        return Object.keys(planets.sections).map((planet)=>{
            return (
                <button type="button" className="ui card" key={planet}>
                    <div className="content">{planet}</div>
                </button>
            )
        })
    }

    return (
        <div className="ui pilled segment">
            <h2 className="ui header">{props.title}</h2>
            {(props.title === planets.name) ? 
                <div className="ui grid">
                    <div className="seven wide column">
                        {renderList()}
                    </div>
                    <div className="nine wide column">
                        <img src={solorSytem} alt="solar-system"/>
                    </div>
            </div>:null}    
        </div>
    )
}


//Todo's 
// compare two planets functionality 
// details about particular planet and refactor json data