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
import * as XLSX from 'xlsx';


const Index = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates`, token);
    const [openModal, setOpenModal] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [downloadExcel, setDownloadExcel] = React.useState();
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

    const { data: Data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${downloadExcel}`, token);

    const downLoadExcel = (id) => {
        setDownloadExcel(id)
        setOpenDownloadModal(true)

        const worksheet = XLSX.utils.json_to_sheet(Data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
        XLSX.writeFile(workbook, 'data.xlsx');
    }



    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                firstName: res?.user?.firstName,
                lastName: res?.user?.lastName,
                email: res?.user?.email,
                // email: res?.paymentDate?.split('T')[0],
                // image: <img src={`${process.env.REACT_APP_IMG_API}${res?.user?.photoProfile}`} alt="" width={50} height={40} />,
                viewBtn: <button className="btn btn__table  color__blue" onClick={() => viewDetails(res?._id)}> <BsEyeFill size={14} /> View </button>,
                verifyBtn: res?.status === "approved" ? null : <button className="btn btn__table color__verify" onClick={() => updatePayment(res?._id)}>  Approved </button>,
                status: <button
                    className={`btn btn__table ${res?.status === "wrong" ? "color__red" :
                        res?.status === "pending" ? "color__warning" :
                            res?.status === "approved" ? "color__green" :
                                ""}`}
                >
                    {res?.status}
                </button>
                ,
                downloadBtn: <button className="btn btn__table color__download" onClick={() => downLoadExcel(res._id)}> Download <RiFileExcel2Fill size={18} /> </button>,
            })
        });
    }
    filterArr();

    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={LoanRequestRoute} defaultName="Mondate form" title={"form"} />
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
                ModalTitle="APPROVED FORM"
                cancel="close"
                Components={<Modal reFetch={reFetch} onClose={() => setOpenModal(false)} status={status} loanId={loanId} btnName={btnName} />}
            />

            <SmallModal
                open={openDownloadModal}
                onClose={() => setOpenDownloadModal(false)}
                ModalTitle="DOWNLOAD IN EXCEL FORMATE"
                cancel="close"
                Components={<Modal reFetch={reFetch} onClose={() => setOpenModal(false)} status={status} loanId={loanId} btnName={btnName} />}
            />

        </React.Fragment>
    )
}
export default Index