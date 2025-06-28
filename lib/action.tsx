"use server"
import data from '@/data.json';
import { HackModel } from './model';
import slugify from 'slugify';


function getRandomDocuments(arr:HackModel[], count = 3, excludeId:string) {
  const filtered = arr.filter(doc => doc.id !== excludeId);

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


export const getData = async():Promise<HackModel[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const transformed_data: HackModel[] = data.map(hack=>{
    return {...hack,id:slugify(`${hack.username} ${hack.title}`)}
  });
  return transformed_data;
};

export const HacksData=async(type:string):Promise<HackModel[]>=>{  
  await new Promise((resolve) => setTimeout(resolve, 500));
  const transformed_data: HackModel[] = data.map(hack=>{
    return {...hack,id:slugify(`${hack.username} ${hack.title}`)}
  });
  const isTrending:boolean=type==="hacks"?false:true
  const final_data=transformed_data.filter(hack=>hack.trending===isTrending)
  return final_data
}

export const getSingleHack=async(id:string):Promise<[HackModel,HackModel[]]|undefined>=>{
  await new Promise((resolve) => setTimeout(resolve, 500));
  const transformed_data: HackModel[] = data.map(hack=>{
    return {...hack,id:slugify(`${hack.username} ${hack.title}`)}
  });
  const res:HackModel[]=getRandomDocuments(transformed_data,3,id)
  const singleHack=transformed_data.find(hack=>hack.id===id)
  if (!singleHack) return undefined
  return [singleHack,res]
}