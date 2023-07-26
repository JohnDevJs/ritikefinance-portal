import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact"

const column = [
    { label: "Name", field: "firstName", sort: "asc", width: 150 },
    { label: "Surname", field: "lastName", sort: "asc", width: 150 },
    // { label: "amount", field: "amount", sort: "asc", width: 150 },
    // { label: "duration", field: "duration", sort: "asc", width: 150 },
    // { label: "Payment Date", field: "payment_Date", sort: "asc", width: 150 },
    { label: "Debt starting date", field: "debt_start_date", sort: "asc", width: 150 },
    { label: "Debt weekly Duration", field: "debt_weekly_duration", sort: "asc", width: 150 },
    { label: "View details", field: "viewBtn", sort: "asc", width: 150 },
    { label: "Update ", field: "verifyBtn", sort: "asc", width: 150 },
];

const loanTable = ({ data }) => {
    const dataDb = { columns: column, rows: data }

    return (
        <React.Fragment>
            <Card className='card-border-radius'>
                <CardBody>
                    <MDBDataTable entries={25} entriesOptions={[5, 10, 50]} responsive bordered striped hover data={dataDb} fullPagination />
                </CardBody>
            </Card>
        </React.Fragment>
    )
}

export default loanTable;