import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Style.scss";

export const warningMessage = (message) => {
  toast.warning(message, {
    position: toast.POSITION.BOTTOM_CENTER,
    className: 'toast-message'
  });
}

export const successMessage = (message) => {
  toast.success(message, { position: toast.POSITION.TOP_CENTER });
}

export const warningMessageCenter = (message) => {
  toast.success(message, { position: toast.POSITION.TOP_CENTER });
}

export const successUpdate = (message) => {
  toast.success(message, { position: toast.POSITION.TOP_RIGHT });
}