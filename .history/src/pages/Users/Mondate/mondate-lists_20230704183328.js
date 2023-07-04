import React, { useRef, useState } from 'react';
import { Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { DashboardPage } from "components/SCO_Name";
import { DashboardPageDefault } from "components/BreadCrum";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { useHistory, useParams } from "react-router-dom";
import usePost from "hooks/usePost";


const MondateForm = () => {
    const { execute, pending, data } = usePost()
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;


    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">


                    </div>
                </Container>

            </div>
        </React.Fragment>
    )
}

export default MondateForm