import React from "react"
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import Cards from "./components/Cards";
import Charts from "./components/Charts";
import CardLinks from "./components/CardLinks";
import { DashboardPage } from "components/SCO_Name";
import { DashboardPageDefault } from "components/BreadCrum";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";


const Dashboard = () => {

    const userDet = useStore1Selector(loginUser);
    console.log9userDet


    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        <h3 className="mb-5">Hi, John muleka</h3>
                        <Cards />
                        <Row>
                            <Col md={6}>
                                <Charts />
                            </Col>
                            <Col md={6}>
                                <CardLinks />
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default Dashboard