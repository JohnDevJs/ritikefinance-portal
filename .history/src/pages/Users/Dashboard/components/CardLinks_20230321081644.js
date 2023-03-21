import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney, GiTakeMyMoney, GiPayMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LoansRoute } from 'components/RouteName';

const CardLinks = ({ data, length }) => {

    const result = data.filter(res => res.status === "pending")
    console.log(result)

    return (
        <React.Fragment>
            <Row>


                <Col md={6}>
                    <Card className='card-border-radius custom-text-color'>
                        <CardBody className='custom-text-color'>
                            <Link to={LoansRoute} className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between custom-color'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">My Loans</h6>
                                            <h4 className="mb-0">{length} </h4>
                                        </div>
                                        <div className='btn-custom-color'>
                                            <GiTakeMyMoney size={50} />
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
                            <Link to="/#" className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between custom-color'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">Loan Requests</h6>
                                            <h4 className="mb-0">02</h4>
                                        </div>
                                        <div className='btn-custom-color'>
                                            <GiPayMoney size={50} />
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
                            <Link to="/#" className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between custom-color'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">Decline Loans</h6>
                                            <h4 className="mb-0">03</h4>
                                        </div>
                                        <div className='btn-custom-color'>
                                            <TbReportMoney size={50} />
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
                            <Link to="/#" className='Link_color'>
                                <Row className="align-items-center">
                                    <div className='d-flex justify-content-between custom-color'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">My loans</h6>
                                            <h4 className="mb-0">10</h4>
                                        </div>
                                        <div className='btn-custom-color'>
                                            <RiMoneyDollarCircleFill size={50} />
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