import { FETCH_BOOKS_SUCCESS, REMOVE_BOOK_SUCCESS } from "./bookActions"

const initialState = {
  books: []
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return { ...state, books: action.books }
    case REMOVE_BOOK_SUCCESS:
      const actionId = action.action.payload.id
      return { 
        books: [
          ...state.books.filter(book => book.id !== actionId)
        ]
      }
    default:
      return state
  }
}

export default bookReducer