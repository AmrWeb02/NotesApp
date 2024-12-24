import React from 'react'

const NoteCard = () => {
    const cardStyles ={
        width:"240px",
        backgroundColor:"#E3F0AF",
        paddingLeft:"15px",
    }
  return (
    <div style={cardStyles}>
        <h2>Daily Training</h2>
        <span>Exercise</span><br />
        <span>10 Jan 2025</span>
    </div>
  )
}

export default NoteCard