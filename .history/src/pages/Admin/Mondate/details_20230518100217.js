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



const IndexDetails = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates`, token);
    const [openModal, setOpenModal] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [viewUserDet, setViewUserDet] = React.useState(false);
    const [openDownloadModal, setOpenDownloadModal] = React.useState(false);
    const TotalToPay = parseInt(data?.loan?.totalAmount) + parseInt(data?.loan?.amount)
    // Your existing code

    // Function to handle PDF download
    async function handleDownload() {
        const pdfBytes = await generatePdf(data, TotalToPay);
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        saveAs(blob, 'loan_details.pdf');
    }


    if (error) return <ErrorPage message={ServerError} />


    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={LoanRequestRoute} defaultName="Mondate form" title={"details"} />
                <MetaTag title_sco={LoanRequestPage} />
                <Container fluid>

                </Container>
            </div>
        </React.Fragment>
    )
}
export default IndexDetails