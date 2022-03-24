import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import factReducer from './facts/factReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(factReducer as any, composeWithDevTools(applyMiddleware(thunk)));

export default store
