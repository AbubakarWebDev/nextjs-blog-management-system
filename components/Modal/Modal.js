import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./Modal.module.css";

const Modal = props => {
    const [mounted, setMounted] = useState(false);

    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        setMounted(true);
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);

        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
            setMounted(false);
        };
    }, []);

    return mounted ? createPortal(
        <CSSTransition in={props.show} timeout={{ enter: 0, exit: 300 }} unmountOnExit>
            <div className={styles.modal} onClick={props.onClose}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                    </div>
                    <div className="modal-body">{props.children}</div>
                    <div className="modal-footer">
                        <button onClick={props.onClose} className="button">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById("model")
    ) : null;
};

export default Modal;
