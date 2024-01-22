import { LOGO } from "../utils/constants";
import { useState } from "react";
const Header =()=>{
    const [btnName, setbtnName] = useState("Login")
    return(
        <div className='header'>
            <div className='logocontainer'>
                <img className ="logo" 
                src={LOGO}/>
            </div>
            <div className='lists'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="loginbtn" onClick={()=>{
                        setbtnName("logout")
                    }}>{btnName}</button>
                </ul>
             </div>
        </div>
)}

export default Header;