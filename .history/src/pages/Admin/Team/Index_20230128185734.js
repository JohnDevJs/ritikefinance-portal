import React, { useState } from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { UsersPage } from "components/SCO_Name";
import { UserTitle } from "components/BreadCrum";
import { UsersRoute } from "components/RouteName";
import useFetch from '../../../hooks/useFecth';
import { ServerError } from "components/NotifyMessage";
import Loading from "components/Loading";
import TeamTable from "./components/TeamTable.js";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import { RiCheckDoubleLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import ModalComp from '../../../Modal';
import InputForm from "./components/InputForm"
import Modal from "./components/Modal"


const Index = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal_2, setOpenModal_2] = useState(false);
    const [btnName, setBtnName] = React.useState();
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/users?role=admin`, token);
    if (error) return <ErrorPage message={ServerError} />

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                actionBtn: <button onClick={() => suspendUser(res._id)} className={`btn  ${!res.status ? "color__black" : "color__red"}`}> {!res.status ? "Unsuspend" : "Suspend"} </button>,
                deleteBtn: <button className="btn btn-danger"> <MdDeleteForever size={22} /> </button>,
            })
        });
    }
    filterArr();

    const suspendUser = (id) => {
        setOpenModal(true)
        // setStatus("approve")
        setLoanId(id)
        setBtnName("Move to approve")
    }
    const declineFunc = (id) => {
        setOpenModal(true)
        // setStatus("decline")
        setLoanId(id)
        setBtnName("Move to decline")
    }

    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={UsersRoute} defaultName="Users" title={UserTitle} />
                <MetaTag title_sco={UsersPage} />

                <Container fluid>

                    <button className="btn btn__table  color__blue" onClick={() => setOpenModal(true)}> <h6> + add a new team member </h6>  </button>

                    <div className="page-title-box">
                        {loading ? <Loading /> : (<TeamTable data={res_data} />)}
                    </div>
                </Container>
            </div>

            <ModalComp
                ModalTitle="Add a new team member"
                open={openModal}
                onClose={() => setOpenModal(false)}
                cancel="close"
                Component={<InputForm onClose={() => setOpenModal(false)} reFetch={reFetch} />}
            />

            <Modal
                open={openModal_2}
                onClose={() => setOpenModal_2(false)}
                ModalTitle="Are you sure you want to suspend"
                cancel="close"
                Components={<Modal reFetch={reFetch} onClose={() => setOpenModal_2(false)} loanId={loanId} btnName={btnName} />}
            />


        </React.Fragment>
    )
}
export default Index