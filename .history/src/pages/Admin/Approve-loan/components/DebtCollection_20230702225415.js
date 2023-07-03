// import React, { useEffect, useState } from 'react'
// import CustomBtn from 'components/CustomBtn';
// import { CardBody } from 'reactstrap';
// import { loginUser } from 'Redux/Slices/userSlice';
// import { useStore1Selector } from 'index';
// import useFetch from 'hooks/useFecth';
// import * as XLSX from 'xlsx';

// function DownLoad({ loanId, onClose, reFetch }) {
//     const userDet = useStore1Selector(loginUser);
//     const token = userDet?.token;

//     const [excelData, setExcelData] = useState([]);

//     const { data, pending } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/loans/${loanId}`, token);

//     useEffect(() => {
//         if (data) {
//             setExcelData(data);
//         }
//     }, [data]);

//     const downLoadExcel = () => {
//         const worksheet = XLSX.utils.json_to_sheet([excelData]);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, 'data');
//         XLSX.writeFile(workbook, 'data.xlsx');
//     }

//     if (data?.status === 'success') {
//         onClose();
//         setTimeout(() => {
//             reFetch()
//         }, 2000)
//     }

//     return (
//         <div>
//             <CardBody>
//                 <CustomBtn Pending={pending} btnName="Download" onClick={downLoadExcel} />
//             </CardBody>
//         </div>
//     )
// }

// export default DownLoad




import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import { VerificationLoanMsg } from 'components/NotifyMessage';
import { Spinner } from 'reactstrap';

function Modal({ reFetch, onClose, status, loanId, btnName }) {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data, pending } = usePost()

    const changeStatusFunc = () => {
        const Method = 'POST', endPoint = `loans/loanStatus/${loanId}/status`;
        const raw = JSON.stringify({
            "status": status,

        });
        execute(endPoint, raw, Method, VerificationLoanMsg, token)
    }

    if (data?.status === 'success') {
        onClose();
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    return (
        <button className='btn text-white w-100' onClick={changeStatusFunc}>
            {pending ? <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span> : btnName} </button>
    )
}

export default Modal

