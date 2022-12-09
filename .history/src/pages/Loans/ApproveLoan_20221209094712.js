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

const ApproveLoan = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    const { execute, pending, data, lengths } = usePost()
    const noToast = true

    const { length, error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans/loanStatus/${userId}`, token);

    useEffect(() => {
        const Method = 'POST', endPoint = `loans/loanStatus/${userId}`;
        const raw = JSON.stringify({ "status": "approve" });
        execute(endPoint, raw, Method, noToast, token)
    }, [])

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={ApproveLoanPageTitle} />
                <MetaTag title_sco={ApproveLoanPage} />

                <Container fluid>
                    <div className="page-title-box mx-4">
                        <Link>Back</Link>

                        {/* {pending ? <Loading /> : <Table data={data} />} */}

                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ApproveLoan