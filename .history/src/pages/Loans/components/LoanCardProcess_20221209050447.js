import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney, GiTakeMyMoney, GiPayMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LoansRoute } from 'components/RouteName';

const LoanCardProcess = () => {

    return (
        <React.Fragment>
            <Row className='mx-5'>
                <Col md={3}>
                    <Card className='card-border-radius custom-text-color'>
                        <CardBody className='custom-text-color'>
                            <Link to={LoansRoute} className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6 className="custom-text-color"> Loans history </h6>
                                            <h4 className="mb-0">10</h4>
                                        </div>
                                        <div>
                                            <GiTakeMyMoney size={20} />
                                        </div>
                                    </div>
                                </Row>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Link to="/#" className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">Loan Requests</h6>
                                            <h4 className="mb-0">02</h4>
                                        </div>
                                        <div>
                                            <GiPayMoney size={60} />
                                        </div>
                                    </div>
                                </Row>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Link to="/#" className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">Decline Loans</h6>
                                            <h4 className="mb-0">03</h4>
                                        </div>
                                        <div>
                                            <TbReportMoney size={60} />
                                        </div>
                                    </div>
                                </Row>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Link to="/#" className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">My loans</h6>
                                            <h4 className="mb-0">10</h4>
                                        </div>
                                        <div>
                                            <RiMoneyDollarCircleFill size={60} />
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

export default LoanCardProcess;