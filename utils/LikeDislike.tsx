import { useAuth } from "@/context/AuthProvider"
import { LikeHack,DislikeHack } from "@/lib/hackaction";
import React, { useState } from "react";
import classes from "./LikeDislike.module.css"
import Link from "next/link";
type likeDislikeModel={
    likes:number;
    dislikes:number;
    slug:string
}

const LikeDislike:React.FC<likeDislikeModel>=({likes,dislikes,slug})=>{
    const [usermetrics,setUserMetrics]=useState({likes,dislikes})
    const {token}=useAuth()
    const likeFn=async()=>{
            const data=await LikeHack(token,slug)
            setUserMetrics({likes:data.likes,dislikes:data.dislikes})
        
    }
    const dislikeFn=async()=>{

            const data=await DislikeHack(token,slug)
            setUserMetrics({likes:data.likes,dislikes:data.dislikes})            
    }
    return <>
            {!token?<Link href="/signup" >
                    <button className={classes.like_btn}  >
                        <img src="https://i.ibb.co/chsW6jkK/like.png" alt="like" className={classes.like_img} />
                    </button>
                    </Link>:
                    <button className={classes.like_btn} onClick={likeFn} >
                        <img src="https://i.ibb.co/chsW6jkK/like.png" alt="like" className={classes.like_img} />
                    </button>
            }
            <p className={classes.likes} >{usermetrics.likes}</p>
            {!token?<Link href="/signup" >
                    <button className={classes.like_btn}>
                        <img src="https://i.ibb.co/YFvCPZbL/dislike.png" alt="dislike" className={classes.like_img}  />
                    </button>
                    </Link>:
                    <button className={classes.like_btn} onClick={dislikeFn}>
                        <img src="https://i.ibb.co/YFvCPZbL/dislike.png" alt="dislike" className={classes.like_img}  />
                    </button>
            }
            <p className={classes.likes}>{usermetrics.dislikes}</p>
    </>
}

export default LikeDislike