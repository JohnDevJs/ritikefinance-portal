import React from 'react'
import { useStore1Selector } from "index";
import useFetch from 'hooks/useFecth';
import { loginUser } from "Redux/Slices/userSlice";
import { Col, Row } from 'reactstrap';

function LoanDetails({ loan_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loan_Id}`, token);
    console.log(" Data : ", data?.debitedAgree)

    return (
        <Row>
            <div className='mt-4'>
                <h5>
                    If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day;
                </h5>
                <h3>{data?.debitedAgree ? "Yes" : "No"}</h3>
            </div>

            <div className='mt-4'>
                <h5>
                    The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day.
                </h5>
                <h3>{data?.debitedAgree2 ? "Yes" : "No"}</h3>
            </div>
            <div className='mt-4'>
                <h5>
                    To allow for tracking of dates to match with flow of Credit at no additional cost to myself.
                </h5>
                <h3>{data?.trackingOfDate ? "Yes" : "No"}</h3>
            </div>
            <div className='mt-4'>
                <h5>
                    I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself.
                </h5>
                <h3>{data?.authorized ? "Yes" : "No"}</h3>
            </div>
            <div className='mt-4'>
                <h5>
                    Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing.
                </h5>
                <h3>{data?.dateSignedAt}</h3>
            </div>
            <div className='mt-4'>
                <h4> ASSIGNMENT</h4>
                <h5>

                    I/We agree that although this authority and mandate may be cancelled by me/us, such cancellation will not cancel the Agreement. I/We also understand that I/we cannot reclaim amounts, which have been withdrawn from my/our account (paid) in terms of this authority and mandate if such amounts were legally owing to you.
                </h5>
            </div>

        </Row>
    )
}

export default LoanDetails