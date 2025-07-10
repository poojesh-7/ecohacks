"use client";
import LikeDislike from "./LikeDislike";

type Props = {
  likes: number;
  dislikes: number;
  slug: string;
};

const LikeDislikeWrapper = ({ likes, dislikes, slug }: Props) => {
  return <LikeDislike likes={likes} dislikes={dislikes} slug={slug} />;
};

export default LikeDislikeWrapper;
