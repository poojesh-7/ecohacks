"use client"

import { useAuth } from "@/context/AuthProvider"
import { LikeHack,DislikeHack } from "@/lib/hackaction";
import React, { useState } from "react";
import Image from "next/image";
import classes from "./LikeDislike.module.css"
type likeDislikeModel={
    likes:number;
    dislikes:number;
    slug:string
}

const LikeDislike:React.FC<likeDislikeModel>=({likes,dislikes,slug})=>{
    const [usermetrics,setUserMetrics]=useState({likes,dislikes})
    const [message,setMessage]=useState("")
    const {token}=useAuth()
    const likeFn=async()=>{
        try{
            const data=await LikeHack(token,slug)
            setUserMetrics(prev=>{
                return {likes:data.likes,dislikes:data.dislikes}
            })
        }catch(e){
            setMessage(e.message)
            
        }
    }
    const dislikeFn=async()=>{
        try{
            const data=await DislikeHack(token,slug)
            setUserMetrics(prev=>{
                return {likes:data.likes,dislikes:data.dislikes}
            })
            
        }catch(e){
            setMessage(e.message)
        }
    }
    return <>
            <button className={classes.like_btn} onClick={likeFn}>
                <img src="https://i.ibb.co/chsW6jkK/like.png" alt="like" className={classes.like_img} />
            </button>
            <p className={classes.likes}>{usermetrics.likes}</p>
            <button className={classes.like_btn} onClick={dislikeFn}>
                <img src="https://i.ibb.co/YFvCPZbL/dislike.png" alt="dislike" className={classes.like_img}  />
            </button>
            <p className={classes.likes}>{usermetrics.dislikes}</p>
            <p className={classes.login_error}>{message}</p>
    </>
}

export default LikeDislike