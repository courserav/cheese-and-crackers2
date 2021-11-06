import React from 'react'

const SavedPlayers = ({players}) =>{
    
    let renderedPlayers = []
    let listKey = 0 
    for (let i = 0; i < players.length; i++){
        renderedPlayers.push(<li key={listKey++}>{players[i].name}</li>)
    }
    
    return(
        <>
            <ul>{renderedPlayers}</ul>
        </>
    )
}

export default SavedPlayers