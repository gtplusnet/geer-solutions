import { useState } from "react";
import { getBlogData } from "../../../data/blogsdata";
import { useParams } from "react-router-dom";

export default function Comment() {
  const { slug } = useParams();

  // Pull the initial comment seed for the current post, fallback to empty
  const { post } = getBlogData(slug);
  const seedComments =
    slug === "geer-e-commerce-features"
      ? [
          {
            id: 1,
            author: "Geer MLM Features | Geer Solutions",
            date: "MAR 25, 2021 / 7:45 AM",
            text: "[...] Read More [...]",
          },
        ]
      : [];

  const [comments, setComments] = useState(seedComments);
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
    <div id="comments" className="max-w-4xl mx-auto mt-12">
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
