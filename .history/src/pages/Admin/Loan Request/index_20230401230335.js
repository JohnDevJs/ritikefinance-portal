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
import { RiCheckDoubleLine, RiFileExcel2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import usePost from "hooks/usePost";
import SmallModal from './../../../SmallModal';
import Modal from "./components/Modal";
import LoanDetails from "./components/LoanDetails";
import { BsEyeFill } from "react-icons/bs";
import ModalComp from '../../../Modal';


const Index = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans?status=pending&status=verification`, token);
    const [openModal, setOpenModal] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [viewUserDet, setViewUserDet] = React.useState(false);

    const { execute, pending } = usePost()

    if (error) return <ErrorPage message={ServerError} />

    const verifyFunc = (id) => {
        setOpenModal(true)
        setStatus("verification")
        setLoanId(id)
        setBtnName("Verification")
    }
    const approveFunc = (id) => {
        setOpenModal(true)
        setStatus("approve")
        setLoanId(id)
        setBtnName("Move to approve")
    }
    const declineFunc = (id) => {
        setOpenModal(true)
        setStatus("decline")
        setLoanId(id)
        setBtnName("Move to decline")
    }
    const viewDetails = (id) => {
        setViewUserDet(true)
        setLoanId(id)
    }
    const sendFormFunc = (id) => {
        // setViewUserDet(true)
        // setLoanId(id)
        const Method = 'POST', endPoint = 'mandates';
        const raw = JSON.stringify({
            debitedAgree: false,
            debitedAgree2: false,
            trackingOfDate: false,
            authorized: false,
            agreement: false,
            user: id
        });
        execute(endPoint, raw, Method, LoginMsg)
    }

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                firstName: res?.user?.firstName,
                lastName: res?.user?.lastName,
                payment_Date: res?.paymentDate?.split('T')[0],
                image: <img src={`${process.env.REACT_APP_IMG_API}${res?.user?.photoProfile}`} alt="" width={50} height={40} />,
                viewBtn: <button className="btn btn__table  color__blue" onClick={() => viewDetails(res?._id)}> <BsEyeFill size={14} /> View </button>,
                verifyBtn: <button className="btn btn__table color__verify" onClick={() => verifyFunc(res?._id)}>  Verification </button>,
                approveBtn: <button className="btn btn__table color__green" onClick={() => approveFunc(res?._id)}> Approved </button>,
                declineBtn: <button className="btn btn__table color__red" onClick={() => declineFunc(res?._id)}> Declined </button>,
                formBtn: <button className="btn btn__table color__red" onClick={() => declineFunc(res?._id)}> Send a form </button>,
                // downloadBtn: <button className="btn btn__table color__download"> Send form <RiFileExcel2Fill size={18} /> </button>,
                downloadBtn: <button className="btn btn__table color__download" onClick={() => sendFormFunc(res?._id)}> Send form  </button>,
            })
        });
    }
    filterArr();

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

            <ModalComp
                ModalTitle="View more details"
                open={viewUserDet}
                onClose={() => setViewUserDet(false)}
                cancel="close"
                Component={<LoanDetails onClose={() => setViewUserDet(false)} loan_Id={loanId} />}
            />

            <SmallModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                ModalTitle="Move to verification"
                cancel="close"
                Components={<Modal reFetch={reFetch} onClose={() => setOpenModal(false)} status={status} loanId={loanId} btnName={btnName} />}
            />

        </React.Fragment>
    )
}
export default Index