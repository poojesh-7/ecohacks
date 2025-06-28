import ViewSingleHack from "@/components/main_sections/ViewSingleHack";
import { getSingleHack } from "@/lib/action";

interface PageProps {
  params: {
    hack: string;
    hacktype: string;
  };
}

const SingleHackPage = async ({ params }: PageProps) => {
  const hackArr = await getSingleHack(params.hack);

  if (!hackArr) return <div>hack not found</div>

  return <ViewSingleHack hack={hackArr[0]} similarhacks={hackArr[1]} />;
};

export default SingleHackPage;
