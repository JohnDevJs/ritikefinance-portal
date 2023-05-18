import React, { useState } from 'react'
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

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;

    const { execute, pending, data } = usePost()
    const [paymentDate, setPaymentDate] = React.useState(moment().format('YYYY-MM-DD'));

    const [inputValue, setInputValue] = React.useState('');
    const [inputValue2, setInputValue2] = React.useState('');
    const percentage = inputValue2 > 15 ? 40 : 22.5;
    const Total = inputValue * percentage;
    const totalInterest = Total / 100;

    const refFileUploadPaySleep = React.useRef(null);
    const refFileUploadBankStatement = React.useRef(null);
    const [paySleepServer, setPaySleepServer] = React.useState();
    const [paySleep, setPaySleep] = React.useState();
    const [bankStatementServer, setBankStatementServer] = React.useState();
    const [bankStatement, setBankStatement] = React.useState();

    const onThumbChangeClickPaySleep = () => {
        if (refFileUploadPaySleep) {
            refFileUploadPaySleep.current.dispatchEvent(new MouseEvent('click'));
        }
    };

    const onThumbChangeClickBankStatement = () => {
        if (refFileUploadBankStatement) {
            refFileUploadBankStatement.current.dispatchEvent(new MouseEvent('click'));
        }
    };

    const changeThumbPaySleep = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPaySleepServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setPaySleep(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const changeThumbBankStatement = (event) => {
        if (event.target.files && event.target.files[0]) {
            setBankStatementServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setBankStatement(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
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

    const onChangeDate = ({ target }) => {
        const newDate = moment(target.value.timeStamp).format('YYYY-MM-DD');
        setPaymentDate(newDate);
    };

    const applyLoan = () => {

        console.log("paymentDate : ", paymentDate)

        if (!paySleepServer && !bankStatementServer) {
            alert('Please upload images');
            return;
        }

        // const Method = 'POST', endPoint = 'loans/applyLoan', isJSON = true;
        // const formdata = new FormData();
        // formdata.append("amount", inputValue);
        // formdata.append("duration", inputValue2);
        // formdata.append("paymentDate", paymentDate);
        // formdata.append("totalAmount", totalInterest);
        // formdata.append("paySlip", paySleepServer);
        // formdata.append("bankStatement", bankStatementServer);
        // formdata.append("loanPercentage", 0);
        // formdata.append("user", userId);
        // execute(endPoint, formdata, Method, ApplyLongMsg, token, isJSON)
    }

    if (data?.status === 'success') {
        onClose()
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    return (
        <>
            <Row className='loan__form'>

                <Col md={6}>

                    <form className="px-3">
                        <p className='payslip__title'>Choose the payment date </p>
                        <input type="date" className="form-control" onChange={onChangeDate} />
                    </form>


                    <div className="p-3">
                        <h4 className="font-size-14 mb-3 mt-0">
                            Enter Loan amount
                        </h4>
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


                    <div className='mt-5'>
                        <div className="d-flex justify-content-between px-3">
                            <p className='title'> 5 to 15 days = 22.5% </p>
                            <p className='title'> 16 to 30 days = 40% </p>
                        </div>

                        <div className="px-3">
                            <span className="float-start ">Number of days </span>
                            <input
                                min="1"
                                max="30"
                                type="number"
                                value={inputValue2}
                                className="form-control"
                                onChange={handleInputChange2}
                                disabled
                            />

                        </div>

                    </div>

                    <div className="d-flex justify-content-between p-3">
                        <h5><b> Total to pay back </b></h5>
                        <h5> <b> R {Math.round(totalInterest)} </b>  </h5>
                    </div>


                </Col>


                <Col md={6}>
                    <p className='payslip__title'>Upload your latest payslip</p>
                    <div className="d-flex justify-content-center align-items-center ">
                        <img src={paySleep === undefined ? Image : paySleep} alt="" width={350} height={200} className='payslip__img__container' />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickPaySleep}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadPaySleep} className="file-upload d-none" accept="image/*" onChange={changeThumbPaySleep} />
                    </div>

                    <p className='payslip__title'>Upload your bank statement</p>
                    <div className="d-flex justify-content-center align-items-center ">
                        <img src={bankStatement === undefined ? Image : bankStatement} alt="" width={350} height={200} className='payslip__img__container' />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickBankStatement}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadBankStatement} className="file-upload d-none" accept="image/*" onChange={changeThumbBankStatement} />
                    </div>
                </Col>

                <div className="px-3">
                    <CustomBtn Pending={pending} btnName="Apply now" onClick={applyLoan} />
                </div>

            </Row>
        </>
    )
}

export default LoanForm