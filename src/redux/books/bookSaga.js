import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { 
  FETCH_BOOKS_REQUEST, 
  FETCH_BOOKS_SUCCESS
} from './bookActions'

const booksFetch = async () => {
  const result = await axios('https://gutendex.com/books/')
  return result.data.results
}

function* workGetBooksFetch() {
  const books = yield call(booksFetch)
  yield put({ type: FETCH_BOOKS_SUCCESS, books})
}

export default function* bookSaga() {
  yield takeEvery(FETCH_BOOKS_REQUEST, workGetBooksFetch)
}
