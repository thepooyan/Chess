import reactDom from 'react-dom';
import './Modal.scss'
import { useRef, useState } from 'react';

//contents of the modal
const Content = ({ submitHandler }) => {

    const modal = useRef(null);
    const name1 = useRef(null);
    const rate1 = useRef(null);
    const name2 = useRef(null);
    const rate2 = useRef(null);
    const [isWhite, setIsWhite] = useState(true);
    const [time, setTime] = useState(3);

    const submitPrep = e => {
        e.preventDefault();

        const data = {
            player1: { name: name1.current.value, rating: rate1.current.value },
            player2: { name: name2.current.value, rating: rate2.current.value },
            isWhite: isWhite,
            time: time
        };

        modal.current.classList.remove('active');
        submitHandler(data);
    }

    return (
        <div id="modal" className='active' ref={modal}>
            <form className='content' onSubmit={submitPrep}>
                <h3>Me:</h3>
                <label htmlFor="">
                    Name:
                    <input type="text" ref={name1} />
                </label>
                <label htmlFor="">
                    Rating:
                    <input type="text" ref={rate1} />
                </label>

                <h3>Opponent:</h3>
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

                    <label className={`whiteIcon ${isWhite?'active':''}`}>
                        <input type="checkbox" hidden  onChange={()=>{setIsWhite(true)}}/>
                    </label>

                    <label className={`blackIcon ${isWhite?'':'active'}`}>
                        <input type="checkbox" hidden  onChange={()=>{setIsWhite(false)}}/>
                    </label>
                </div>

                <h3>time:</h3>

                <label htmlFor="3min">
                    3 min
                    <input type="checkbox" id='3min' onChange={()=>{setTime(3)}} checked={time===3}/>
                </label>

                <label htmlFor="5min">
                    5 min
                    <input type="checkbox" id='5min' onChange={()=>{setTime(5)}} checked={time===5}/>
                </label>

                <label htmlFor="10min">
                    10 min
                    <input type="checkbox" id='10min' onChange={()=>{setTime(10)}} checked={time===10} />
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