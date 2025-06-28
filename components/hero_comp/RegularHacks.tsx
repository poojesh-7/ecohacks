import React from "react"
import TitleCover from "@/ui/TitleCover"
import HackCard from "./HackCard"
import classes from "./HackSection.module.css"
import Link from "next/link"
import { HackModel } from "@/lib/model"
const RegularHacks:React.FC<{hacks:HackModel[]}>=({hacks})=>{
    return <div className={classes.regular}>
        <TitleCover text="Trash to Treasure: Clever Reuses for Everyday Waste" />
            <div className={classes.hacks_holder}>
            {hacks.map((hack,i)=>(
                <HackCard key={i} id={hack.id} title={hack.title} image={hack.image} username={hack.username} trending={hack.trending} postedOn={hack.postedOn} showuser={true} />
            ))}
        </div>
        <Link href="/hacks">
        <div className={classes.explore}>
           <p>Explore more</p>
             <img src="https://i.ibb.co/mzcMN4k/right-arrow-2.png" alt="right-arrow-2" className={classes.arrow} />
        </div>
        </Link>
    </div>
}

export default RegularHacks