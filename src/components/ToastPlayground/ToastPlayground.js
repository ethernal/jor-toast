import React, {useState,  useContext, useEffect} from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';
import {useEscapeKey} from '../../hooks/useEscapeKey'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {

  const {toasts, addToast, dismissToast, dismissAllToasts} = useContext(ToastContext);

  const [variant, setVariant] = useState('notice');
  const [message, setMessage] = useState('');

  const handleVariantChange = (event) => {
    const newVariant = event.target.value;
    setVariant(newVariant);
  }

  const handleMessageChange = (event) => {
    const newMessage= event.target.value;
    setMessage(newMessage);
  }

  const handleToastPost = (event) => {
    event.preventDefault();
    addToast({message, variant})
    setMessage('');
  }

  useEscapeKey(dismissAllToasts);



  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>


    <ToastShelf toasts={toasts} dismissToast={dismissToast} />


      <form className={styles.controlsWrapper} onSubmit={handleToastPost}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={handleMessageChange}/>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((availableVariant) => {
              return (

                <label htmlFor={`variant-${availableVariant}}`} key={availableVariant}>
              <input
                id={`variant-${availableVariant}}`}
                type="radio"
                name="variant"
                value={availableVariant}
                onChange={handleVariantChange}
                checked={variant === availableVariant ? true : false}
                />
              {availableVariant}
            </label>
                )
              })}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
