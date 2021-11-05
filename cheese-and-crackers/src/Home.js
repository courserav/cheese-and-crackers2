import React, { Component } from 'react'
import LoadPlayers from './components/LoadPlayers'
import { connect } from 'react-redux'
import { fetchPlayers } from './actions'

class Home extends Component{
    render(){
        return(
            <>
                <div>This app was made possible by contributions to your PBS station... from viewers like you.</div>
                <LoadPlayers players={this.props.players}/>
            </>
            //put component showing all players in db. 
        )
    }
}

const mapStateToProps = (state) => {
    return{
        players: state.player.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchPlayers: () => dispatch(fetchPlayers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)