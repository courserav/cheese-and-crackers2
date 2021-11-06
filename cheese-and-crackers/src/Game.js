import React, { Component } from 'react'
import {createBoard, setPiece} from './actions'
import GameRenderer from './components/GameRenderer'
import ActivePlayer from './components/ActivePlayer'
import { connect } from 'react-redux'

class Game extends Component{

  componentDidUpdate(prevProps){
    if (prevProps.gameBoard !== this.props.gameBoard){
      console.log(this.props.gameBoard)
      this.checkWin()
    }
    else if (prevProps.activePlayer !== this.props.activePlayer){
      console.log(this.props.activePlayer)
    }
  }

  handleChange = (event) => {
    this.input = event.target.value
    console.log(this.input)
  }

  columnGenerator = () => {
    let columns = []
    let counter = 0
    let squareRoot = Math.sqrt(this.props.gameBoard.length)
    let squareSum = 0
    for (let i = 0; i < squareRoot; i++){
      columns[i] = []
      for (let j = 0; j < squareRoot; j++){
          columns[i].push(this.props.gameBoard[squareSum])
          squareSum += squareRoot
      }
      counter++
      squareSum = counter
    }
    return columns
  }

  diagonalGenerator = (columnsArray) => {
    let diagonalArray = []
    let squareRoot = columnsArray.length
    let counter = 0
    for (let i = 0; i < 2; i++){
      diagonalArray[i] = []
      
      for (let j = 0; j < squareRoot; j++){
        diagonalArray[i].push(columnsArray[j][counter])
        if (i === 0){
          counter++
        }
        else if (i === 1){
          counter--
        }
      }
      counter = squareRoot - 1
    }
    return diagonalArray
  }

  checkWin = () => {

    let allColumns = this.columnGenerator()
    let diagonals = this.diagonalGenerator(allColumns)
    let length = this.props.gameBoard.length
    let cheese = this.props.pieces[0].image_url
    let cracker = this.props.pieces[1].image_url

    switch (length){
     case 9:
      if (this.props.gameBoard.slice(0,3).every(value => value === cheese) === true || this.props.gameBoard.slice(3,6).every(value => value === cheese) === true || this.props.gameBoard.slice(6,9).every(value => value === cheese) === true || allColumns[0].every(value => value === cheese) === true || allColumns[1].every(value => value === cheese) === true || allColumns[2].every(value => value === cheese) === true || diagonals[0].every(value => value === cheese) === true || diagonals[1].every(value => value === cheese) === true){
        alert("Cheese wins")
      }
      else if (this.props.gameBoard.slice(0,3).every(value => value === cracker) === true || this.props.gameBoard.slice(3,6).every(value => value === cracker) === true || this.props.gameBoard.slice(6,9).every(value => value === cracker) === true || allColumns[0].every(value => value === cracker) === true || allColumns[1].every(value => value === cracker) === true || allColumns[2].every(value => value === cracker) === true || diagonals[0].every(value => value === cracker) === true || diagonals[1].every(value => value === cracker) === true){
        alert("Cracker wins")       
      }
      break
      case 25:
        
      break
     default:
      console.log(length)
    }
  }

  input = ""

  render(){
    const style = {
      margin: '100px',
    }

      return (
      <div style={style}>
          {this.props.gameBoard.length === 0 ? 
          <div id="create-buttons">
            <button onClick={() => this.props.createBoard(3)}>3x3</button>
            <button onClick={() => this.props.createBoard(5)}>5x5</button>
            <button onClick={() => this.props.createBoard(7)}>7x7</button>
          </div>
          : 
          <div>
          <input type='text' onChange={event => this.handleChange(event)}/>
          <input type='button' value="Set Piece" onClick={() => this.props.setPiece(this.props.pieces[0].image_url, this.input, this.props.pieces[1].image_url)}/>
          </div>
          }
        <GameRenderer pieces={this.props.pieces} board={this.props.gameBoard}/>
        <ActivePlayer player={this.props.activePlayer}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    pieces: state.piece.pieces,
    loading: state.piece.loading,
    gameBoard: state.board,
    activePlayer: state.player.active
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createBoard: (payload) => dispatch(createBoard(payload)),
    setPiece: (piece, index, cracker) => dispatch(setPiece(piece, index, cracker))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)