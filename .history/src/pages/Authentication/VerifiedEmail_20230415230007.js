import React from "react"
// import "../Styles.scss";
// import "../Style.scss";
import { Row } from "reactstrap"
import { Link, useParams } from "react-router-dom"
import MetaTagComp from 'components/MetaTag';
import { VerifyEmailPage } from 'components/SCO_Name';
import CustomBtn from 'components/CustomBtn';
import usePost from 'hooks/usePost';
import LoginRightLabel from './components/LoginRightLabel';
import FromWraper from './components/FromWraper';
import { verifyMsg } from 'components/NotifyMessage';
import { LoginRoute } from "components/RouteName";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";

const VerifiedEmail = () => {

    const { userId, verifyToken } = useParams()
    const { execute, pending, data } = usePost()
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const verifyFunc = () => {
        const Method = 'POST', endPoint = `users/verify/${userId}/${verifyToken}`;
        const raw = "";
        execute(endPoint, raw, Method, verifyMsg, token)
    }

    return (
        <React.Fragment>
            <MetaTagComp title_sco={VerifyEmailPage} />
            <Row>
                <LoginRightLabel text="Verify your email" />
                {
                    data?.status === 'success' ?
                        <FromWraper>
                            <h5 className="text-primary">Thank you 🙏, for registering with us 🤝 </h5>
                            <div className="col-12 mt-5">
                                Go to <Link to={LoginRoute} className='text-primary'> Login </Link>
                            </div>
                        </FromWraper> :

                        <div>
                            <FromWraper>
                                <p className="text-dark mt-5 mb-4 m-5 text-center"> Click on the button below to verify your email </p>
                                <div className=" text-center p-3">
                                    <CustomBtn Pending={pending} btnName="Verify your email" onClick={verifyFunc} />
                                </div>
                            </FromWraper>
                        </div>
                }
            </Row>
        </React.Fragment>
    )
}

export default VerifiedEmail
