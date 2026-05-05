import { useState } from "react";
import { Link } from "react-router-dom";
import { posts, categoryColor } from "../../data/testimonial";

const POSTS_PER_PAGE = 12;

function BlogCard({ post }) {
  const color = categoryColor[post.category] ?? "text-blue-600";

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden">
      <div className="px-6 pt-5">
        <span
          className={`text-xs font-bold tracking-widest uppercase ${color}`}
        >
          {post.category}
        </span>
        <Link to={`/blog/${post.slug}`}>
          <h3 className="mt-2 mb-4 text-base font-bold text-gray-900 leading-snug hover:text-blue-600 transition-colors cursor-pointer">
            {post.title}
          </h3>
        </Link>
      </div>

      <Link
        to={`/blog/${post.slug}`}
        className="overflow-hidden h-48 shrink-0 block"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80";
          }}
        />
      </Link>

      <div className="px-6 py-5 flex-1">
        <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
      </div>

      <div className="px-6 py-4 border-t border-gray-100 flex items-center flex-wrap gap-2">
        <span className="text-xs font-bold tracking-wide text-gray-700">
          {post.author}
        </span>
        <span className="text-gray-300 text-xs">/</span>
        <span className="text-xs text-gray-500 tracking-wide">{post.date}</span>
        {post.comments && (
          <>
            <span className="text-gray-300 text-xs">/</span>
            <span className={`text-xs font-semibold tracking-wide ${color}`}>
              {post.comments}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-between my-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        <span>‹</span> PREV
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded text-sm font-semibold transition-all duration-200 ${
              currentPage === page
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`text-sm font-semibold flex items-center gap-1 transition-colors ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-600 hover:text-blue-600"
        }`}
      >
        NEXT <span>›</span>
      </button>
    </div>
  );
}

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(start, start + POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Behind the Curtains
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            We hire brilliant web and app developers to deliver projects on time
            and maintain the top-notch code standard.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}
