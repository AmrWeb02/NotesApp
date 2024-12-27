import React from 'react'
import './NoteCard.css'
const NoteCard = ({note, onClick}) => {
  return (
    <div className='card-style' onClick={onClick}>
        <h2>{note.title}</h2>
        <span className='tag'>{note.tag}</span><br />
        <span>{note.date}</span>
    </div>
  )
}

export default NoteCard