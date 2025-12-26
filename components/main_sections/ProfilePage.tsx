import TitleCover from "@/ui/TitleCover"
import classes from "./ProfilePage.module.css"
import styles from "../hero_comp/HackSection.module.css"
import { dateFormat } from "@/utils/utils"
import HackCard from "../hero_comp/HackCard"
import { userModel } from "@/lib/model"
import React, { useState } from "react"
import ClickEventButton from "@/ui/ClickEventButton"

type ProfileModel={
    profile:userModel,
    logoutFunction:()=>void
}
const ProfilePage:React.FC<ProfileModel | null>=({profile,logoutFunction})=>{
    const [showUserPosts,setShowPosts]=useState(false)
    const toggleShow=()=>{
        setShowPosts(prev=>!prev)
    }
    return <main className={classes.profile_page}>
    <section className={classes.profile_grid}>
        <article div className={classes.user_content}>
            <TitleCover text="Profile" />
            <p>{profile?.user.username}</p>
            <p>{profile?.user.email}</p>
        </article>
        <p className={classes.acc_created}></p>
        {/* <p className={classes.acc_created}>{'' || dateFormat(profile?.user.createdAt)}</p> */}
        <img alt="profile" className={classes.profile_img} />
            <ClickEventButton  clickEvent={logoutFunction} text="Logout" classType="logout_btn" />
        
        <article className={classes.user_ecopoints}>
            <h2>EcoPoints</h2>
            <p>{profile?.user.ecoPoints}</p>
        </article>
        <ClickEventButton clickEvent={toggleShow} text="My Posts" classType="posts_btn" />
        <div className={classes.gl+" "+classes.ps1}></div>
        <div className={classes.gl+" "+classes.ps2}></div>
        <div className={classes.pl+" "+classes.ps3}></div>
        <div className={classes.pl+" "+classes.ps4}></div>
    </section>
    {showUserPosts && 
    <>
        <section className={classes.user_hacks_covers}>
            <TitleCover text="My Posts" />
            <div className={styles.hacks_holder}>
                {profile?.postedHacks.length>0?profile?.postedHacks.map((hack,i)=>(
                    <HackCard  key={i}  title={hack.title} image={hack.image} username={hack.username}  trending={hack.trending} slug={hack.slug} postedOn={hack.postedOn} showuser={true} btntext="EDIT" />
                    )):<p>No Hacks posted</p>}
            </div>
        </section>
    </>
    }
    </main> 
}

export default ProfilePage