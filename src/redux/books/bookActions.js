export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const REMOVE_BOOK_REQUEST = 'REMOVE_BOOK_REQUEST'
export const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS'

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST
})

export const removeBookFromShelf = (id) => ({
  type: REMOVE_BOOK_REQUEST,
  payload: {id}
})
