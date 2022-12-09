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


const Loans = () => {

    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/courses`, null);
    console.log(process.env.REACT_APP_BACKEND_URL)
    // if (loading) return <Loading />


    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageTitle} />
                <MetaTag title_sco={LoangPage} />

                <Container fluid>
                    <div className="page-title-box mx-4">
                        <button> Apply for loan</button>
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