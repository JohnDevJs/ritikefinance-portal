import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { GiTakeMyMoney } from "react-icons/gi";

const Cards = ({ length, paidLenght, pendingLenght }) => {

    return (
        <React.Fragment>
            <Row>
                <Col xs={12} md={4}>
                    <Card className='card-border-radius'>
                        <CardBody className="text-center">
                            <div className='d-flex justify-content-between custom-color'>
                                <div>
                                    <h6 className="mb-1 custom-text-color" style={{ fontSize: "14px" }}> All loans </h6>
                                    <h5 className="mb-0 color" style={{ fontSize: "24px" }}> No. {length} </h5>
                                </div>
                                <div>
                                    <GiTakeMyMoney size={30} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className='card-border-radius'>
                        <CardBody className="text-center">
                            <div className='d-flex justify-content-between custom-color'>
                                <div>
                                    <h6 className="mb-1 custom-text-color" style={{ fontSize: "14px" }}> Paid loan </h6>
                                    <h5 className="mb-0 color" style={{ fontSize: "24px" }}> No. {paidLenght} </h5>
                                </div>
                                <div>
                                    <GiTakeMyMoney size={30} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card className='card-border-radius'>
                        <CardBody className="text-center">
                            <div className='d-flex justify-content-between custom-color'>
                                <div>
                                    <h6 className="mb-1 custom-text-color" style={{ fontSize: "14px" }}> Pending loan </h6>
                                    <h5 className="mb-0" style={{ fontSize: "24px" }}>No. {pendingLenght} </h5>
                                </div>
                                <div>
                                    <GiTakeMyMoney size={30} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </React.Fragment>
    )
}

export default Cards;
