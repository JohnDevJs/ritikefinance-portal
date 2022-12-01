import PropTypes from "prop-types"
import React from "react"
import { Col, Container, Row, CardBody, Card } from "reactstrap";
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import Breadcrumb from "../../components/Common/Breadcrumb";
import MetaTagComp from "../../components/Common/MetaTags";


const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTagComp meta_tags="FASPRO24 | Dashboard" />
                <Breadcrumb default="Dashboard" title="" />

                <Container fluid>
                    <div className="page-title-box">
                        {/* <MyProperties /> */}
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