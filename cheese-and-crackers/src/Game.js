import React from 'react'
import GameBoard from './components/GameBoard'
import {useSelector, useDispatch} from 'react-redux'
import {createBoard} from './actions'

function Game() {
  const gameBoard = useSelector(state => state.board)
  const dispatch = useDispatch()
  const style = {
      margin: '100px'
  }

  return (
    <div style={style}>
      <button onClick={() => dispatch(createBoard(3))}>3x3</button>
      <button onClick={() => dispatch(createBoard(5))}>5x5</button>
      <button onClick={() => dispatch(createBoard(7))}>7x7</button>
      <GameBoard board={gameBoard}/>
    </div>
  );
}

export default Game