import { getSingleHack } from "@/lib/action";
import ViewSingleHack from "@/components/main_sections/ViewSingleHack";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { hacktype: string; hack: string };
}) {
  const result = await getSingleHack(params.hack);
  if (!result) return notFound();

  const [hack, similar] = result;

  return <ViewSingleHack hack={hack} similarhacks={similar} />;
}
