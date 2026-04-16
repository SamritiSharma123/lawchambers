import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";
import "./blogpreview.css";

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);

  async function loadBlogs() {
    const { data } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);

    setBlogs(data || []);
  }

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-heading">Latest Legal Insights</h2>
        <p className="blog-subheading">
          Trusted legal updates, expert advice, and practical guidance.
        </p>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <h3>{blog.title}</h3>
              <p>
                {blog.content?.replace(/<[^>]+>/g, "").slice(0, 130)}...
              </p>
            </div>
          ))}
        </div>

        <div className="blog-btn-wrap">
          <Link to="/blogs" className="blog-btn">
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}