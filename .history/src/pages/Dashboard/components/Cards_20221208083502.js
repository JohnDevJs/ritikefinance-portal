import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const Cards = () => {

    return (
        <React.Fragment>
            <Row>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center">
                                <div className='d-flex justify-content-center'>
                                    <div>
                                        <h6 className="mb-4 custom-text-color">TOTAL LOAN AMOUNT</h6>
                                        <h4 className="mb-0">R 50 </h4>
                                    </div>
                                    <div>
                                        <RiMoneyDollarCircleFill />
                                    </div>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center">
                                <div>
                                    <h6 className="mb-4 custom-text-color"> TOTAL LOAN AMOUNT + INTEREST </h6>
                                    <h4 className="mb-0">R 60 </h4>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center">
                                <div>
                                    <h6 className="mb-4 custom-text-color"> TOTAL LOAN AMOUNT + INTEREST </h6>
                                    <h4 className="mb-0">R 450 </h4>
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