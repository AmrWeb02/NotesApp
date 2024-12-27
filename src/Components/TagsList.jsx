import React, { useState, useEffect } from 'react'
import { FaTag } from "react-icons/fa";

const TagsList = () => {
    let fetchedArray;
    const [TagList, setTagList] = useState([]);
    useEffect( () => {
        async function fetchTags(){
        const res = await fetch('http://localhost:4000/notes');
        const tags = await res.json();
        fetchedArray = tags.map((note)=>{return note.tag});
        setTagList(fetchedArray);
        }
        fetchTags();

    }, [])
    
  return (
   <>
   <div style={{paddingLeft:"22px"}}>
   <h3 style={{paddingTop:"30px", color: "#ffffff",}}>Tags</h3>
   <ul>
    { TagList.map((tag)=>{return     <li key={tag} className="tag-item">
        <button className="tag-btn"><FaTag/>{tag}</button>
    </li> })}

   </ul>
   </div>
   </>
  )
}

export default TagsList