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
            <p><span>First Name</span> {data?.firstName} </p>
            <p><span>Last Name</span> {data.lastName} </p>
            <p><span>Phone Number</span> {data.phoneNumber} </p>
            <p><span>Gender</span> {data.gender} </p>
            <p><span>Email address</span>{data.email}</p>
            <p><span>Company Name</span>{data.companyName}</p>
            <p><span>Job title</span>{data.jobTitle}</p>

            <h4>Address details : </h4>
            <p><span>Province</span>{data.province}</p>
            <p><span>City</span>{data.city}</p>
            <p><span>Street address</span>{data.streetAddress}</p>
            <p><span>Area code</span>{data.areaCode}</p>
            <p><span>Postal code</span>{data.postalCode}</p>
            <p><span>Referral code</span>{data.referralCode}</p>



            <h4> Account details</h4>
            <p><span>Account Number</span>john</p>
            <p><span>Account type</span>john</p>
            <p><span>Black listed</span>john</p>
            <p><span>Photo password</span>john</p>
        </div>
    )
}

export default UserDetails