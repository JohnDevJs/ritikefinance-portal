import React from 'react'
import { Col } from "reactstrap"

function LoginRightLabel({ text }) {
    return (
        <Col md={6} className="bg-image">
            <div> <h1 className="text-center"> {text} </h1> </div>
        </Col>
    )
}

export default LoginRightLabel