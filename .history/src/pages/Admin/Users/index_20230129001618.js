import React from "react"
import { Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { UsersPage } from "components/SCO_Name";
import { UserTitle } from "components/BreadCrum";
import { UsersRoute } from "components/RouteName";
import useFetch from '../../../hooks/useFecth';
import { ServerError } from "components/NotifyMessage";
import Loading from "components/Loading";
import UserTable from "./components/UserTable";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import { RiCheckDoubleLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import ErrorPage from "components/ErrorPage";
import SmallModal from './../../../SmallModal';
import SuspendComp from "./components/SuspendComp";


const Index = () => {

    const [openModal_2, setOpenModal_2] = React.useState(false);
    const [deleteUser, setDeleteUser] = React.useState(false);
    const [btnName, setBtnName] = React.useState();
    const [userId, setUserId] = React.useState();
    const [apiQuery, setApiQuery] = React.useState();

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users?role=user`, token);
    if (error) return <ErrorPage message={ServerError} />

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                verify: <button className="btn-status text-white color__blue"> {res?.verified ? <RiCheckDoubleLine size={18} /> : <ImCross />} </button>,
                active: <button className="btn-status text-white color__green"> {res?.verified ? <RiCheckDoubleLine size={18} /> : <ImCross />} </button>,
                viewBtn: <button className="btn btn-danger color__blue"> View </button>,
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
                    <div className="page-title-box">
                        {loading ? <Loading /> : (<UserTable data={res_data} />)}
                    </div>
                </Container>
            </div>


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