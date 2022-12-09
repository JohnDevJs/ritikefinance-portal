import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney, GiTakeMyMoney, GiPayMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LoansRoute, ApproveLoanRoute } from 'components/RouteName';

const LoanCardProcess = ({ length, approveLength }) => {

    return (
        <React.Fragment>
            <Row className=''>
                <Col md={4}>
                    <Card className='card-border-radius custom-text-color'>
                        <CardBody className='custom-text-color'>
                            <Link to={LoansRoute} className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h5 className="custom-text-color text-primary"> Loan history </h5>
                                            <h4 className="mb-0 text-primary">{length}</h4>
                                        </div>
                                        <div className="text-primary">
                                            <GiTakeMyMoney size={40} />
                                        </div>
                                    </div>
                                </Row>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Link to={ApproveLoanRoute} className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h5 className="custom-text-color text-success">Approved Loans</h5>
                                            <h4 className="mb-0 text-success">{approveLength} </h4>
                                        </div>
                                        <div className="mb-0 text-success">
                                            <GiTakeMyMoney size={40} />
                                        </div>
                                    </div>
                                </Row>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Link to="/#" className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <h5 className="custom-text-color text-danger">Decline Loans</h5>
                                            <h4 className="mb-0 text-danger">{declineLength}</h4>
                                        </div>
                                        <div className='text-danger'>
                                            <GiTakeMyMoney size={40} />
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