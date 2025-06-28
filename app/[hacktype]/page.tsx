import { HacksData } from "@/lib/action";
import HacksLoader from "@/components/main_sections/HacksLoader";
import React from "react";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { hacktype: string } }) => {
  const hacks = await HacksData(params.hacktype);

  if (!hacks || hacks.length === 0) return notFound(); // Optional

  const text =
    params.hacktype === "hacks"
      ? "Trash to Treasure: Clever Reuses for Everyday Waste"
      : "Trending hacks for your household waste";

  return <HacksLoader hacks={hacks} text={text} />;
};

export default Page;
