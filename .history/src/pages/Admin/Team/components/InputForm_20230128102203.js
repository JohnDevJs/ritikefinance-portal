import React from 'react'
import { Row, Col } from "reactstrap"
import { AvField, AvForm } from "availity-reactstrap-validation"
import usePost from "../../../hooks/usePost";
import MetaTagComp from "components/MetaTag";
import CustomBtn from "components/CustomBtn";
import { CiLogin } from "react-icons/ci";

function InputForm() {

    const { execute, pending, data } = usePost()

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        const Method = 'POST', endPoint = 'users/signUp', isJSON = false, token = true;

        const userDate = JSON.stringify({
            "firstName": values.firstName,
            "lastName": values.lastName,
            "phoneNumber": values.phoneNumber,
            "agreed": true,
            "email": values.email,
            "password": 13456,
            "passwordConfirm": 123456,
        });

        execute(endPoint, userDate, Method, RegisterMsg, token, isJSON)
    }


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
                                name="email"
                                label="Address email"
                                className="form-control"
                                placeholder="Enter your email"
                                type="select"
                                required
                            >
                                <option>Select...</option>
                                <option>admin</option>
                                <option>worker</option>
                            </AvField>
                        </div>

                    </Col>

                    <Col sm={6}>

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

                    </Col>
                </Row>

            </AvForm>
        </Row>
    )
}

export default InputForm