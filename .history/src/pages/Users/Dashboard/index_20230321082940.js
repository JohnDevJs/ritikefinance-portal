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
import useFetch from "hooks/useFecth";


const Dashboard = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    const { data, loading, length, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans/loanStatus/${userId}`, token);

    if (error) {
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        <h3 className="mb-5">Hi, {userDet?.data?.data?.firstName} {userDet?.data?.data?.lastName} </h3>
                        <h5>Something went wrong</h5>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        <h3 className="mb-5">Hi, {userDet?.data?.data?.firstName} {userDet?.data?.data?.lastName} </h3>
                        <Cards data={data} />
                        <Row>
                            <Col md={6}>
                                <Charts />
                            </Col>
                            <Col md={6}>
                                <CardLinks data={data} length={length} />
                            </Col>
                        </Row>
                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default Dashboard