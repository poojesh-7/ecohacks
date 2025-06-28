import React from "react"
import "./Button.css"
type ButtonModel={
    classType:string,text:string
}
const Button:React.FC<ButtonModel>=({classType,text})=>{
    return <button className={classType}>
        <p className={`btn_text`}>
            {text.split('').map((char, i) => (
                <span key={i}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </p>
        </button>
}

export default Button