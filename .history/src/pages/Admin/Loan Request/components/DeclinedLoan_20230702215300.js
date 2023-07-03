import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import { VerificationLoanMsg } from 'components/NotifyMessage';
import { Spinner } from 'reactstrap';

function Modal({ reFetch, onClose, loanId, btnName }) {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data, pending } = usePost()

    const changeStatusFunc = () => {
        const Method = 'POST', endPoint = `loans/loanStatus/${loanId}/status`;
        const raw = JSON.stringify({
            "status": "decline",
            "loanDeclineReason": 
        });
        execute(endPoint, raw, Method, VerificationLoanMsg, token)
    }

    if (data?.status === 'success') {
        onClose();
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    return (
        <button className='btn text-white w-100' onClick={changeStatusFunc}>
            {pending ? <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span> : btnName}
        </button>
    )
}

export default Modal