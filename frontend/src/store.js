import { createStore ,combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {}
const middleware = [thunk]

const reducer = combineReducers({})


export const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
