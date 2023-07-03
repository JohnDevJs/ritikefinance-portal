import React from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { LoanRequestPage } from "components/SCO_Name";
import { LoanRequestRoute } from "components/RouteName";
import useFetch from '../../../hooks/useFecth';
import { SendFormMsg, ServerError } from "components/NotifyMessage";
import Loading from "components/Loading";
import LoanTable from "./components/LoanTable";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
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
    const [declineModal, setDeclineModal] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [modalTitle, setModalTitle] = React.useState();
    const [viewUserDet, setViewUserDet] = React.useState(false);
    const { execute, pending } = usePost()

    if (error) return <ErrorPage message={ServerError} />

    const verifyFunc = (id) => {
        setOpenModal(true)
        setStatus("verification")
        setLoanId(id)
        setBtnName("Submit")
        setModalTitle("Verified")
    }

    const approveFunc = (id) => {
        setOpenModal(true)
        setStatus("approve")
        setLoanId(id)
        setBtnName("Move to approve")
        setModalTitle("Approved")
    }

    const declineFunc = (id) => {
        setDeclineModal(true)
        setStatus("decline")
        setLoanId(id)
        setBtnName("Declined")
        setModalTitle("Declined Loan")
    }

    const viewDetails = (id) => {
        setViewUserDet(true)
        setLoanId(id)
    }

    const sendFormFunc = (reqUserId, loanId) => {
        const Method = 'POST', endPoint = 'mandates';
        const raw = JSON.stringify({
            debitedAgree: false,
            debitedAgree2: false,
            trackingOfDate: false,
            authorized: false,
            agreement: false,
            user: reqUserId,
            loan: loanId
        });
        execute(endPoint, raw, Method, SendFormMsg, token)
    }


    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                firstName: res?.user?.firstName,
                lastName: res?.user?.lastName,
                payment_Date: res?.paymentDate?.split('T')[0],
                image: <img src={`${process.env.REACT_APP_IMG_API}${res?.user?.photoProfile}`} alt="" width={50} height={40} />,
                viewBtn: <button className="btn btn__table  color__blue" onClick={() => viewDetails(res?._id)}> <BsEyeFill size={14} /> View request </button>,
                verifyBtn: <button className="btn btn__table color__verify" onClick={() => verifyFunc(res?._id)}>  Verified </button>,

                downloadBtn: <button className="btn btn__table color__download" onClick={() => sendFormFunc(res?.user?._id, res?._id)}> Send A form  </button>,
                approveBtn: <button className="btn btn__table color__green" onClick={() => approveFunc(res?._id)}> Approved </button>,
                declineBtn: <button className="btn btn__table color__red" onClick={() => declineFunc(res?._id)}> Declined </button>,
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
                ModalTitle={modalTitle}
                cancel="close"
                Components={<Modal reFetch={reFetch} onClose={() => setOpenModal(false)} status={status} loanId={loanId} btnName={btnName} />}
            />

            <SmallModal
                open={declineModal}
                onClose={() => declineModal(false)}
                ModalTitle={modalTitle}
                cancel="close"
                Components={<Modal reFetch={reFetch} onClose={() => declineModal(false)} status={status} loanId={loanId} btnName={btnName} />}
            />

        </React.Fragment>
    )
}
export default Index