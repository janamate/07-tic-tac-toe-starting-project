import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/player"

function App() {
  const [activePlayer, setActivePlayer] = useState('🐷')

  function handleSelectSquare() {
    setActivePlayer ((curActivePlayer) => curActivePlayer === '🐷' ? '🐶' : '🐷');
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="🐷" isActive={activePlayer === '🐷'} />
        <Player initialName="Player 2" symbol="🐶" isActive={activePlayer === '🐶'} />
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
    </div>
  </main>
}

export default App
