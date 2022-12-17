import React from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { LoanRequestPage } from "components/SCO_Name";
import { UserTitle } from "components/BreadCrum";
import { UsersRoute, LoanRequestRoute } from "components/RouteName";
import useFetch from '../../../hooks/useFecth';
import { ApprovedLoanMsg, DeclinedLoanMsg, ServerError, VerificationLoanMsg } from "components/NotifyMessage";
import Loading from "components/Loading";
import LoanTable from "./components/LoanTable";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import { RiCheckDoubleLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import usePost from "hooks/usePost";


const Index = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans?status=pending&status=verification`, token);
    const { execute } = usePost()

    if (error) return <ErrorPage message={ServerError} />

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                firstName: res?.user?.firstName,
                lastName: res?.user?.lastName,
                payment_Date: res?.paymentDate?.split('T')[0],
                image: <img src={`${process.env.REACT_APP_IMG_API}${res?.user?.photoProfile}`} alt="" width={50} height={40} />,
                viewBtn: <button className="btn btn-danger color__blue"> View </button>,
                verifyBtn: <button className="btn btn-danger color__verify" onClick={() => verificationFunc(res?._id)}> Verification </button>,
                approveBtn: <button className="btn btn-danger color__green" onClick={() => approveFunc(res?._id)}> Approve </button>,
                declineBtn: <button className="btn btn-danger color__red" onClick={() => declineFunc(res?._id)}> Decline </button>,
                downloadBtn: <button className="btn btn-danger color__download"> Download </button>,
            })
        });
    }
    filterArr();

    const verificationFunc = (id) => {
        const Method = 'POST', endPoint = `loans/loanStatus/${id}`;
        const raw = JSON.stringify({ "status": "verification" });
        execute(endPoint, raw, Method, VerificationLoanMsg, token)

        setTimeout(() => {
            reFetch()
        }, 2000);
    }

    const approveFunc = (id) => {
        const Method = 'POST', endPoint = `loans/loanStatus/${id}`;
        const raw = JSON.stringify({ "status": "approve" });
        execute(endPoint, raw, Method, ApprovedLoanMsg, token)

        setTimeout(() => {
            reFetch()
        }, 2000);
    }

    const declineFunc = (id) => {
        const Method = 'POST', endPoint = `loans/loanStatus/${id}`;
        const raw = JSON.stringify({ "status": "decline" });
        execute(endPoint, raw, Method, DeclinedLoanMsg, token)

        setTimeout(() => {
            reFetch()
        }, 2000);
    }

    console.log(data)

    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={LoanRequestRoute} defaultName="Loan request" title={"Loans"} />
                <MetaTag title_sco={LoanRequestPage} />

                <Container fluid>
                    <div className="page-title-box">
                        {loading ? <Loading /> : (<LoanTable data={res_data} />)}
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}
export default Index