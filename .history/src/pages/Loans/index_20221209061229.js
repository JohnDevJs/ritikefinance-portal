import React, { useEffect } from "react"
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
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id
    const message = "hello";
    const Method = 'GET', endPoint = `loans/loanStatus/${userId}`;
    const raw = JSON.stringify({ "status": "decline" });

    useEffect(() => {
        execute(endPoint, raw, Method, message, token)
    }, [userId]);

    console.log(" userDet : ", userDet)
    console.log(" data : ", data)

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