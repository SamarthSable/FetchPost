import { Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import Addpost from "./components/Addpost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/postdetail/:id" element={<PostDetail />} />
        <Route path="/addpost" element={<Addpost />} />
      </Routes>
    </>
  );
}

export default App;
