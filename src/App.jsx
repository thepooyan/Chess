import Board from "../components/Board";
import './App.scss';

function App() {
    
    const player1 = {name: 'pooyan', rating:800};
    const player2 = {name: 'ariyan', rating:1200};

    return (
        <>
            <Board isWhite={false} timer={3} player1={player1} player2={player2} />
        </>
    )
}

export default App