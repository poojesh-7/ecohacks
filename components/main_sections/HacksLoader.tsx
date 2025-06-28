"use client"
import { HackModel } from "@/lib/model"
import classes from "./HacksLoader.module.css"
import TitleCover from "@/ui/TitleCover"
import HackCard from "../hero_comp/HackCard"
import { useState } from "react"
import Pagination from "@/ui/Pagination"
const HacksLoader:React.FC<{hacks:HackModel[],text:string}>=({hacks,text})=>{
    const hacksPerPage=useState<number>(4)[0]
    const [pageno,setPageno]=useState<number>(1)
    const [direction, setDirection] = useState<string>("forward");
    const firstHackIndex:number=pageno*hacksPerPage-hacksPerPage
    const lastHackIndex:number=hacksPerPage*pageno
    const getPageno=(pageno:number)=>{
        setPageno(pageno)
    }
    const totatPagenos:number=Math.ceil(hacks.length/hacksPerPage)
    const getRange = (pno:number, direction:string) => {
    if (direction === "forward") {
        let start = pno - 1;
        let end = start + 5;
        if (end > totatPagenos) {
            end = totatPagenos;
            start = end - 5;
        }
        if (start < 0) start = 0;
            return { first: start, last: end };
        } else {
        // backward
            let end = pno;
            let start = end - 5;
            if (start < 0) {
                start = 0;
                end = 5;
            }
        return { first: start, last: end };
        }
    };

      const { first, last } = getRange(pageno, direction);

    const goToPage = (page:number, dir = "forward") => {
        setDirection(dir);
        setPageno(Math.min(Math.max(page, 1), totatPagenos));
    };
    return <section className={classes.hacks_Section}>
        <TitleCover text={text} />
        <div className={classes.hacks_holder}>
            {hacks.slice(firstHackIndex,lastHackIndex).map((hack,i)=>(
                <HackCard  key={i} id={hack.id} title={hack.title} image={hack.image} username={hack.username}  trending={hack.trending} postedOn={hack.postedOn} showuser={true} />
            ))}
        </div>
        <div className={classes.pageno}>
            <Pagination 
                pageno={pageno}
                totalPages={totatPagenos}
                getPageno={getPageno}
                nextPage={goToPage.bind(null, pageno + 1, "backward")}
                next5Pages={goToPage.bind(null, pageno + 5, "forward")}
                previousPage={goToPage.bind(null, pageno - 1, "backward")}
                previous5Pages={goToPage.bind(null, pageno - 5, "forward")}
                finalPagenos={{ first, last }}
            />
        </div>
    </section>
}

export default HacksLoader