import React from "react";
import {Link, NavLink, withRouter} from "react-router-dom";

const Navbar = (props) => {
    const toHomePage = () => {
        props.history.push('/');
    };
    return (
       <nav className="nav-wrapper red darken-3">
           <div className="container">
               <div className="brand-logo" onClick={toHomePage}>OUDUIDUI</div>
               <ul className="right">
                   <li><Link to="/">Home</Link></li>
                   <li><NavLink to="/About">About</NavLink></li>
                   <li><Link to="">Contact</Link></li>
               </ul>
           </div>
       </nav>
    )
}

export default withRouter(Navbar);