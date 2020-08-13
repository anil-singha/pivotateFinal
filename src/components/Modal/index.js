import React, { useState } from 'react';

const Modal = (props, className) => (
  <>
    <div className="dialog__backdrop" onClick={props.onClose} />
    <div
      className={`dialog text-center ${props.styleName}
         ${props.progress ? ' dialog__bordered' : ''}
         ${props.fullScreen ? ' dialog__fullscreen' : ''}
      `}
    >
      <div className="dialog__close">
        <button
          onClick={props.onClose}
          type="button"
          aria-label="Close Account Info Modal Box"
        >
          &times;
        </button>
      </div>
      {props.progress && (
        <div
          className="dialog__progress"
          style={{ width: props.progress }}
        />
      )}
      {props.children}
    </div>
  </>
);

export default Modal;
