import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney } from "react-icons/gi";

const Cards = () => {

    return (
        <React.Fragment>
            <Row>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center Link_color">
                                <div className='d-flex justify-content-between custom-color'>
                                    <div>
                                        <h6 className="mb-4 custom-text-color">TOTAL LOAN AMOUNT</h6>
                                        <h4 className="mb-0 color">R 850 </h4>
                                    </div>
                                    <div>
                                        <GiReceiveMoney size={60} />
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
                                        <h4 className="mb-0 color">R 350 </h4>
                                    </div>
                                    <div>
                                        <GiReceiveMoney size={60} />
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
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h6 className="mb-4 custom-text-color"> TOTAL LOAN AMOUNT + INTEREST </h6>
                                        <h4 className="mb-0">R 500 </h4>
                                    </div>
                                    <div>
                                        <GiReceiveMoney size={60} />
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