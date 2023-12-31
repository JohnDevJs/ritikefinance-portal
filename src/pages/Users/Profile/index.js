import React from "react";
// import "./Style.scss"
import { Container, Row, CardBody, Card, Col } from "reactstrap";
import AccountForm from "./components/profile";
import MetaTagComp from "components/MetaTag";
import Breadcrumb from "components/Common/Breadcrumb";
import AdminAccountForm from "./components/adminProfile";
import { loginUser } from "Redux/Slices/userSlice";
import { useStore1Selector } from "index";

const Profile = () => {

    const userDet = useStore1Selector(loginUser)

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTagComp meta_tags="Ritike | profile" />
                <Breadcrumb default="Ritike" title="profile" />

                <Container fluid>
                    <Row className="d-flex justify-content-around align-items-center">
                        <CardBody className="px-4">
                            <Row>
                                <Col className="account" md={12}>
                                    {
                                        userDet?.data?.data?.role === "user" ? <AccountForm /> : <AdminAccountForm />
                                    }
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