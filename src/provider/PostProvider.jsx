import React, { createContext, useEffect, useState } from "react";
export const PostContext = createContext();
export default function PostProvider({ children }) {
  const [post, SetPost] = useState([]);
  const [editPost, setEditPost] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        SetPost(data);
        setLoading(false);
      });
  }, []);
  return (
    <PostContext
      value={{ post, editPost, modal, loading, setEditPost, SetPost, setModal }}
    >
      {children}
    </PostContext>
  );
}
