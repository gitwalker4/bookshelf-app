import React from 'react'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import bookReducer from './redux/books/bookReducer'
import bookSaga from './redux/books/bookSaga'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ bookReducer })
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(bookSaga)

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

