import { LOGO } from '../utils/constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const [btnName, setbtnName] = useState('Login')
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src={LOGO} />
      </div>
      <div className="lists">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="loginbtn"
            onClick={() => {
              setbtnName('logout')
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
