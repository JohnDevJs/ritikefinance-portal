import React, { useEffect } from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { ApproveLoanPage } from "components/SCO_Name";
import { DashboardPageDefault, ApproveLoanPageTitle } from "components/BreadCrum";
import Table from "./components/table";
import Loading from "components/Loading";
import { loginUser } from "../../../Redux/Slices/userSlice";
import { useStore1Selector } from 'index';
import usePost from '../../../hooks/usePost';
import { Link } from 'react-router-dom';
import { LoansRoute } from "components/RouteName";
import { BsArrowLeft } from 'react-icons/bs';

const ApproveLoan = () => {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;


    const noToast = true
    const { execute, data, pending } = usePost()

    useEffect(() => {
        const Method = 'POST', endPoint = `loans/loanStatus/${userId}`;
        const raw = JSON.stringify({ "status": "approve" });
        execute(endPoint, raw, Method, noToast, token)
    }, [userId])

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={ApproveLoanPageTitle} />
                <MetaTag title_sco={ApproveLoanPage} />

                <Container fluid>
                    <div className="page-title-box mx-4">
                        <Link to={LoansRoute}> <BsArrowLeft /> Back </Link>
                        <div className="mt-3">
                            {/* {pending ? <Loading /> : <Table data={data?.data?.data} hideStatus={false} />} */}

                            {pending ? (
                                <Loading />
                            ) : (
                                <>
                                    {data?.data?.data?.length > 0 ? (
                                        <Table data={data.data.data} hideStatus={false} />
                                    ) : (
                                        <p>Data is empty.</p>
                                    )}
                                </>
                            )}

                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ApproveLoan