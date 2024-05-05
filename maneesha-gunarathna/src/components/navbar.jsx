import React from "react";
import '../navbar.css';

function Navbar(){

    return(
        <div className="nav-menu">
            <div className="nav-links">
                <ul className="">
                <li><a href="#" className="nav-text">home</a></li>
                <li><a href="#" className="nav-text">about</a></li>
                <li><a href="#" className="nav-text">porfolio</a></li>
                <li><a href="#" className="nav-text">contact me</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;