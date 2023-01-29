import React from 'react'
import { useStore1Selector } from "index";
import useFetch from 'hooks/useFecth';
import { loginUser } from "Redux/Slices/userSlice";

function UserDetails({ user_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user_Id}`, token);

    console.log("  users details : ", data)

    return (
        <div>
            <p><span>Photo profile</span>john</p>

            <h4>Person details : </h4>
            <p><span>First Name</span>john</p>
            <p><span>Last Name</span>john</p>
            <p><span>Phone Number</span>john</p>
            <p><span>Gender</span>john</p>
            <p><span>Email address</span>john</p>
            <p><span>Company Name</span>john</p>
            <p><span>Job title</span>john</p>

            <h4>Address details : </h4>
            <p><span>Province</span>john</p>
            <p><span>City</span>john</p>
            <p><span>Street address</span>john</p>
            <p><span>Area code</span>john</p>
            <p><span>Postal code</span>john</p>
            <p><span>referral code</span>john</p>



            <h4> Account details</h4>
            <p><span>Account Number</span>john</p>
            <p><span>Account type</span>john</p>
            <p><span>Black listed</span>john</p>
            <p><span>Photo password</span>john</p>
        </div>
    )
}

export default UserDetails