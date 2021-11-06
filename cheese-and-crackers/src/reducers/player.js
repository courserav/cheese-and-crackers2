const playerReducer = (state = {players: [], active: " ", loading: false}, action) => {
    switch (action.type){
        case 'LOADING_PLAYERS':
            return {...state, players: [...state.players], loading: true}
        case 'ADD_PLAYERS':
            return {...state, players: action.payload, loading: false}
        case 'POST_PLAYER':
            return {...state, active: [...state.active]}
        case 'POST_SUCCESS':
            return {...state, active: action.payload.name}
        default:
            return state
    }
}

export default playerReducer