import Header from './components/Header'
import BookStorage from './components/BookStorage'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'


const App = () => {
  const books = useSelector(state => state.bookReducer.books)

  return (
    <>
      <DragDropContext onDragEnd={(param) => {
        const srcI = param.source.index
        const desI = param.destination.index
        books.splice(desI, 0, books.splice(srcI, 1)[0])
      }}>
        <Header />
        <motion.div layout>
          <BookStorage className='book-storage' />
        </motion.div>
      </DragDropContext>
    </>
  )
}

export default App;
