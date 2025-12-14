// export const dynamic = "force-dynamic";

import { HacksData } from "@/lib/hackaction";
import HacksLoader from "@/components/main_sections/HacksLoader";
import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { hacktype: string };
}): Promise<Metadata> {
  const {hacktype}=await params
  const isTrending = hacktype === "trending";

  return {
    title: isTrending
      ? "Trending Sustainability Hacks – EcoHackTips"
      : "Everyday Waste Hacks – EcoHackTips",
    description: isTrending
      ? "Browse the most popular eco hacks from the community to reduce household waste and live sustainably."
      : "Discover clever ways to reuse, recycle, and reduce daily waste. Curated life hacks for greener living.",
    openGraph: {
      title: isTrending
        ? "Trending Sustainability Hacks – EcoHackTips"
        : "Everyday Waste Hacks – EcoHackTips",
      description: isTrending
        ? "See what sustainability tips are trending right now in the EcoHackTips community."
        : "Explore smart and simple hacks for reducing everyday waste.",
      url: `https://ecohacktips.netlify.app/${params.hacktype}`,
      siteName: "EcoHackTips",
      images: [
        {
          url: isTrending
            ? "https://i.ibb.co/HTZn8Gfx/trending.png"
            : "https://i.ibb.co/d4R8PBq4/hacks.png",
          width: 1200,
          height: 630,
          alt: isTrending
            ? "Trending Eco Hacks – EcoHackTips"
            : "Regular Eco Hacks – EcoHackTips",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isTrending
        ? "Trending Sustainability Tips – EcoHackTips"
        : "Daily Waste Hacks – EcoHackTips",
      description: isTrending
        ? "Top-voted, community-driven eco hacks to inspire sustainable living."
        : "Easy and effective hacks to reduce household waste and recycle creatively.",
      images: [
        isTrending
          ? "https://i.ibb.co/HTZn8Gfx/trending.png"
          : "https://i.ibb.co/d4R8PBq4/hacks.png",
      ],
    },
  };
}



const Page = async ({ params }: { params: { hacktype: string } }) => {
  const hacks = await HacksData(params.hacktype);
  if (!hacks || hacks.length === 0) return notFound(); // Optional

  const text =
    params.hacktype === "regular"
      ? "Trash to Treasure: Clever Reuses for Everyday Waste"
      : "Trending hacks for your household waste";

  return <HacksLoader hacks={hacks} text={text} />;
};

export default Page;
