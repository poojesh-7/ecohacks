import classes from "./TitleUnderline.module.css"
const TitleUnderline:React.FC<{text:string,classType?:string}>=({text,classType})=>{
    return <div className={classes.title_underline}>
        <h2 className="card_title">{text}</h2>
        <div className={classes.underline}>
            <div className={classes.gl}></div>
            <div className={classes.pl}></div>
        </div>
    </div>
}
export default TitleUnderline