import React from 'react'
import { FaTag } from "react-icons/fa";

const TagsList = () => {
  return (
   <>
   <div style={{paddingLeft:"22px"}}>
   <h3 style={{paddingTop:"30px", color: "#ffffff",}}>Tags</h3>
   <ul>
    <li className="tag-item">
        <button className="tag-btn"><FaTag/>Exercise</button>
    </li>
    <li className="tag-item">
        <button className="tag-btn"><FaTag/>Cooking</button>
    </li>
    <li className="tag-item">
        <button className="tag-btn"><FaTag/>Study</button>
    </li>
    <li className="tag-item">
        <button className="tag-btn"><FaTag/>Exams</button>
    </li>
   </ul>
   </div>
   </>
  )
}

export default TagsList