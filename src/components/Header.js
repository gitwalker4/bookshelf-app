import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { fetchBooksRequest } from '../redux/books/bookActions'

const Header = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooksRequest())
  }, [dispatch])

  return (
    <div className='header'>
      <h1 className='header-title'>On The Bookshelf</h1>
    </div>
  )
}

export default Header