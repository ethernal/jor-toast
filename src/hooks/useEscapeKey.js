import { useEffect } from "react";

export function useEscapeKey(callback) {

  useEffect(() => {

    const handleEscapeKey = (event) => {
      if (event.key==='Escape') {
        event.preventDefault();
        callback();
      }
    }

    window.addEventListener('keydown',(e) => handleEscapeKey(e));

    return () => {
      window.removeEventListener('keydown', (e) => handleEscapeKey(e));
    }
  },[callback]);
};
