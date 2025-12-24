import classes from "./Loader.module.css"
const Loader=({text})=>{
    return <section className={classes.loader_section}>
        <p>{text}</p>
        <div className={classes.loader}></div>
    </section>
}

export default Loader