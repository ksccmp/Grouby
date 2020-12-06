import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import SagaMiddleware from 'redux-saga';
import IndexReducer from './reducer/indexReducer';
import IndexSaga from './saga/indexSaga';

const sagaMiddleware = SagaMiddleware();
const store = createStore(IndexReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(IndexSaga);

export default store;
