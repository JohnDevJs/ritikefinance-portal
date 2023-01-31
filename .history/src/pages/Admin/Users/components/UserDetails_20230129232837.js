import React from 'react'
import { useStore1Selector } from "index";
import useFetch from 'hooks/useFecth';
import { loginUser } from "Redux/Slices/userSlice";
import { Col, Row } from 'reactstrap';

function UserDetails({ user_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user_Id}`, token);

    console.log("  users details : ", data)

    return (
        <Row>
            <Col md={6}>
                <h4>Person details : </h4>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >First Name :</span> {data?.firstName} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Last Name  : </span> {data.lastName} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Phone Number : </span> {data.phoneNumber} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Gender : </span> {data.gender} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Email address : </span>{data.email}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Company Name : </span>{data.companyName}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Job title : </span>{data.jobTitle}</p>

                <h4>Address details : </h4>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Province : </span>{data.province}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >City : </span>{data.city}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Street address : </span>{data.streetAddress}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Area code : </span>{data.areaCode}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Postal code : </span>{data.postalCode}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Referral code : </span>{data.referralCode}</p>
            </Col>


            <Col md={6}>
                <h4> Account details</h4>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Account Number : </span>{data.accountNumber}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Account type : </span>{data.accountType}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '18px' }}  >Black listed : </span>{data.blackListed} </p>

                <p><span>Photo password</span>Photo passport</p> :
            </Col>

        </Row>
    )
}

export default UserDetails