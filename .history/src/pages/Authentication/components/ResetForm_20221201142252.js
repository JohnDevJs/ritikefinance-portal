import React, { useState } from 'react'
import { AvField } from "availity-reactstrap-validation"
import { FaEye, FaEyeSlash } from "react-icons/fa";

function ResetForm() {

    const [showPassword, setShowPassword] = useState(false);
    const toggleIsLoading = () => setShowPassword(current => !current)

    return (
        <div>
            <div className="mb-3">
                <div onClick={toggleIsLoading} className=' show-password' htmlFor="password">
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    {showPassword ? "Hide" : "Show"} password
                </div>
                <AvField
                    name="password"
                    type="password"
                    placeholder="Enter your new password"
                    required
                />
            </div>
            <div className="mb-3">
                <div onClick={toggleIsLoading} className=' show-password' htmlFor="password">
                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                    {showPassword ? "Hide" : "Show"} password
                </div>
                <AvField
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirm your password"
                    required
                />
            </div>
        </div>
    )
}

export default ResetForm