import React from "react"
import { Col, Container, Row } from "reactstrap";
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import Cards from "./components/Cards";
import Charts from "./components/Charts";
import CardLinks from "./components/CardLinks";
import { DashboardPage } from "components/SCO_Name";
import { DashboardPageDefault } from "components/BreadCrum";


const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        <Cards />
                        <Row>
                            <Col md={6}>
                                <Charts />
                            </Col>
                            <Col md={6}>
                                <CardLinks />
                            </Col>
                        </Row>
                        {/* <Table /> */}
                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default Dashboard