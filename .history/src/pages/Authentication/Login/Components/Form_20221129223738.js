import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Card, CardBody, Spinner } from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import logoSm from "../../../../assets/images/favicon.png";
import { useStore1Dispatch } from "./../../../../index";
import { Login } from "../../../../Redux/Slices/userSlice";
import {
    warningMessage,
    successMessage,
} from "../../../../components/Notifications";

function AdminLogin() {
    let history = useHistory();
    const dispatch = useStore1Dispatch();
    const [loadBtn, setIloadBtn] = useState(false);

    const handleValidSubmit = async (e, v) => {
        e.preventDefault();
        setIloadBtn(true);

        const formdata = new FormData();
        formdata.append("Email", v.email);
        formdata.append("password", v.password);

        const requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        // fetch("https://prop.faspro24.com/api/auth/login", requestOptions)
        fetch("https://prop.faspro24.com/api/owner/OwnerLogin", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.Data.original.status === "success") {
                    dispatch(Login(result.Data));
                    setIloadBtn(false);
                    successMessage("You have successful logged in.");
                    window.setTimeout(() => {
                        history.push("/dashboard");
                    }, 3000);
                }
                if (result.Data.original.status === "error") {
                    setIloadBtn(false);
                    warningMessage("Invalid Email or Password ");
                }
                if (result.error) {
                    setIloadBtn(false);
                    warningMessage("Invalid Email or Password");
                }
            })
            .catch((error) => {
                setIloadBtn(false);
                warningMessage("Fail to logged in", error);
            });
    };

    return (
        <div className="login-content-container">
            <div>
                <Card className="overflow-hidden">
                    <div className="login-header">
                        <div className="text-primary text-center p-4">
                            <p className="text-white-50">Login as admin</p>
                            <Link to="/" className="logo logo-admin">
                                <img src={logoSm} alt="logo" className="favicon-logo" />
                            </Link>
                        </div>
                    </div>

                    <CardBody className="p-4">
                        <div className="p-3">
                            <AvForm
                                className="form-horizontal mt-4"
                                onValidSubmit={(e, v) => {
                                    handleValidSubmit(e, v);
                                }}
                            >
                                <div className="mb-3">
                                    <AvField
                                        name="email"
                                        label="Email"
                                        className="form-control"
                                        type="email"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <AvField
                                        name="password"
                                        label="Password"
                                        type="password"
                                        required
                                    />
                                </div>

                                <Row className="mb-3">
                                    <Col sm={6} className="text-end">
                                        <button
                                            className="btn login-btn w-md waves-effect waves-light"
                                            type="submit"
                                        >
                                            <span className="me-2">Log In </span>
                                            {!loadBtn ? null : (
                                                <Spinner as="span" animation="border" size="sm" />
                                            )}
                                        </button>
                                    </Col>
                                </Row>

                                <Row className="mt-2 mb-0 row">
                                    <div className="col-12 mt-4">
                                        <Link to="/forgot-password" className="remember">
                                            <i className="mdi mdi-lock"></i> Forgot your password?
                                        </Link>
                                    </div>
                                </Row>
                            </AvForm>
                        </div>
                    </CardBody>
                </Card>
                <div className="mt-5 text-center">
                    <p> © {new Date().getFullYear()} FASPRO24 </p>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
