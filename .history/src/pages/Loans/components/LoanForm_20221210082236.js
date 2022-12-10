import React from 'react'
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"
import { Row, Col } from 'reactstrap';

function LoanForm() {

    const [state, setstate] = React.useState({
        amount: 500,
        months: 6,
        interestRate: 0,
        monthlyPayment: 0,
        numPayments: 0
    });

    const [def, setdef] = React.useState(15)

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className="p-3">
                        <span className="float-start mt-4">0</span>{" "}
                        <span className="float-end  mt-4">100</span>
                        <Slider
                            value={def}
                            orientation="horizontal"
                            onChange={value => {
                                setdef(value)
                            }}
                        />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default LoanForm