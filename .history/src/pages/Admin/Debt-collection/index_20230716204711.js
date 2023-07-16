import React from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { LoanRequestPage } from "components/SCO_Name";
import { LoanRequestRoute } from "components/RouteName";
import useFetch from '../../../hooks/useFecth';
import { ServerError } from "components/NotifyMessage";
import Loading from "components/Loading";
import LoanTable from "./components/LoanTable";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import { RiFileExcel2Fill } from "react-icons/ri";
import SmallModal from './../../../SmallModal';
import Modal from "./components/Modal";
import LoanDetails from "./components/LoanDetails";
import DownloadExcelComp from "./components/DownloadExcelComp";
import { BsEyeFill } from "react-icons/bs";
import ModalComp from '../../../Modal';
import ErrorPage from "components/ErrorPage";
import { Badge } from "react-bootstrap";


const Index = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    // const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans/debt?status=debtCollection`, token);
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans/debt?status=debtCollection&sort=-createdAt`, token);
    const [openModal, setOpenModal] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [viewUserDet, setViewUserDet] = React.useState(false);
    const [openDownloadModal, setOpenDownloadModal] = React.useState(false);

    if (error) return <ErrorPage message={ServerError} />

    const updatePayment = (id) => {
        setOpenModal(true)
        setStatus("verification")
        setLoanId(id)
        setBtnName("Verification")
    }

    const viewDetails = (id) => {
        setViewUserDet(true)
        setLoanId(id)
    }

    // const downLoadExcel = (id) => {
    //     setOpenDownloadModal(true)
    //     setLoanId(id)
    // }

    const filterArr = () => {
        data?.forEach(res => {
            res_data.push({
                ...res,
                firstName: res?.user?.firstName,
                lastName: res?.user?.lastName,
                payment_Date: res?.paymentDate?.split('T')[0],
                debt_start_date: res?.debtStatus?.startDate?.split('T')[0],
                debt_weekly_duration: <Badge variant="danger" className="p-2">{`${res?.debtStatus?.week} week${res?.debtStatus?.week === 1 ? "" : "s"}`} </Badge>,
                image: <img src={`${process.env.REACT_APP_IMG_API}${res?.user?.photoProfile}`} alt="" width={50} height={40} />,
                // viewBtn: <button className="btn btn__table  color__blue" onClick={() => viewDetails(res?._id)}> <BsEyeFill size={14} /> View </button>,
                verifyBtn: <button className="btn btn__table color__verify" onClick={() => updatePayment(res?._id)}> Update to paid </button>,
                // approveBtn: <button className="btn btn__table color__green"> Approved </button>,
                // downloadBtn: <button className="btn btn__table color__download" onClick={() => downLoadExcel(res._id)}> Download <RiFileExcel2Fill size={18} /> </button>,
            })
        });
    }
    filterArr();

    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={LoanRequestRoute} defaultName="Debt collections" title={"Debt"} />
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
                ModalTitle="AMOUNT PAID"
                cancel="close"
                Components={<Modal reFetch={reFetch} onClose={() => setOpenModal(false)} status={status} loanId={loanId} btnName={btnName} />}
            />

            {/* <SmallModal
                open={openDownloadModal}
                onClose={() => setOpenDownloadModal(false)}
                ModalTitle="Download the excel "
                cancel="close"
                Components={<DownloadExcelComp reFetch={reFetch} onClose={() => setOpenDownloadModal(false)} status={status} loanId={loanId} btnName={btnName} />}
            /> */}

        </React.Fragment>
    )
}
export default Index