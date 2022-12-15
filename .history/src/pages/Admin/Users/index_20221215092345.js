import React from "react"
import { Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { UsersPage } from "components/SCO_Name";
import { UserTitle } from "components/BreadCrum";
import { UsersRoute } from "components/RouteName";


const Index = () => {
    return (
        <React.Fragment>
            <div className="page-content px-5">
                <Breadcrumb default={UsersRoute} defaultName="Users" title={UserTitle} />
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