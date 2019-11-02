import React from "react";


import styles from "./search.module.css"

function SearchBox(props) {
    return (
        <div className={styles.container}>
            <h1>Search for Books Here</h1>

            <h3>Enter Book Title:</h3>
            <input className={styles.inputBox} placeholder={"The Bully Pulpit"} onChange={props.inputHandler} value={props.titleSearch}></input>
            <button onClick={props.clickhandler}>Search</button>
        </div>
    );

}


export default SearchBox;