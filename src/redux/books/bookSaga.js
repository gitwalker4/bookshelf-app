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
  // When a book is deleted, the remaining books in the array will fill the bookshelf
  // if this result is not desired, add .slice(0,16) so remaining books in array will not fill in
  return result.data.results
}

function* workGetBooksFetch() {
  const books = yield call(booksFetch)
  yield put({ type: FETCH_BOOKS_SUCCESS, books})
}

function* fetchBooksSaga() {
  yield takeEvery(FETCH_BOOKS_REQUEST, workGetBooksFetch)
}

function* workRemoveBook(action) {
  yield put({type: REMOVE_BOOK_SUCCESS, action})
}

function* removeBookSaga() {
  yield takeEvery(REMOVE_BOOK_REQUEST, workRemoveBook)
}

export default function* bookSaga() {
  yield all([fork(fetchBooksSaga), fork(removeBookSaga)])
}