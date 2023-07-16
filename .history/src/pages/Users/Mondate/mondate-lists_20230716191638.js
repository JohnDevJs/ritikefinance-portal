import React from 'react';
import { Card, Container, Spinner } from "reactstrap";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";


const MandateForm = () => {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const userId = userDet?.data?.data?._id;
    const { data, loading } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/status/${userId}`, token);

    if (loading) return (
        <React.Fragment>
            <div className="page-content mt-5">
                <Container fluid>
                    <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span>
                </Container>
            </div>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="page-title-box">

                        {data.map((dataItem, index) => {
                            console.log(" loan data : ", dataItem.loan)
                            return (
                                <Card className="p-4" key={index}>
                                    <div className="my-2">
                                        <h4>  <b className="text-primary"> Date sign :  {dataItem?.dateSignedAt.split('T')[0]} </b> </h4>
                                        <h6>  <b className="text-primary mt-2"> Payment date :  {dataItem?.loan?.paymentDate.split('T')[0]} </b> </h6>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            If however, the date of the payment instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the following business day: <b className="text-primary"> {dataItem?.agreement ? "Yes" : "No"} </b>
                                        </p>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            The date of the instruction falls on a non-processing day (weekend or public holiday) I agree that the payment instruction may be debited against my account on the business day prior to the non-processing day: <b className="text-primary"> {dataItem?.authorized ? "Yes" : "No"} </b>
                                        </p>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            To allow for tracking of dates to match with flow of Credit at no additional cost to myself:
                                            <b className="text-primary"> {dataItem?.debitedAgree ? "Yes" : "No"} </b>
                                        </p>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            I authorize the originator to make use of the tracking facility as provided for in the EDO system at no additional cost to myself:  <b className="text-primary"> {dataItem?.debitedAgree2 ? "Yes" : "No"} </b>
                                        </p>
                                    </div>
                                    <div className="my-2">
                                        <p>
                                            Subsequent payment instructions will continue to be delivered in terms of this authority until the obligations in terms of the Agreement have been paid or until this authority is cancelled by me/us by giving you notice in writing: <b className="text-primary"> {dataItem?.trackingOfDate ? "Yes" : "No"} </b>
                                        </p>
                                    </div>
                                </Card>
                            )
                        })}

                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default MandateForm