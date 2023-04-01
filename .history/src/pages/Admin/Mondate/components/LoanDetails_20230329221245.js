import React from 'react'
import { useStore1Selector } from "index";
import useFetch from 'hooks/useFecth';
import { loginUser } from "Redux/Slices/userSlice";
import { Col, Row } from 'reactstrap';

function LoanDetails({ loan_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loan_Id}`, token);
    console.log(" Data : ", data)

    return (
        <Row>
            <div>
                <p>
                    If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day; or

                </p>
            </div>

            The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day.

            To allow for tracking of dates to match with flow of Credit at no additional cost to myself.

            I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself.

            Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing.

            MANDATE

            I/We acknowledge that all payment instructions issued by you shall be treated by my/our abovementioned bank as if the instructions had been issued by me/us personally.

            CANCELLATION

            I/We agree that although this authority and mandate may be cancelled by me/us, such cancellation will not cancel the Agreement. I/We also understand that I/we cannot reclaim amounts, which have been withdrawn from my/our account (paid) in terms of this authority and mandate if such amounts were legally owing to you.

            ASSIGNMENT

            I/We acknowledge that this authority may be ceded or assigned to a third party if the Agreement is also ceded or assigned to that third party.
        </Row>
    )
}

export default LoanDetails