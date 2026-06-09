import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { categoryColor } from "../../../data/testimonial";
import { getBlogData } from "../../../data/blogsdata";

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

export default function Sidebar() {
  const { slug } = useParams();
  const { recentPosts, archives, categories } = getBlogData(slug);

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
              className={`text-sm font-semibold ${
                categoryColor[cat] ?? "text-blue-600"
              } hover:underline cursor-pointer`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </SidebarSection>
    </aside>
  );
}
