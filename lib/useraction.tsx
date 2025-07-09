"use server"
const backend_api=process.env.NEXT_BACKEND_URL

export const userProfile=async(token:string)=>{
  const res=await fetch(`${backend_api}/api/users/profile`,{
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+token
      }
  })
  // console.log(res.error.message)
  if(!res.ok){
    throw new Error("res.error.message")
  }
  const profile=await res.json()
  return profile
}

export const userLogout=async(token:string)=>{
  if(token===null){
    throw new Error("Please Authenticate")
  }
  await fetch(`${backend_api}/api/users/logout`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+token
    },
    // body:JSON.stringify({
    //   token
    // })
  }).then(()=>{
    console.log("success")
    return
  }).catch(e=>{
    console.log(e)
    return
  })
}