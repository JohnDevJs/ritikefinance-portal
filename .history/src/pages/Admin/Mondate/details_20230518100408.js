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
import DownloadExcelComp from './components/DownloadExcelComp';
import { saveAs } from 'file-saver';
import { Row, Col, Card, CardBody } from 'reactstrap';
// import generatePdf from './PDFFunc';
import { useParams } from 'react-router-dom';



const IndexDetails = () => {
    const { id } = useParams()

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${id}`, token);
    const [openModal, setOpenModal] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [viewUserDet, setViewUserDet] = React.useState(false);
    const [openDownloadModal, setOpenDownloadModal] = React.useState(false);
    const TotalToPay = parseInt(data?.loan?.totalAmount) + parseInt(data?.loan?.amount)


    if (error) return <ErrorPage message={ServerError} />


    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={LoanRequestRoute} defaultName="Mondate form" title={"details"} />
                <MetaTag title_sco={LoanRequestPage} />
                <Container fluid>

                    <Card>
                        <CardBody>
                            <Row>
                                <Col>
                                    <h4>Loan Details</h4>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <p> <b> Full Name : </b>  {data?.user?.firstName} {data?.user?.lastName}</p>
                                    <p><b>Phone number : </b>{data?.user?.phoneNumber}</p>
                                    <p><b>Email : </b>{data?.user?.email}</p>
                                    <p><b>Account Number : </b>{data?.user?.accountNumber}</p>
                                    <p><b>Bank Name : </b>{data?.user?.bankName}</p>
                                    <p><b>Payment date : </b>{data?.loan?.paymentDate.split('T')[0]}</p>
                                    <p><b>Loan amount : </b>R {data?.loan?.amount}</p>
                                    <p><b>Amount to pay : </b>R {TotalToPay}</p>
                                </Col>
                            </Row>

                            <div className="mt-4">
                                <p>If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day:</p>
                                <h5 className="text-primary">{data?.debitedAgree ? "Yes" : "No"}</h5>
                            </div>

                            <div className="mt-4">
                                <p>The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day:</p>
                                <h5 className="text-primary">{data?.debitedAgree2 ? "Yes" : "No"}</h5>
                            </div>

                            <div className="mt-4">
                                <p>To allow for tracking of dates to match with flow of Credit at no additional cost to myself:</p>
                                <h5 className="text-primary">{data?.trackingOfDate ? "Yes" : "No"}</h5>
                            </div>

                            <div className="mt-4">
                                <p>I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself:</p>
                                <h5 className="text-primary">{data?.authorized ? "Yes" : "No"}</h5>
                            </div>

                            <div className="mt-4">
                                <p>Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing:  <h5 className="text-primary">{data?.dateSignedAt?.split('T')[0]}</h5> </p>

                            </div>

                            <div className="mt-4">
                                <h5>MANDATE</h5>
                                <p>I/We acknowledge that all payment instructions issued by you shall be treated by my/our abovementioned bank as if the instructions had been issued by me/us personally.</p>
                            </div>

                            <div className="mt-4">
                                <h5>CANCELLATION</h5>
                                <p>I/We agree that although this authority and mandate may be cancelled by me/us, such cancellation will not cancel the Agreement. I/We also understand that I/we cannot reclaim amounts, which have been withdrawn from my/our account (paid) in terms of this authority and mandate if such amounts were legally owing to you.</p>
                            </div>

                            <div className="mt-4">
                                <h5>ASSIGNMENT</h5>
                                <p>I/We acknowledge that this authority may be ceded or assigned to a third party if the Agreement is also ceded or assigned to that third party.</p>
                            </div>


                            {!data.signatureData ? null : <img src={data.signatureData} alt="Signature" />}

                            <button className='btn btn__table text-white' onClick={handleDownload}> Download in PDF </button>

                        </CardBody>
                    </Card>

                </Container>
            </div>
        </React.Fragment>
    )
}
export default IndexDetails