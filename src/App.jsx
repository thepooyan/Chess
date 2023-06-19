import { useEffect, useState } from "react";
import Board from "../components/Board";
import Modal from "../components/Modal";
import './App.scss';
import StartPage from "../components/StartPage";

function App() {

    const player1 = { name: '', rating: 0 };
    const player2 = { name: '', rating: 0 };

    const [boardComponent, setBoardComponent] = useState(<Board isWhite={true} timer={0} player1={player1} player2={player2} />);

    const submitHandler = data => {
        setBoardComponent(<Board isWhite={data.isWhite} timer={data.time} player1={data.player1} player2={data.player2} />)
        closeModal();
    }
    let closeModal;
    const getCloseModal = e => {
        closeModal = e;
    }

    return (
        <>
            {boardComponent}
            {<Modal closeModal={getCloseModal}> <StartPage submitHandler={submitHandler} /> </Modal>}
        </>
    )
}

export default App