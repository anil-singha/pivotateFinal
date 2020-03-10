import React, { useState } from "react";
const Modal = props => (
  <>
    <div className="dialog__backdrop" onClick={props.onClose}></div>
    <div
      className={`dialog text-center
         ${props.progress ? " dialog__bordered" : ""}
         ${props.fullScreen ? " dialog__fullscreen" : ""}
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
        ></div>
      )}
      {props.children}
    </div>
  </>
);

export default Modal;
