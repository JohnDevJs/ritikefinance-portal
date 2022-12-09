import React from 'react';
import { Card, CardBody, Row, Progress, Col } from 'reactstrap';
import { GiReceiveMoney } from "react-icons/gi";

const Tables = () => {

    return (
        <React.Fragment>
            <Card className="mt-3">
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
                                <th className="align-middle">Email</th>
                                <th className="align-middle">Gender</th>
                                <th className="align-middle">Phone Number</th>
                                <th className="align-middle">Address</th>
                                <th className="align-middle">Role</th>
                                <th className="align-middle">Status</th>
                                <th className="align-middle">Suspend</th>
                                <th className="align-middle">Delete</th>
                            </tr>
                        </thead>

                        <tbody >
                            <tr key={"_tr_" + "key"} >
                                <td>
                                    <div className="form-check font-size-16">
                                        <input type="checkbox" className="form-check-input" id={"id"} />
                                        <label className="form-check-label" htmlFor={"idd"}> &nbsp;</label>
                                    </div>
                                </td>
                                <td>{"security?.firstName"}</td>
                                <td>{"security?.email"}</td>
                                <td>{"security?.gender"}</td>
                                <td>{"security?.phoneNumber"}</td>
                                <td>{"security?.streetAddress"}</td>
                                <td className='text-info'>{"security?.role"}</td>
                                <td>{"security?.status" === true ? <b className='text-success'>Active</b> : <b className='text-danger'>Not Active</b>}</td>

                                <td>
                                    <Badge className="bg-danger cursor-pointer p-2"
                                        onClick={() => {
                                            // setDeleteUser(true)
                                            // setSecId(security?._id)
                                        }}> Delete </Badge>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </Card>
        </React.Fragment>
    )
}

export default Tables;