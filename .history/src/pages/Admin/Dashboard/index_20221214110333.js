import React from "react"
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
// import Cards from "../components/Cards";
import { DashboardPage } from "components/SCO_Name";
import { DashboardPageDefault } from "components/BreadCrum";


const Index = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        <Cards />
                        <Row>

                        </Row>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default Index