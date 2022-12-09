import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from 'react-router-dom';

const CardLinks = () => {

    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Link to="/#">
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">My loans</h6>
                                            <h4 className="mb-0">10</h4>
                                        </div>
                                        <div>
                                            <GiReceiveMoney size={60} />
                                        </div>
                                    </div>
                                </Row>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center">
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <h6 className="mb-4 custom-text-color"> TOTAL LOAN AMOUNT + INTEREST </h6>
                                        <h4 className="mb-0">R 350 </h4>
                                    </div>
                                    <div>
                                        <GiReceiveMoney size={60} />
                                    </div>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center">
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
                <Col md={6}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center">
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

export default CardLinks;