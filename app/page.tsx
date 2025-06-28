// import { Suspense } from "react"
// import Loader from "@/ui/Loader"
import HackDetails from "@/components/hero_comp/FormDetails"
import RegularHacks from "@/components/hero_comp/RegularHacks"
import TrendingHacks from "@/components/hero_comp/TrendingHacks"
import { getData } from "@/lib/action"
import React from "react"
const RegularHacksSection=async()=>{
    const hacks=await getData()
    const regularHacks=hacks.filter(hack=>hack.trending===false).slice(0,3)
    return <RegularHacks hacks={regularHacks} />
}
const TrendingHacksSection=async()=>{
    const hacks=await getData()
    const trendingHacks= hacks.filter(hack=>hack.trending===true).slice(0,3)
    return <TrendingHacks hacks={trendingHacks} />
}
const HeroPage=()=>{
    
    return <section>
             <RegularHacksSection />
            <HackDetails />
            <TrendingHacksSection/>    
            <footer style={{marginTop:"50px"}}>
                <p style={{fontSize:"16px"}}>Copyright © 2025 EcoHackTips. All rights reserved.</p>
            </footer>
    </section>
}

export default HeroPage