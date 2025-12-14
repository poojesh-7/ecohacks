import { cache } from "react";

export const getSingleHackCached = cache(async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_BACKEND_URL}/api/hacks/slug/${slug}/view`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch hack");

  return res.json();
});
