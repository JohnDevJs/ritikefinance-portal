import React from 'react';
import { Card, CardBody, Row, Progress, Col, Badge } from 'reactstrap';
import { GiReceiveMoney } from "react-icons/gi";

const Table = () => {

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
                                <th className="align-middle">Loan date</th>
                                <th className="align-middle">Pai date</th>
                                <th className="align-middle">Status</th>
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

                                <td>
                                    <Progress multi>
                                        <Progress bar value="15" />
                                        <Progress bar color="success" value="30" />
                                        <Progress bar color="info" value="25" />
                                        <Progress bar color="warning" value="20" />
                                        <Progress bar color="danger" value="5" />
                                    </Progress>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </Card>
        </React.Fragment>
    )
}

export default Table;