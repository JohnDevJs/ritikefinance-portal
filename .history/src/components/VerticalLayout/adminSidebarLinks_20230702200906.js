import { AdminDashboardRoute, UsersRoute, LoanRequestRoute, TeamRoute, ApprovedLoanRoute, MondateFormroute, DeclinedLoanRoute, PaidLoanRoute, DebtCollectionRoute } from 'components/RouteName';
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
                        <i className="ti-hand-open"></i> <span>New requests</span>
                    </Link>

                </li>

                <li>
                    <Link to={MondateFormroute}>
                        <i className="ti-agenda"></i> <span>Mandate form</span>
                    </Link>
                </li>


                <li>
                    <Link to={ApprovedLoanRoute}>
                        <i className="ti-check-box"></i> <span>Approved loans</span>
                    </Link>
                </li>
                <li>
                    <Link to={DeclinedLoanRoute}>
                        <i className="ti-check-box"></i> <span>Declined loans</span>
                    </Link>
                </li>
                <li>
                    <Link to={PaidLoanRoute}>
                        <i className="ti-check-box"></i> <span>Paid loans</span>
                    </Link>
                </li>
                <li>
                    <Link to={DebtCollectionRoute}>
                        <i className="ti-check-box"></i> <span>Debt Collection</span>
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
            </li>

        </>
    )
}

export default AdminSidebarLinks