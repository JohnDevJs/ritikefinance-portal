import React from 'react'
import { useStore1Selector } from "index";
import useFetch from 'hooks/useFecth';
import { loginUser } from "Redux/Slices/userSlice";
import { Col, Row } from 'reactstrap';

function LoanDetails({ loan_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans/${loan_Id}`, token);

    return (
        <Row className=''>
            <Col md={6}>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Amount :</span> {data?.amount}  </p>
                <p> <span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Total Amount :</span>  {data?.totalAmount}  </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Duration : </span> {data?.duration} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Dependents : </span> {data?.dependents} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Loan credit : </span> {data?.loanCredit} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Other expenses : </span> {data?.otherExpenses} </p>
            </Col>

            <Col md={6}>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Status : </span>{data?.status}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Loan percentage : </span>{data?.loanPercentage}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Payment date : </span>{data?.paymentDate?.split('T')[0]}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Monthly Income Gross : </span>{data?.monthlyIncomeGross}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Bond Rent : </span>{data?.bondRent}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Car Installments : </span>{data?.carInstallments}</p>
            </Col>

            <div>
                <p style={{ fontWeight: 'bold', fontSize: '14px' }}> Signature : </p>
                {!data.loanSignature ? null : <img width={300} src={data.loanSignature} alt="Signature" />}
            </div>

            <div className='mt-5'>
                <h6 style={{ fontWeight: 'bold', fontSize: '22px' }}> Bank Statements and payslip : </h6>
                {
                    data?.bankStatement_and_payslip?.map((PDF, i) => {
                        return (
                            <div key={i} className="file-container">
                                <embed src={PDF} type="application/pdf" width="100%" height="400px" />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </Row>
    )
}

export default LoanDetails