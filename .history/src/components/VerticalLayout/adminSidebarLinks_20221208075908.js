import React from 'react'
import { Link } from 'react-router-dom';

function adminSidebarLinks() {
    return (
        <li>
            <Link to="/#" className="has-arrow waves-effect">
                <i className="ti-view-grid"></i> <span>Dashboard</span>
            </Link>
            <ul className="sub-menu" aria-expanded="false">
                <li>
                    <Link to="/dashboard">
                        <i className="ti-house"></i> <span> Dashboard </span>
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default adminSidebarLinks