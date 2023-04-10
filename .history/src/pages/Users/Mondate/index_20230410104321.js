import React from "react"
import { AvField, AvCheckboxGroup, AvCheckbox, AvForm } from "availity-reactstrap-validation"
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { DashboardPage } from "components/SCO_Name";
import { DashboardPageDefault } from "components/BreadCrum";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { Link } from "react-router-dom";


const MondateForm = () => {

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        // const Method = 'POST', endPoint = 'users/login';
        // const raw = JSON.stringify({
        //   "email": values.email,
        //   "password": values.password
        // });
        // execute(endPoint, raw, Method, LoginMsg)
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        <Card>
                            <CardBody>

                                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                                    <div>
                                        <p>
                                            If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day;
                                        </p>
                                        <AvCheckboxGroup inline name="agreed" required >
                                            <AvCheckbox customInput label="I AGREE" className="me-3 bg-white" value={true} />
                                        </AvCheckboxGroup>
                                    </div>
                                </AvForm>

                            </CardBody>
                        </Card>

                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default MondateForm