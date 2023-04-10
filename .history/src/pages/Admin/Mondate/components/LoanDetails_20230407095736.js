// import React from 'react'
// import { useStore1Selector } from "index";
// import useFetch from 'hooks/useFecth';
// import { loginUser } from "Redux/Slices/userSlice";
// import {  Row } from 'reactstrap';

// function LoanDetails({ loan_Id }) {

//     const userDet = useStore1Selector(loginUser);
//     const token = userDet?.token;

//     const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loan_Id}`, token);
//     const TotalToPay = parseInt(data?.loan?.totalAmount) + parseInt(data?.loan?.amount)

//     return (
//         <Row>
//             <div className='mt-4'>
//                 <p> <b> Full Name : </b>  {data?.user?.firstName} {data?.user?.lastName}</p>
//                 <p><b>Phone number : </b>{data?.user?.phoneNumber}</p>
//                 <p><b>Email : </b>{data?.user?.email}</p>
//                 <p><b>Account Number : </b>{data?.user?.accountNumber}</p>
//                 <p><b>Bank Name : </b>{data?.user?.bankName}</p>
//                 <p><b>Payment date : </b>{data?.loan?.paymentDate.split('T')[0]}</p>
//                 <p><b>Loan amount : </b>R {data?.loan?.amount}</p>
//                 <p><b>Amount to pay : </b>R {TotalToPay}</p>
//             </div>

//             <div className='mt-4'>
//                 <h5>
//                     If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day;
//                 </h5>
//                 <h5 className='text-primary'>{data?.debitedAgree ? "Yes" : "No"}</h5>
//             </div>

//             <div className='mt-4'>
//                 <h5>
//                     The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day.
//                 </h5>
//                 <h5 className='text-primary'>{data?.debitedAgree2 ? "Yes" : "No"}</h5>
//             </div>
//             <div className='mt-4'>
//                 <h5>
//                     To allow for tracking of dates to match with flow of Credit at no additional cost to myself.
//                 </h5>
//                 <h5 className='text-primary'>{data?.trackingOfDate ? "Yes" : "No"}</h5>
//             </div>
//             <div className='mt-4'>
//                 <h5>
//                     I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself.
//                 </h5>
//                 <h5 className='text-primary'>{data?.authorized ? "Yes" : "No"}</h5>
//             </div>
//             <div className='mt-4'>
//                 <h5>
//                     Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing.
//                 </h5>
//                 <h5 className='text-primary'>{data?.dateSignedAt?.split('T')[0]}</h5>
//             </div>
//             <div className='mt-4'>
//                 <h4> ASSIGNMENT</h4>
//                 <h5>

//                     I/We agree that although this authority and mandate may be cancelled by me/us, such cancellation will not cancel the Agreement. I/We also understand that I/we cannot reclaim amounts, which have been withdrawn from my/our account (paid) in terms of this authority and mandate if such amounts were legally owing to you.
//                 </h5>
//                 <h5 className='text-primary'>{data?.agreement ? "Yes" : "No"}</h5>
//             </div>
//         </Row>
//     )
// }

// export default LoanDetails










import React, { useRef } from 'react';
import { useStore1Selector } from "index";
import useFetch from 'hooks/useFecth';
import { loginUser } from "Redux/Slices/userSlice";
import { Col, Row } from 'reactstrap';
import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';

function Invoice({ loan_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loan_Id}`, token);
    const TotalToPay = parseInt(data?.loan?.totalAmount) + parseInt(data?.loan?.amount)

    const invoiceRef = useRef();

    const handleDownload = () => {
        invoiceRef.current.updateContainer();
        const pdf = invoiceRef.current.toBlob();
        const link = document.createElement('a');
        link.href = URL.createObjectURL(pdf);
        link.download = 'invoice.pdf';
        link.click();
    };

    const InvoiceDoc = () => (
        <Document>
            <Page>
                <View style={{ padding: '20px' }}>
                    <Text>Full Name: {data?.user?.firstName} {data?.user?.lastName}</Text>
                    <Text>Phone number: {data?.user?.phoneNumber}</Text>
                    <Text>Email: {data?.user?.email}</Text>
                    <Text>Account Number: {data?.user?.accountNumber}</Text>
                    <Text>Bank Name: {data?.user?.bankName}</Text>
                    <Text>Payment date: {data?.loan?.paymentDate.split('T')[0]}</Text>
                    <Text>Loan amount: R {data?.loan?.amount}</Text>
                    <Text>Amount to pay: R {TotalToPay}</Text>
                    <Text>If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day;</Text>
                    <Text style={{ fontWeight: 'bold' }}>{data?.debitedAgree ? "Yes" : "No"}</Text>
                    <Text>The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day.</Text>
                    <Text style={{ fontWeight: 'bold' }}>{data?.debitedAgree2 ? "Yes" : "No"}</Text>
                    <Text>To allow for tracking of dates to match with flow of Credit at no additional cost to myself.</Text>
                    <Text style={{ fontWeight: 'bold' }}>{data?.trackingOfDate ? "Yes" : "No"}</Text>
                    <Text>I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself.</Text>
                    <Text style={{ fontWeight: 'bold' }}>{data?.authorized ? "Yes" : "No"}</Text>
                    <Text>Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing.</Text>
                    {/* <Text style={{ fontWeight: 'bold' }}>{data?.dateSignedAt?.split('T */}
                </View>
            </Page>
        </Document>
    )
}

export default Invoice