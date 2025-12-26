
import HackDetails from "@/components/hero_comp/FormDetails"
import RegularHacks from "@/components/hero_comp/RegularHacks"
import TrendingHacks from "@/components/hero_comp/TrendingHacks"
import {  getSimilarHack } from "@/lib/hackaction"

const RegularHacksSection=async()=>{
    const hacks=await getSimilarHack('trending')
    return <RegularHacks hacks={hacks} />
}
const TrendingHacksSection=async()=>{
    const hacks=await getSimilarHack('regular')
    return <TrendingHacks hacks={hacks} />
}
const HeroPage=()=>{
    
    return <>
             <RegularHacksSection />
            <HackDetails />
            <TrendingHacksSection/>    
    </>
}

export default HeroPage
