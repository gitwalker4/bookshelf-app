import React from 'react'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { fetchBooksRequest } from '../redux/books/bookActions'

const theme = createTheme({
  palette: {
    primary: {
      main: '#965fef'
    }
  }
})

const Header = () => {
  const dispatch = useDispatch()

  return (
    <div className='header'>
      <h1 className='header-title'>On The Bookshelf</h1>
      <ThemeProvider theme={theme}>
        <Button color='primary' variant='outlined' onClick={() => dispatch(fetchBooksRequest())}>Load Bookshelf</Button>
      </ThemeProvider>
    </div>
  )
}

export default Header