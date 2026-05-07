import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../provider/PostProvider";
import { Link } from "react-router-dom";
import Addpost from "./Addpost";

export default function Post() {
  const { post, SetPost, setEditPost, modal, setModal, loading } =
    useContext(PostContext);

  function handleDelete(id) {
    SetPost(post.filter((p) => p.id !== id));
  }
  if (loading)
    return <h1 className="text-3xl font-bold text-center mt-10">Loading...</h1>;
  if (post.length === 0)
    return <h1 className="text-3xl font-bold text-center mt-10">No Post</h1>;
  if (modal) return <Addpost />;

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 text-center items-center">
        {post.map((p) => (
          <div
            key={p.id}
            className="border rounded-2xl border-amber-600 h-[140px] flex flex-col items-center justify-center"
          >
            <Link to={`/postdetail/${p.id}`}>
              <h1>{p.title}</h1>
            </Link>
            <div className="flex flex-row gap-1">
              <button
                className="bg-red-200 w-20 h-10 rounded-2xl"
                onClick={() => {
                  setEditPost(p);
                  setModal(true);
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-200 w-20 h-10 rounded-2xl"
                onClick={() => handleDelete(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center min-w-screen m-4">
        <button
          onClick={() => setModal(true)}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Add Post
        </button>
      </div>
    </div>
  );
}
