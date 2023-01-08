import React, { useEffect } from 'react';
import { X } from 'react-feather';

const Modal = ({ id, children, isOpen, handleClose }) => {
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = null;
    }
    return () => {
      window.document.body.style.overflow = null;
    };
  }, [isOpen]);

  return (
    <>
      <div className={`modal ${isOpen ? 'active' : ''}`} id={id}>
        <div className="modal__overlay" onClick={handleClose}></div>
        <div className="modal__content">
          <button className="modal__close" onClick={handleClose}>
            <X />
          </button>
          <div className="modal__body">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
