
import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <header  >
        
        <div class="menutoggle" onclick="togglemenu()"></div>
        <ul class="navigation">
            <li><a href="home.html" onclick="togglemenu()">Home</a></li>
            <li><a href="#about" onclick="togglemenu()">About</a></li>
            {/* <Link to="/AllMenu">Mnue</Link> */}
            <li><a href="AllMenu.js" onclick="togglemenu()">Menu</a></li>
            <li><a href="#expert" onclick="togglemenu()"> Expert</a></li>
            <li><a href="#test" onclick="togglemenu()"> Feed-Back</a></li>
            <li><a href="#contact" onclick="togglemenu()">Contact</a></li>
        </ul>
    </header>

     );
}
 
export default Nav;