import Header from './components/Header'
import BookStorage from './components/BookStorage'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

const App = () => {
  const books = useSelector(state => state.bookReducer.books)

  const reorder = (books, startIndex, endIndex) => {
    const result = Array.from(books);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

  return (
    <>
      <DragDropContext onDragEnd={reorder}>
        <Header />
        <motion.div layout>
          <BookStorage className='book-storage' />
        </motion.div>
      </DragDropContext>
    </>
  )
}

export default App;
