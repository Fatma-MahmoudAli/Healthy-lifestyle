
import React from "react";
// import { Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <header  >
        
        <div class="menutoggle" onclick="togglemenu()"></div>
        <ul class="navigation">
        <li><a href="home.html" onclick="togglemenu()">Home</a></li>
            <li><a href="#about" onclick="togglemenu()">About</a></li>
            {/* <Link to="/AllMenu">Mnue</Link> */}
            <li><a href="#Sport" onclick="togglemenu()">Sport</a></li>
            <li><a href="#Food" onclick="togglemenu()"> Food</a></li>
            <li><a href="#test" onclick="togglemenu()"> Captain </a></li>
            <li><a href="#contact" onclick="togglemenu()">Contact</a></li>
        </ul>
    </header>

     );
}
 
export default Nav;


// import React from "react";
// import { Link } from "react-router-dom";

// const Nav = () => {
//     return ( 
//         <nav className="navbar">
//       <h1>The Dojo Blog</h1>
//       <div className="links">
//         <Link to="/">Home</Link>
//         <Link to="/create">Create</Link>
//         <Link to="/menu" style={{ 
//           color: 'white', 
//           backgroundColor: '#f1356d',
//           borderRadius: '8px' 
//         }}>New Blog</Link>
//       </div>
//     </nav>

//      );
// }
 
// export default Nav;