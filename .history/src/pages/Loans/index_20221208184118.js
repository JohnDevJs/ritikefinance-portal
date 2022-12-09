import PropTypes from "prop-types"
import React from "react"
import { Col, Container, Row, CardBody, Card } from "reactstrap";
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTag from "../../components/MetaTag";


const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTag title_sco="Ritike | My loans" />
                <Breadcrumb default="Dashboard" title="Loans" />

                <Container fluid>
                    <div className="page-title-box">

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