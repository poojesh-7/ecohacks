/* eslint-disable @next/next/no-img-element */
import React from "react"
import classes from './HackCard.module.css'
import Button from "@/ui/Button"
import Link from "next/link"
import { dateFormat } from "@/utils/utils"

type HackModel={image:string,title:string,slug:string,username:string,trending:boolean,postedOn:string}
interface HackCardProps extends HackModel {
  showuser: boolean,btntext?:string
}
const HackCard:React.FC<HackCardProps>=({slug,image,title,username,trending,postedOn,showuser,btntext})=>{
   return <div className={classes.hackcard}>
        <img className={classes.hack_image} src={image} alt={slug} />
        <div className={classes.btn_cover}>
            {btntext?
            <Link href={`/updatehack/${slug}`}  >
                <Button classType='ver_view' text="EDIT"/>
            </Link>:
            <Link href={`/${trending?"trending":"hacks"}/${slug}`} >
                <Button classType='ver_view' text="View"/>
            </Link>
            }
        </div>
        <p className={classes.title}>{title}</p>
        {
            showuser &&
            <>
                <p className={classes.user}>{username}</p>
                <p className={classes.date}>{dateFormat(postedOn)}</p>
            </>
        }

    </div>
}

export default HackCard