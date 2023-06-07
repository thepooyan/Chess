import reactDom from 'react-dom';
import './Modal.scss'

//contents of the modal
const Content = () => {
	return (
        <section id='modal'>
            this is modal
        </section>
	)
}

const Modal = (props) => {
    return (
        <>
            {
                reactDom.createPortal(<Content />, document.getElementById('modal'))
            }
        </>
    )
}

export default Modal
