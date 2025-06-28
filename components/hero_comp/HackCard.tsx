/* eslint-disable @next/next/no-img-element */
import React from "react"
import classes from './HackCard.module.css'
import Button from "@/ui/Button"
import Link from "next/link"

type HackModel={id:string,image:string,title:string,username:string,trending:boolean,postedOn:string}
interface HackCardProps extends HackModel {
  showuser: boolean
}
const HackCard:React.FC<HackCardProps>=({id,image,title,username,trending,postedOn,showuser})=>{
    return <div className={classes.hackcard}>
        <img className={classes.hack_image} src={image} alt={id} />
        <div className={classes.btn_cover}>
            <Link href={`/${trending?"trending":"hacks"}/${id}`} >
                <Button classType='ver_view' text="View"/>
            </Link>
        </div>
        <p className={classes.title}>{title}</p>
        {
            showuser &&
            <>
                <p className={classes.user}>{username}</p>
                <p className={classes.date}>{postedOn}</p>
            </>
        }

    </div>
}

export default HackCard