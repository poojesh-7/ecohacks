import { HacksData } from "@/lib/action"
import HacksLoader from "@/components/main_sections/HacksLoader"
import React, { Suspense } from "react"
import Loader from "@/ui/Loader"

const Hacks = async ({ type }: { type: string }) => {
  const hacks = await HacksData(type);
  const text =
    type === 'hacks'
      ? 'Trash to Treasure: Clever Reuses for Everyday Waste'
      : 'Trending hacks for your household waste';
  return <HacksLoader hacks={hacks} text={text} />;
};

const HacksSection = ({ params }: { params: { hacktype: string } }) => {
  return (
    <Suspense fallback={<Loader />}>
      <Hacks type={params.hacktype} />
    </Suspense>
  );
};

export default HacksSection;
