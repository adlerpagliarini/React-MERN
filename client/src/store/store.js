
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk]; //thunk is a middleware

const composingMiddlewareAndDevTools = compose (
	applyMiddleware(...middleware),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer,
                          initialState,
						  composingMiddlewareAndDevTools);

console.log(store.getState());

export default store;