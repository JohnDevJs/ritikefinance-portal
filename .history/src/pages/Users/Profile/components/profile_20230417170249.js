import React, { useState, useRef } from "react"
import { Col, Row, Card, CardBody, Spinner, Button } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { useStore1Dispatch, useStore1Selector } from "index";
import { Login, loginUser } from "Redux/Slices/userSlice";
import usePost from "hooks/usePost";
import { useHistory } from "react-router-dom";
import { UpdatePasswordMsg, updateProfileMsg } from "components/NotifyMessage";
import { LoginRoute } from "components/RouteName";


function AccountForm() {

    const history = useHistory()
    const dispatch = useStore1Dispatch();
    const userDet = useStore1Selector(loginUser)
    const [profile, setProfile] = useState();
    const [loadBtn, setBtnLoad] = useState(false);
    const [loadBtn2, setBtnLoad2] = useState(false);
    const [profileServer, setProfileServer] = useState();
    const [photoPassport, setPhotoPassport] = useState();
    const { execute, data } = usePost()
    const token = userDet?.token;

    const handlePhotoPassport = (e) => {
        setPhotoPassport(e.target.files[0])
    }

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        setBtnLoad2(true)
        const Method = 'PATCH', endPoint = 'users/updateMe', isJSON = true;

        const formdata = new FormData();
        formdata.append("firstName", values.firstName);
        formdata.append("lastName", values.lastName);
        formdata.append("phoneNumber", values.phoneNumber);
        formdata.append("email", values.email);
        formdata.append("address", values.address);
        formdata.append("companyName", values.companyName);
        formdata.append("jobTitle", values.jobTitle);
        formdata.append("province", values.province);
        formdata.append("city", values.city);
        formdata.append("postalCode", values.postalCode);
        formdata.append("referralCode", values.referralCode);
        formdata.append("accountNumber", values.accountNumber);
        formdata.append("bankName", values.bankName);
        formdata.append("accountType", values.accountType);
        formdata.append("passportPhoto", photoPassport);
        formdata.append("photoProfile", profileServer);
        execute(endPoint, formdata, Method, updateProfileMsg, token, isJSON)
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

    const updatePassword = (e, values) => {
        e.preventDefault();
        setBtnLoad(true)

        const Method = 'PATCH', endPoint = 'users/updateMyPassword';
        const raw = JSON.stringify({
            "passwordCurrent": values.currentPassword,
            "password": values.newPassword,
            "passwordConfirm": values.confirmPassword
        });
        execute(endPoint, raw, Method, UpdatePasswordMsg, token)
    }

    if (data?.status === "success") {
        dispatch(Login(""));
        history.push(LoginRoute)
    }

    return (
        <>
            <AvForm
                className="form-horizontal mt-4 " onValidSubmit={(e, v) => { handleValidSubmit(e, v) }} >
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <img src={profile} alt="Upload image" className="rounded-circle" width={100} height={100} />
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
                                            <AvField value={userDet?.data?.data?.firstName} name="firstName" label="First Name" type="text" required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <AvField value={userDet?.data?.data?.lastName} name="lastName" label="Last Name" type="text" required />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="mb-3">
                                    <AvField value={userDet?.data?.data?.email} name="email" label="Email" className="form-control" type="email" required />
                                </div>

                                <Row>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <AvField value={userDet?.data?.data?.phoneNumber} name="phoneNumber" label="Phone Number" type="number" required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <AvField value={userDet?.data?.data?.companyName} name="companyName" label="company Name" type="text" required />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="mb-3">
                                    <AvField value={userDet?.data?.data?.jobTitle} name="jobTitle" label="Job Title" className="form-control" type="text" required />
                                </div>
                            </Col>

                            <Col md={6} lg={6}>
                                <div className="mb-3">
                                    <AvField value={userDet?.data?.data?.address} name="address" label="Address" type="text" required />
                                </div>

                                <Row>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <AvField value={userDet?.data?.data?.city} name="city" label="City" type="text" required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <AvField value={userDet?.data?.data?.province} name="province" label="Province" type="text" required />
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <AvField value={userDet?.data?.data?.postalCode} name="postalCode" label="Postal Code" type="text" required />
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div className="mb-3">
                                            <AvField value={userDet?.data?.data?.referralCode} name="referralCode" label="Referral Code" type="text" required />
                                        </div>
                                    </Col>
                                </Row>

                                <div className="mb-3">
                                    <AvField
                                        name="passportPhoto"
                                        label="Passport Photo"
                                        className="form-control"
                                        type="file"
                                        required
                                        onChange={handlePhotoPassport}
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <div className="mb-3">
                                    <AvField value={userDet?.data?.data?.accountNumber} name="accountNumber" label="Account Number" type="number" required />
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="mb-3">
                                    <AvField name="accountType" value={userDet?.data?.data?.accountType} label="Account Type" type="select" required>
                                        <option> {userDet?.data?.data?.accountType} </option>
                                        <option> Savings </option>
                                        <option> Current/Cheque </option>
                                    </AvField>
                                </div>
                            </Col>

                            <Col md={4}>
                                <div className="mb-3">
                                    <AvField value={userDet?.data?.data?.bankName} name="bankName" label="Bank Name" type="text" required />
                                </div>
                            </Col>

                        </Row>

                        <div className="mb-3 w-25">
                            <button className="btn login-btn w-100 text-center" type="submit">
                                {
                                    !loadBtn2 ? <span className="me-2">Update</span> : null
                                }
                                {
                                    !loadBtn2 ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>
                                }
                            </button>
                        </div>

                    </CardBody>
                </Card>
            </AvForm>



            <AvForm
                className="form-horizontal mt-4 " onValidSubmit={(e, v) => { updatePassword(e, v) }} >
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={4}>
                                <div className="mb-3">
                                    <AvField
                                        name="currentPassword"
                                        label="Current Password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        type="password"
                                        required
                                    />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-3">
                                    <AvField
                                        name="newPassword"
                                        label="New Password"
                                        className="form-control"
                                        placeholder="Enter your password"
                                        type="password"
                                        required
                                    />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="mb-3">
                                    <AvField
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        className="form-control"
                                        placeholder="Re enter your password"
                                        type="password"
                                        required
                                    />
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                    <div className="mb-3 w-25">
                        <button className="btn  w-100 text-white text-center" type="submit">
                            {
                                !loadBtn ? <span className="me-2">Update</span> : null
                            }
                            {
                                !loadBtn ? null : <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>
                            }
                        </button>
                    </div>
                </Card>
            </AvForm>

        </>
    )
}

export default AccountForm