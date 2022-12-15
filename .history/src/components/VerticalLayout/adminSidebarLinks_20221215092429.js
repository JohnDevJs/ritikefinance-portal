import { AdminDashboardRoute, UsersRoute } from 'components/RouteName';
import React from 'react'
import { Link } from 'react-router-dom';

function AdminSidebarLinks() {
    return (
        <>
            <li>
                <Link to="/#" className="has-arrow waves-effect">
                    <i className="ti-view-grid"></i> <span>Dashboard</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                    <li>
                        <Link to={AdminDashboardRoute}>
                            <i className="ti-house"></i> <span> Dashboard </span>
                        </Link>
                    </li>
                </ul>
                <ul className="sub-menu" aria-expanded="false">
                    <li>
                        <Link to={UsersRoute}>
                            <i className="ti-users"></i> <span> Users </span>
                        </Link>
                    </li>
                </ul>
            </li>

        </>
    )
}

export default AdminSidebarLinks