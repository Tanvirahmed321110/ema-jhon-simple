import React from 'react';
import headerLogo from '../../images/logo.png'
import'./Header.css'



const Header = (props) => {
    return (
        <div className="header">
            <img src={headerLogo} alt="icon pic" title="this is icon" />
             
             <nav>
                 <a href="https://youtube.com"  target='blank'>Shop</a>
                 <a href="/order">Order Review</a>
                 <a href="https://google.com" target="blank">Manage Here</a>

               <nav className="right">
                   <a href="https://www.facebook.com/profile.php?id=100011553548099" target='blank'>About</a>   
                   <a href= "tel:+8801518350989" target='blank'>Contact Me</a>       
                 </nav>
                 </nav>

        </div>
    );
};

export default Header;