import React, { useState } from "react";

import "./Modal.css";

const Modal = ({ visible = false, onAuth, onClose }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onHandleAuth = () => {
    const result = onAuth(login, password);
    if (result) {
      setLogin("");
      setPassword("");
      setError("");
    } else {
      setError("Login or password is incorrect");
    }
  };

  if (!visible) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">AUTHORIZATION</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">
            <label>login</label>
            <input value={login} onChange={(e) => setLogin(e.target.value)} />
            <label>password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error ? <p className="modal-error">{error}</p> : null}
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>CLOSE</button>
          <button onClick={onHandleAuth}>LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
