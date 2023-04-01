import { AdminDashboardRoute, UsersRoute, LoanRequestRoute, TeamRoute, ApprovedLoanRoute } from 'components/RouteName';
import React from 'react'
import { Link } from 'react-router-dom';

function AdminSidebarLinks() {
    return (
        <>
            <li>
                <Link to={AdminDashboardRoute} className="has-arrow waves-effect">
                    <i className="ti-view-grid"></i> <span>Dashboard</span>
                </Link>
                <Link to={LoanRequestRoute} className="has-arrow waves-effect">
                    <i className="ti-hand-open"></i> <span>New request</span>
                </Link>
                <Link to={ApprovedLoanRoute} className="has-arrow waves-effect">
                    <i className="ti-check-box"></i> <span>Approved loans</span>
                </Link>
                <Link to={UsersRoute} className="has-arrow waves-effect">
                    <i className="ti-user"></i> <span>Users</span>
                </Link>
                <Link to={TeamRoute} className="has-arrow waves-effect">
                    <i className="ti-user"></i> <span>Teams</span>
                </Link>
                {/* <ul className="sub-menu" aria-expanded="false">
                    <li>
                        <Link to={AdminDashboardRoute}>
                            <i className="ti-house"></i> <span> Dashboard </span>
                        </Link>
                    </li>

                    <li>
                        <Link to={LoanRequestRoute}>
                            <i className="ti-users"></i> <span> New request </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ApprovedLoanRoute}>
                            <i className="ti-users"></i> <span> Approved loans  </span>
                        </Link>
                    </li>

                    <li>
                        <Link to={UsersRoute}>
                            <i className="ti-users"></i> <span> Users </span>
                        </Link>
                    </li>

                    <li>
                        <Link to={TeamRoute}>
                            <i className="ti-users"></i> <span> Teams </span>
                        </Link>
                    </li> */}
            </ul>
        </li >

        </>
    )
}

export default AdminSidebarLinks