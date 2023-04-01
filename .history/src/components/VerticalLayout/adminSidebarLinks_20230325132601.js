import { AdminDashboardRoute, UsersRoute, LoanRequestRoute, TeamRoute, ApprovedLoanRoute, MondateFormroute } from 'components/RouteName';
import React from 'react'
import { Link } from 'react-router-dom';

function AdminSidebarLinks() {
    return (
        <>
            <li>
                <li>
                    <Link to={AdminDashboardRoute}>
                        <i className="ti-view-grid"></i> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={LoanRequestRoute}>
                        <i className="ti-hand-open"></i> <span>New request</span>
                    </Link>

                </li>

                <li>
                    <Link to={MondateFormroute}>
                        <i className="ti-agenda"></i> <span>Mondate form</span>
                    </Link>
                </li>


                <li>
                    <Link to={ApprovedLoanRoute}>
                        <i className="ti-check-box"></i> <span>Approved loans</span>
                    </Link>
                </li>

                <li>
                    <Link to={UsersRoute}>
                        <i className="ti-user"></i> <span>Users</span>
                    </Link>
                </li>
                <li>
                    <Link to={TeamRoute}>
                        <i className="ti-user"></i> <span>Teams</span>
                    </Link>
                </li>
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
                {/* </ul> */}
            </li>

        </>
    )
}

export default AdminSidebarLinks