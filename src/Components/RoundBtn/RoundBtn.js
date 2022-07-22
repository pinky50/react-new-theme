import React from 'react'
import { Link } from 'react-router-dom'
import "./RoundBtn.css"

export default function RoundBtn({content, link}) {
  return (
    <div className='roundbtn'>
      <button><Link to={`/${link}`}>{content}</Link></button>
    </div>
  )
}
