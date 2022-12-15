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


const Index = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const res_data = [];
    const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/users?role=user`, token);
    if (error) return <ErrorPage message={ServerError} />

    const filterArr = () => {
        data.forEach(res => {
            res_data.push({
                ...res,
                verify: <button className="btn-status text-white color__green"> {res?.verified ? <RiCheckDoubleLine size={18} /> : <ImCross />} </button>,
                viewBtn: <button className="btn btn-danger"> View </button>,
                actionBtn: <button className="btn-suspend "> <MdDeleteForever size={22} /> </button>,
                deleteBtn: <button className="btn btn-danger"> <MdDeleteForever size={22} /> </button>,
            })
        });
    }
    filterArr();

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
        </React.Fragment>
    )
}
export default Index