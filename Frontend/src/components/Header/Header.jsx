import React from 'react'
import './Header.css'
import logoheader from "../image/logo.jpg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  }
  return (
    <div>
      <header class="navbar">
        <div class="logo">
          <img src={logoheader} alt="logo" class="logo" height="70px" width="90px" />
          <span class="logo-name">Learnify</span>
        </div>
        <nav class="nav-links">
          <Link to="/">Home</Link>
          <Link to="/course">Course</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div class="auth">
          {!isLoggedIn ? (
            <>
              <button class="login"><Link to="/login">Login</Link></button>
              <button class="signup"><Link to="/signup">Signup</Link></button>
            </>
          ) :(
            <button className='login' onClick={handleLogout}>Logout</button>
          )
        }

        </div>
      </header>

    </div>
  )
}

export default Header
