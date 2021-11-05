import React, { Component } from 'react'
import {createBoard, setPiece} from './actions'
import GameRenderer from './components/GameRenderer'
import ActivePlayer from './components/ActivePlayer'
import { connect } from 'react-redux'

class Game extends Component{

  componentDidUpdate(prevProps){
    if (prevProps.gameBoard !== this.props.gameBoard){
      console.log(this.props.gameBoard)
    }
  }

  handleChange = (event) => {
    this.input = event.target.value
    console.log(this.input)
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    pieces: state.piece.pieces,
    loading: state.piece.loading,
    gameBoard: state.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createBoard: (payload) => dispatch(createBoard(payload)),
    setPiece: (piece, index, cracker) => dispatch(setPiece(piece, index, cracker))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)