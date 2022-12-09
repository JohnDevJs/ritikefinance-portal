import PropTypes from "prop-types"
import React from "react"
import { Col, Container, Row, CardBody, Card } from "reactstrap";
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";
import Cards from "./components/Cards";
import Charts from "./components/Charts";
import Table from "./components/table";
import CardLinks from "./components/CardLinks";
import { DashboardPage } from "components/SCO_Name";
import { DashboardPageDefault, DashboardPageTitle } from "components/BreadCrum";


const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTagComp title_sco={DashboardPage} />
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageTitle} />

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

Dashboard.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
}
export default withRouter(withTranslation()(Dashboard))