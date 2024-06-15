function PlayerDetails({handleStart, setPlayer1, setPlayer2, player1,player2, isActive, setIsActive}) {

    return (
        <div className="player-details flex flex-col gap-4 items-center">
            <h2 className="text-white text-2xl">Player Details</h2>
            <div className="info flex flex-col gap-4">
                <label htmlFor="player1-name" className="text-white text-xl">Player 1 : X</label>
                <input type="text" name="username" id="player1-name" autoFocus
                value={player1}
                onChange={(e) => {
                    setPlayer1(e.target.value)
                    setIsActive(false);
                }}
                className="px-2 py-2 text-xl"
                placeholder="Player 1"
                />
                <label htmlFor="player2-name" className="text-white text-xl">Player 2 : O</label>
                <input type="text" name="username" id="player2-name" autoFocus
                value={player2}
                onChange={(e) => {
                    setPlayer2(e.target.value)
                    setIsActive(false);
                }}
                className="px-2 py-2 text-xl"
                placeholder="Player 2"
                />
            </div>
            <button className=" relative text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            py-3 font-bold rounded-md w-40 mt-3 hover:scale-105 transition-transform duration-200 ease-in 
            before:absolute
            before:-inset-1
            before:-z-10
            before:filter
            before:blur-lg
            before:bg-gradient-to-r
            before:from-indigo-500
            before:via-purple-500
            before:to-pink-500"
            onClick={handleStart}
            >{isActive ? "Reset/Restart" : "Start"}</button>
        </div>
    );
}

export default PlayerDetails;