import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import { VerificationLoanMsg } from 'components/NotifyMessage';
import { Spinner } from 'reactstrap';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import CustomBtn from 'components/CustomBtn';

function Modal({ reFetch, onClose, loanId, btnName }) {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data, pending } = usePost()

    const handleValidSubmit = (e, values) => {
        e.preventDefault();

        console.log("values : ", values)

        // const Method = 'POST', endPoint = `loans/loanStatus/${loanId}/status`;
        // const raw = JSON.stringify({
        //     "status": "decline",
        //     "loanDeclineReason": values.reason
        // });
        // execute(endPoint, raw, Method, VerificationLoanMsg, token)
    }

    if (data?.status === 'success') {
        onClose();
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    return (
        <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
            <div className="mb-3">
                <AvField
                    name="reason"
                    label="Reason for declining"
                    className="form-control"
                    placeholder="Enter reason"
                    type="textarea"
                    required
                    rows="10"
                />

            </div>

            <CustomBtn Pending={pending} btnName="Submit" />
        </AvForm>
    )
}

export default Modal