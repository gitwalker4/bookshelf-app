import { fork, all, call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { 
  FETCH_BOOKS_REQUEST, 
  FETCH_BOOKS_SUCCESS,
  REMOVE_BOOK_REQUEST,
  REMOVE_BOOK_SUCCESS
} from './bookActions'

const booksFetch = async () => {
  const result = await axios('https://gutendex.com/books/')
  const bookshelfButton = document.getElementById('bookshelf-button')
  bookshelfButton.style.display = 'none'
  return result.data.results
}

function* workGetBooksFetch() {
  const books = yield call(booksFetch)
  yield put({ type: FETCH_BOOKS_SUCCESS, books})
}

function* fetchBooksSaga() {
  yield takeEvery(FETCH_BOOKS_REQUEST, workGetBooksFetch)
}

const workRemoveBooks = () => {
  return put({type: REMOVE_BOOK_SUCCESS})
}

function* removeBookSaga() {
  yield takeEvery(REMOVE_BOOK_REQUEST, workRemoveBooks)
}

export default function* rootSaga() {
  yield all([fork(fetchBooksSaga), fork(removeBookSaga)])
}
