import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact"
import { FaBeer } from 'react-icons/fa';

const column = [
    { label: "Name", field: "firstName", sort: "asc", width: 150 },
    { label: "Surname", field: "lastName", sort: "asc", width: 150 },
    { label: "amount", field: "amount", sort: "asc", width: 150 },
    { label: "duration", field: "duration", sort: "asc", width: 150 },
    { label: "Paid Date", field: "payment_Date", sort: "asc", width: 150 },
    { label: "View", field: "viewBtn", sort: "asc", width: 150 },
    // { label: "Approved", field: "approveBtn", sort: "asc", width: 150 },
    // { label: "Update", field: "verifyBtn", sort: "asc", width: 150 },
    // { label: "Download", field: "downloadBtn", sort: "asc", width: 150 },
];

const loanTable = ({ data }) => {
    const dataDb = { columns: column, rows: data }

    return (
        <React.Fragment>
            <Card className='card-border-radius'>
                <CardBody>
                    <MDBDataTable entries={5} entriesOptions={[5, 10, 50]} responsive bordered striped hover data={dataDb} fullPagination />
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default loanTable;