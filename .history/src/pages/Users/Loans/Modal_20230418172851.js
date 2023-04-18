import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';

function DeleteComp({ reFetch, onClose, request_Id, btnName, apiQuery, loadBtn }) {

    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data } = usePost()

    const notificationDisplay = `Successfully deleted`

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
            {loadBtn ? btnName : null}
            {!loadBtn ? "Loading..." : null}
        </button>
    )
}

export default DeleteComp