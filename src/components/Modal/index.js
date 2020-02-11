import React, { useState } from "react";
import "./modal.css";
const Modal = props => (
  <>
    <div class="dialog__backdrop" onClick={props.onClose}></div>
    <div
      className={
        props.progress
          ? "dialog text-center dialog__bordered"
          : "dialog text-center"
      }
    >
      <div class="dialog__close">
        <button
          onClick={props.onClose}
          type="button"
          aria-label="Close Account Info Modal Box"
        >
          &times;
        </button>
      </div>
      {props.progress && (
        <div class="dialog__progress" style={{ width: props.progress }}></div>
      )}
      {props.children}
    </div>
  </>
);

export default Modal;
