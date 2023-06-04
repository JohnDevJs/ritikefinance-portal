import React from 'react'
import { useStore1Selector } from "index";
import useFetch from 'hooks/useFecth';
import { loginUser } from "Redux/Slices/userSlice";
import { Col, Row } from 'reactstrap';

function UserDetails({ user_Id }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, loading, error, reFetch } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user_Id}`, token);

    return (
        <Row>
            <Col md={6}>
                <h4 style={{ fontWeight: 'bold', fontSize: '22px' }}>Person details : </h4>
                <div className="profile__img">
                    <img className="avatar-lg" src={`${process.env.REACT_APP_IMG_API}img/users/${data?.photoProfile}`} />
                </div>

                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Full Name :</span> {data?.firstName} {data?.lastName} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Phone Number : </span> {data?.phoneNumber} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Gender : </span> {data?.gender} </p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Email address : </span>{data?.email}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Company Name : </span>{data?.companyName}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Job title : </span>{data?.jobTitle}</p>

            </Col>
            <Col md={6}>
                <h4 style={{ fontWeight: 'bold', fontSize: '22px' }}>Address details : </h4>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Province : </span>{data?.province}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >City : </span>{data?.city}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Street address : </span>{data?.streetAddress}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Area code : </span>{data?.areaCode}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Postal code : </span>{data?.postalCode}</p>
                <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Referral code : </span>{data?.referralCode}</p>
            </Col>


            <h4 style={{ fontWeight: 'bold', fontSize: '22px' }}> Account details</h4>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Account Number : </span>{data?.accountNumber}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  >Account type : </span>{data?.accountType}</p>
            <p><span className="customStyle" style={{ fontWeight: 'bold', fontSize: '14px' }}  > Black listed : </span>{data?.blackListed ? "Yes" : "No"} </p>

            <div className="profile__img">
                <img className="img-thumbnail" src={data?.passportPhoto} />
            </div>

        </Row>
    )
}

export default UserDetails