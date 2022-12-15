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


const Index = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { data, loading, error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/users`, token);
    if (error) return <ErrorPage message={ServerError} />

    console.log(data)

    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={UsersRoute} defaultName="Users" title={UserTitle} />
                <MetaTag title_sco={UsersPage} />

                <Container fluid>
                    <div className="page-title-box">
                        {loading ? <Loading /> : (<UserTable data={data} />)}
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}
export default Index