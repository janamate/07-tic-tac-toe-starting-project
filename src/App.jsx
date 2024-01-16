import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('🐷')

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer ((curActivePlayer) => curActivePlayer === '🐷' ? '🐶' : '🐷'); 
    setGameTurns((prevTurns) => {
      let currentPlayer = '🐷';

      if ( prevTurns.length > 0 && prevTurns[0].player === '🐷') {
        currentPlayer = '🐶';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="🐷" isActive={activePlayer === '🐷'} />
        <Player initialName="Player 2" symbol="🐶" isActive={activePlayer === '🐶'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
    </div>
    <Log turns={gameTurns}/>
  </main>
}

export default App
