import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney, GiTakeMyMoney, GiPayMoney } from "react-icons/gi";
import { TbReportMoney } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { LoansRoute, ApproveLoanRoute, DeclineLoanRoute } from 'components/RouteName';

const LoanCardProcess = ({ length, approveLength, declineLength }) => {

    const loanData = [
        { name: "Loan history", value: length, color: "primary", icon: <GiReceiveMoney size={40} /> },
        { name: "Approved Loans", value: approveLength < 10 ? `0${approveLength}` : approveLength, color: "success", icon: <RiMoneyDollarCircleFill size={40} /> },
        { name: "Decline Loans", value: declineLength < 10 ? `0${declineLength}` : declineLength, color: "danger", icon: <GiPayMoney size={40} /> },
    ];

    const loanCards = loanData.map((data, index) => (
        <Col md={4} key={index}>
            <Card className="card-border-radius">
                <CardBody>
                    <Link to={data.route} className="Link_color">
                        <Row className="align-items-center">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h5 className={`custom-text-color text-${data.color}`}>{data.name}</h5>
                                    <h4 className={`mb-0 text-${data.color}`}>{data.value}</h4>
                                </div>
                                <div className={`text-${data.color}`}>{data.icon}</div>
                            </div>
                        </Row>
                    </Link>
                </CardBody>
            </Card>
        </Col>
    ));

    return <Row>{loanCards}</Row>;

}

export default LoanCardProcess;