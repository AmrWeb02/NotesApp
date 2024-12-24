import React from 'react'
// styles
import './Footer.css'
// Icons
import { FaSearch } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaTag } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="nav-icons">
        <div className="nav-item">
          <FaHouse/>
          <NavLink to='/'>Home</NavLink>
        </div>
        <div className="nav-item">
          <FaSearch/>
          <span>Search</span>
        </div>
        <div className="nav-item">
          <RiInboxArchiveFill/>
          <NavLink to='/ArchivedNotes'>Home</NavLink>
        </div>
        <div className="nav-item">
          <FaTag/>
          <span>Tags</span>
        </div>
    </div>
  )
}

export default Footer