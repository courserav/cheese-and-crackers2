import React from 'react'
import GameBoard from './components/GameBoard'
import {useSelector, useDispatch} from 'react-redux'
import {createBoard} from './actions'

function Game() {
  const gameBoard = useSelector(state => state.board)
  const dispatch = useDispatch()

  return (
    <div className="Game">
      <button onClick={() => dispatch(createBoard(3))}>3x3</button>
      <GameBoard board={gameBoard}/>
    </div>
  );
}

export default Game