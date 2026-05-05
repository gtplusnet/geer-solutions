import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { categoryColor } from "../../../data/testimonial";
import {
  img,
  img1,
  img2,
  img9,
  post,
  prevPost,
  nextPost,
  recentPosts,
  relatedPosts,
  categories,
  archives,
  products,
  features,
  initialComments,
  getSocialLinks,
} from "../../../data/blogsdata";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaPinterestP: <FaPinterestP />,
  FaLinkedinIn: <FaLinkedinIn />,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function SidebarSection({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="lg:w-72 shrink-0 space-y-8">
      <SidebarSection title="Recent Post">
        <ul className="space-y-4">
          {recentPosts.map((p) => (
            <li key={p.id}>
              <Link
                to={`/blog/${p.slug}`}
                className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors leading-snug block"
              >
                {p.title}
              </Link>
              <span className="text-xs text-gray-400">
                {p.date.charAt(0) + p.date.slice(1).toLowerCase()}
              </span>
            </li>
          ))}
        </ul>
      </SidebarSection>

      <SidebarSection title="Archives">
        <ul className="space-y-2">
          {archives.map((a) => (
            <li
              key={a}
              className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer capitalize"
            >
              {a.charAt(0) + a.slice(1).toLowerCase()}
            </li>
          ))}
        </ul>
      </SidebarSection>

      <SidebarSection title="Categories">
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`text-sm font-semibold ${categoryColor[cat] ?? "text-blue-600"} hover:underline cursor-pointer`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </SidebarSection>
    </aside>
  );
}

function SocialShare({ url }) {
  return (
    <div className="grid grid-cols-4 border border-gray-200 rounded-lg overflow-hidden mb-10">
      {getSocialLinks(url).map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center p-4 text-gray-500 hover:text-white transition-colors bg-gray-100 hover:bg-gray-700"
        >
          {iconMap[icon]}
        </a>
      ))}
    </div>
  );
}

function PostNavigation() {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-12">
      <div className="flex">
        {prevPost && (
          <Link
            to={`/blog/${prevPost.slug}`}
            className="flex items-center gap-4 p-5 flex-1 hover:bg-gray-50 transition-colors border-r border-gray-200"
          >
            <img
              src={prevPost.image}
              alt={prevPost.title}
              className="w-16 h-16 object-cover rounded-lg shrink-0"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=100&q=80";
              }}
            />
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                Previous Post
              </p>
              <p className="text-sm font-bold text-gray-800 hover:text-blue-600">
                {prevPost.title}
              </p>
            </div>
          </Link>
        )}
        {nextPost && (
          <Link
            to={`/blog/${nextPost.slug}`}
            className="flex items-center gap-4 p-5 flex-1 hover:bg-gray-50 transition-colors justify-end text-right"
          >
            <div>
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">
                Next Post
              </p>
              <p className="text-sm font-bold text-gray-800 hover:text-blue-600">
                {nextPost.title}
              </p>
            </div>
            <img
              src={nextPost.image}
              alt={nextPost.title}
              className="w-16 h-16 object-cover rounded-lg shrink-0"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=100&q=80";
              }}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

function RelatedPosts() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {relatedPosts.map((p) => {
          const c = categoryColor[p.category] ?? "text-blue-600";
          return (
            <Link key={p.id} to={`/blog/${p.slug}`} className="group block">
              <div className="overflow-hidden rounded-xl mb-3 h-40">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80";
                  }}
                />
              </div>
              <span
                className={`text-xs font-bold uppercase tracking-widest ${c}`}
              >
                {p.category}
              </span>
              <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors mt-1 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{p.date}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function CommentSection() {
  const [comments, setComments] = useState(initialComments);
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
    save: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.comment) return;
    const now = new Date();
    const dateStr = now
      .toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .toUpperCase();
    const timeStr = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setComments((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        author: form.name,
        date: `${dateStr} / ${timeStr}`,
        text: form.comment,
      },
    ]);
    setForm({ name: "", email: "", website: "", comment: "", save: false });
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        {comments.length === 1 ? "One comment" : `${comments.length} comments`}
      </h2>
      <div className="space-y-4 mb-8 border-t border-gray-100 pt-4">
        {comments.map((c) => (
          <div key={c.id} className="border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-gray-800">
                {c.author}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">{c.date}</span>
                <button className="text-xs font-semibold text-gray-400 hover:text-blue-600 uppercase tracking-wide">
                  Reply
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500">{c.text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4">Leave a Reply</h2>
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name *"
            className="border border-gray-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email *"
            className="border border-gray-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            placeholder="Website"
            className="border border-gray-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-400"
          />
        </div>
        <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}
          placeholder="Add Comment"
          rows={5}
          className="w-full border border-gray-200 rounded px-3 py-2 text-sm outline-none focus:border-blue-400 resize-y"
        />
        <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer">
          <input
            type="checkbox"
            name="save"
            checked={form.save}
            onChange={handleChange}
            className="w-3.5 h-3.5"
          />
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GeerECommerceFeatures() {
  const color = categoryColor[post?.category] ?? "text-blue-600";
  const pageUrl = window.location.href;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* ── Main Content ── */}
        <div className="flex-1">
          <Link
            to="/blog"
            className="text-sm text-blue-600 hover:underline mb-6 inline-block"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post?.title}
          </h1>
          <div className="flex items-center flex-wrap gap-2 text-xs text-gray-500 font-semibold tracking-wide mb-8">
            <span className="text-gray-700 font-bold">{post?.author}</span>
            <span>/</span>
            <span>{post?.date}</span>
            <span>/</span>
            <span className={color}>{post?.category}</span>
            {post?.comments && (
              <>
                <span>/</span>
                <span className={color}>{post.comments}</span>
              </>
            )}
          </div>

          {/* Images */}
          <img
            src={img}
            alt="Geer E-Commerce Features"
            className="w-full object-cover mb-8"
          />
          <img
            src={img1}
            alt="Top of the line Features"
            className="w-full object-cover rounded-xl mb-10"
          />

          {/* Features */}
          {features.map(({ num, title, preImg, img, text }) => (
            <div key={num} className="mb-10">
              {preImg && (
                <img
                  src={preImg}
                  alt={title}
                  className="w-full rounded-xl object-cover mb-6"
                />
              )}
              <h2 className="text-xl font-bold text-gray-800 mb-3">
                {num}. {title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{text}</p>
              <img
                src={img}
                alt={title}
                className="w-full rounded-xl object-cover"
              />
            </div>
          ))}

          {/* Feature 7 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              7. Designs for your Website
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can choose from a modern and unique eCommerce website
              templates and color palette combinations to design the perfect
              look for your online store.
            </p>
            <p className="text-gray-800 font-bold mb-4">
              We Offer Good and Top-Tier Quality System for the Fast-Phased
              Industry, so what are you waiting for?
            </p>
            <img
              src={img9}
              alt="Geer IT Solution"
              className="w-80 object-cover mb-6"
            />
            <p className="text-gray-600 leading-relaxed mb-4">
              In the Philippines, one of the leading provider of MLM System is{" "}
              <a
                href="https://geersolutions.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Geer IT Solutions, Inc
              </a>
              . They are providing app, software and websites to their
              customers.
            </p>
            <p className="text-gray-700 font-semibold mb-2">Products:</p>
            <ul className="list-disc list-inside space-y-1 mb-10">
              {products.map((item) => (
                <li key={item}>
                  <span className="text-blue-600 hover:underline cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <SocialShare url={pageUrl} />
          <PostNavigation />
        </div>

        {/* ── Sidebar ── */}
        <Sidebar />
      </div>

      <RelatedPosts />
      <CommentSection />
    </div>
  );
}
