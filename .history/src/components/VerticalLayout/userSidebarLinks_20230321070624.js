import { ApproveLoanRoute, DashboardRoute, DeclineLoanRoute, LoansRoute } from 'components/RouteName';
import React from 'react'
import { Link } from 'react-router-dom';

function userSidebarLinks() {
    return (
        <>
            <li>
                <Link to={DashboardRoute} className="has-arrow waves-effect">
                    <i className="ti-layout-grid2-alt"></i> <span>Dashboard</span>
                </Link>
                <Link to={LoansRoute} className="has-arrow waves-effect">
                    <i className="ti-layout-grid2-alt"></i> <span>Apply for loan</span>
                </Link>
                <Link to={ApproveLoanRoute} className="has-arrow waves-effect">
                    <i className="ti-layout-grid2-alt"></i> <span>Approve Loans</span>
                </Link>
                <Link to={DeclineLoanRoute} className="has-arrow waves-effect">
                    <i className="ti-layout-grid2-alt"></i> <span>Decline Loans</span>
                </Link>


                {/* <ul className="sub-menu" aria-expanded="true">
                    <li>
                        <Link to={DashboardRoute}>
                            <i className="ti-house"></i> <span> Dashboard </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={LoansRoute}>
                            <i className="ti-house"></i> <span> Apply for loan </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ApproveLoanRoute}>
                            <i className="ti-house"></i> <span> Approve Loans </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={DeclineLoanRoute}>
                            <i className="ti-house"></i> <span> Decline Loans </span>
                        </Link>
                    </li>
                </ul> */}
            </li>
        </>
    )
}

export default userSidebarLinks