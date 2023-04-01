import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney } from "react-icons/gi";

const Cards = ({ data }) => {

    let loanAmount = 0, totalInterest = 0;
    const amount = data?.map(a => a.amount)
    for (let e of amount) { loanAmount += parseInt(e) }

    const interest = data?.map(a => a.totalAmount)
    for (let e of interest) { totalInterest += parseInt(e) }

    const amountPlusInterest = loanAmount + totalInterest

    const cardData = [
        {
            title: "LOAN AMOUNT",
            value: loanAmount ? loanAmount : 0
        },
        {
            title: "INTEREST",
            value: totalInterest ? totalInterest : 0
        },
        {
            title: "TOTAL LOAN AMOUNT + INTEREST",
            value: amountPlusInterest ? amountPlusInterest : 0
        }
    ];

    return (
        <React.Fragment>
            <Row>
                {cardData.map((card, index) => (
                    <Col md={6} sm={6} lg={6} xs={6} key={index}>
                        <Card className='card-border-radius'>
                            {window.innerWidth >= 768 && <CardBody>
                                <Row className="align-items-center Link_color">
                                    <div className='d-flex justify-content-between custom-color'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">{card.title}</h6>
                                            <h5 className="mb-0 color">R {card.value}</h5>
                                        </div>
                                        <div className='btn-custom-color'>
                                            <GiReceiveMoney size={50} />
                                        </div>
                                    </div>
                                </Row>
                            </CardBody>}
                            {window.innerWidth < 768 &&

                                <Row className="align-items-center Link_color">
                                    <div className='d-flex justify-content-between custom-color'>
                                        <div>
                                            <h6 className="mb-4 custom-text-color">{card.title}</h6>
                                            <h5 className="mb-0 color">R {card.value}</h5>
                                        </div>
                                        <div className='btn-custom-color'>
                                            <GiReceiveMoney size={50} />
                                        </div>
                                    </div>
                                </Row>
                            }

                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment>
    )
}

export default Cards;
