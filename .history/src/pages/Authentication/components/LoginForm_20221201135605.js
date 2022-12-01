import React, { useState } from 'react'
import { Row, Col } from "reactstrap"
import { AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import { FaEye } from "react-icons/fa";

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div>
            <div className="mb-3">
                <AvField
                    name="email"
                    label="Email"
                    className="form-control"
                    placeholder="Enter email"
                    type="email"
                    required
                />
            </div>

            <div className="mb-3">
                <div onClick={() => setShowPassword(true)} className='text-end cursor-pointer' htmlFor="password"> <FaEye /> Show</div>
                <AvField
                    name="password"
                    label="Password"
                    type={!showPassword ? "password" : "text"}
                    required
                    placeholder="Enter Password"
                />
            </div>
            <div className="col-12 mt-2">
                <Link to="/forgot-password" className='text-success'><i className="mdi mdi-lock"></i> Forgot your password?</Link>
            </div>
        </div>
    )
}

export default LoginForm