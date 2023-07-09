import React, { useRef, useState, useEffect } from 'react';
import { Badge, Card, CardBody, Container, Progress } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { MandateUserRoute } from "components/RouteName";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { useHistory, useParams } from "react-router-dom";
import usePost from "hooks/usePost";
import { IoIosEye } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';


const MondateForm = () => {
    const { execute, pending, data } = usePost()
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;

    //* Fetch all my loans
    const { data: geData, loading, length, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/status/${userId}`, token);
    console.log("mandate form data : ", geData)

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="page-title-box">
                        <Card>
                            <CardBody className="px-5">

                                <div className="my-2">
                                    <p>
                                        If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day:
                                    </p>
                                </div>
                                <div className="my-2">
                                    <p>
                                        The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day:
                                    </p>
                                </div>
                                <div className="my-2">
                                    <p>
                                        To allow for tracking of dates to match with flow of Credit at no additional cost to myself:
                                    </p>
                                </div>
                                <div className="my-2">
                                    <p>
                                        I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself:
                                    </p>
                                </div>
                                <div className="my-2">
                                    <p>

                                        Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing:
                                    </p>
                                </div>
                            </CardBody>
                        </Card>

                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MondateForm