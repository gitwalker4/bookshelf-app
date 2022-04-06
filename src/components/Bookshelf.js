import React, {Suspense} from 'react'
import { motion } from 'framer-motion'
const Books = React.lazy(() => import('./Books'))

const Bookshelf = ({books}) => {

  const sortBooks = (a,b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()

    return (a < b) ? -1 : (a > b) ? 1 : 0
  }

  const sortedBooksArray = books.sort((a,b) => {
    return sortBooks(a.title, b.title)
  })

  return (
    <Suspense fallback={<div></div>}>
      <div>
        <motion.div layout className='bookshelf'>
          {sortedBooksArray.map((item) => (
            <Books key={item.id} item={item}></Books>
          ))}
        </motion.div>
      </div>
    </Suspense>
  )
}

export default Bookshelf