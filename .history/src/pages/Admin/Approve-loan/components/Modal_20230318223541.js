import React from 'react'
import usePost from 'hooks/usePost';
import { VerificationLoanMsg } from 'components/NotifyMessage';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import CustomBtn from 'components/CustomBtn';
import { Col, Row } from 'reactstrap';

function Modal() {

    const { execute, pending } = usePost()

    const handleValidSubmit = (e, values) => {
        e.preventDefault();
        const Method = 'PATCH', endPoint = 'loans/applyLoan';

        const raw = JSON.stringify({
            loanPercentage: values.percentage,
            status: "paid"
        });
        execute(endPoint, raw, Method, LoginMsg)

    }


    return (
        <div>
            <Row>
                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                    <Col md={12}>
                        <div className="mb-3">
                            <AvField
                                name="percentage"
                                label="Select amount percentage"
                                className="form-control"
                                placeholder="Enter amount paid"
                                type="select"
                                required
                            >

                                <option>25</option>
                                <option>50</option>
                                <option>75</option>
                                <option>100</option>

                            </AvField>
                        </div>
                    </Col>
                    <CustomBtn Pending={pending} btnName="Submit" />
                </AvForm>

            </Row>
        </div>
    )
}

export default Modal