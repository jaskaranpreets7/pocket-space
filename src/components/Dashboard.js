import React from 'react'
import DashboardContent from './DashboardContent';

export default function Dashboard() {
    let obj = [
        { "id": 1, "title": "Universe" },
        { "id": 2, "title": "Solar System" },
        { "id": 3, "title": "Galaxy", },
        { "id": 4, "title": "Big Bang Theory", },
        { "id": 5, "title": "Space" }
    ];

    const renderList = () => {
        return obj.map((item) => {
            return (
                <div className="ui card" key={item.id}>
                    <div className="content">
                        <a className="header" href="javascript:void(0)">{item.title}</a>
                        <div className="description">
                            Some Description of {item.title}
                        </div>
                    </div>
                    <div className="image">
                        <img src="" />
                    </div>
                    <div className="extra content">
                        <a  href="javascript:void(0)">
                            <i className="hand point right icon"></i>
                            More Info.
                        </a>
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
                <DashboardContent />
            </div>
        </div>
    )
}
