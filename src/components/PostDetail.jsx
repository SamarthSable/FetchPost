import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../provider/PostProvider";

export default function PostDetail() {
  const { id } = useParams();
  const { post } = useContext(PostContext);
  const currentPost = post.find((p) => p.id === Number(id));
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col border border-amber-400 justify-center h-[500px] w-200 p-2 items-center rounded-2xl bg-sky-300 gap-7">
        <h1 className="text-3xl font-bold">Title</h1>
        <h1>{currentPost.title}</h1>
        <h1 className="text-3xl font-bold">Body</h1>
        <p>{currentPost.body}</p>
      </div>
    </div>
  );
}
