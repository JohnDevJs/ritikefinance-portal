import React from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { LoanRequestPage } from "components/SCO_Name";
import { LoanRequestRoute } from "components/RouteName";
import useFetch from '../../../hooks/useFecth';
import { ServerError } from "components/NotifyMessage";
import Loading from "components/Loading";
import LoanDeclinedTable from "./components/LoanDeclinedTable";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import { RiFileExcel2Fill } from "react-icons/ri";
import SmallModal from './../../../SmallModal';
import LoanDetails from "./components/LoanDetails";
import { BsEyeFill } from "react-icons/bs";
import ModalComp from '../../../Modal';


const Index = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans?status=decline`, token);
    const [openModal, setOpenModal] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [viewUserDet, setViewUserDet] = React.useState(false);
    const [openDownloadModal, setOpenDownloadModal] = React.useState(false);

    if (error) return <ErrorPage message={ServerError} />

    const viewDetails = (id) => {
        setViewUserDet(true)
        setLoanId(id)
    }

    // const downLoadExcel = (id) => {
    //     setOpenDownloadModal(true)
    //     setLoanId(id)
    // }

    console.log(" data : ", data)

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                firstName: res?.user?.firstName,
                lastName: res?.user?.lastName,
                payment_Date: res?.paymentDate?.split('T')[0],
                image: <img src={`${process.env.REACT_APP_IMG_API}${res?.user?.photoProfile}`} alt="" width={50} height={40} />,
                viewBtn: <button className="btn btn__table  color__blue" onClick={() => viewDetails(res?._id)}> <BsEyeFill size={14} /> View Declined reason </button>,
                // downloadBtn: <button className="btn btn__table color__download" onClick={() => downLoadExcel(res._id)}> Download <RiFileExcel2Fill size={18} /> </button>,
            })
        });
    }
    filterArr();

    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={LoanRequestRoute} defaultName="Declined Loans" title={"Loans"} />
                <MetaTag title_sco={LoanRequestPage} />

                <Container fluid>
                    <div className="page-title-box">
                        {loading ? <Loading /> : (<LoanDeclinedTable data={res_data} />)}
                    </div>
                </Container>
            </div>


            <ModalComp
                ModalTitle="Loan declined reason"
                open={viewUserDet}
                onClose={() => setViewUserDet(false)}
                cancel="close"
                Component={<LoanDetails onClose={() => setViewUserDet(false)} loan_Id={loanId} />}
            />
        </React.Fragment>
    )
}
export default Index