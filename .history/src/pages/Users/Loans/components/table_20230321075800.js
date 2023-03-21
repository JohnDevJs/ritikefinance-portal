import React from 'react';
import { Card, Progress, Badge } from 'reactstrap';
import { IoIosEye } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import SmallModal from 'SmallModal';
import ModalComp from '../../../../Modal';
import Modal from './../Modal';
import LoanDetails from './LoanDetails';

const Table = ({ data, hideStatus }) => {

    const [viewUserDet, setViewUserDet] = React.useState(false);
    const [openModal, setOpenModal] = React.useState(false);
    const [deleteUser, setDeleteUser] = React.useState(false);
    const [status, setStatus] = React.useState();
    const [loanId, setLoanId] = React.useState();
    const [btnName, setBtnName] = React.useState();
    const [requestId, setRequestId] = React.useState();

    const verifyFunc = (id) => {
        setOpenModal(true)
        setStatus("verification")
        setLoanId(id)
        setBtnName("Verification")
    }
    const deleteUserFunc = (id) => {
        setDeleteUser(true)
        setRequestId(id)
        setBtnName("Delete")
        setApiQuery("Deleted")
    }
    const viewDetails = (id) => {
        setViewUserDet(true)
        setLoanId(id)
    }

    return (
        <React.Fragment>
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
                                <th className="align-middle">Status</th>
                                <th className="align-middle">View</th>
                                <th className="align-middle">Edit</th>
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
                                                    <td> <button className='btn  text-white'> <FiEdit size={20} /> </button> </td> : <td> <button className='btn  text-white' disabled> <FiEdit size={20} />
                                                    </button>
                                                    </td>
                                            }


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
                Components={<Modal onClose={() => setDeleteUser(false)} request_Id={requestId} btnName={btnName} apiQuery="query" />}
            />

        </React.Fragment>
    )
}

export default Table;