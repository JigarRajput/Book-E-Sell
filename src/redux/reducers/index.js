import { combineReducers } from 'redux'
import addCartReducer from './cartReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    addCartReducer,
    searchReducer

})

