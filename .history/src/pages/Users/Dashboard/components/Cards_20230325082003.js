import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { GiReceiveMoney } from "react-icons/gi";

const Cards = ({ data }) => {
    const amounts = data?.map(({ amount, totalAmount }) => ({
        label: totalAmount ? 'INTEREST' : 'LOAN AMOUNT',
        amount: totalAmount || amount
    }));

    const total = amounts.reduce((acc, { amount }) => acc + parseInt(amount), 0);

    return (
        <Row>
            {amounts.map(({ label, amount }) => (
                <Col md={4} key={label}>
                    <Card className='card-border-radius'>
                        <CardBody>
                            <Row className="align-items-center Link_color">
                                <div className='d-flex justify-content-between custom-color'>
                                    <div>
                                        <h6 className="mb-4 custom-text-color">{label}</h6>
                                        <h5 className="mb-0 color">R {amount} </h5>
                                    </div>
                                    <div className='btn-custom-color'>
                                        <GiReceiveMoney size={50} />
                                    </div>
                                </div>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            <Col md={4}>
                <Card className='card-border-radius'>
                    <CardBody>
                        <Row className="align-items-center Link_color">
                            <div className='d-flex justify-content-between custom-color'>
                                <div>
                                    <h6 className="mb-4 custom-text-color">TOTAL LOAN AMOUNT + INTEREST</h6>
                                    <h5 className="mb-0">R {total} </h5>
                                </div>
                                <div className='btn-custom-color'>
                                    <GiReceiveMoney size={50} />
                                </div>
                            </div>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Cards;
