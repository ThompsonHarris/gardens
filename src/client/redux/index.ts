import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { mainReducer } from './mainReducer';
import mySaga from './mainSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
