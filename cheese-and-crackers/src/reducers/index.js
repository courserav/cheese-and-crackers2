//Index file for reducers
import boardReducer from './board'
import pieceReducer from './piece'
import playerReducer from './player'
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    board : boardReducer,
    piece : pieceReducer,
    player : playerReducer
})

export default allReducer