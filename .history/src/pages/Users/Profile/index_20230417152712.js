import PropTypes from "prop-types"
import React from "react";
import "./Style.scss"
import { Container, Row, CardBody, Card, Col } from "reactstrap";
import { withRouter, Link } from "react-router-dom"
import { withTranslation } from "react-i18next"
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import AccountForm from "./Components/Account-form";

const Profile = () => {

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTagComp meta_tags="FASPRO24 | profile" />
                <Breadcrumb default="Property" title="profile" />

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

Profile.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
}

export default withRouter(withTranslation()(Profile))