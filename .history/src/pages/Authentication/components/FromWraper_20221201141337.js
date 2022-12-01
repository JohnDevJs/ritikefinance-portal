import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MdMonetizationOn } from 'react-icons/md';

function FromWraper(props) {
    return (
        <Col md={12} sm={12} lg={7} className="d-flex justify-content-center align-items-center">
            <div className="input-card">
                <Card className="overflow-hidden card-border-radius">
                    <div className='text-center mt-4'> <MdMonetizationOn size={70} className="icon-color" /> </div>
                    <CardBody className="p-4">
                        {props.children}
                        <h5>Login</h5>
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}

export default FromWraper