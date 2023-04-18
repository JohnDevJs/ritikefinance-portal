import React, { useState, useEffect } from 'react';
import { Card, Progress, Badge, CardBody } from 'reactstrap';
import { IoIosEye } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import SmallModal from 'SmallModal';
import ModalComp from '../../../../Modal';
import Modal from './../Modal';
import LoanDetails from './LoanDetails';

const Table = ({ reFetch, data, hideStatus }) => {

    const [viewUserDet, setViewUserDet] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [deleteUser, setDeleteUser] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [requestId, setRequestId] = React.useState();
    const [loadBtn, setBtnLoad] = useState(false);

    const verifyFunc = (id) => {
        setOpenModal(true)
        setStatus("verification")
        setLoanId(id)
        setBtnName("Verification")
    }
    const deleteUserFunc = (id) => {
        setDeleteUser(true)
        setBtnLoad(true)
        setRequestId(id)
        setBtnName("Delete")
        setApiQuery("Deleted")
    }
    const viewDetails = (id) => {
        setViewUserDet(true)
        setLoanId(id)
    }


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
                                    if (data.length <= 0) {
                                        return (
                                            <Card className="mb-2 card-border-radius" key={i}>
                                                <CardBody>
                                                    {/* <div className='d-flex justify-content-between'>
                                                    <p>Loan date: {data?.createdAt.split("T")[0]}</p>
                                                    <p>Duration: {data?.duration}</p>
                                                </div> */}

                                                    {/* <div className='image__container'>
                                                    <img className="avatar-lg" src={`${process.env.REACT_APP_IMG_API}img/bankStatement/${"img"}`} />
                                                </div> */}


                                                    <div className='d-flex justify-content-between'>
                                                        {/* 
                                                    <p>Duration: {data?.duration}</p>
                                                    <p>Loan date: {data?.createdAt.split("T")[0]}</p>
                                                    <p>Paid date: {"2022-05-20"}</p> */}

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
                                    } else {
                                        return (
                                            <div>
                                                <p> You have no loans yet </p>
                                            </div>
                                        )
                                    }
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
                                            <th className="align-middle">Sure name</th>
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



            <ModalComp
                ModalTitle="See details"
                open={viewUserDet}
                onClose={() => setViewUserDet(false)}
                cancel="close"
                Component={<LoanDetails onClose={() => setViewUserDet(false)} loan_Id={loanId} />}
            />

            <SmallModal
                open={deleteUser}
                onClose={() => setDeleteUser(false)}
                ModalTitle="Are you sure you want to delete this request ?"
                cancel="close"
                Components={<Modal reFetch={reFetch} onClose={() => setDeleteUser(false)} request_Id={requestId} btnName={btnName} apiQuery="query" loadBtn={loadBtn} />

                }
            />

        </React.Fragment>
    )
}

export default Table;