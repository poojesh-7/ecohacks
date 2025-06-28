import classes from "./TitleUnderline.module.css"
const TitleUnderline:React.FC<{text:string}>=({text})=>{
    return <div className={classes.title_underline}>
        <h2>{text}</h2>
        <div className={classes.underline}>
            <div className={classes.gl}></div>
            <div className={classes.pl}></div>
        </div>
    </div>
}
export default TitleUnderline