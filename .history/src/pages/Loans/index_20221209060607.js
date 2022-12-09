import React from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import { LoangPage } from "components/SCO_Name";
import { DashboardPageDefault, DashboardPageTitle } from "components/BreadCrum";
import Table from "./components/table";
import useFetch from './../../hooks/useFecth';
import Loading from "components/Loading";
import LoanCardProcess from "./components/LoanCardProcess";
import LoanProcess from "./components/LoanProcess";
import { loginUser } from "../../Redux/Slices/userSlice";
import { useStore1Selector } from 'index';
import usePost from './../../hooks/usePost';


const Loans = () => {

    const userDet = useStore1Selector(loginUser);
    const { execute, pending, data } = usePost();
    const token = userDet.token;

    console.log(" userDet : ", userDet)

    const handleValidSubmit = () => {
        const Method = 'GET', endPoint = `loans/loanStatus/${5}`;
        const raw = JSON.stringify({ "status": "decline" });
        execute(endPoint, raw, Method, "", token)
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageTitle} />
                <MetaTag title_sco={LoangPage} />

                <Container fluid>
                    <div className="page-title-box mx-4">
                        <button className="btn text-white"> Apply for loan</button>
                        <LoanProcess />
                        <LoanCardProcess />
                        <Table />
                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}


export default Loans