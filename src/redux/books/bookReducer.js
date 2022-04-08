import { FETCH_BOOKS_SUCCESS, REMOVE_BOOK_SUCCESS } from "./bookActions"

const bookReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.books }
    case REMOVE_BOOK_SUCCESS:
      return { ...state, books: state.books.filter((book,index) => index !== action.payload)}
    default:
      return state
  }
}

export default bookReducer