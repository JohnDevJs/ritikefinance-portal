import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact"

const column = [
    { label: "Name", field: "firstName", sort: "asc", width: 150 },
    { label: "Sure name", field: "lastName", sort: "asc", width: 150 },
    { label: "Duration", field: "duration", sort: "asc", width: 150 },
    { label: "Paid date", field: "payment_Date", sort: "asc", width: 150 },
    { label: "Loan Amount", field: "amount", sort: "asc", width: 150 },
    { label: "Total return", field: "totalAmount", sort: "asc", width: 150 },
    { label: "Status", field: "btnStatus", sort: "asc", width: 150 },
    { label: "Completion", field: "progressBar", sort: "asc", width: 150 },
    { label: "Delete", field: "deleteBtn", sort: "asc", width: 150 },
];

const UserTable = ({ data }) => {
    const dataDb = { columns: column, rows: data }

    console.log(data)
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

export default UserTable;