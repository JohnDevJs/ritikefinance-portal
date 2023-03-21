import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney } from "react-icons/gi";

const Cards = ({ data }) => {

    let loanAmount = 0, totalInterest = 0;
    const amount = data?.map(a => a.amount)
    for (let e of amount) { loanAmount += parseInt(e) }

    const interest = data?.map(a => a.totalAmount)
    for (let e of interest) { totalInterest += parseInt(e) }

    console.log(" interest : ", totalInterest)

    return (
        <React.Fragment>
            <Row>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center Link_color">
                                <div className='d-flex justify-content-between custom-color'>
                                    <div>
                                        <h6 className="mb-4 custom-text-color">LOAN AMOUNT</h6>
                                        <h5 className="mb-0 color">R {loanAmount} </h5>
                                    </div>
                                    <div className='btn-custom-color'>
                                        <GiReceiveMoney size={50} />
                                    </div>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center Link_color">
                                <div className='d-flex justify-content-between custom-color'>
                                    <div>
                                        <h6 className="mb-4 custom-text-color"> INTEREST </h6>
                                        <h5 className="mb-0 color">R {totalInterest} </h5>
                                    </div>
                                    <div className='btn-custom-color'>
                                        <GiReceiveMoney size={50} />
                                    </div>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center Link_color">
                                <div className='d-flex justify-content-between custom-color'>
                                    <div>
                                        <h6 className="mb-4 custom-text-color"> TOTAL LOAN AMOUNT + INTEREST </h6>
                                        <h5 className="mb-0">R 500 </h5>
                                    </div>
                                    <div className='btn-custom-color'>
                                        <GiReceiveMoney size={50} />
                                    </div>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default Cards;