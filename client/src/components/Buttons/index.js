import React from "react";

import styles from "./buttons.module.css"

 export function VisitButton (props) {
    return <a className={styles.visitButton} target="blank" href={props.link}><button className={styles.visitLink}>Visit</button></a>
 }

 export function SaveButton (props) {
    return <button className={styles.saveButton} onClick={props.saveClick}>Save</button>
 }

 export function DeleteButton (props) {
    return <button className={styles.deleteButton} onClick={props.deleteClick}>Delete</button>
 }

