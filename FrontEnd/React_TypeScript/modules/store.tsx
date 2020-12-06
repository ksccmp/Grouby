import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import IndexReducer from './reducer/indexReducer';

const store = createStore(IndexReducer, composeWithDevTools());

export default store;
