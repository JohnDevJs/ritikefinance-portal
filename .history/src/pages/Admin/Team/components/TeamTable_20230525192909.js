import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { MDBDataTable } from "mdbreact"
import { FaBeer } from 'react-icons/fa';

const column = [
    { label: "Name", field: "firstName", sort: "asc", width: 150 },
    { label: "Surname", field: "lastName", sort: "asc", width: 150 },
    { label: "Email", field: "email", sort: "asc", width: 150 },
    { label: "Gender", field: "gender", sort: "asc", width: 150 },
    { label: "Phone number", field: "phoneNumber", sort: "asc", width: 150 },
    { label: "Action", field: "actionBtn", sort: "asc", width: 150 },
    { label: "Delete", field: "deleteBtn", sort: "asc", width: 150 },
];

const TeamTable = ({ data }) => {
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

export default TeamTable;