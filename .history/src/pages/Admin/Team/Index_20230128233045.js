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
import { MdDeleteForever } from "react-icons/md";
import ModalComp from '../../../Modal';
import InputForm from "./components/InputForm"
import SuspendComp from "./components/SuspendComp"
import SmallModal from './../../../SmallModal';
import ErrorPage from "components/ErrorPage";


const Index = () => {

    const [openModal, setOpenModal] = useState(false);
    const [openModal_2, setOpenModal_2] = useState(false);
    const [deleteUser, setDeleteUser] = useState(false);
    const [btnName, setBtnName] = React.useState();
    const [userId, setUserId] = React.useState();
    const [apiQuery, setApiQuery] = React.useState();

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/users?role=worker`, token);
    if (error) return <ErrorPage message={ServerError} />

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                actionBtn: res.status ? <button onClick={() => suspendUser(res._id)} className={`btn color__red`}> Suspend </button> : <button onClick={() => unSuspend(res._id)} className={`btn color__black`}> UnSuspend </button>,
                deleteBtn: <button className="btn btn-danger" onClick={() => deleteUserFunc(res._id)}> <MdDeleteForever size={22} /> </button>,
            })
        });
    }
    filterArr();

    const suspendUser = (id) => {
        setOpenModal_2(true)
        setUserId(id)
        setBtnName("Suspend")
        setApiQuery("suspended")
    }
    const unSuspend = (id) => {
        setOpenModal_2(true)
        setUserId(id)
        setBtnName("Unsuspend")
        setApiQuery("un-suspended")
    }
    const deleteUserFunc = (id) => {
        setDeleteUser(true)
        setUserId(id)
        setBtnName("Delete")
        setApiQuery("Deleted")
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

            <SmallModal
                open={openModal_2}
                onClose={() => setOpenModal_2(false)}
                ModalTitle="Are you sure you want to take this action ?"
                cancel="close"
                Components={<SuspendComp reFetch={reFetch} onClose={() => setOpenModal_2(false)} user_Id={userId} btnName={btnName} apiQuery={apiQuery} />}
            />

            <SmallModal
                open={deleteUser}
                onClose={() => setDeleteUser(false)}
                ModalTitle="Are you sure you want to delete this user ?"
                cancel="close"
                Components={<SuspendComp reFetch={reFetch} onClose={() => setDeleteUser(false)} user_Id={userId} btnName={btnName} apiQuery={apiQuery} />}
            />

        </React.Fragment>
    )
}
export default Index