import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "./admin.css";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    setBlogs(data || []);
  }

  function login() {
    if (password === "law123") {
      setLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  }

  async function publishBlog() {
    if (!title || !content) {
      alert("Please fill title and content");
      return;
    }

    const { error } = await supabase.from("blogs").insert([
      {
        title,
        content,
        image,
        author: "Admin",
      },
    ]);

    if (!error) {
      alert("Blog Published!");
      setTitle("");
      setContent("");
      setImage("");
      fetchBlogs();
    } else {
      alert("Error publishing blog");
    }
  }

  async function deleteBlog(id) {
    await supabase.from("blogs").delete().eq("id", id);
    fetchBlogs();
  }

  if (!loggedIn) {
    return (
      <div className="admin-login">
        <div className="login-card">
          <h1>Admin Login</h1>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Login</button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-card">
        <h1>Lawyer Blog Dashboard</h1>

        <input
          className="admin-input"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="admin-input"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <textarea
          className="admin-textarea"
          placeholder="Write blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="publish-btn" onClick={publishBlog}>
          Publish Blog
        </button>
      </div>

      <div className="manage-section">
        <h2>Published Blogs</h2>

        {blogs.map((blog) => (
          <div className="blog-item" key={blog.id}>
            <h3>{blog.title}</h3>
            <button onClick={() => deleteBlog(blog.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}