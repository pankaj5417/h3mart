import { createStore } from "redux";
import { compose } from "redux";
import thunk from 'redux-thunk'
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import {  cryptoReducer } from "./crypto/cryptoReducer";

const rootReducer=combineReducers({
    cryptos:cryptoReducer,
    
})

export const store=createStore(rootReducer,

    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__())
   
    )