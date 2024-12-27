import React from 'react'
// CSS
import './NoteDetails.css'
import './GenericBtn.css'
// Icons
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaTag } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { LuClock9 } from "react-icons/lu";

const NoteDetails = ({noteData}) => {
  return (
    <div className='note-details'>
      <div className='note-brief-info'>
        <div className='col1'>
          <p>{noteData.title}</p>
          <div style={{display:"flex", marginTop:"20px"}}>
            <div className="left-col">
              <p className='icon-v-center'><FaTag style={{marginRight:"10px"}}/>Tags</p>
              <p className='icon-v-center'><LuClock9 style={{marginRight:"10px"}}/>Last Edited</p>
            </div>
            <div className="right-col">
              <p>{noteData.tag}</p>
              <p>{noteData.date}</p>
            </div>
          </div>

        </div>
        <div className="col2">
          <button className='generic-btn'><RiInboxArchiveFill style={{marginRight:"5px"}}/>Archive</button>
          <button className='generic-btn'><GrEdit style={{marginRight:"5px"}}/>Edit</button>
          <button className='generic-btn'><MdDelete style={{marginRight:"5px"}}/>Delete</button>
        </div>
      </div>
      <hr style={{margin:'20px 0px'}} />
      <div className='note-content-info'>
        <p>{noteData.content}</p>
      </div>

    </div>
  )
}

export default NoteDetails