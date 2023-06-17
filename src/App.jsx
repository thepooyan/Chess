import { useState } from "react";
import Board from "../components/Board";
import Modal from "../components/Modal";
import './App.scss';

function App() {
    
    const player1 = {name: '', rating:0};
    const player2 = {name: '', rating:0};

    const [boardComponent, showBoardComponent] = useState();
    const [modalShow, setModalShow] = useState(true);

    const submitHandler = data => {
        console.log(data)
        setModalShow(false);
    }

    return (
        <>
            <Board isWhite={true} timer={0} player1={player1} player2={player2} />
            {boardComponent && boardComponent}
            {modalShow && <Modal submitHandler={submitHandler}></Modal>}
        </>
    )
}

export default App