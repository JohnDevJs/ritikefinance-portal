// import React from 'react'
// import { useStore1Selector } from "index";
// import useFetch from 'hooks/useFecth';
// import { loginUser } from "Redux/Slices/userSlice";
// import { Row } from 'reactstrap';

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









// import React from 'react';
// import { useStore1Selector } from "index";
// import useFetch from 'hooks/useFecth';
// import { loginUser } from "Redux/Slices/userSlice";
// import { Col, Row } from 'reactstrap';

// function LoanDetails({ loan_Id }) {

//     const userDet = useStore1Selector(loginUser);
//     const token = userDet?.token;

//     const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loan_Id}`, token);
//     const TotalToPay = parseInt(data?.loan?.totalAmount) + parseInt(data?.loan?.amount)

//     const handleDownload = () => {
//         // create a new blob object with the invoice data and set the content type to application/pdf
//         const blob = new Blob([invoiceContent], { type: 'application/pdf' });
//         // create a download link element
//         const downloadLink = document.createElement('a');
//         // set the href attribute of the download link to the URL of the blob object
//         downloadLink.href = URL.createObjectURL(blob);
//         // set the download attribute of the download link to the filename of the invoice
//         downloadLink.download = 'invoice.pdf';
//         // simulate a click on the download link to trigger the download of the file
//         downloadLink.click();
//     }

//     // create the invoice content as a string
//     const invoiceContent = `
//         Full Name: ${data?.user?.firstName} ${data?.user?.lastName}
//         Phone number: ${data?.user?.phoneNumber}
//         Email: ${data?.user?.email}
//         Account Number: ${data?.user?.accountNumber}
//         Bank Name: ${data?.user?.bankName}
//         Payment date: ${data?.loan?.paymentDate.split('T')[0]}
//         Loan amount: R ${data?.loan?.amount}
//         Amount to pay: R ${TotalToPay}
//         If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day: ${data?.debitedAgree ? "Yes" : "No"}
//         The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day: ${data?.debitedAgree2 ? "Yes" : "No"}
//         To allow for tracking of dates to match with flow of Credit at no additional cost to myself: ${data?.trackingOfDate ? "Yes" : "No"}
//         I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself: ${data?.authorized ? "Yes" : "No"}
//         Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing: ${data?.dateSignedAt?.split('T')[0]}
//         ASSIGNMENT
//         I/We agree that although this authority and mandate may be cancelled by me/us, such cancellation will not cancel the Agreement. I/We also understand that I/we cannot reclaim amounts, which have been withdrawn from my/our account (paid) in terms of this authority and mandate if such amounts were legally owing to you: ${data?.agreement ? "Yes" : "No"}
//       `;

//     return (
//         <Row>
//             <div className='mt-4'>
//                 <p> <b> Full Name : </b>  {data?.user?.firstName} {data?.user?.lastName}</p>
//                 <p><b>Phone number : </b>{data?.user?.phoneNumber}</p>
//                 <p><b>Email : </b>{data?.user?.email}</p>
//                 <p><b>Account Number : </b>{data?.user?.accountNumber}</p>
//                 <p><b>Bank Name : </b>{data?.user?.bankName}</p>
//                 <p><b>Payment date : </b>{data?.loan?.paymentDate.split('T')[0]}</p>

//                 <button onClick={handleDownload}> Download </button>
//             </div>
//         </Row>)
// }

// export default LoanDetails;














// import React from 'react';
// import { useStore1Selector } from 'index';
// import useFetch from 'hooks/useFecth';
// import { loginUser } from 'Redux/Slices/userSlice';
// import { Row, Col, Card, CardBody } from 'reactstrap';

// function LoanDetails({ loan_Id }) {

//     const userDet = useStore1Selector(loginUser);
//     const token = userDet?.token;

//     const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loan_Id}`, token);
//     const TotalToPay = parseInt(data?.loan?.totalAmount) + parseInt(data?.loan?.amount)



//     return (
//         <Card>
//             <CardBody>
//                 <Row>
//                     <Col>
//                         <h4>Loan Details</h4>
//                     </Col>
//                 </Row>
//                 <hr />
//                 <Row>
//                     <Col>
//                         <p> <b> Full Name : </b>  {data?.user?.firstName} {data?.user?.lastName}</p>
//                         <p><b>Phone number : </b>{data?.user?.phoneNumber}</p>
//                         <p><b>Email : </b>{data?.user?.email}</p>
//                         <p><b>Account Number : </b>{data?.user?.accountNumber}</p>
//                         <p><b>Bank Name : </b>{data?.user?.bankName}</p>
//                         <p><b>Payment date : </b>{data?.loan?.paymentDate.split('T')[0]}</p>
//                         <p><b>Loan amount : </b>R {data?.loan?.amount}</p>
//                         <p><b>Amount to pay : </b>R {TotalToPay}</p>
//                     </Col>
//                 </Row>

//                 <div className="mt-4">
//                     <p>If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day:</p>
//                     <h5 className="text-primary">{data?.debitedAgree ? "Yes" : "No"}</h5>
//                 </div>

//                 <div className="mt-4">
//                     <p>The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day:</p>
//                     <h5 className="text-primary">{data?.debitedAgree2 ? "Yes" : "No"}</h5>
//                 </div>

//                 <div className="mt-4">
//                     <p>To allow for tracking of dates to match with flow of Credit at no additional cost to myself:</p>
//                     <h5 className="text-primary">{data?.trackingOfDate ? "Yes" : "No"}</h5>
//                 </div>

//                 <div className="mt-4">
//                     <p>I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself:</p>
//                     <h5 className="text-primary">{data?.authorized ? "Yes" : "No"}</h5>
//                 </div>

//                 <div className="mt-4">
//                     <p>Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing:</p>
//                     <h5 className="text-primary">{data?.dateSignedAt?.split('T')[0]}</h5>
//                 </div>

//                 <div className="mt-4">
//                     <h5>ASSIGNMENT</h5>
//                     <p>I/We agree that although this authority and mandate may be cancelled by me/us, such cancellation will not cancel the Agreement. I/We also understand that I/we cannot reclaim amounts, which have been withdrawn from my/our account (paid) in terms of this authority and mandate if such amounts were legally owing to you.</p>
//                 </div>

//                 <button> Download PDF </button>

//             </CardBody>
//         </Card>
//     );
// }

// export default LoanDetails;









import React from 'react';
import { saveAs } from 'file-saver';
import { PDFDocument, StandardFonts } from 'pdf-lib';
import { useStore1Selector } from 'index';
import useFetch from 'hooks/useFecth';
import { loginUser } from 'Redux/Slices/userSlice';
import { Row, Col, Card, CardBody } from 'reactstrap';

// Function to generate PDF document
async function generatePdf(data) {
    const pdfDoc = await PDFDocument.create();
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const page = pdfDoc.addPage();
    const { width, height } = page.getSize();
    const fontSize = 15;
    const lineHeight = helveticaFont.heightAtSize(fontSize);

    // Add data to PDF document
    page.drawText(`Full Name: ${data?.user?.firstName} ${data?.user?.lastName}`, {
        x: 50,
        y: height - 50,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    page.drawText(`Phone number: ${data?.user?.phoneNumber}`, {
        x: 50,
        y: height - 50 - lineHeight,
        size: fontSize,
        font: helveticaFont,
        lineHeight,
    });

    // Add more data as needed

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
}

function LoanDetails({ loan_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loan_Id}`, token);
    const TotalToPay = parseInt(data?.loan?.totalAmount) + parseInt(data?.loan?.amount)
    // Your existing code

    // Function to handle PDF download
    async function handleDownload() {
        const pdfBytes = await generatePdf(data);
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
                        {/* Your existing data display */}
                    </Col>
                </Row>
                <button onClick={handleDownload}> Download PDF </button>
            </CardBody>
        </Card>
    );
}

export default LoanDetails;
