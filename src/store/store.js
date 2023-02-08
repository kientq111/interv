import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {getUser} from '../reducers/userReducers'


const reducers = combineReducers({
    getUserData: getUser
})

const middleware = [thunk]


let initialState = {};


const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;