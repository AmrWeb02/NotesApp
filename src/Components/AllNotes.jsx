import React, {useState} from 'react'
import NoteCard from './NoteCard.jsx'
import BtnNew from './BtnNew.jsx'
import { useLoaderData } from 'react-router-dom'
const AllNotes = () => {
  const NotesData = useLoaderData();
  const NotesArray = Array.from(NotesData);
  return (
    <>

    <BtnNew/>
    {
      NotesArray.map((note)=> <NoteCard key={note.title} note={note}/>)
    }
    </>
  )
}

export default AllNotes

const AllNotesLoader = async () =>{
  try{
    const res = await fetch('http://localhost:4000/notes');
    const data = await res.json();
    const filteredData = data.filter( (note) => note.archived==false);
    console.log("This is the Notes data:",filteredData)
    return filteredData;
  }
  catch(e){
    console.log(e);
  }
}
export {AllNotesLoader} 