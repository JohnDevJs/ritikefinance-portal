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
import { Tooltip } from 'reactstrap';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

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
    const Total_pay_back = Total / 100;

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
        setInputValue(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
    };

    const onChangeDate = ({ target }) => {
        const newDate = moment(target.value.timeStamp).format('YYYY-MM-DD');
        setPaymentDate(newDate);
    };

    const applyLoan = () => {
        const Method = 'POST', endPoint = 'loans/applyLoan', isJSON = true;
        const formdata = new FormData();
        formdata.append("amount", inputValue);
        formdata.append("duration", inputValue2);
        formdata.append("paymentDate", paymentDate);
        formdata.append("totalAmount", Total_pay_back);
        formdata.append("paySlip", paySleepServer);
        formdata.append("bankStatement", bankStatementServer);
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

    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => {
        setTooltipOpen(!tooltipOpen);
    };

    return (
        <>
            <Row className='loan__form'>

                <Col md={6}>

                    <form className="px-3">
                        <p><b>Choose the payment date </b></p>
                        <input type="date" className="form-control" onChange={onChangeDate} />
                    </form>


                    <div className="p-3">
                        <h4 className="font-size-14 mb-3 mt-0">
                            Enter Loan amount

                            <div>
                                <p>
                                    <span style={{ textDecoration: 'underline', color: 'blue' }} href="#" id="DisabledAutoHideExample"> tooltip </span>
                                </p>
                                <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
                                    Try to select this text!
                                </Tooltip>
                            </div>

                        </h4>
                        <span className="float-start ">R100</span>
                        <span className="float-end ">R2000</span>
                        {/* <Slider
                                value={amount}
                                min={100}
                                max={1000}
                                orientation="horizontal"
                                onChange={value => { setAmount(value) }}
                            /> */}
                        <input type="number" value={inputValue} className="form-control" onChange={handleInputChange} />
                    </div>


                    <div className='mt-5'>
                        <div className="d-flex justify-content-between px-3">
                            <p className='title'> 5 to 15 days = 22.5% </p>
                            <p className='title'> 16 to 31 days = 40% </p>
                        </div>

                        <div className="px-3">
                            {/* <h4 className="font-size-14  mt-0">Number of days</h4> */}
                            <span className="float-start ">Number of days to pay back</span>
                            {/* <span className="float-end ">30 Days</span> */}
                            {/* <Slider
                                value={days}
                                min={5}
                                max={30}
                                orientation="horizontal"
                                onChange={day => { setDays(day) }}
                            /> */}
                            <select type="select" value={inputValue2} className="form-control" onChange={handleInputChange2}>
                                <option>Select...</option>
                                {numbers.map(num => <option>{num}</option>)}
                            </select>
                        </div>

                    </div>



                    {/* <div className="d-flex justify-content-between p-3">
                                <p><b> 5 to 15 days = 22.5% </b></p>
                                <p><b> 16 to 31 days = 40%</b></p>
                            </div> */}


                    <div className="d-flex justify-content-between p-3">
                        <h5><b> Total pay back </b></h5>
                        <h5> <b> R {Math.round(Total_pay_back)} </b>  </h5>
                    </div>
                    <div className="px-3">
                        <CustomBtn Pending={pending} btnName="Apply now" onClick={applyLoan} />
                    </div>

                </Col>


                <Col md={6}>
                    <label>Upload your latest payslip</label>
                    <div className="d-flex justify-content-center align-items-center ">
                        <img src={paySleep === undefined ? Image : paySleep} alt="" width={350} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickPaySleep}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadPaySleep} className="file-upload d-none" accept="image/*" onChange={changeThumbPaySleep} />
                    </div>

                    <label>Upload your bank statement</label>
                    <div className="d-flex justify-content-center align-items-center ">
                        <img src={bankStatement === undefined ? Image : bankStatement} alt="" width={350} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickBankStatement}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadBankStatement} className="file-upload d-none" accept="image/*" onChange={changeThumbBankStatement} />
                    </div>
                </Col>


            </Row>
        </>
    )
}

export default LoanForm