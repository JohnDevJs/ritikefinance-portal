import React from 'react'
import usePost from 'hooks/usePost';
import { PaidPercentageMsg } from 'components/NotifyMessage';
import { AvField, AvForm } from 'availity-reactstrap-validation';
import CustomBtn from 'components/CustomBtn';
import { Col, Row, CardBody } from 'reactstrap';
import { loginUser } from 'Redux/Slices/userSlice';
import { useStore1Selector } from 'index';
import useFetch from 'hooks/useFecth';
import * as XLSX from 'xlsx';

function DownLoad({ loanId, onClose, reFetch }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;

    const { data, pending } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/mandates/${loanId}`, token);

    const downLoadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'data');
        XLSX.writeFile(workbook, 'data.xlsx');
    }

    if (data?.status === 'success') {
        onClose();
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    console.log(data)

    return (
        <div>
            <CardBody>
                <CustomBtn Pending={pending} btnName="Download" onClick={downLoadExcel} />
            </CardBody>
        </div>
    )
}

export default DownLoad