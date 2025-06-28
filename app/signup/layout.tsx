import React from "react"
const UserFormLayout:React.FC<{children:React.ReactNode}> =({children})=>{
    return <section className="user_form_gradient">
        {children}
    </section>
}
export default UserFormLayout