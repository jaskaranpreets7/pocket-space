import React from 'react'

function Header() {
    return (
        <div>
            <div className="ui pointing menu">
                <a className="item active" href="javascript:void(0)">
                    Home
            </a>
                <a className="item" href="javascript:void(0)">
                    About
            </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui transparent icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;