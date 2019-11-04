import React from "react";

import styles from "./savedBooks.module.css"

import {VisitButton, DeleteButton} from "../Buttons"



function Books(props) {
    return (
        <div className={styles.container}>
            <span className={styles.title}>{props.title}</span>
            <VisitButton link = {props.link}/>
            <DeleteButton deleteClick = {props.deleteClick}/>
            <p>Written By: {props.author}</p>
            <div>
            <img className={styles.bookImage} src={props.image} alt={"Sorry, No image Found, You'll have to read a thousand words to make it up "}></img>
            <span>{props.description}</span>
            </div>
        </div>

    );

}


export default Books