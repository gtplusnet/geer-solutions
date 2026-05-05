import { useParams, Link } from "react-router-dom";
import { posts, categoryColor } from "../../../data/testimonial";

export default function ecommercefeatures() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const recentPosts = posts.slice(0, 5);
  const color = post ? (categoryColor[post.category] ?? "text-blue-600") : "";

  // Get unique months from posts
  const archives = [
    ...new Set(
      posts.map((p) => {
        const [month, , year] = p.date.split(" ");
        return `${month} ${year}`;
      }),
    ),
  ];

  // Get unique categories
  const categories = [
    ...new Set(
      posts.flatMap((p) => p.category.split(",").map((c) => c.trim())),
    ),
  ];

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-40 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Post Not Found
        </h1>
        <Link to="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          <Link
            to="/blog"
            className="text-sm text-blue-600 hover:underline mb-6 inline-block"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <div className="flex items-center flex-wrap gap-2 text-xs text-gray-500 font-semibold tracking-wide mb-6">
            <span className="text-gray-700 font-bold">{post.author}</span>
            <span>/</span>
            <span>{post.date}</span>
            <span>/</span>
            <span className={color}>{post.category}</span>
            {post.comments && (
              <>
                <span>/</span>
                <span className={color}>{post.comments}</span>
              </>
            )}
          </div>

          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover max-h-[480px]"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80";
              }}
            />
          </div>

          <p className="text-gray-600 leading-relaxed text-base">
            {post.excerpt}
          </p>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-72 shrink-0 space-y-8">
          {/* Recent Posts */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Recent Post
            </h2>
            <ul className="space-y-4">
              {recentPosts.map((p) => (
                <li key={p.id}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition-colors leading-snug block"
                  >
                    {p.title}
                  </Link>
                  <span className="text-xs text-gray-400 capitalize">
                    {p.date.charAt(0) + p.date.slice(1).toLowerCase()}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Archives */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Archives
            </h2>
            <ul className="space-y-2">
              {archives.map((archive) => (
                <li
                  key={archive}
                  className="text-sm text-gray-600 capitalize hover:text-blue-600 cursor-pointer"
                >
                  {archive.charAt(0) + archive.slice(1).toLowerCase()}
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Categories
            </h2>
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
          </div>
        </aside>
      </div>
    </div>
  );
}
