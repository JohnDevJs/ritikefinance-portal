import React from 'react'
import usePost from 'hooks/usePost';
import { PaidPercentageMsg } from 'components/NotifyMessage';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import CustomBtn from 'components/CustomBtn';
import { Col, Row } from 'reactstrap';
import { loginUser } from 'Redux/Slices/userSlice';
import { useStore1Selector } from 'index';

function Modal({ loanId, onClose, reFetch }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, pending, data } = usePost()

    const handleValidSubmit = (e, values) => {
        console.log("values : ", values)
        e.preventDefault();
        const Method = 'PATCH', endPoint = `loans/applyLoan/${loanId}`;

        const raw = JSON.stringify({
            loanPercentage: values.percentage,
            status: "paid"
        });
        execute(endPoint, raw, Method, PaidPercentageMsg, token)

    }

    if (data?.status === 'success') {
        onClose();
        setTimeout(() => {
            reFetch()
        }, 2000)
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