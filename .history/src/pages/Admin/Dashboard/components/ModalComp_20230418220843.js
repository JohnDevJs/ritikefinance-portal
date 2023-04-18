import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import { Spinner } from 'reactstrap';

function ModalComp({ reFetch, onClose, request_Id, btnName, apiQuery, pending }) {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data } = usePost()

    const notificationDisplay = `Successfully ${apiQuery}`

    const changeStatusFunc = () => {
        const Method = 'DELETE', endPoint = `loans/${request_Id}`;
        const raw = "";
        execute(endPoint, raw, Method, notificationDisplay, token)
    }

    if (data?.status === 'success') {
        onClose();
        setTimeout(() => {
            reFetch()
        }, 2000)
    }

    return (
        <button className='btn text-white w-100' onClick={changeStatusFunc}>
            {pending ? <span>  <Spinner as="span" animation="border" size="sm" /> Loading...</span> : btnName}
        </button>
    )
}

export default ModalComp