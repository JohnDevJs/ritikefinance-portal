import React from 'react'

function VerifyModal() {


    const verificationFunc = (id) => {
        const Method = 'POST', endPoint = `loans/loanStatus/${id}`;
        const raw = JSON.stringify({ "status": "verification" });
        execute(endPoint, raw, Method, VerificationLoanMsg, token)

        setTimeout(() => {
            reFetch()
        }, 2000);
    }

    return (
        <button className='btn text-white w-100' onClick={verificationFunc}>Mo to verification</button>
    )
}

export default VerifyModal