import React from 'react';
import { Card, Progress, Badge } from 'reactstrap';

const Table = ({ data }) => {

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
                                <th className="align-middle">Pai date</th>
                                <th className="align-middle">View</th>
                                <th className="align-middle">Status</th>
                                <th className="align-middle">Status</th>
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
                                            <td> <button className='btn text-white'>View</button> </td>

                                            {data?.status === "pending" ? <td> <Badge className="bg-warning p-2"> {data?.status} </Badge></td> : null}
                                            {data?.status === "decline" ? <td> <Badge className="bg-danger  p-2"> {data?.status} </Badge></td> : null}
                                            {data?.status === "verification" ? <td> <Badge className="bg-info  p-2"> {data?.status} </Badge></td> : null}
                                            {data?.status === "approve" ? <td> <Badge className="bg-success  p-2"> {data?.status} </Badge></td> : null}

                                            <td>
                                                <div className="text-center">{data?.loanPercentage}</div> <Progress color="success" value={data?.loanPercentage} />
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }

                    </table>
                </div>
            </Card>
        </React.Fragment>
    )
}

export default Table;