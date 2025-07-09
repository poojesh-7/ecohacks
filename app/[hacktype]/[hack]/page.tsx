import { getSimilarHack, getSingleHack } from "@/lib/hackaction";
import ViewSingleHack from "@/components/main_sections/ViewSingleHack";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { hacktype: string; hack: string };
}): Promise<Metadata> {
  const result = await getSingleHack(params.hack);

  if (!result) {
    return {
      title: "Hack Not Found – EcoHackTips",
      description: "Sorry, this eco hack does not exist.",
    };
  }

  const hack = result;

  return {
    title: `${hack.title} – by ${hack.username} | EcoHackTips`,
    description:
      hack.description?.slice(0, 160) ||
      "Explore this community-submitted eco hack to reduce waste and live sustainably.",
    openGraph: {
      title: `${hack.title} – EcoHackTips`,
      description:
        hack.description?.slice(0, 200) ||
        "Check out this sustainable life hack from EcoHackTips.",
      url: `https://ecohacktips.netlify.app/${params.hacktype}/${params.hack}`,
      siteName: "EcoHackTips",
      type: "article",
      images: [
        {
          url: hack.image,
          width: 1200,
          height: 630,
          alt: hack.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${hack.title} – EcoHackTips`,
      description:
        hack.description?.slice(0, 200) ||
        "Check out this sustainable life hack from EcoHackTips.",
      images: [hack.image],
    },
  };
}



export default async function Page({
  params,
}: {
  params: { hacktype: string; hack: string };
}) {
  const singleHack = await getSingleHack(params.hack);
  const similarHacks = await getSimilarHack(params.hacktype,params.hack);
  if (!singleHack) return notFound();

  return <ViewSingleHack singleHack={singleHack} similarhacks={similarHacks} />;
}
