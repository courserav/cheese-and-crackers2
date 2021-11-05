import React from 'react'

const SavedPlayers = (players) =>{
    
    let renderedPlayers = [] 
    for (i = 0; i < players.length; i++){
        renderedPlayers.push(<div>players[i]</div>)
    }
    
    return(
        <>
            {renderedPlayers}
        </>
    )
}

export default SavedPlayers