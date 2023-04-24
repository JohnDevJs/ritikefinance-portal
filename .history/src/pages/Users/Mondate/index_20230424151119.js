import React, { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import { AvField, AvCheckboxGroup, AvCheckbox, AvForm } from "availity-reactstrap-validation"
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { DashboardPage } from "components/SCO_Name";
import { DashboardPageDefault } from "components/BreadCrum";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { Link, useParams } from "react-router-dom";
import CustomBtn from "components/CustomBtn";
import usePost from "hooks/usePost";
import { LoginMsg } from "components/NotifyMessage";


const MondateForm = () => {
    const { id } = useParams()

    const { execute, pending, data } = usePost()
    const [signature, setSignature] = useState(null);
    const signaturePad = useRef(null);
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const handleValidSubmit = (e, values) => {
        e.preventDefault();

        if (!signature) {
            alert('Please sign the form');
            return;
        }

        const Method = 'PATCH', endPoint = `mandates/${id}`;
        var raw = JSON.stringify({
            debitedAgree: values.debitedAgree,
            debitedAgree2: values.debitedAgree2,
            trackingOfDate: values.trackingOfDate,
            authorized: values.authorized,
            agreement: values.agreement,
            signatureData: signature
        });
        execute(endPoint, raw, Method, LoginMsg, token)
    }

    const handleClear = () => {
        signaturePad.current.clear();
        setSignature(null);
    };

    // const handleSave = () => {
    //     const dataURL = signaturePad.current.toDataURL();
    //     setSignature(dataURL);
    // };

    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumb default={DashboardPageDefault} title={DashboardPageDefault} />
                <MetaTag title_sco={DashboardPage} />

                <Container fluid>
                    <div className="page-title-box">
                        <Card>
                            <CardBody className="px-5">

                                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                                    <div className="my-2">
                                        <p>
                                            If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day.
                                        </p>
                                        <AvCheckboxGroup inline name="debitedAgree" required>
                                            <AvCheckbox customInput label="I AGREE" className="me-3 bg-white" value={true} />
                                        </AvCheckboxGroup>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day.
                                        </p>
                                        <AvCheckboxGroup inline name="debitedAgree2" required>
                                            <AvCheckbox customInput label="I AGREE" className="me-3 bg-white" value={true} />
                                        </AvCheckboxGroup>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            To allow for tracking of dates to match with flow of Credit at no additional cost to myself.
                                        </p>
                                        <AvCheckboxGroup inline name="trackingOfDate" required>
                                            <AvCheckbox customInput label="I AGREE" className="me-3 bg-white" value={true} />
                                        </AvCheckboxGroup>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself.
                                        </p>
                                        <AvCheckboxGroup inline name="authorized" required>
                                            <AvCheckbox customInput label="I AGREE" className="me-3 bg-white" value={true} />
                                        </AvCheckboxGroup>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            It is agreed between me and Ritike Loans (PTY) Ltd that the total amount mentioned above will be paid on the date specified on the application form
                                        </p>
                                        <AvCheckboxGroup inline name="agreement" required>
                                            <AvCheckbox customInput label="I AGREE" className="me-3 bg-white" value={true} />
                                        </AvCheckboxGroup>
                                    </div>


                                    <div>
                                        <h5>Please sign bellow</h5>
                                        <div className="signature__container">
                                            <SignaturePad
                                                ref={signaturePad}
                                                canvasProps={{ className: 'signature-pad' }}
                                                onEnd={() => {
                                                    const dataURL = signaturePad.current.toDataURL();
                                                    setSignature(dataURL);
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <button className='btn text-white me-4' onClick={handleClear}>Clear</button>
                                            {/* <button className='btn text-white' onClick={handleSave}>Save</button> */}
                                        </div>
                                        {signature && <img src={signature} alt="Signature" />}
                                    </div>

                                    <div className="text-start">
                                        <CustomBtn Pending={pending} btnName="Submit" />
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