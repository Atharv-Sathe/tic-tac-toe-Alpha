import { useState } from 'react';
import Board from './Board.jsx';
import Moves from './Moves.jsx';


function Game() {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);

    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function handleReset() {
        setHistory([Array(9).fill(null)]);
        setXIsNext(true);
    }

    return (
        <div id='game' className=' mt-10  flex justify-center gap-20'>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} onReset={handleReset} />
            <Moves />
        </div>
    );
}


export default Game;