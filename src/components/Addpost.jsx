import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../provider/PostProvider";

export default function Addpost() {
  const { post, SetPost, editPost, setEditPost, setModal } =
    useContext(PostContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setBody(editPost.body);
    }
  }, [editPost]);

  function handleSubmit(e) {
    e.preventDefault();
    if (editPost) {
      const updated = post.map((p) =>
        p.id === editPost.id ? { ...p, title, body } : p,
      );

      SetPost(updated);
      setEditPost("");
    } else {
      SetPost([
        ...post,
        {
          id: Date.now(),
          title,
          body,
        },
      ]);
    }

    setBody("");
    setTitle("");
    setModal(false);
  }
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black/40"
      onClick={() => setModal(false)}
    >
      <form
        className="flex flex-col w-[400px] bg-white p-6 rounded-xl gap-3"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <label>Title</label>
        <input
          className="border-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <input
          className="border-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
}
