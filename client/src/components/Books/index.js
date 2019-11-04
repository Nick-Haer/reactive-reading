import React from "react";

import styles from "./books.module.css"

import {SaveButton, VisitButton} from "../Buttons"



function Books(props) {

    return (
        <div className={styles.container}>
            <span className={styles.title}>{props.title}</span>
            <VisitButton link = {props.link}/>
            <SaveButton saveClick = {props.saveClick}/>
            <p>Written By: {props.author}</p>
            <div>
            <img className={styles.bookImage} src={props.image} alt={"Sorry, No image Found, You'll have to read a thousand words to make it up "}></img>
            <span>{props.description}</span>
            </div>



        </div>

    );

}


export default Books