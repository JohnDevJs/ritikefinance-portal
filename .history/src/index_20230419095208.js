import React, { useEffect } from "react"
import ReactDOM from "react-dom"
import 'react-toastify/dist/ReactToastify.css';
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"

import { Provider, createDispatchHook, createSelectorHook } from "react-redux"
const store1Context = React.createContext();
import { Slide, ToastContainer } from 'react-toastify';

import store from "./store"
import { Redux_store } from './Redux/store/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
// import useFetch from "hooks/useFecth";
// import { loginUser } from "Redux/Slices/userSlice";
let persistedStore = persistStore(Redux_store);




const app = () => {

  // const history = useHistory()

  // const { error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/logout`, token);

  // useEffect(() => {
  //   if (error?.status === 401) {
  //     history.push('/login');
  //   }
  // }, [error, history]);


  return (
    <Provider store={Redux_store} context={store1Context}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Provider store={store}>
          <ToastContainer transition={Slide} newestOnTop autoClose={3000} />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </PersistGate>
    </Provider>
  )
}

export const useStore1Dispatch = createDispatchHook(store1Context);
export const useStore1Selector = createSelectorHook(store1Context);

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()