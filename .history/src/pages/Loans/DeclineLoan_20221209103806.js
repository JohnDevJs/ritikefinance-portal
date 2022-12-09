import React, { useEffect } from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import { DeclineLoanPage } from "components/SCO_Name";
import { DashboardPageDefault, DeclineLoanPageTitle } from "components/BreadCrum";
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

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;

    const noToast = true
    const { execute, data, pending } = usePost()

    useEffect(() => {
        const Method = 'POST', endPoint = `loans/loanStatus/${userId}`;
        const raw = JSON.stringify({ "status": "decline" });
        execute(endPoint, raw, Method, noToast, token)
    }, [userId])

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DeclineLoanPageTitle} />
                <MetaTag title_sco={DeclineLoanPage} />

                <Container fluid>
                    <div className="page-title-box mx-4">
                        <Link className="mb-5" to={LoansRoute}>Back</Link>

                        {pending ? <Loading /> : <Table data={data?.data?.data} />}

                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default DeclineLoan