'use client'

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

export default function Posts() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      {data.map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
      <Link href="/">Go back</Link>
    </div>
  );
}