import {createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';
import rootSaga from './root-saga';


// mport thunk from 'redux-thunk';
// const middlewares = [thunk];
 
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store);

export {persistor, store};