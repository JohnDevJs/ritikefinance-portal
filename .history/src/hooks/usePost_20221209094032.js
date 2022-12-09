import { useState } from 'react';
import { dangerMessage, successMessage, warningMessage } from "../components/Toast"

const usePost = () => {
    const [postData, updatePostData] = useState({ pending: false, data: undefined, error: undefined, length: undefined });

    const execute = async (endPoint, raw, Method, displayMessage, token, isJSON) => {

        updatePostData({
            pending: true,
            data: undefined,
            error: undefined,
            length: undefined
        });

        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        isJSON ? null : myHeaders.append("Content-Type", "application/json")

        const requestOptions = {
            method: Method,
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(`${process.env.REACT_APP_BACKEND_URL}/${endPoint}`, requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res?.status === 'success') {
                    updatePostData({
                        pending: false,
                        data: res,
                        error: undefined,
                        length: res.result
                    });
                    displayMessage === true ? null : successMessage(`${displayMessage}`);
                }
                if (res?.status === 'fail') {
                    updatePostData({
                        pending: false,
                        data: undefined,
                        error: res?.message,
                        length: undefined
                    });
                    warningMessage(`${res?.message}`);
                }
            })
            .catch(error => {
                updatePostData({
                    pending: false,
                    data: undefined,
                    error: error.message,
                    length: undefined
                });
                dangerMessage(`${error.message}`);
            });
    };

    return {
        execute,
        pending: postData.pending,
        data: postData.data,
        error: postData.error,
        length: postData.length,
    };
};

export default usePost;