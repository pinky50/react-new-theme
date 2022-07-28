import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Nave.css";

function Nave({ activeclassname }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-toggler nav-fixed">
      <Container>
        <Navbar.Brand href="#home" className="logoimg">
          <img
            src="https://www.banglapuzzle.com/uploads/settings/logo.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                activeclassname="active"
                className="nav-items nav-link"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mr-5">
              <NavLink
                to="/about"
                activeclassname="active"
                className="nav-items nav-link "
              >
                About Us
              </NavLink>
            </li>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              className="teacher"
              href="/"
            >
              <div className="student">
                <NavDropdown.Item href="services/webdevelopment">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item href="services/softwaredevelopment">
                  Software Development
                </NavDropdown.Item>
                <NavDropdown.Item href="services/webdevelopment">
                  Ios Development
                </NavDropdown.Item>
                <NavDropdown.Item href="services/webdevelopment">
                  Web Design
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            <li className="nav-item dropdown ">
              <NavLink
                to="/services"
                className="nav-link dropdown-toggle nav-items"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                activeclassname="active"
              >
                Services
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <Link to="services/webdevelopment" className="dropdown-item">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="services/softwaredevelopment"
                    className="dropdown-item"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="services/softwaredevelopment"
                    className="dropdown-item"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="services/softwaredevelopment"
                    className="dropdown-item"
                  >
                    Software Development
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                activeclassname="active"
                className="nav-items nav-link"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                activeclassname="active"
                className="nav-items nav-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nave;
