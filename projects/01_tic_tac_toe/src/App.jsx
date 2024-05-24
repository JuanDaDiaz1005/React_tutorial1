import { useState } from 'react'
import './App.css'

import confetti from 'canvas-confetti'

import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { Turns } from './components/Turns.jsx'
import { Board } from './components/Board.jsx'

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return
    }

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <Board board = {board} updateBoard = {updateBoard}/>
      <Turns turn={turn} />
      <WinnerModal winner= {winner} resetGame= {resetGame} />
      <section>
        <button onClick={resetGame}>
          Empezar de nuevo
        </button>
      </section>
    </main>
  )
}

export default App
