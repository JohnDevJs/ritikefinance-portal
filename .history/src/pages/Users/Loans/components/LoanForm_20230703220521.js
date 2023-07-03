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
    const [paymentDate, setPaymentDate] = React.useState(moment().format('YYYY-MM-DD'));

    const [inputValue, setInputValue] = React.useState('');
    const [inputValue2, setInputValue2] = React.useState('');
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
        if (value <= 2000) {
            setInputValue(value);
        }
    };

    const handleInputChange2 = (event) => {
        const value = event.target.value;
        if (value <= 30) {
            setInputValue2(event.target.value);
        }
    };

    // const onChangeDate = ({ target }) => {
    //     const newDate = moment(target.value.timeStamp).format('YYYY-MM-DD');
    //     setPaymentDate(newDate);
    // };

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
                        <span className="float-end ">up to    R 2000</span>
                        <input
                            min="100"
                            max="2000"
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

                <div>
                    <h5>Please sign bellow</h5>
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

                <div className="px-3">
                    <CustomBtn Pending={pending} btnName="Apply now" onClick={applyLoan} />
                </div>
            </Row>
        </>
    )
}

export default LoanForm