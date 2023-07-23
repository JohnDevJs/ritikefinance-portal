import React, { useRef, useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"
import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import { FcAddImage } from 'react-icons/fc';
import usePost from 'hooks/usePost';
import moment from 'moment';
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import { ApplyLongMsg } from 'components/NotifyMessage';
import CustomBtn from 'components/CustomBtn';

function LoanForm({ onClose, reFetch }) {

    const [payslipFile, setPayslipFile] = useState(null);
    const [bankStatementFile, setBankStatementFile] = useState(null);
    const [signature, setSignature] = useState(null);
    const signaturePad = useRef(null);
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;

    const { execute, pending, data } = usePost()
    // const [paymentDate, setPaymentDate] = React.useState(moment().format('YYYY-MM-DD'));
    const [paymentDate, setPaymentDate] = React.useState(new Date().toISOString().split('T')[0]);


    const [inputValue, setInputValue] = React.useState('');
    const [inputValue2, setInputValue2] = React.useState('');
    const [inputValue3, setInputValue3] = React.useState('');
    const [inputValue4, setInputValue4] = React.useState('');
    const [inputValue5, setInputValue5] = React.useState('');
    const [inputValue6, setInputValue6] = React.useState('');
    const [inputValue7, setInputValue7] = React.useState('');
    const [inputValue8, setInputValue8] = React.useState('');
    const percentage = inputValue2 > 15 ? 30 : 22.5;
    const Total = inputValue * percentage;
    const totalInterest = Total / 100;


    const handlePayslipFileChange = (event) => {
        const file = event.target.files[0];
        setPayslipFile(file);
    };

    const handleBankStatementFileChange = (event) => {
        const file = event.target.files[0];
        setBankStatementFile(file);
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value <= 5000) {
            setInputValue(value);
        }
    };

    const handleInputChange2 = (event) => {
        const value = event.target.value;
        if (value <= 5000) {
            setInputValue2(value);
        }

    };
    const handleInputChange3 = (event) => {
        setInputValue3(event.target.value)

    };
    const handleInputChange4 = (event) => {
        setInputValue4(event.target.value)

    };
    const handleInputChange5 = (event) => {
        setInputValue5(event.target.value)

    };
    const handleInputChange6 = (event) => {
        setInputValue6(event.target.value)

    };
    const handleInputChange7 = (event) => {
        setInputValue7(event.target.value)

    };
    const handleInputChange8 = (event) => {
        setInputValue8(event.target.value)

    };

    const onChangeDate = ({ target }) => {
        const newDate = target.value;
        setPaymentDate(newDate);
    };

    <form className="px-3">
        <p>Choose the payment date </p>
        <input type="date" className="form-control" onChange={onChangeDate} />
    </form>

    const totalDisplay = totalInterest + parseInt(inputValue);

    const applyLoan = () => {
        const Method = 'POST', endPoint = 'loans/applyLoan', isJSON = true;
        const formdata = new FormData();
        formdata.append("amount", inputValue);
        formdata.append("duration", inputValue2);
        formdata.append("monthlyIncomeGross", inputValue3);
        formdata.append("bondRent", inputValue4);
        formdata.append("carInstallments", inputValue5);
        formdata.append("dependents", inputValue6);
        formdata.append("loanCredit", inputValue7);
        formdata.append("otherExpenses", inputValue8);
        formdata.append("paymentDate", paymentDate);
        formdata.append("totalAmount", totalInterest);
        formdata.append("loanSignature", signature);
        formdata.append("bankStatement_and_payslip", payslipFile);
        formdata.append("bankStatement_and_payslip", bankStatementFile);
        formdata.append("loanPercentage", 0);
        formdata.append("user", userId);
        execute(endPoint, formdata, Method, ApplyLongMsg, token, isJSON)
    }

    if (data?.status === 'success') {
        onClose()
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    const handleClear = () => {
        signaturePad.current.clear();
        setSignature(null);
    };

    console.log(" undesigned : ", userDet?.data?.data?.firstName)

    return (
        <>
            <Row className='loan__form'>
                <Col md={6}>
                    <form className="px-3">
                        <p >Choose the payment date </p>
                        <input type="date" className="form-control" onChange={onChangeDate} />
                    </form>

                    <div className="mt-4">
                        <h4 className="font-size-14 mb-3 mt-0">  Enter Loan amount  </h4>
                        <span className="float-start ">From   R 100</span>
                        <span className="float-end ">up to    R 5000</span>
                        <input
                            min="100"
                            max="5000"
                            type="number"
                            value={inputValue}
                            className="form-control"
                            onChange={handleInputChange}
                        />

                    </div>
                </Col>

                <Col md={6}>
                    <p className="float-start ">Upload your latest payslip</p>
                    <div>
                        <input type="file" className="form-control" name="payslip" onChange={handlePayslipFileChange} />
                    </div>

                    <div className='mt-5'>
                        <p className="float-start ">Upload your bank statement</p>
                        <input type="file" className="form-control" name="bankStatement" onChange={handleBankStatementFileChange} />
                    </div>
                </Col>

                <Col md={12}>
                    <div className='mt-5'>
                        <div className="d-flex justify-content-between px-3">
                            <p className='title'> 5 to 15 days = 22.5% </p>
                            <p className='title'> 16 to 30 days = 30% </p>
                        </div>

                        <div className="px-3">
                            <span className="float-start ">Number of days </span>
                            <input min="1" max="30" type="number" className="form-control" onChange={handleInputChange2}
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between p-3">
                        <h5><b> Total to pay back </b></h5>
                        <h5> <b> R {!Math.round(totalDisplay) ? "00" : Math.round(totalDisplay)} </b>  </h5>
                    </div>
                </Col>

                <Row>
                    <Col md={6}>
                        <p className="float-start ">Monthly income gross</p>
                        <div>
                            <input type="text" className="form-control" name="monthlyIncomeGross" onChange={handleInputChange3} />
                        </div>

                        <div className='mt-5'>
                            <p className="float-start ">Bond Rent</p>
                            <input type="text" className="form-control" name="bondRent" onChange={handleInputChange4} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <p className="float-start ">Car Installments </p>
                        <div>
                            <input type="text" className="form-control" name="carInstallments" onChange={handleInputChange5} />
                        </div>

                        <div className='mt-5'>
                            <p className="float-start ">Dependents</p>
                            <input type="text" className="form-control" name="dependents" onChange={handleInputChange6} />
                        </div>
                    </Col>


                </Row>

                <Row>
                    <Col md={6}>
                        <p className="float-start ">Loan Credit </p>
                        <div>
                            <input type="text" className="form-control" name="loanCredit" onChange={handleInputChange7} />
                        </div>
                    </Col>

                    <Col md={6}>
                        <p className="float-start ">Other Expenses</p>
                        <div className='mt-5'>
                            <input type="text" className="form-control" name="otherExpenses" onChange={handleInputChange8} />
                        </div>
                    </Col>
                </Row>

                <div>
                    <p>Please sign bellow</p>
                    <div className="signature__container">
                        <SignaturePad ref={signaturePad}
                            canvasProps={{ className: 'signature-pad' }}
                            onEnd={() => { const dataURL = signaturePad.current.toDataURL(); setSignature(dataURL); }}
                        />
                    </div>
                    <div>
                        <button className='btn text-white me-4' onClick={handleClear}>Clear</button>
                    </div>
                    {signature && <img src={signature} alt="Signature" />}
                </div>

                <Row className='mt-5'>
                    <Col md={6}>
                        <p className="float-start "> I, the undersigned</p>
                        <div className='mt-5'>
                            <input type="text" value={userDet?.data?.data?.firstName + userDet?.data?.data?.lastName} className="form-control" name="undersigned" />
                        </div>
                    </Col>

                    <Col md={6}>
                        <p className="float-start ">I Number</p>
                        <div className='mt-5'>
                            <input type="text" className="form-control" name="idNumber" />
                        </div>
                    </Col>
                </Row>

                <div className="px-3">
                    <CustomBtn Pending={pending} btnName="Apply now" onClick={applyLoan} />
                </div>
            </Row>
        </>
    )
}

export default LoanForm