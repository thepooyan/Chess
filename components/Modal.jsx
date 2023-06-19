import reactDom from 'react-dom';
import './Modal.scss';
import { useRef } from 'react';
import { useState } from 'react';

let modalHandler;

//contents of the modal
const Content = () => {

    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const [content, setContent] = useState();

    const closeModal = () => {
        modalRef.current.classList.remove('active');
    }

    modalHandler = func => {
        func(setContent, closeModal);
        modalRef.current.classList.add('active');
    }

    return (
        <div id="modal" ref={modalRef}>
            <div className="content" ref={contentRef}>
                {content}
            </div>
        </div>
    )
}

//modal portal
const Modal = () => {
    return (
        <>
            {
                reactDom.createPortal(<Content/>, document.getElementById('modalCont'))
            }
        </>
    )
}

export { modalHandler }
export default Modal