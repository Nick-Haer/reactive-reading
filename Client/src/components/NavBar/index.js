import React from "react";

import styles from "./nav.module.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function NavBar(props) {
    return (
        <div  className = {styles.container}>
            <span className={styles.phrase}>Reading is RadioReactive!</span>
            <Link className = {styles.navItem} to="/">Search Books</Link>
            <Link className = {styles.navItem}  to="/saved">Saved Book</Link>
        </div>
    )
}
export default NavBar;