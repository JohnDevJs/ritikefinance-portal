import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney, GiTakeMyMoney, GiPayMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LoansRoute } from 'components/RouteName';

const CardLinks = ({ data, length }) => {
    const cardData = [
        {
            title: 'Total loans',
            count: length,
            icon: <GiTakeMyMoney size={50} />,
            link: LoansRoute
        },
        {
            title: 'Pending loans',
            count: data.filter(res => res.status === "pending").length,
            icon: <GiPayMoney size={50} />,
            link: '#'
        },
        {
            title: 'Decline Loans',
            count: data.filter(res => res.status === "decline").length,
            icon: <TbReportMoney size={50} />,
            link: '#'
        },
        {
            title: 'Paid loans',
            count: data.filter(res => res.status === "paid").length,
            icon: <RiMoneyDollarCircleFill size={50} />,
            link: '#'
        }
    ];

    return (
        <React.Fragment>
            <Row>
                {cardData.map((card, index) => (
                    <Col md={6} sm={6} lg={6} xs={6} key={index}>
                        <Card className='card-border-radius custom-text-color'>
                            <CardBody className='custom-text-color'>
                                <Link to={card.link} className='Link_color'>
                                    <Row className="align-items-center">
                                        <div className='d-flex justify-content-between custom-color'>
                                            <div>
                                                <h6 className="mb-4 custom-text-color">{card.title}</h6>
                                                <h4 className="mb-0">{card.count} </h4>
                                            </div>
                                            <div className='btn-custom-color'>
                                                {card.icon}
                                            </div>
                                        </div>
                                    </Row>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </React.Fragment >
    );
};

export default CardLinks;
