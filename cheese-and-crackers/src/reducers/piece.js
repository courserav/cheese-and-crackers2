const pieceReducer = (state = {pieces: [], loading: false}, action) => {
    switch (action.type){
        case 'LOADING_PIECES':
            return {...state, pieces: [...state.pieces], loading: true}
        case 'ADD_PIECES':
            return {...state, pieces: action.payload, loading: false}
        default:
            return state
    }
}

export default pieceReducer