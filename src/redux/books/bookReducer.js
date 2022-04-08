import { FETCH_BOOKS_SUCCESS } from "./bookActions"

const bookReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.books }
    default:
      return state
  }
}

export default bookReducer