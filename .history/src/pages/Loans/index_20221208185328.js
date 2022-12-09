import React from "react"
import { Col, Container, Row, CardBody, Card } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTag from "../../components/MetaTag";
import { LoangPage } from "components/SCO_Name";
import { DashboardPageDefault, DashboardPageTitle } from "components/BreadCrum";


const Loans = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTag title_sco={LoangPage} />
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageTitle} />

                <Container fluid>
                    <div className="page-title-box">

                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}


export default Loans