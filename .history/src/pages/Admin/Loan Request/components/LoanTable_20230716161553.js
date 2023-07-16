import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact"

const column = [
    { label: "Name", field: "firstName", sort: "asc", width: 150 },
    { label: "Sure name", field: "lastName", sort: "asc", width: 150 },
    { label: "amount", field: "amount", sort: "asc", width: 150 },
    { label: "duration", field: "duration", sort: "asc", width: 150 },
    { label: "Payment Date", field: "payment_Date", sort: "asc", width: 150 },
    { label: "View", field: "viewBtn", sort: "asc", width: 150 },
    { label: "Verify", field: "verifyBtn", sort: "asc", width: 150 },
    { label: "Send form", field: "downloadBtn", sort: "asc", width: 150 },
    { label: "Approved", field: "approveBtn", sort: "asc", width: 150 },
    { label: "Declined", field: "declineBtn", sort: "asc", width: 150 },
];

const loanTable = ({ data }) => {
    const dataDb = { columns: column, rows: data }

    return (
        <React.Fragment>
            <Card className='card-border-radius'>
                <CardBody>
                    <MDBDataTable entries={25} entriesOptions={[25, 50, 100]} responsive bordered striped hover data={dataDb} fullPagination />
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default loanTable;