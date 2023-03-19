import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import { VerificationLoanMsg } from 'components/NotifyMessage';
import { AvField, AvForm } from 'availity-reactstrap-validation';

function Modal({ reFetch, onClose, status, loanId, btnName }) {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data } = usePost()

    const changeStatusFunc = () => {
        const Method = 'POST', endPoint = `loans/loanStatus/${loanId}/status`;
        const raw = JSON.stringify({ "status": status });
        execute(endPoint, raw, Method, VerificationLoanMsg, token)
    }

    if (data?.status === 'success') {
        onClose();
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    return (
        // <button className='btn text-white w-100' onClick={changeStatusFunc}> {btnName} </button>
        <div>
            <h2> update loan form</h2>

            <Row>
                <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                    <Col md={4}>
                        <div className="mb-3">
                            <AvField
                                name="firstName"
                                label="First Name"
                                className="form-control"
                                placeholder="Enter your first name"
                                type="text"
                                required
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="mb-3">
                            <AvField
                                name="lastName"
                                label="Last Name"
                                className="form-control"
                                placeholder="Enter your last name"
                                type="text"
                                required
                            />
                        </div>
                    </Col>

                    <CustomBtn Pending={pending} btnName="Submit" />
                </AvForm>

            </Row>
        </div>
    )
}

export default Modal