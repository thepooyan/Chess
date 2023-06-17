import reactDom from 'react-dom';
import './Modal.scss'
import { useRef } from 'react';

//contents of the modal
const Content = ({ submitHandler }) => {

    const name1 = useRef(null);
    const rate1 = useRef(null);
    const name2 = useRef(null);
    const rate2 = useRef(null);
    const isWhite = useRef(null);
    const time = useRef(null);

    const submitPrep = e => {
        e.preventDefault();

        const data = {
            player1: { name: name1.current.value, rating: rate1.current.value },
            player2: { name: name2.current.value, rating: rate2.current.value },
            isWhite: true,
            time: 5
        };

        submitHandler(data);
    }

    return (
        <div id="modal">
            <form className='content' onSubmit={submitPrep}>
                <h3>Me</h3>
                <label htmlFor="">
                    Name:
                    <input type="text" ref={name1} />
                </label>
                <label htmlFor="">
                    Rating:
                    <input type="text" ref={rate1} />
                </label>

                <h3>Opponent</h3>
                <label htmlFor="">
                    Name:
                    <input type="text" ref={name2} />
                </label>
                <label htmlFor="">
                    Rating:
                    <input type="text" ref={rate2} />
                </label>

                <h3>i play as:</h3>
                <div className="white_black">

                    <label className='whiteIcon'>
                        <input type="checkbox" hidden ref={isWhite} />
                    </label>

                    <label className='blackIcon'>
                        <input type="checkbox" hidden />
                    </label>
                </div>

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
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {
                reactDom.createPortal(<Content submitHandler={props.submitHandler} />, document.getElementById('modalCont'))
            }
        </>
    )
}

export default Modal
