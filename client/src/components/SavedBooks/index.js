import React from "react";

import styles from "./savedBooks.module.css"



function Books(props) {
    return (
        <div className={styles.container}>
            <span>{props.title}</span>
            <a target="blank" href ={props.link}>Visit</a>
            <button onClick={props.deleteClick}>Delete</button>
            <p>Written By: {props.author}</p>
            <div>
            <img className={styles.bookImage} src={props.image}></img>
            <span>{props.description}</span>
            </div>



        </div>

    );

}


export default Books