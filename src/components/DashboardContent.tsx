import React, {Fragment} from 'react';
import Universe from './Universe';
import SolarSytem from './SolarSytem';

interface Props {
    title: string
}

export default function DashboardContent({ title } : Props ) {
    return (
        <div className="ui pilled segment">
            <h2 className="ui header">{title}</h2>
            {(title === 'Solar System')?<Fragment><SolarSytem/></Fragment>:null} 
            {(title === 'Universe')?<Fragment><Universe/></Fragment>:null}   
        </div>
    )
}

