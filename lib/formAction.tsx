"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const backend_api=process.env.NEXT_BACKEND_URL

export async function PostHack(
  prevState: { message: string },
  formData: FormData 
): Promise<{ message: string }> {
  const title = formData.get("title")?.toString().trim() || "";
  const image = formData.get("image")?.toString().trim() || "";
  const description = formData.get("description")?.toString().trim() || "";
  const steps = formData.getAll("steps").map((step) => step.toString().trim());
  const tutorialLink = formData.get("tutorialLink")?.toString().trim() || "";
  const token = formData.get("token")?.toString(); 
  const res=await fetch(`${backend_api}/api/hacks/createhack`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+token 
    },
    body:JSON.stringify({
      title,
      description,steps,image,tutorialLink
    })
  })
  if(!res.ok){
    throw new Error("failed to post")
  }
  const data=await res.json()
  revalidatePath("/hacks",'layout')
  redirect("/hacks")
  return { message: data.message };
}


export async function EditHack(
  prevState: { message: string },
  formData: FormData 
): Promise<{ message: string }> {
  const title = formData.get("title")?.toString().trim() || "";
  const image = formData.get("image")?.toString().trim() || "";
  const description = formData.get("description")?.toString().trim() || "";
  const steps = formData.getAll("steps").map((step) => step.toString().trim());
  const tutorialLink = formData.get("tutorialLink")?.toString().trim() || "";
  const token = formData.get("token")?.toString(); 
  const slug = formData.get("slug")?.toString(); 
  const res=await fetch(`${backend_api}/api/hacks/update/${slug}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+token 
    },
    body:JSON.stringify({
      title,
      description,steps,image,tutorialLink
    })
  })
  if(!res.ok){
    throw new Error("failed to post")
  }
  const data=await res.json()
  revalidatePath("/hacks",'layout')
  redirect("/profile")
  return { message: data.message };
}

