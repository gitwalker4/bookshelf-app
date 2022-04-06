import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Bookshelf from './components/Bookshelf'

const App = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    const result = await axios('https://gutendex.com/books/')
    setBooks(result.data.results)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <>
      <Header />
      <Bookshelf books={books} />
    </>
  )
}

export default App;
