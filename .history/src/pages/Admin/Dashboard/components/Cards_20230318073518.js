import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiTakeMyMoney } from "react-icons/gi";

const Cards = ({ length, paidLenght, pendingLenght }) => {

    return (
        <React.Fragment>
            <Row>
                <Col md={4}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center Link_color">
                                <div className='d-flex justify-content-between custom-color'>
                                    <div>
                                        <h6 className="mb-1 custom-text-color"> All loans </h6>
                                        <h5 className="mb-0 color"> No. {length} </h5>
                                    </div>
                                    <div>
                                        <GiTakeMyMoney size={30} />
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
                                        <h6 className="mb-1 custom-text-color"> Paid loan </h6>
                                        <h5 className="mb-0 color"> No. {paidLenght} </h5>
                                    </div>
                                    <div>
                                        <GiTakeMyMoney size={30} />
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
                                        <h6 className="mb-1 custom-text-color"> Pending loan </h6>
                                        <h5 className="mb-0">No. {pendingLenght} </h5>
                                    </div>
                                    <div>
                                        <GiTakeMyMoney size={30} />
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