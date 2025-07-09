import classes from "./Input.module.css"
type InputModel={
    type:string,
    el:string,
    label:string,
    value:string,
    name:string,
    clickEvent:(e)=>void,
}
const Input:React.FC<InputModel>=({type,el,label,name,value,clickEvent})=>{
    return<>
        <label className={classes.label}>{label}</label>
        <div className={classes.input_cover}>
            {el==='input'?
                <input type={type} 
                name={name}
                value={value} 
                className={classes.inp} 
                placeholder={"Enter "+label}
                onChange={clickEvent}
                />:
                <textarea onChange={clickEvent} name={name} value={value} className={classes.tarea}/>
            }
            <div className={classes.gl}></div>
            <div className={classes.pl}></div>
        </div>
    </>
}

export default Input