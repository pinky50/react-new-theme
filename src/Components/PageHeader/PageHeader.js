import React from 'react';
import "./PageHeader.css"

export default function pageHeader({title}) {
  return (
    <>
    <div className="page-title-section">
        <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
            <div className="page-title-top text-white">{title}</div>
            </div>
        </div>
        </div>
    </div>
</>

  )
}
