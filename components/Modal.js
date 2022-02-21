import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ onClose, show, title, children, footer }) => {
    const [mounted, setMounted] = useState(false);

    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
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

    return mounted && show ? createPortal(
        <div id="modal" className="w-full h-screen flex justify-center items-center fixed right-0 left-0 top-0 bottom-0 z-50 bg-gray-900/60" onClick={onClose}>
            <div className="relative px-4 w-full max-w-lg h-full h-auto" onClick={e => e.stopPropagation()}>
                <div id='modalContent' className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div id='modalHeader' className="flex justify-between items-start p-3 rounded-t border-b dark:border-gray-600">
                        {title && <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            {title}
                        </h3>}
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    
                    {children && <div id='modalBody' className="p-3"> {children} </div>}

                    {footer && <div id='modalFooter' className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"> {footer} </div>}
                </div>
            </div>
        </div>,
        document.getElementById("model")
    ) : null;
};

export default Modal;
