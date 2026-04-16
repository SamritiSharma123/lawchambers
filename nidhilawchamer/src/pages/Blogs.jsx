import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Blogs() {
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

  return (
    <div style={{ padding: "40px" }}>
      <h1>Legal Blogs</h1>

      {blogs.map((blog) => (
        <div
          key={blog.id}
          style={{
            padding: "20px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px"
          }}
        >
          <h2>{blog.title}</h2>
          {blog.image && <img src={blog.image} width="250" />}
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}