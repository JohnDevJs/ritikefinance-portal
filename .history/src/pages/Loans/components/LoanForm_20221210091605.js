import React from 'react'
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"
import { Row, Col, CardBody, Card } from 'reactstrap';

function LoanForm() {

    const [amount, setAmount] = React.useState(100)
    const [days, setDays] = React.useState(5)
    const percentage = days <= 15 ? 22.5 : 40;
    const Total_pay_back = amount * 100 / percentage

    return (
        <>
            <Row>
                <Col md={6}>
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
                </Col>

                <Col md={6}>
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between p-3">
                                <p>5 to 15 days = 22.5%</p>
                                <p>16 to 31 days = 40%</p>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <p>Total pay back</p>
                                <p> <b> R {Math.round(Total_pay_back)} </b>  </p>
                            </div>
                            <button className='btn text-white w-100'>Apply now</button>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        </>
    )
}

export default LoanForm