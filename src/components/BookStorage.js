import React from 'react'
import { useSelector } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const BookStorage = (props,{removeBookFromShelf}) => {
  const books = useSelector(state => state.bookReducer.books)

  const makeid = (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result;
  }

  return (
    <Droppable droppableId={makeid(10)} direction='horizontal'>
      {(provided) => (
        <div className={props.className} ref={provided.innerRef} {...provided.droppableProps}>
          {books.slice(0,16).map((book, index) => (
            <Draggable key={book.id} draggableId={'draggable-' + book.id} index={index}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps}>
                    <ul className='book-container' key={book.id} >
                      <li className='book' {...provided.dragHandleProps}>
                        <div className='book-cover'>
                          <h3>{book.title.slice(0,61)}</h3>
                            {book.authors.map((author) => (
                              <p className='book-author' key={author.name}>{author.name}</p>
                            ))}
                        </div>
                      </li>
                    </ul>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default BookStorage