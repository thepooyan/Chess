import { useEffect, useState } from "react";
import Board from "../components/Board";
import { modalHandler } from "../components/Modal";
import './App.scss';
import StartPage from "../components/StartPage";

function App() {

    const player1 = { name: '', rating: 0 };
    const player2 = { name: '', rating: 0 };

    const [boardComponent, setBoardComponent] = useState(<Board isWhite={true} timer={0} player1={player1} player2={player2} />);

    //call the start modal and continue with input result
    useEffect(() => {
        modalHandler((callModal, closeModal) => {

            const submitHandler = data => {
                setBoardComponent(<Board isWhite={data.isWhite} timer={.1} player1={data.player1} player2={data.player2} />)
                closeModal();
            }

            callModal(<StartPage submitHandler={submitHandler} />);
        });
    }, [])

    return (
        <>
            {boardComponent}
        </>
    )
}

export default App