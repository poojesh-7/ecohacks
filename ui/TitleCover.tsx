import React from "react"
import classes from './TitleCover.module.css'
const TitleCover:React.FC<{text:string}>=({text})=>{
    return <div className={classes.title_cover}>
        <h1 className={classes.title}>{text}</h1>
        <div className={classes.gl+" "+classes.ps1}></div>
        <div className={classes.gl+" "+classes.ps2}></div>
        <div className={classes.pl+" "+classes.ps3}></div>
        <div className={classes.pl+" "+classes.ps4}></div>
    </div>
}

export default TitleCover