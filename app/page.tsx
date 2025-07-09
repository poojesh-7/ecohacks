// import { Suspense } from "react"
// import Loader from "@/ui/Loader"
import HackDetails from "@/components/hero_comp/FormDetails"
import RegularHacks from "@/components/hero_comp/RegularHacks"
import TrendingHacks from "@/components/hero_comp/TrendingHacks"
import {  HacksData } from "@/lib/hackaction"
import React from "react"
const RegularHacksSection=async()=>{
    const hacks=await HacksData('regular')
    const regularHacks=hacks.slice(0,3)
    return <RegularHacks hacks={regularHacks} />
}
const TrendingHacksSection=async()=>{
    const hacks=await HacksData('trending')
    const trendingHacks= hacks.slice(0,3)
    return <TrendingHacks hacks={trendingHacks} />
}
const HeroPage=()=>{
    
    return <section>
             <RegularHacksSection />
            <HackDetails />
            <TrendingHacksSection/>    
    </section>
}

export default HeroPage
