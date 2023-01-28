import React from 'react'
import { Row, Col } from "reactstrap"
import { AvField, AvForm } from "availity-reactstrap-validation"

function InputForm() {
    return (
        <Row>
            <AvForm className="mt-2" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <Row>


                    <Col sm={6}>
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
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                className="form-control"
                                placeholder="Enter your last name"
                                type="text"
                                required
                            />
                        </div>




                    </Col>

                    <Col sm={6}>

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
                                id="phoneNumber"
                                name="phoneNumber"
                                label="Phone Number"
                                className="form-control"
                                placeholder="Enter your phone number"
                                type="number"
                                required
                            />
                        </div>

                    </Col>
                </Row>

            </AvForm>
        </Row>
    )
}

export default InputForm