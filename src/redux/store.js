import { combineReducers, createStore } from 'redux';
import cartReducer from './reducers/cartReducer';
import rootReducer from './reducers/index';
import productReducer from './reducers/productReducer';
import searchReducer from './reducers/searchReducer';
import sortReducer from './reducers/sortReducer';
const store = createStore(combineReducers({
    cart: cartReducer,
    search: searchReducer,
    products: productReducer,
    sort: sortReducer
}))

export default store;