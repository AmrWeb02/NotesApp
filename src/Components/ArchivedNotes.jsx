import React from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom'
import NoteCard from './NoteCard';
const ArchivedNotes = () => {
  const {NoteSelectHandler} = useOutletContext();
  const NotesData = useLoaderData();
  const NotesArray = Array.from(NotesData);
  return (
    <>
        {
      NotesArray.map((note)=> <NoteCard key={note.title} note={note} onClick={()=>{NoteSelectHandler(note)}}/>)
    }
    </>
  )
}

export default ArchivedNotes

const ArchivedNotesLoader = async () =>{
  try{
    const res = await fetch('http://localhost:4000/notes');
    const data = await res.json();
    const filteredData = data.filter( (note) => note.archived==true);
    return filteredData;   
  }
  catch(e){
    console.log(e);
  }
}
export {ArchivedNotesLoader} 