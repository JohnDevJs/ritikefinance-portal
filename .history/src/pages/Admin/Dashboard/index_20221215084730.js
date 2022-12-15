import React from "react"
import { Col, Container, Row, Progress } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import ChartAmount from "./components/ChartAmount";
import Cards from "./components/Cards";
import { DashboardPage } from "components/SCO_Name";
import { DashboardPageDefault } from "components/BreadCrum";
import LoanTable from "./components/LoanTable";
import useFetch from '../../../hooks/useFecth';
import Loading from "components/Loading";
import ErrorPage from "components/ErrorPage";
import { ServerError } from "components/NotifyMessage";
import { MdDeleteForever } from "react-icons/md";


const Index = () => {

    const res_data = [];
    let pendingLenght, paidLenght;
    const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans`, null);

    {
        const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans?status=pending`, null)
        pendingLenght = data.length
    }
    {
        const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans?status=paid`, null)
        paidLenght = data.length
    }

    if (error) return <ErrorPage message={ServerError} />

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                firstName: res?.user?.firstName,
                lastName: res?.user?.lastName,
                payment_Date: res?.paymentDate?.split("T")[0],
                btnStatus: <button className={`btn-status ${res.status === "paid" ? "color__green" : "color__warning"}`}>  {res.status === "paid" ? "Paid" : "Pending"} </button>,
                progressBar: <div className="text-center">% {res?.loanPercentage}
                    <Progress
                        color={res?.loanPercentage <= 50 ? "danger" : res?.loanPercentage <= 99 ? "info" : "success"}
                        value={res?.loanPercentage} />
                </div>,
                deleteBtn: <button className="btn btn-danger"> <MdDeleteForever size={22} /> </button>,
            })
        });
    }
    filterArr();

    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        {
                            loading ? <Loading /> : (
                                <>
                                    <Cards length={data.length} paidLenght={paidLenght} pendingLenght={pendingLenght} />
                                    <ChartAmount />
                                    <LoanTable data={res_data} />
                                </>
                            )
                        }
                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default Index