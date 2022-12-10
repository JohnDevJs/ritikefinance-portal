import React from 'react'
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"
import { Row, Col } from 'reactstrap';

function LoanForm() {

    const [amount, setAmount] = React.useState(100)
    console.log(amount)

    return (
        <>
            <Row className='d-flex justify-content-center align-items-center'>
                <div>
                    <Col md={8}>
                        <div className="p-3">
                            <h5 className="font-size-14 mb-3 mt-0">Amount</h5>
                            <span className="float-start mt-4">R100</span>
                            <span className="float-end  mt-4">R1000</span>
                            <Slider
                                value={amount}
                                orientation="horizontal"
                                onChange={value => { setAmount(value * 10) }}
                            />
                        </div>
                    </Col>
                </div>
            </Row>
        </>
    )
}

export default LoanForm