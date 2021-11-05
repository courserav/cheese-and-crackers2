//Index for redux actions
export const createBoard = (layout) => {
    return{
        type: 'CREATE_BOARD',
        payload: layout
    }
}

export const setPiece = (piece, index, cracker) => {
    return{
        type: 'SET_PIECE',
        payload: piece,
        opponent: cracker,
        index: index
    }
}

export const fetchPieces = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_PIECES'})
        fetch('http://localhost:8080/pieces')
        .then(response => response.json())
        .then(responseJSON => {
            dispatch({type: 'ADD_PIECES', payload: responseJSON})
        })
        .catch(error => {
            console.error('Error:', error)
        })
    }
}

export const fetchPlayers = () => {
    return(dispatch) => {
        dispatch({type: 'LOADING_PLAYERS'})
        fetch('http://localhost:8080/players')
        .then(response => response.json())
        .then(responseJSON => {
            dispatch({type: 'ADD_PLAYERS', payload: responseJSON})
        })
        .catch(error => {
            console.error('Error:', error)
        })
    }
}

export function addPlayer(playerName) {
    return(dispatch) => {
      dispatch({type: 'POST_PLAYER'})
      return fetch(`http://localhost:8080/players`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: playerName})
      })
        .then(res => res.json())
        .then(responseJson => {
           dispatch({type: 'POST_SUCCESS', player: responseJson.name})
        })
    }
  }