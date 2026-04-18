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
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setBlogs(data || []);
    }
  }

  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <h1>Legal Blogs</h1>
        <p>
          Expert legal insights, practical guidance, and trusted updates.
        </p>

        <Link to="/" className="home-btn">
          ← Back to Home
        </Link>
      </div>

      <div className="blogs-grid">
        {blogs.length === 0 ? (
          <div className="empty-state">
            <h3>No blogs published yet</h3>
            <p>Please check back soon for updates.</p>
          </div>
        ) : (
          blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
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
            </div>
          ))
        )}
      </div>
    </div>
  );
}
