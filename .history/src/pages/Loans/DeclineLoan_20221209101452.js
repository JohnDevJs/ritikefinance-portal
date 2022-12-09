import React, { useEffect } from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import { ApproveLoanPage } from "components/SCO_Name";
import { DashboardPageDefault, ApproveLoanPageTitle } from "components/BreadCrum";
import Table from "./components/table";
import Loading from "components/Loading";
import LoanCardProcess from "./components/LoanCardProcess";
import LoanProcess from "./components/LoanProcess";
import { loginUser } from "../../Redux/Slices/userSlice";
import { useStore1Selector } from 'index';
import usePost from './../../hooks/usePost';
import useFetch from './../../hooks/useFecth';
import { Link } from 'react-router-dom';
import { LoansRoute } from "components/RouteName";

const DeclineLoan = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={ApproveLoanPageTitle} />
                <MetaTag title_sco={ApproveLoanPage} />

                <Container fluid>
                    <div className="page-title-box mx-4">
                        <Link to={LoansRoute}>Back</Link>


                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default DeclineLoan