import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MdMonetizationOn } from 'react-icons/md';

function FromWraper(props) {
    return (
        <Col md={7} className="d-flex justify-content-center align-items-center">
            <div className={`w-${props.size}`}>
                <Card className="overflow-hidden">
                    <div className='text-center mt-4'> <MdMonetizationOn size={70} /> </div>
                    <CardBody className="p-4">
                        {props.children}
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}

export default FromWraper