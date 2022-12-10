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
import Modal from "../../Modal";

const Loans = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    let approve, decline;

    //* Fetch all my loans
    const { data, loading, length, error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans/loanStatus/${userId}`, token);

    //* Fetch approve loans
    {
        const noToast = true
        const { execute, lengths, data } = usePost()
        approve = lengths;
        useEffect(() => {
            const Method = 'POST', endPoint = `loans/loanStatus/${userId}`;
            const raw = JSON.stringify({ "status": "approve" });
            execute(endPoint, raw, Method, noToast, token)
        }, [userId])
    }

    //* Fetch Decline loans
    {
        const noToast = true
        const { execute, lengths, data } = usePost()
        decline = lengths;
        useEffect(() => {
            const noToast = true
            const Method = 'POST', endPoint = `loans/loanStatus/${userId}`;
            const raw = JSON.stringify({ "status": "decline" });
            execute(endPoint, raw, Method, noToast, token)
        }, [userId])
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageTitle} />
                <MetaTag title_sco={LoangPage} />

                <Container fluid>
                    <div className="page-title-box mx-4">
                        <button className="btn text-white apply__btn"> Apply for loan</button>
                        <LoanProcess />
                        <LoanCardProcess length={length} approveLength={approve} declineLength={decline} />

                        {loading ? <Loading /> : <Table data={data} />}

                    </div>
                </Container>
            </div>

            <Modal ModalTitle="Apply for a loan" />
        </React.Fragment>
    )
}

export default Loans