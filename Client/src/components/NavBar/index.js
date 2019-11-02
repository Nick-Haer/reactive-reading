import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function NavBar(props) {
    return (
        <div>
            <span>Reading is RadioReactive!</span>
            <Link to="/">Search Books</Link>
            <Link to="/saved">Saved Book</Link>
        </div>
    )
}
export default NavBar;