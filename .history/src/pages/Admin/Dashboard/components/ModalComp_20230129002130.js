import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';

function ModalComp({ reFetch, onClose, user_Id, btnName, apiQuery }) {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data } = usePost()

    const notificationDisplay = `Successfully ${apiQuery}`

    const changeStatusFunc = () => {
        const Method = apiQuery === "Deleted" ? 'DELETE' : 'POST', endPoint = apiQuery === "Deleted" ? `users/${user_Id}` : `users/${user_Id}/${apiQuery}`;
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
        <button className='btn text-white w-100' onClick={changeStatusFunc}> {btnName} </button>
    )
}

export default ModalComp