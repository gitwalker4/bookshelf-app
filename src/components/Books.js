import React from 'react'
import { motion } from 'framer-motion'

const Books = ({item}) => {
  return (
    <motion.div layout>
      <div className='book-row'>
        <h1 className='book-title'>{item.title}</h1>
      </div>
    </motion.div>
  )
}

export default Books