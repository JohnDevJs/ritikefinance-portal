import React from 'react'
import { useStore1Selector } from "index";
import useFetch from 'hooks/useFecth';
import { loginUser } from "Redux/Slices/userSlice";
import { Col, Row } from 'reactstrap';

function LoanDetails({ loan_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans/${loan_Id}`, token);
    console.log(" Data : ", data)

    return (
        <Row>
            <Col md={6}>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Amount :</span> {data?.amount}  </p>
                <p> <span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Total Amount :</span>  {data?.totalAmount}  </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Duration : </span> {data?.duration} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Status : </span>{data?.status}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Loan percentage : </span>{data?.loanPercentage}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Payment data : </span>{data?.paymentDate?.split('T')[0]}</p>
            </Col>

            <Col md={6}>
                <div className="profile__img">
                    <h6 style={{ fontWeight: 'bold', fontSize: '22px' }}> Payslip  </h6>
                    <img className="img-thumbnail" src={`${process.env.REACT_APP_IMG_API}img/payslip/${data?.paySlip}`} />
                </div>

                <div>
                    <h4 style={{ fontWeight: 'bold', fontSize: '22px' }}> Bank Statement  : </h4>
                    {
                        data?.bankStatement?.map((img) => (
                            <img className="avatar-lg" src={`${process.env.REACT_APP_IMG_API}img/bankStatement/${img}`} />
                        ))
                    }
                </div>
            </Col>
        </Row>
    )
}

export default LoanDetails