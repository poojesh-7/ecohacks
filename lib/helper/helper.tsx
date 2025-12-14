import { cache } from "react";
import { HackModel } from "@/lib/model";

const backend_api = process.env.NEXT_BACKEND_URL;

if (!backend_api) {
  throw new Error("NEXT_BACKEND_URL is not defined");
}
export const getSingleHackCached = cache(
  async (slug: string): Promise<HackModel | null> => {
    try {
      const res = await fetch(
        `${backend_api}/api/hacks/slug/${slug}/view`,
        { next: { revalidate: 60 } }
      );

      if (!res.ok) return null;

      const json = await res.json();

      // normalize backend response
      const hack = json.hack ?? json.data ?? json;

      if (!hack || !hack.slug) {
        console.warn("Hack not found for slug:", slug);
        return null;
      }
      
      return hack;
    } catch (err) {
      console.error("getSingleHackCached failed:", err);
      return null;
    }
  }
);
