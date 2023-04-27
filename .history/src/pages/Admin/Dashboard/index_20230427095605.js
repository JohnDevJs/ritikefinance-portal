import React from "react"
import { Container, Progress } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import ChartAmount from "./components/ChartAmount";
import Cards from "./components/Cards";
import { DashboardPage } from "components/SCO_Name";
import { AdminDashboardRoute } from "components/RouteName";
import { DashboardPageDefault, DashboardPageAdmin } from "components/BreadCrum";
import LoanTable from "./components/LoanTable";
import useFetch from '../../../hooks/useFecth';
import Loading from "components/Loading";
import ErrorPage from "components/ErrorPage";
import { ServerError } from "components/NotifyMessage";
import { MdDeleteForever } from "react-icons/md";
import SmallModal from "SmallModal";
import ModalComp from "./components/ModalComp";
import { loginUser } from "Redux/Slices/userSlice";
import { useStore1Selector } from "index";


const Index = () => {

    const userDet = useStore1Selector(loginUser)
    const [openModal_2, setOpenModal_2] = React.useState(false);
    const [deleteRequest, setDeleteRequest] = React.useState(false);
    const [btnName, setBtnName] = React.useState();
    const [requestId, setRequestId] = React.useState();
    const [apiQuery, setApiQuery] = React.useState();

    console.log(" userDet : ", userDet?.data?.data?.role)

    const res_data = [];
    let pendingLenght, paidLenght;
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans`, null);

    {
        const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans?status=pending`, null)
        pendingLenght = data.length
    }
    {
        const { data } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans?status=paid`, null)
        paidLenght = data.length
    }

    if (error) return <ErrorPage message={ServerError} />

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                firstName: res?.user?.firstName,
                lastName: res?.user?.lastName,
                payment_Date: res?.paymentDate?.split("T")[0],
                btnStatus: <button className={`btn-status ${res.status === "paid" ? "color__green" : "color__warning"}`}>  {res.status === "paid" ? "Paid" : "Pending"} </button>,
                progressBar: <div className="text-center">% {res?.loanPercentage}
                    <Progress
                        color={res?.loanPercentage <= 50 ? "danger" : res?.loanPercentage <= 99 ? "info" : "success"}
                        value={res?.loanPercentage} />
                </div>,
                deleteBtn: <button className="btn btn-danger" onClick={() => deleteRequestFunc(res._id)}> <MdDeleteForever size={22} /> </button>,
            })
        });
    }
    filterArr();

    const deleteRequestFunc = (id) => {
        setDeleteRequest(true)
        setRequestId(id)
        setBtnName("Delete")
        setApiQuery("Deleted")
    }

    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={AdminDashboardRoute} defaultName={DashboardPageDefault} title={DashboardPageAdmin} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        {
                            loading ? <Loading /> : (
                                <>
                                    <Cards length={data.length} paidLenght={paidLenght} pendingLenght={pendingLenght} />
                                    {userDet?.data?.data?.role === "admin" ? <ChartAmount data={data} /> : null}
                                    <LoanTable data={res_data} />
                                </>
                            )
                        }
                    </div>
                </Container>
            </div>

            <SmallModal
                open={deleteRequest}
                onClose={() => setDeleteRequest(false)}
                ModalTitle="Are you sure you want to delete this  ?"
                cancel="close"
                Components={<ModalComp reFetch={reFetch} onClose={() => setDeleteRequest(false)} request_Id={requestId} btnName={btnName} apiQuery={apiQuery} />}
            />


        </React.Fragment>
    )
}

export default Index