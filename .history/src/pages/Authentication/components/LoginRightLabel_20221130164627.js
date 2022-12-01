import React from 'react'
import { Col } from "reactstrap"

function LoginRightLabel({ text }) {
    return (
        <Col md={8} className="bg-image">
            <div> <h1 className="text-center text-white"> {text} </h1> </div>
        </Col>
    )
}

export default LoginRightLabel