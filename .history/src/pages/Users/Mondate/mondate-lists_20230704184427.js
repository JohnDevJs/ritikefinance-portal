import React, { useRef, useState, useEffect } from 'react';
import { Card, CardBody, Container } from "reactstrap";
import Breadcrumb from "../../../components/Common/Breadcrumb";
import MetaTag from "../../../components/MetaTag";
import { MandateUserRoute } from "components/RouteName";
import { useStore1Selector } from "index";
import { loginUser } from "Redux/Slices/userSlice";
import useFetch from "hooks/useFecth";
import { useHistory, useParams } from "react-router-dom";
import usePost from "hooks/usePost";


const MondateForm = () => {
    const { execute, pending, data } = usePost()
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <React.Fragment>

            <div className='card-border-radius'>
                {
                    isMobile ? (
                        <div className="">
                            {
                                data?.map((data, i) => {
                                    return (
                                        <Card className="mb-2 card-border-radius" key={i}>
                                            <CardBody>
                                                <div className='d-flex justify-content-between'>
                                                    <p>Amount: {data?.amount}</p>

                                                    {data?.status === "pending" ? <p> Status: <b className="text-warning p-2"> Pending </b> </p> : null}
                                                    {data?.status === "decline" ? <p> Status:  <b className="text-danger  p-2"> Declined </b>  </p> : null}
                                                    {data?.status === "verification" ? <p> Status: <b className="text-info  p-2"> Verification </b> </p> : null}
                                                    {data?.status === "approve" ? <p> Status: <b className="text-primary  p-2"> Approved </b> </p> : null}
                                                    {data?.status === "paid" ? <p> Status:  <b className="text-success p-2"> Paid </b>  </p> : null}

                                                </div>

                                                <div className='d-flex justify-content-between mt-2'>
                                                    <button className='btn text-white' onClick={() => viewDetails(data?._id)}>
                                                        <IoIosEye size={22} />View more
                                                    </button>

                                                    {data?.status === "pending" ? (
                                                        <>
                                                            <button className='btn text-white' onClick={() => deleteUserFunc(data?._id)}>
                                                                <MdDeleteForever size={20} />
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <button className='btn text-white' disabled>
                                                                <MdDeleteForever size={20} />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>

                                            </CardBody>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    ) : (



                        <Card className='card-border-radius'>
                            <div className="table-responsive p-4">
                                <table className="table align-middle table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th style={{ width: "20px" }}>
                                                <div className="form-check font-size-16 align-middle">
                                                    <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                    <label className="form-check-label" htmlFor="customCheck1"> &nbsp;</label>
                                                </div>
                                            </th>
                                            <th className="align-middle">Name</th>
                                            <th className="align-middle">Surname</th>
                                            <th className="align-middle">Amount</th>
                                            <th className="align-middle">Duration</th>
                                            <th className="align-middle">Loan date</th>
                                            <th className="align-middle">Paid date</th>
                                            <th className="align-middle">Status</th>
                                            {hideStatus ? <th className="align-middle">Status</th> : null}
                                            <th className="align-middle">View</th>
                                            <th className="align-middle">Delete</th>
                                        </tr>
                                    </thead>

                                    {
                                        data?.map((data, i) => {

                                            return (
                                                <tbody key={i}>
                                                    <tr key={"_tr_" + "key"} >
                                                        <td>
                                                            <div className="form-check font-size-16">
                                                                <input type="checkbox" className="form-check-input" id={"id"} />
                                                                <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td>{data?.user?.firstName}</td>
                                                        <td>{data?.user?.lastName}</td>
                                                        <td>{data?.amount}</td>
                                                        <td>{data?.duration}</td>
                                                        <td>{data?.createdAt.split("T")[0]}</td>
                                                        <td>{"2022-05-20"}</td>

                                                        {data?.status === "pending" ? <td> <Badge className="bg-warning p-2"> {data?.status} </Badge></td> : null}
                                                        {data?.status === "decline" ? <td> <Badge className="bg-danger  p-2"> {data?.status} </Badge></td> : null}
                                                        {data?.status === "verification" ? <td> <Badge className="bg-info  p-2"> {data?.status} </Badge></td> : null}
                                                        {data?.status === "approve" ? <td> <Badge className="bg-primary  p-2"> {data?.status} </Badge></td> : null}
                                                        {data?.status === "paid" ? <td> <Badge className="bg-success  p-2"> {data?.status} </Badge></td> : null}
                                                        {
                                                            hideStatus ?

                                                                <td>
                                                                    <div className="text-center">{data?.loanPercentage}%</div> <Progress
                                                                        color={data?.loanPercentage <= 50 ? "danger" : data?.loanPercentage <= 99 ? "info" : "success"}
                                                                        value={data?.loanPercentage}
                                                                    />
                                                                </td> : null
                                                        }
                                                        <td> <button className='btn text-white' onClick={() => viewDetails(data?._id)}> <IoIosEye size={22} /> </button> </td>

                                                        {
                                                            data?.status === "pending" ?
                                                                <td> <button className='btn text-white'
                                                                    onClick={() => deleteUserFunc(data?._id)}
                                                                >
                                                                    <MdDeleteForever size={20} />
                                                                </button>
                                                                </td> : <td> <button className='btn text-white' disabled> <MdDeleteForever size={20} /> </button>
                                                                </td>
                                                        }

                                                    </tr>
                                                </tbody>
                                            )

                                        })
                                    }

                                </table>
                            </div>
                        </Card>

                    )

                }
            </div>

        </React.Fragment>
    )
}

export default MondateForm