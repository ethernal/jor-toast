import React, { createContext, useState } from "react";

export const ToastContext = createContext();

function ToastProvider({children}) {

  const [toasts, setToasts] = useState([]);

  const addToast = ({variant='notice',message=''}) => {
    const newToasts = [{id: crypto.randomUUID(), variant, message}, ...toasts];
    setToasts(newToasts);
  }

  const dismissToast = (id) => {
    const newToastsList = toasts.filter((toast) => toast.id !== id);
    setToasts(newToastsList);
  }

  const dismissAllToasts = () => {
    setToasts([]);
  }

  const toastValues={
    toasts,
    addToast,
    dismissToast,
    dismissAllToasts
  }

  return <ToastContext.Provider value={{...toastValues}}>
    {children}
    </ToastContext.Provider>
    ;
}

export default ToastProvider;
