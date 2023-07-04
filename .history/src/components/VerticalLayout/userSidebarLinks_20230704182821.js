import { ApproveLoanRoute, DashboardRoute, DeclineLoanRoute, LoansRoute } from 'components/RouteName';
import React from 'react'
import { Link } from 'react-router-dom';

function userSidebarLinks() {
    return (
        <>
            <li>
                <li>
                    <Link to={LoansRoute} >
                        <i className="ti-layout-grid2-alt"></i> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={LoansRoute} >
                        <i className="ti-wallet"></i> <span>Apply for loan</span>
                    </Link>
                </li>
                <li>
                    <Link to={ApproveLoanRoute} >
                        <i className="ti-check-box"></i> <span>Approved Loans</span>
                    </Link>
                </li>
                <li>
                    <Link to={DeclineLoanRoute} className="">
                        <i className="ti-thumb-down"></i> <span>Declined Loans</span>
                    </Link>
                </li>
            </li>
        </>
    )
}

export default userSidebarLinks