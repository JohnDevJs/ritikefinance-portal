import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import { VerificationLoanMsg } from 'components/NotifyMessage';

function Modal({ reFetch, onClose, status, loanId }) {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data } = usePost()

    const changeStatusFunc = () => {
        const Method = 'POST', endPoint = `loans/loanStatus/${loanId}`;
        const raw = JSON.stringify({ "status": status });
        execute(endPoint, raw, Method, VerificationLoanMsg, token)
    }

    if (data?.status === 'success') {
        onClose
        setTimeout(() => {
            reFetch()
        }, 2500)
    }

    return (
        <button className='btn text-white w-100' onClick={() => changeStatusFunc}>Mo to verification</button>
    )
}

export default Modal