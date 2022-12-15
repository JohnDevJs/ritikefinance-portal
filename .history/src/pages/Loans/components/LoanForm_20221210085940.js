import React from 'react'
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"
import { Row, Col, CardBody } from 'reactstrap';

function LoanForm() {

    const [amount, setAmount] = React.useState(100)
    const [days, setDays] = React.useState(5)
    console.log(amount)

    return (
        <>
            <Row>
                <CardBody>

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
                    </Col>
                    <Col md={6}>
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



                </CardBody>
            </Row>
        </>
    )
}

export default LoanForm