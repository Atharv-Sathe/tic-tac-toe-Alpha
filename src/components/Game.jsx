import { useState } from 'react';
import Board from './Board.jsx';
import Moves from './Moves.jsx';
import PlayerDetails from './PlayerDetails.jsx';

function PlayerInfo({player1, player2, isActive}) {
    return (
        <div className='player-info'>
            {isActive  && <h1 className='text-white text-3xl'>{player1} vs {player2}</h1>}
        </div>
    )
}

function Game() {

    const [player1, setPlayer1] = useState("Player-1")
    const [player2, setPlayer2] = useState("Player-2")
    const [isActive, setIsActive] = useState(false)

    const fight = () => {
        setIsActive(true);
        handleReset();
    }

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];
    function handlePlay(nextSquares) {
        if (isActive) {
            setHistory([...history, nextSquares]);
            setXIsNext(!xIsNext); 
        }

    }

    function handleReset() {
        setHistory([Array(9).fill(null)]);
        setXIsNext(true);
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <PlayerInfo player1={player1} player2={player2} isActive={isActive}/>
            <div id='game' className=' mt-10  flex justify-center gap-20'>
                <PlayerDetails handleStart={fight} setPlayer1={setPlayer1} setPlayer2={setPlayer2} player1={player1} player2={player2} isActive={isActive} setIsActive={setIsActive}/>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} onReset={handleReset} setIsActive={setIsActive}/>
                <Moves />
            </div>
        </div>
    );
}


export default Game;