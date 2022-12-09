import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { Link } from 'react-router-dom';

const CardLinks = () => {

    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Link to="/#" className='custom-text-color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">My Loans</h6>
                                            <h4 className="mb-0">10</h4>
                                        </div>
                                        <div>
                                            <GiTakeMyMoney size={60} />
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
                            <Link to="/#">
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">Loan Requests</h6>
                                            <h4 className="mb-0">02</h4>
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
                            <Link to="/#">
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">Decline Loans</h6>
                                            <h4 className="mb-0">03</h4>
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
            </Row>



        </React.Fragment>
    )
}

export default CardLinks;