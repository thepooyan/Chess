import reactDom from 'react-dom';
import './Modal.scss'

//contents of the modal
const Content = () => {

    const submitHandler = e => {
        e.preventDefault();
        alert('submit')
    }

	return (
        <form className='content' onSubmit={submitHandler}>
            <h3>Me</h3>
            <label htmlFor="">
                Name:
                <input type="text" />
            </label>
            <label htmlFor="">
                Rating:
                <input type="text" />
            </label>

            <h3>Opponent</h3>
            <label htmlFor="">
                Name:
                <input type="text" />
            </label>
            <label htmlFor="">
                Rating:
                <input type="text" />
            </label>

            <h3>i play as:</h3>
            <label htmlFor="">
                white
                <input type="checkbox" />
            </label>

            <label htmlFor="">
                black
                <input type="checkbox" />
            </label>

            <h3>time</h3>

            <label htmlFor="">
                3 min
                <input type="checkbox" />
            </label>

            <label htmlFor="">
                5 min
                <input type="checkbox" />
            </label>

            <label htmlFor="">
                10 min
                <input type="checkbox" />
            </label>

            <button type='submit'>Play!</button>
        </form>
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
