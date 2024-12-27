import React from 'react'
import './NoteCard.css'
const NoteCard = ({note, onClick}) => {
    const cardStyles ={
        width:"240px",
        backgroundColor:"#E3F0AF",
        paddingLeft:"15px",
        margin:"10px 0",
        cursor:"pointer",
    }
  return (
    <div className='card-style' onClick={onClick}>
        <h2>{note.title}</h2>
        <span className='tag'>{note.tag}</span><br />
        <span>{note.date}</span>
    </div>
  )
}

export default NoteCard