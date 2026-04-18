import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import "./blogs.css";

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
    <div className="blogs-page">
      <header className="blogs-header">
        <h1>Legal Blogs</h1>
        <p>Expert legal insights, updates, and practical guidance.</p>

        <div className="blogs-actions">
          <Link to="/" className="home-btn">← Home</Link>
        </div>
      </header>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <article className="blog-card" key={blog.id}>
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="blog-image"
              />
            )}

            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
