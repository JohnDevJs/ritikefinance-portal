import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';

const Cards = () => {

    return (
        <React.Fragment>
            <Row>
                <Col md={4}>
                    <Card>
                        <CardBody>
                            <Row className="align-items-center">
                                <div className="col-8">
                                    <p className="mb-2 text-primary">TOTAL LOAN AMOUNT</p>
                                    <h4 className="mb-0">R 50 </h4>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <CardBody>
                            <Row className="align-items-center">
                                <div className="col-8">
                                    <p className="mb-2 text-warning">Bookings Income </p>
                                    <h4 className="mb-0">R 60 </h4>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <CardBody>
                            <Row className="align-items-center">
                                <div className="col-8">
                                    <p className="mb-2 text-success">Total assets expense</p>
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