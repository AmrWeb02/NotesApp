import React from 'react'
import logo from '../assets/logo.png'
import './Header.css'
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header-container">
        <img src={logo} alt="logo" style={{ display:"none", width:"219px",height:"76px",margin:"auto"}} />
        <h1>All Notes</h1>
        <div className='search-box' style={{}}>
            <FaSearch style={{position:"absolute",left:"10",top:'43px'}}/>
            <input type="text" name="search" placeholder='Search by title, content, or tags'/>
        </div>
    </div>
  )
}

export default Header