import { Link, useParams } from "react-router-dom";
import { categoryColor } from "../../../data/testimonial";
import { getBlogData } from "../../../data/blogsdata";

export default function RelatedPost() {
  const { slug } = useParams();
  const { relatedPosts } = getBlogData(slug);

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
