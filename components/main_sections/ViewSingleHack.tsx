import { HackModel } from "@/lib/model"
import classes from "./ViewSingleHack.module.css"
import TitleCover from "@/ui/TitleCover"
import HackCard from "../hero_comp/HackCard"
import TitleUnderline from "@/ui/TitleUnderline"

const ViewSingleHack:React.FC<{hack:HackModel,similarhacks:HackModel[]}>=({hack,similarhacks})=>{
    return <section className={classes.view_section}>
    <div className={classes.viewsingle}>
        <div className={classes.title}>
            <TitleCover text={hack.title}/>
        </div>
        <p className={classes.user}>{hack.username}</p>
        <p className={classes.date}>{hack.postedOn}</p>
        <img src={hack.image} alt={hack.id} className={classes.image} />
        <div className={classes.description}>
            <TitleUnderline text="Description" />
            <p>{hack.description}</p>
        </div>
        <div className={classes.steps}>
            <TitleUnderline text="Steps" />
            <ul>
                {hack.steps.map((step,i)=>
                    <li key={i}><p><b>Step {i+1} : </b>{step}</p></li>
                )}
            </ul>
        </div>
        {
        hack?.tutorialLink &&
        <div>
            <h2>Tutorial Link</h2>
            <p>{hack?.tutorialLink}</p>
        </div>
        }
        
    </div>
    <div className={classes.usercontact}>
        <TitleUnderline text="contact" />
        <p><b>Creator : </b> {hack.username}</p>
        <p><b>Email : </b> {hack.useremail}</p>
    </div>
    <div className={classes.similar_hacks}>
        <TitleUnderline text="Readers Also Loved" />
        <div className={classes.hacks_section}>
            {similarhacks.map(hack=>(
                <div key={hack.id} className={classes.hack_card_visibility}>
                    <HackCard trending={hack.trending} id={hack.id} image={hack.image} title={hack.title} username={hack.username} postedOn={hack.postedOn} showuser={false} />
                </div>
            ))}
        </div>
    </div>
    </section> 
}
export default ViewSingleHack