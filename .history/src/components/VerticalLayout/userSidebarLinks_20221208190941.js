import { DashboardRoute, LoansRoute } from 'components/RouteName';
import React from 'react'
import { Link } from 'react-router-dom';

function userSidebarLinks() {
    return (
        <>
            <li>
                <Link to="/#" className="has-arrow waves-effect">
                    <i className="ti-layout-grid2-alt"></i> <span>Dashboard</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                    <li>
                        <Link to={DashboardRoute}>
                            <i className="ti-house"></i> <span> Dashboard </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={LoansRoute}>
                            <i className="ti-house"></i> <span> Loans </span>
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/#" className="has-arrow waves-effect">
                    <i className="ti-server"></i> <span>Loans</span>
                </Link>
                <ul className="sub-menu" aria-expanded="false">
                    <li>
                        <Link to="/dashboard">
                            <i className="ti-server"></i> <span> Loans </span>
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    )
}

export default userSidebarLinks