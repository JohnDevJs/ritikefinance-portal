import React from 'react'
import { Row, Col } from "reactstrap"
import { AvField, AvForm, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from "availity-reactstrap-validation"

function InputForm() {
    return (
        <Row>
            <AvForm className="mt-2" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <Col sm={4}>
                    <div className="mb-3 myInput">
                        <AvField
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            className="form-control"
                            placeholder="Enter your first name"
                            type="text"
                            required
                        />
                    </div>
                    <div className="mb-3 myInput">
                        <AvField
                            id="email"
                            name="email"
                            label="Address email"
                            className="form-control"
                            placeholder="Enter your email"
                            type="email"
                            required
                        />
                    </div>
                    <div className="mb-3 myInput">
                        <AvField
                            id="social"
                            name="password"
                            label="Password"
                            className="form-control"
                            placeholder="Password"
                            type="password"
                            required
                        />
                    </div>
                </Col>

                <Col sm={4}>
                    <div className="mb-3 myInput">
                        <AvField
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            className="form-control"
                            placeholder="Enter your last name"
                            type="text"
                            required
                        />
                    </div>
                    <div className="mb-3 myInput">
                        <AvField
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            className="form-control"
                            placeholder="Enter your phone number"
                            type="number"
                            required
                        />
                    </div>
                    <div className="mb-3 myInput">
                        <AvField
                            id="website"
                            name="confirmPassword"
                            label="Confirm Password"
                            className="form-control"
                            placeholder="Confirm Password"
                            type="password"
                            required
                        />
                    </div>
                </Col>

                <Col sm={4} className="radio-flex">
                    <div className="mb-3 myInput">
                        <AvField
                            id="company"
                            name="company"
                            label="Company Name / Individual"
                            className="form-control"
                            placeholder="Enter Company"
                            type="text"
                            required
                        />
                    </div>
                    <div className="mb-3 myInput" >
                        <AvField
                            id="category"
                            name="website"
                            label="Website (not required)"
                            className="form-control"
                            placeholder="https://www.amazon.com"
                            type="text"
                        />
                    </div>
                    <div className="mb-3 myInput" >
                        <AvField
                            id="category"
                            name="socialMedia"
                            label="Social Media"
                            className="form-control"
                            placeholder="https://www.facebook.com/username"
                            type="text"
                            required
                        />
                    </div>
                </Col>
            </AvForm>
        </Row>
    )
}

export default InputForm