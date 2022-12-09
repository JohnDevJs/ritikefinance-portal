import React from 'react';
import { Card, Progress, Badge } from 'reactstrap';

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
                                <th className="align-middle">Status</th>
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
                                <td>{"Chad"}</td>
                                <td>{"Jeff"}</td>
                                <td>{"500"}</td>
                                <td>{"2022-05-20"}</td>
                                <td>{"2022-05-20"}</td>

                                <td>
                                    <Badge className="bg-success  p-2"> Paid </Badge>
                                </td>

                                <td>
                                    <div className="text-center">100%</div> <Progress color="success" value="100" />
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