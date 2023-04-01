import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { GiTakeMyMoney } from "react-icons/gi";


const Cards = ({ length, paidLenght, pendingLenght }) => {

    const cardsData = [
        {
            title: 'All loans',
            number: length,
            icon: <GiTakeMyMoney size={30} />,
            customText: 'custom-text-color',
            className: 'color',
        },
        {
            title: 'Paid loan',
            number: paidLenght,
            icon: <GiTakeMyMoney size={30} />,
            customText: 'custom-text-color',
            className: 'color',
        },
        {
            title: 'Pending loan',
            number: pendingLenght,
            icon: <GiTakeMyMoney size={30} />,
            customText: 'custom-text-color',
        },
    ];

    return (
        <React.Fragment>
            <Row className="no-gutters">
                {cardsData.map((card, index) => (
                    <Col md={4} key={index}>
                        <Card className='card-border-radius'>
                            <CardBody>
                                <Row className="align-items-center Link_color">
                                    <div className='d-flex justify-content-between custom-color'>
                                        <div>
                                            <h6 className={`mb-1 ${card.customText}`}>{card.title}</h6>
                                            <h5 className={`mb-0 ${card.className}`}>No. {card.number}</h5>
                                        </div>
                                        <div>   {card.icon} </div>
                                    </div>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    )
}

export default Cards;
