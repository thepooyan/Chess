import reactDom from 'react-dom';
import './Modal.scss'
import { useRef } from 'react';

//contents of the modal
const Content = ({ closeModal, children }) => {

    const modal = useRef(null);
    const done = () => {
        modal.current.classList.remove('active');
    }
    closeModal(done);
    // console.log(closeModal)

    return (
        <div id="modal" className='active' ref={modal}>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {
                reactDom.createPortal(<Content closeModal={props.closeModal}>{props.children}</Content>, document.getElementById('modalCont'))
            }
        </>
    )
}

export default Modal