import React from 'react'
import logo from '../assets/logo.png'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
// Icons
import { FaHouse } from "react-icons/fa6";
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";
// TagsList
import TagsList from './TagsList.jsx';
const Sidebar = () => {
  return (
    <>
    <div className='txt-center' style={{paddingTop:"20px"}}>
    <img src={logo} alt="Logo"/>
    </div>
    <nav>
    <NavLink to='/'>
    <FaHouse/>
    All Notes
    <FaChevronRight/>
    </NavLink>
    
    <NavLink to='/ArchivedNotes'>
    <RiInboxArchiveFill/>
    Archived Notes
    <FaChevronRight/>
    </NavLink>
    </nav>
    <hr />
    <TagsList/>
    </>
  )
}

export default Sidebar