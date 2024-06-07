import { useState } from "react";


function Square({value, onSquareClick}) {

    return (
        <button onClick={onSquareClick} className="square w-14 h-14 m-0 p-2 border font-bold text-black active:outline-none active:border-none active:ring-0 ">{value}</button>
    );

}

function Reset({onResetClick}) {
    return (
        <button onClick={onResetClick}  className="reset bg-orange-600 hover:bg-fuchsia-500   border-2 rounded-md p-1  w-full text-center text-white text-2xl mt-4">Reset</button>
    );

}

function Board({squares, xIsNext, onPlay, onReset}) {

    const handleClick = (i) => {
        if (squares[i] || calculateWinner(squares) || isDraw(squares)) return;
        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const handleReset = () => {
        onReset();
    }

    const winner = calculateWinner(squares);
    let status;
    // status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;
    if (isDraw(squares)) {
        status = 'Draw';
    } else if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
    }


    return (
        <div className="my-2 p-10 shadow-golden-glow rounded-lg  bg-amber-600 flex-col items-center">

            <div className="board-row one flex">
            {/* <button id="btn1" className="square w-14 h-14 m-0 p-2 border  text-white">X</button>
            <button id="btn2" className="square w-14 h-14 m-0 p-2 border  text-white">X</button>
            <button id="btn3" className="square w-14 h-14 m-0 p-2 border  text-white">X</button> */}
                <Square value={squares[0]} onSquareClick={_ => handleClick(0)}  />
                <Square value={squares[1]} onSquareClick={_ => handleClick(1)}  />
                <Square value={squares[2]} onSquareClick={_ => handleClick(2)}  />
            </div>

            <div className="board-row two flex">
            {/* <button id="btn4" className="square w-14 h-14 m-0 p-2 border  text-white">X</button>
            <button id="btn5" className="square w-14 h-14 m-0 p-2 border  text-white">X</button>
            <button id="btn6" className="square w-14 h-14 m-0 p-2 border  text-white">X</button> */}
                <Square value={squares[3]} onSquareClick={_ => handleClick(3)}  />
                <Square value={squares[4]} onSquareClick={_ => handleClick(4)}  />
                <Square value={squares[5]} onSquareClick={_ => handleClick(5)}  />
            </div>

            <div className="board-row three flex">
            {/* <button id="btn7" className="square value={squares[4]} w-14 h-14 m-0 p-2 border  text-white">X</button>
            <button id="btn8" className="square w-14 h-14 m-0 p-2 border  text-white">X</button>
            <button id="btn9" className="square w-14 h-14 m-0 p-2 border  text-white">X</button> */}
                <Square value={squares[6]} onSquareClick={_ => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={_ => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={_ => handleClick(8)} />
            </div>

            <div className="status text-center  text-white text-2xl mt-4">
                {status}
            </div>

            <Reset onResetClick={handleReset}/>

        
        </div>
    );
}

export default Board;

const isDraw = (squares) => {
    return squares.every(square => square !== null);
}

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}