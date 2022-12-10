import React from 'react'
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"
import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import { FcAddImage } from 'react-icons/fc';

function LoanForm() {

    const [amount, setAmount] = React.useState(100)
    const [days, setDays] = React.useState(5)
    const percentage = days <= 15 ? 22.5 : 40;
    const Total_pay_back = amount * percentage / 100 * 10

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

    const applyLoan = () => {
        console.log(" Result : loan")
    }

    return (
        <>
            <Row>
                <Col md={6}>
                    <label>Upload your latest payslip</label>
                    <div className="d-flex justify-content-center align-items-center border">
                        <img src={paySleep === undefined ? Image : paySleep} alt="user" width={350} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickPaySleep}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadPaySleep} className="file-upload d-none" accept="image/*" onChange={changeThumbPaySleep} />
                    </div>
                </Col>

                <Col md={6}>
                    <label>Upload your bank statement</label>
                    <div className="d-flex justify-content-center align-items-center border">
                        <img src={bankStatement === undefined ? Image : bankStatement} alt="user" width={350} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClickBankStatement}
                        > <FcAddImage size={40} />
                        </Button>
                        <input type="file" ref={refFileUploadBankStatement} className="file-upload d-none" accept="image/*" onChange={changeThumbBankStatement} />
                    </div>
                </Col>

                <Col md={6}>
                    <Card>
                        <div className="p-3">
                            <h4 className="font-size-14 mb-3 mt-0">Amount</h4>
                            <span className="float-start mt-4">R100</span>
                            <span className="float-end  mt-4">R1000</span>
                            <Slider
                                value={amount}
                                min={100}
                                max={1000}
                                orientation="horizontal"
                                onChange={value => { setAmount(value) }}
                            />
                        </div>
                        <div className="p-3">
                            <h4 className="font-size-14 mb-3 mt-0">Number of days</h4>
                            <span className="float-start mt-4">5 Days </span>
                            <span className="float-end  mt-4">30 Days</span>
                            <Slider
                                value={days}
                                min={5}
                                max={30}
                                orientation="horizontal"
                                onChange={day => { setDays(day) }}
                            />
                        </div>
                        <div className="d-flex justify-content-between p-3">
                            <p><b> 5 to 15 days = 22.5% </b></p>
                            <p><b> 16 to 31 days = 40%</b></p>
                        </div>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between p-3">
                                <p><b> 5 to 15 days = 22.5% </b></p>
                                <p><b> 16 to 31 days = 40%</b></p>
                            </div>
                            <form className="px-3">
                                <p><b> Payment date </b></p>
                                <input type="date" className="form-control" />
                            </form>
                            <div className="d-flex justify-content-between p-3">
                                <p><b> Total pay back </b></p>
                                <p> <b> R {Math.round(Total_pay_back)} </b>  </p>
                            </div>
                            <div className="px-3">
                                <button onClick={applyLoan} className='btn text-white w-100'>Apply now</button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default LoanForm