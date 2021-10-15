import React from 'react'

import './Card.scss';
import { BsSafeFill, BsTrash } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="cards">
        <div className="card-list">
          <div style={{display: 'flex', justifyContent: "space-between"}} className="card-icons">
          <div style={{color: 'royalblue', marginLeft: 120}}className="card"><BsSafeFill /></div>
          <div style={{color: 'royalblue', marginRight: 50}}className="card"><BsTrash /></div>
          </div>
          <div className="card-content">Safe Name</div><span>Jalan-jalan</span>
          <div className="card-content">Income </div><span>Rp 3.000.000</span>
          <div className="card-content">Currency </div><span>Rupiah</span>
         
        </div>
      </div>
    </div>
  )
}

export default Card

