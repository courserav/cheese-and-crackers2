import React, { Component } from 'react'
import LoadPlayers from './components/LoadPlayers'
import SavedPlayers from './components/SavedPlayers'
import { connect } from 'react-redux'
import { fetchPlayers, addPlayer} from './actions'

class Home extends Component{
    componentDidMount(){
        this.props.fetchPlayers()
    }

    player = " "

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPlayer(this.player)
    }

    handleChange = (event) => {
        this.player = event.target.value
    }    

    render(){
        return(
            <>
                <div>This app was made possible by contributions to your PBS station... from viewers like you.</div>
                <LoadPlayers status={this.props.loading}/>
                <SavedPlayers players={this.props.players}/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Your Name: 
                        <input type='text' onChange={event => this.handleChange(event)}/>
                    </label>
                    <input type='submit' value="Add your name"/>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        players: state.player.players,
        loading: state.player.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchPlayers: () => dispatch(fetchPlayers()),
        addPlayer: (name) => dispatch(addPlayer(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)