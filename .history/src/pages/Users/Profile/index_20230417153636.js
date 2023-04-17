import React from "react";
import "./Style.scss"
import { Container, Row, CardBody, Card, Col } from "reactstrap";
import AccountForm from "./components/profile";
import MetaTagComp from "components/MetaTag";
import Breadcrumb from "components/Common/Breadcrumb";

const Profile = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTagComp meta_tags="Ritike | profile" />
                <Breadcrumb default="Ritike" title="profile" />

                <Container fluid>
                    <Row className="d-flex justify-content-around align-items-center">
                        <CardBody data-aos="fade-bottom">
                            <Row>
                                <Col className="account" md={12}>
                                    <AccountForm />
                                </Col>
                            </Row>
                        </CardBody>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}


export default Profile