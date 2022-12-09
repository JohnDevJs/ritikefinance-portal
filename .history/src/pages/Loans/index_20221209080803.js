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

const Loans = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    const status = "pending";
    // const { data, loading } = useFetch(`https://ritike-loans-api.vercel.app/api/v1/loans/loanStatus/637fc2c2b4cbd5010f109f73`, token, status);

    // if (loading) return <Loading />

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODEzNDQyOWM4YWZkODQ3MTRjYTRiNCIsImlhdCI6MTY3MDUyMTE2MSwiZXhwIjoxNjcwOTUzMTYxfQ.Fb0mC5hgo6oyplWVEw7NEg_uaikE6QMLNgRlaz2w8To");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "status": "pending"
        });

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            body: raw,
        };

        fetch("https://ritike-loans-api.vercel.app/api/v1/loans/loanStatus/637fc2c2b4cbd5010f109f73", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    })

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