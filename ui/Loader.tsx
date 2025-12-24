import classes from "./Loader.module.css"
const Loader=({text}:{text:string})=>{
    return <section className={classes.loader_section}>
        <p className={classes.loader_text}>{text}</p>
        <div className={classes.loader}></div>
    </section>
}

export default Loader