import Board from "../components/Board";
import Modal from "../components/Modal";
import './App.scss';

function App() {
    
    const player1 = {name: '', rating:0};
    const player2 = {name: '', rating:0};

    return (
        <>
            <Board isWhite={true} timer={0} player1={player1} player2={player2} />
            <Modal></Modal>
        </>
    )
}

export default App