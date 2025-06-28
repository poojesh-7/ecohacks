import ViewSingleHack from "@/components/main_sections/ViewSingleHack";
import { getSingleHack } from "@/lib/action";
import React from "react";

interface PageProps {
  params: {
    hack: string;
    hacktype: string;
  };
}

const SingleHackPage = async ({ params }: PageProps) => {
  const hackArr = await getSingleHack(params.hack);
  if (!hackArr) return <div>404</div>;

  return <ViewSingleHack hack={hackArr[0]} similarhacks={hackArr[1]} />;
};

export default SingleHackPage;
