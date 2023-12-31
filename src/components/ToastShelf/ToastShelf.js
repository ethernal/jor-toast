import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, dismissToast}) {

  return (
    <ol className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification"
    >
      {toasts.map((toast) => {
return (

  <li key={toast.id} className={styles.toastWrapper}>
        <Toast   {...toast} dismissToast={dismissToast}>{toast.message}</Toast>
      </li>
          )
      })}
    </ol>
  );
}

export default ToastShelf;
