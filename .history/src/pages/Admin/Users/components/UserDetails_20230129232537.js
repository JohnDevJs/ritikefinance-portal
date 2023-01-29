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
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >First Name</span> {data?.firstName} </p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Last Name</span> {data.lastName} </p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Phone Number</span> {data.phoneNumber} </p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Gender</span> {data.gender} </p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Email address</span>{data.email}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Company Name</span>{data.companyName}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Job title</span>{data.jobTitle}</p>

            <h4>Address details : </h4>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Province</span>{data.province}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >City</span>{data.city}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Street address</span>{data.streetAddress}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Area code</span>{data.areaCode}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Postal code</span>{data.postalCode}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Referral code</span>{data.referralCode}</p>



            <h4> Account details</h4>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Account Number</span>{data.accountNumber}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Account type</span>{data.accountType}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '28px' }}  >Black listed</span>{data.blackListed} </p>

            <p><span>Photo password</span>Photo passport</p>
        </div>
    )
}

export default UserDetails