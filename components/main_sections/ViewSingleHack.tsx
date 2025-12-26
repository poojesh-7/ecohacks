import { HackModel } from "@/lib/model"
import classes from "./ViewSingleHack.module.css"
import TitleCover from "@/ui/TitleCover"
import HackCard from "../hero_comp/HackCard"
import TitleUnderline from "@/ui/TitleUnderline"
import { dateFormat } from "@/utils/utils"
import LikeDislikeWrapper from "@/utils/LikeDislikeWrapper"

const ViewSingleHack:React.FC<{singleHack:HackModel,similarhacks:HackModel[]}>=({singleHack,similarhacks})=>{
    return <main className={classes.view_section}>
    <section className={classes.viewsingle}>
        <div className={classes.title}>
            <TitleCover text={singleHack.title}/>
            <div className={classes.like_dislike}>
                <LikeDislikeWrapper likes={singleHack.likes} dislikes={singleHack.dislikes}  slug={singleHack.slug} />
            </div>
        </div>
        <p className={classes.user}>{singleHack.username}</p>
        <p className={classes.date}>{dateFormat(singleHack.postedOn)}</p>
        <img src={singleHack.image} alt={singleHack.slug} className={classes.image} />
        <div className={classes.description}>
            <TitleUnderline text="Description" />
            <p>{singleHack.description}</p>
        </div>
        <div className={classes.steps}>
            <TitleUnderline text="Steps" />
            <ul>
                {singleHack.steps.map((step,i)=>
                    <li key={i}><p><b>Step {i+1} : </b>{step}</p></li>
                )}
            </ul>
        </div>
        {
        singleHack?.tutorialLink &&
        <div>
            <h2>Tutorial Link</h2>
            <p>{singleHack?.tutorialLink}</p>
        </div>
        }
        
    </section>
    <section className={classes.usercontact}>
        <TitleUnderline text="Contact" />
        <p><b>Creator : </b> {singleHack.username}</p>
        {singleHack.email && 
        <p><b>Email : </b> {singleHack.email}</p>
        }
    </section>
    <section className={classes.similar_hacks}>
        <TitleUnderline text="Readers Also Loved" />
        <div className={classes.hacks_section}>
            {similarhacks.map(hack=>(
                <div key={hack.slug} className={classes.hack_card_visibility}>
                    <HackCard trending={hack.trending}  image={hack.image} title={hack.title} username={hack.username} postedOn={hack.postedOn} slug={hack.slug} extraStyle={{fontSize:"20px"}} showuser={false} />
                </div>
            ))}
        </div>
    </section>
    </main> 
}
export default ViewSingleHack