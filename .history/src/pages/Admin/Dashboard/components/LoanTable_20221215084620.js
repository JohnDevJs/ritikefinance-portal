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
    { label: "Paid date", field: "payment_Date", sort: "asc", width: 150 },
    { label: "Loan Amount", field: "amount", sort: "asc", width: 150 },
    { label: "Total return", field: "totalAmount", sort: "asc", width: 150 },
    { label: "Status", field: "btnStatus", sort: "asc", width: 150 },
    { label: "Completion", field: "progressBar", sort: "asc", width: 150 },
    { label: "Delete", field: "deleteBtn", sort: "asc", width: 150 },
];

const LoanTable = ({ data }) => {
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

export default LoanTable;