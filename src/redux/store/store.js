import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import createSagaMiddleware from 'redux-saga'

import rootReducer from '../root.reducer'
// import rootSaga from '../root.saga'

const middlewares = []
// const sagaMiddleWares = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
// sagaMiddleWares.run(rootSaga)

export default store