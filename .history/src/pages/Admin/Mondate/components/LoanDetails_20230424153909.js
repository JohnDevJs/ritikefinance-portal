import React from 'react';
import { saveAs } from 'file-saver';
import { useStore1Selector } from 'index';
import useFetch from 'hooks/useFecth';
import { loginUser } from 'Redux/Slices/userSlice';
import { Row, Col, Card, CardBody } from 'reactstrap';
import generatePdf from './PDFFunc';


function LoanDetails({ loan_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loan_Id}`, token);
    const TotalToPay = parseInt(data?.loan?.totalAmount) + parseInt(data?.loan?.amount)
    // Your existing code

    // Function to handle PDF download
    async function handleDownload() {
        const pdfBytes = await generatePdf(data, TotalToPay);
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        saveAs(blob, 'loan_details.pdf');
    }

    return (
        <Card>
            <CardBody>
                <Row>
                    <Col>
                        <h4>Loan Details</h4>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <p> <b> Full Name : </b>  {data?.user?.firstName} {data?.user?.lastName}</p>
                        <p><b>Phone number : </b>{data?.user?.phoneNumber}</p>
                        <p><b>Email : </b>{data?.user?.email}</p>
                        <p><b>Account Number : </b>{data?.user?.accountNumber}</p>
                        <p><b>Bank Name : </b>{data?.user?.bankName}</p>
                        <p><b>Payment date : </b>{data?.loan?.paymentDate.split('T')[0]}</p>
                        <p><b>Loan amount : </b>R {data?.loan?.amount}</p>
                        <p><b>Amount to pay : </b>R {TotalToPay}</p>
                    </Col>
                </Row>

                <div className="mt-4">
                    <p>If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day:</p>
                    <h5 className="text-primary">{data?.debitedAgree ? "Yes" : "No"}</h5>
                </div>

                <div className="mt-4">
                    <p>The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day:</p>
                    <h5 className="text-primary">{data?.debitedAgree2 ? "Yes" : "No"}</h5>
                </div>

                <div className="mt-4">
                    <p>To allow for tracking of dates to match with flow of Credit at no additional cost to myself:</p>
                    <h5 className="text-primary">{data?.trackingOfDate ? "Yes" : "No"}</h5>
                </div>

                <div className="mt-4">
                    <p>I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself:</p>
                    <h5 className="text-primary">{data?.authorized ? "Yes" : "No"}</h5>
                </div>

                <div className="mt-4">
                    <p>Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing:</p>
                    <h5 className="text-primary">{data?.dateSignedAt?.split('T')[0]}</h5>
                </div>

                <div className="mt-4">
                    <h5>ASSIGNMENT</h5>
                    <p>I/We agree that although this authority and mandate may be cancelled by me/us, such cancellation will not cancel the Agreement. I/We also understand that I/we cannot reclaim amounts, which have been withdrawn from my/our account (paid) in terms of this authority and mandate if such amounts were legally owing to you.</p>
                </div>


                {!data.signatureData ? null : <img src={data.signatureData} alt="Signature" />}

                <button className='btn btn__table text-white' onClick={handleDownload}> Download in PDF </button>

            </CardBody>
        </Card>
    );
}


export default LoanDetails;
