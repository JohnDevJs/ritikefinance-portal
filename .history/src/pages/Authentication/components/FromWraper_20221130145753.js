import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MdMonetizationOn } from 'react-icons/md';

function FromWraper(props) {
    return (
        <Col md={6} className="d-flex justify-content-center align-items-center">
            <div className='w-75'>
                <Card className="overflow-hidden">
                    <div className='text-center'> <MdMonetizationOn size={80} /> </div>
                    <CardBody className="p-4">
                        {props.children}
                    </CardBody>
                </Card>
            </div>
        </Col>
    )
}

export default FromWraper