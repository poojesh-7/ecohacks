import React from "react"
import classes from "./FormDetails.module.css"
import Link from "next/link"
import TitleCover from "@/ui/TitleCover"
import Button from "@/ui/Button"
const HackDetails:React.FC=()=>{
    return <section className={classes.form_details}>
        <TitleCover text="Got a Clever Hack? Share it & Score Points!" />
        <div className={classes.details_holder}>
            <p className={classes.steps}>
                Not sure what to post? Your hack can be:
                <span>
                    - 🧅 A clever use for food scraps (like onion peels)  
                </span>
                <span>
                    - 🧽 A cleaning trick from something disposable
                </span>
                <span>
                    - ♻️ A creative reuse of packaging or household items
                </span>
                <span>
                    - 🌿 An eco-friendly alternative to common products       
                </span>
            </p>
            <h1 className={classes.headline}>
                Community highlights
            </h1>
            <div className={classes.example}>
                <p>“Used orange peels to freshen the trash bin. Works and smells amazing!”
                    <span>—shared by @EcoElle</span> 
                </p>
            </div>
            <div className={classes.btn_cover}>
                <Link href="/form">
                <Button classType="ver_post" text="Post" />
                </Link>
            </div>
        </div>
    </section>
}

export default HackDetails