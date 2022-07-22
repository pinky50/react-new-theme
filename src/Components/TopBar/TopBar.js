import React from 'react'
import Social from '../Social/Social'
import './TopBar.css'

export default function TopBar() {
  return (
    <div>
      <div className="topbar">
        <div className="container">
            <div className="d-flex justify-content-between">
                <div className=" helpline ">
                  <a href="mailto:xyz1234.com" style={{marginRight:"10px"}}><span><i className="fa fa-envelope fa"></i>xyz1234.com</span></a>
                  <a href="tel:+88010000000"><span><i className="fa fa-phone fa"></i>+88010000000</span></a>
                </div>
                <Social/>
            </div>
        </div>
      </div>
    </div>
  )
}
