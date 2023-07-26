import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact"
import { FaBeer } from 'react-icons/fa';

const column = [
    // { label: "ID", field: "id", sort: "asc", width: 150 },
    { label: "Name", field: "firstName", sort: "asc", width: 150 },
    { label: "Surname", field: "lastName", sort: "asc", width: 150 },
    { label: "Email", field: "email", sort: "asc", width: 150 },
    // { label: "Date signed", field: "dateSignedAt", sort: "asc", width: 150 },
    { label: "View", field: "viewBtn", sort: "asc", width: 150 },
    // { label: "Status", field: "status", sort: "asc", width: 150 },
    // { label: "Update", field: "verifyBtn", sort: "asc", width: 150 },
    // { label: "Download", field: "downloadBtn", sort: "asc", width: 150 },
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