import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="What The Cancer" className="logo" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      
    </div>
  </nav>
)

export default Navbar
