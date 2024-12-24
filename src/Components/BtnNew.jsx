import React from 'react'
//Style
import './BtnNew.css'
// Icon
import { FaPlus } from "react-icons/fa6";
const BtnNew = () => {

  return (
    <button className='new-btn'><FaPlus/>New Note</button>
  )
}

export default BtnNew