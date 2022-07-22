import React from 'react'
import "./Navigation.css"

export default function Navigation() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
  <div className="container">
  <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-items" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Services
          </a>
          <ul className="dropdown-menu animated fadeIn fast">
            <li>
              <a className="dropdown-item" href="#">
                Web Development
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                App Development
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           Contact
          </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
