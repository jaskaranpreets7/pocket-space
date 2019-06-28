import React, {Fragment} from 'react';
import Universe from './Universe';
import SolarSytem from './SolarSytem';

export default function DashboardContent(props) {
    return (
        <div className="ui pilled segment">
            <h2 className="ui header">{props.title}</h2>
            {(props.title === 'Solar System')?<Fragment><SolarSytem/></Fragment>:null} 
            {(props.title === 'Universe')?<Fragment><Universe/></Fragment>:null}   
        </div>
    )
}


//Todo's 
// compare two planets functionality 
// details about particular planet and refactor json data
//animation to show details