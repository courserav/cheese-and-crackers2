//Index file for reducers
import boardReducer from './board'
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    board : boardReducer
})

export default allReducer