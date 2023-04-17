import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { Col, Row, Card, CardBody, Spinner, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useHistory } from "react-router-dom";
import { successMessage, warningMessage } from "components/Notifications";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";


function AccountForm() {
    const history = useHistory()
    const userDet = useStore1Selector(loginUser)
    const [phoneState, setPhoneState] = useState()
    const [loadBtn, setIloadBtn] = useState(false)
    const [profile, setProfile] = useState();
    const [profileServer, setProfileServer] = useState();


    const handleValidSubmit = (e, values) => {
        e.preventDefault();

    }

    const refFileUpload = useRef(null);
    const onThumbChangeClick = () => {
        if (refFileUpload) {
            refFileUpload.current.dispatchEvent(new MouseEvent('click'));
        }
    };

    const changeThumb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <AvForm
            className="form-horizontal mt-4 " onValidSubmit={(e, v) => { handleValidSubmit(e, v) }} >
            <div className="d-flex justify-content-center align-items-center mb-3">
                <img src={""} alt="user" className="rounded-circle" width={100} height={100} />
                <Button size="sm" variant="separator-light" className="btn-icon btn-icon-only position-absolute rounded s-0 b-0 mt-5"
                    onClick={onThumbChangeClick}
                >
                    <i className="ion ion-md-image"></i>
                </Button>
                <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
            </div>

            <Card>
                <CardBody>
                    <Row>
                        <Col md={6} lg={6}>
                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <AvField value={"userData?.Name"} name="firstName" label="First Name" type="text" required />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <AvField value={"userData?.Surname"} name="lastName" label="Last Name" type="text" required />
                                    </div>
                                </Col>
                            </Row>
                            <div className="mb-3">
                                <AvField value={"userData?.Email"} name="email" label="Email" className="form-control" type="email" required />
                            </div>

                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <AvField value={"userData?.Name"} name="phoneNumber" label="Phone Number" type="number" required />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <AvField value={"userData?.Surname"} name="companyName" label="company Name" type="text" required />
                                    </div>
                                </Col>
                            </Row>
                            <div className="mb-3">
                                <AvField value={"userData?.Email"} name="jobTitle" label="Job Title" className="form-control" type="text" required />
                            </div>
                        </Col>

                        <Col md={6} lg={6}>
                            <div className="mb-3">
                                <AvField value={"userData?.Physical_address"} name="address" label="Address" type="text" required />
                            </div>

                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <AvField value={"userData?.City"} name="city" label="City" type="text" required />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <AvField value={"userData?.City"} name="province" label="Province" type="text" required />
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <AvField value={"userData?.City"} name="postalCode" label="Postal Code" type="text" required />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="mb-3">
                                        <AvField value={"userData?.City"} name="areaCode" label="Area Code" type="text" required />
                                    </div>
                                </Col>
                            </Row>

                            <div className="mb-3">
                                <AvField value={"userData?.State_Province"} name="state" label="State / Province " type="text" required />
                            </div>
                        </Col>

                    </Row>
                </CardBody>
            </Card>



            <Card>
                <CardBody>
                    <Col md={12} lg={12}>
                        <Row>
                            <Col md={6}>
                                <div className="mb-3">
                                    <AvField value={"userData?.Account_Number"} name="accountNumber" label="Account Number" type="number" required />
                                </div>
                                <div className="mb-3">
                                    <AvField name="accountType" label="Account Type" type="select" required>
                                        <option> {"userData?.Account_type"} </option>
                                        <option> Savings </option>
                                        <option> Current/Cheque </option>
                                    </AvField>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </CardBody>
            </Card>

            <div className="mb-3 w-25">
                <button className="btn login-btn w-100 waves-effect waves-light text-center" type="submit">
                    {
                        !loadBtn ? <span className="me-2">Update</span> : null
                    }
                    {
                        !loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>
                    }
                </button>
            </div>

        </AvForm>
    )
}

export default AccountForm