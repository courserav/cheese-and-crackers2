import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPieces } from './actions/index';
import LoadPieces from './components/LoadPieces'

class App extends Component{

  componentDidMount(){
    this.props.fetchPieces()
  }

  render(){
    return(
      <>
          <h1>Welcome to Cheese and Crackers!</h1>
          <h2><LoadPieces status={this.props.loading}/></h2>
          <h3>Please navigate using the links below: </h3>
      </>
    ) 
  }
}

const mapStateToProps = (state) => {
  return{
    loading: state.piece.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPieces: () => dispatch(fetchPieces())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);