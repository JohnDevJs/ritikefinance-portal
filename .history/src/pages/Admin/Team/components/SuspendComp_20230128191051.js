import React from 'react'
import { useStore1Selector } from 'index';
import { loginUser } from 'Redux/Slices/userSlice';
import usePost from 'hooks/usePost';
import { SuspendUserMsg } from 'components/NotifyMessage';

function SuspendComp({ reFetch, onClose, user_Id, btnName }) {
    const userDet = useStore1Selector(loginUser);
    const token = userDet?.token;
    const { execute, data } = usePost()

    const changeStatusFunc = () => {
        const Method = 'POST', endPoint = `users/${user_Id}/suspended`;
        const raw = "";
        execute(endPoint, raw, Method, SuspendUserMsg, token)
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

export default SuspendComp