import PropTypes from 'prop-types'
import React from "react"
import "./Style.scss"
import { Row, Col } from "reactstrap"
import MetaTagComp from "../../../components/Common/MetaTags";
import AdminLogin from "./Components/AdminLogin";
import Slide from "../../../components/Slide";

const AdminLoginComp = () => {
    return (
        <React.Fragment>

            <MetaTagComp meta_tags="FASPRO24 | admin" />

            <div className="account-pages">
                <Row className="login">
                    <Col md={6} className="login-left">
                        <AdminLogin />
                    </Col>

                    <Col md={6} className="login-container">
                        <div className="login-img-container">
                            <Slide />
                        </div>
                    </Col>

                </Row>
            </div>
        </React.Fragment >
    )
}

export default AdminLoginComp 