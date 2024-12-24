import React from 'react'

const NoteCard = ({note}) => {
    const cardStyles ={
        width:"240px",
        backgroundColor:"#E3F0AF",
        paddingLeft:"15px",
        margin:"10px 0",
    }
  return (
    <div style={cardStyles}>
        <h2>{note.title}</h2>
        <span>{note.tag}</span><br />
        <span>{note.date}</span>
    </div>
  )
}

export default NoteCard