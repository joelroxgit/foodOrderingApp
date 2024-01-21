import { LOGO } from "../utils/constants";
const Header =()=>{
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
                </ul>
             </div>
        </div>
)}

export default Header;