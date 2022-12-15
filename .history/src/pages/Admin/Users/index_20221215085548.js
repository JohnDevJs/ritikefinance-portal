import React from "react"
import { Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import ChartAmount from "./components/ChartAmount";
import { UsersPage } from "components/SCO_Name";
import { UserTitle } from "components/BreadCrum";


const Index = () => {
    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={DashboardPageDefault} title={UserTitle} />
                <MetaTag title_sco={UsersPage} />

                <Container fluid>
                    <div className="page-title-box">
                        {/* <ChartAmount /> */}
                        <Row>

                        </Row>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default Index