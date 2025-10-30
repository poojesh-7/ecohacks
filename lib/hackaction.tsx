"use server"
import { HackModel } from './model';
const backend_api=process.env.NEXT_BACKEND_URL

function getRandomDocuments(arr:HackModel[], count = 3, excludeId:string) {
  let filtered=arr
  if(excludeId){
    filtered = arr.filter(doc => doc.id !== excludeId);
  }

  if (count > filtered.length) {
    throw new Error("Not enough documents after excluding");
  }

  const shuffled = [...filtered];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

export const HacksData=async(type:string):Promise<HackModel[]>=>{  
  const isTrending:boolean=type==="regular"?false:true
  const res=await fetch(`${backend_api}/api/hacks/type/${isTrending?"trending":"regular"}`,
    { next: { revalidate: 60 } }
  )
  if(!res.ok){
    throw new Error("failed to fetch")
  }
  const data=await res.json()
  return data
}

export const getSingleHack=async(slug:string):Promise<HackModel|undefined>=>{
  const res=await fetch(`${backend_api}/api/hacks/slug/${slug}/view`,{
    next:{revalidate:60}
  })
  if(!res.ok){
    throw new Error("something went wrong")
  }  
  const singleHack=await res.json()
  
  if (!singleHack) return undefined
  return singleHack
}
export const getSimilarHack=async(type:string,slug?:string):Promise<HackModel[]>=>{
  const hackType=type==='trending'?'regular':"trending"
  const res=await fetch(`${backend_api}/api/hacks/type/${hackType}`,{
    next:{revalidate:120}
  })
  if(!res.ok){
    throw new Error("something went wrong")
  }  
  
  const hacks= await res.json()
  const similarHacks=getRandomDocuments(hacks,3,slug)
  return similarHacks
}




export const LikeHack=async(token,slug)=>{
  const res=await fetch(`${backend_api}/api/hacks/slug/${slug}/like`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+token
    }
  })
  if(!res.ok){
    throw new Error("Please login")
  }
  const data=await res.json()
  return data
}
export const DislikeHack=async(token,slug)=>{
  const res=await fetch(`${backend_api}/api/hacks/slug/${slug}/dislike`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+token
    }
  })
  if(!res.ok){
    throw new Error("Please login")
  }
  const data=await res.json()
  return data
}