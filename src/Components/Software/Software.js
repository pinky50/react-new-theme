import React from 'react'
import "./Software.css"

export default function Software({title,content,children}) {
  return (
    <div className='software-wrapper'>
      <div className="software-icon">
        <i>{children}</i>
        </div>
        <div className="software-title">
            {title}
        </div>
        <div className="software-content">
            {content}
        </div>
        <a href="">View Details</a>
    </div>
  )
}
