import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="What The Cancer" style={{ width: '10vw', marginTop: '5vh', marginLeft: '5%'}} />
          </figure>
    </Link>
  </nav>
)

export default Navbar
