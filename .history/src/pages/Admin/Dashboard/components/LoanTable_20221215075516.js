import React from 'react';
import { Card, Progress, Badge, CardBody } from 'reactstrap';
import { IoIosEye } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { MDBDataTable } from "mdbreact"

const column = [
    { label: "Name", field: "firstName", sort: "asc", width: 150 },
    { label: "Sure name", field: "lastName", sort: "asc", width: 150 },
    { label: "Duration", field: "duration", sort: "asc", width: 150 },
    { label: "Loan Amount", field: "amount", sort: "asc", width: 150 },
    // { label: "Status", field: "createdAt", sort: "asc", width: 150 },
    { label: "Status", field: "btnStatus", sort: "asc", width: 150 },
    { label: "Paid date", field: "payment_Date", sort: "asc", width: 150 },
    { label: "Amount", field: "status", sort: "asc", width: 150 },
    { label: "Total return", field: "totalAmount", sort: "asc", width: 150 },
    { label: "Completion", field: "progressBar", sort: "asc", width: 150 },
    { label: "Delete", field: "deleteBtn", sort: "asc", width: 150 },
];

const LoanTable = ({ data }) => {

    console.log(data)

    const dataDb = {
        columns: column,
        rows: data,
    }

    return (
        <React.Fragment>
            <Card className='card-border-radius'>

                <CardBody>
                    <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover data={dataDb} fullPagination />
                </CardBody>

                {/* <div className="table-responsive p-4">
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
                                <th className="align-middle">Pai date</th>
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
                                            {data?.status === "approve" ? <td> <Badge className="bg-success  p-2"> {data?.status} </Badge></td> : null}

                                            <td>
                                                <div className="text-center">{data?.loanPercentage}%</div> <Progress
                                                    color={data?.loanPercentage <= 50 ? "danger" : data?.loanPercentage <= 99 ? "info" : "success"}
                                                    value={data?.loanPercentage}
                                                />
                                            </td>

                                            <td> <button className='btn text-white'> <IoIosEye size={22} /> </button> </td>
                                            {data?.status === "pending" ? <td> <button className='btn  text-white'> <FiEdit size={20} /> </button> </td> : <td> <button className='btn  text-white' disabled> <FiEdit size={20} /> </button></td>}
                                            {data?.status === "pending" ? <td> <button className='btn text-white'> <MdDeleteForever size={20} /> </button> </td> : <td> <button className='btn text-white' disabled> <MdDeleteForever size={20} /> </button> </td>}

                                        </tr>
                                    </tbody>
                                )
                            })
                        }

                    </table>
                </div> */}
            </Card>
        </React.Fragment>
    )
}

export default LoanTable;