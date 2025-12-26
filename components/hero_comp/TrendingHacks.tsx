import TitleCover from "@/ui/TitleCover"
import { HackModel } from "@/lib/model"
import Link from "next/link"
import HackCard from "./HackCard"
import classes from "./HackSection.module.css"
const TrendingHacks:React.FC<{hacks:HackModel[]}>=({hacks})=>{
    return <section className={classes.regular}>
        <TitleCover text="Trending hacks for your household waste" />
            <div className={classes.hacks_holder}>

        {hacks.map((hack,i)=>(
            <HackCard key={i} slug={hack.slug} title={hack.title} image={hack.image} username={hack.username}  trending={hack.trending} postedOn={hack.postedOn} showuser={true} />
        ))}
        </div>
        
        <Link href="/trending">
        <div className={classes.explore}>
           <p>Explore more</p>
             <img src="https://i.ibb.co/mzcMN4k/right-arrow-2.png" alt="right-arrow-2" className={classes.arrow} />
        </div>
        </Link>
    </section>
}

export default TrendingHacks