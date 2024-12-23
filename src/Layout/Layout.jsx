import React from 'react'
import { Outlet } from 'react-router-dom'
// Styles and Grid Control
import './Layout.css'
// Fixed Components
import Header from '../Components/Header.jsx'
import Sidebar from '../Components/Sidebar.jsx'
import Footer from '../Components/Footer.jsx'

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
      <main className='main-content'>
      <Outlet/>
      {/* In the outlet we will render Either (AllNotes + NoteDetails) or (ArchivedNotes + NoteDetails) that will depend on the URL this is why we don't include them here and count on main-content as placeholder for them */}
      </main>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
    </>
  )
}

export default Layout