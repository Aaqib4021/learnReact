import { useState } from 'react';
import { LOGO_URL } from '../utils/constants'
//*header component 

const Header = ()=>{
    const [btnInside ,setbtnInside] = useState("login");
    let flag = true;
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}/>
            </div>
            <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li> 
                <li>Cart</li>
                <button onClick={()=>{
                    btnInside==="login" ? setbtnInside("logout") : setbtnInside('login')
                }}>{btnInside}</button>
            </ul>
            </div>
        </div>
    )
};
export default Header;