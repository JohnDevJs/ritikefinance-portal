import React from "react"
import { Row } from "reactstrap"
import { Link, useHistory } from "react-router-dom";
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";
import { LogoutMsg } from "components/NotifyMessage";
import MetaTagComp from "components/MetaTag";
import { LogoutPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import { useStore1Dispatch, useStore1Selector } from "index";
import { Login, loginUser } from "Redux/Slices/userSlice";
import { LoginRoute } from "components/RouteName";
import Dashboard from './../Dashboard/index';

const Logout = () => {
    const history = useHistory()
    const userDet = useStore1Selector(loginUser);
    const dispatch = useStore1Dispatch();
    const token = userDet?.token;
    const { execute, pending, data } = usePost()

    const logoutFunc = () => {
        const Method = 'POST', endPoint = `users/logout`;
        const raw = "";
        execute(endPoint, raw, Method, LogoutMsg, token)
    }

    if (data) {
        dispatch(Login(""));
        history.push(LoginRoute);
    }

    return (
        <React.Fragment>
            <MetaTagComp title_sco={LogoutPage} />
            <Row className="Container_h">
                <LoginRightLabel text="" />
                <FromWraper>
                    <p className="text-danger text-center h4">Are you sure you want to logout ?</p>
                    <CustomBtn Pending={pending} btnName="Yes" onClick={logoutFunc} />
                    <div className="col-12 mt-5 pb-4 text-center">
                        Do you wanna go back ? <Link to={Dashboard} className='text-primary'> Yes </Link>
                    </div>
                    <b className="text-center">  <Link to="/login" className='text-primary'> Go to Login </Link></b>
                </FromWraper>
            </Row>
        </React.Fragment>
    )
}

export default Logout