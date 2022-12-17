import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';

function VerifyModal() {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data } = usePost()

    const verificationFunc = (id) => {
        const Method = 'POST', endPoint = `loans/loanStatus/${id}`;
        const raw = JSON.stringify({ "status": "verification" });
        execute(endPoint, raw, Method, VerificationLoanMsg, token)
    }

    if (data?.status === 'success') {
        setTimeout(() => {
            reFetch()
        }, 2500)
    }

    return (
        <button className='btn text-white w-100' onClick={verificationFunc}>Mo to verification</button>
    )
}

export default VerifyModal