import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
// Styles and Grid Control
import './Layout.css'
// Fixed Components
import Header from '../Components/Header.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import Footer from '../Components/Footer.jsx'
import NoteDetails from '../Components/NoteDetails.jsx'

const Layout = () => {
  const [selectedNote, setSelectedNote] = useState(null);
  // This function will be passed to all NoteCard components, it takes 1 paramter (Notes data), updates state variable, we then use whatever value in this state inside Details Component
  const NoteSelectHandler = (note) =>{
    setSelectedNote(note);
  }
  return (
    <>
    <div className="grid-container">
      <header className="header">
        <Header/>
      </header>
      <aside className="sidebar">
        <Sidebar/>
      </aside>
      <div className="notes-list" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <Outlet context={{NoteSelectHandler}}/>
        {/*In the outlet we will render Either AllNotes or ArchivedNotes  that will depend on the URL} */}
      </div>
      <main className='main-content'>
        {selectedNote ? <NoteDetails noteData={selectedNote}/> :<h1>Select a note</h1>}
      </main>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
    </>
  )
}

export default Layout