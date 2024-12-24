import React from 'react'
import { Outlet } from 'react-router-dom'
// Styles and Grid Control
import './Layout.css'
// Fixed Components
import Header from '../Components/Header.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import Footer from '../Components/Footer.jsx'
import NoteDetails from '../Components/NoteDetails.jsx'

const Layout = () => {
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
        <Outlet/>
        {/*In the outlet we will render Either AllNotes or ArchivedNotes  that will depend on the URL} */}
      </div>
      <main className='main-content'>
        <NoteDetails/>
      </main>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
    </>
  )
}

export default Layout