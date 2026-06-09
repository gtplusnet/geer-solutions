import { useParams, Link } from "react-router-dom";
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
  img9,
  features,
  products,
  getSocialLinks,
  getBlogData,
} from "../../../data/blogsdata";
import Sidebar from "../../../components/layout/blogs/sidebar";
import RelatedPost from "../../../components/layout/blogs/relatedpost";
import Comment from "../../../components/layout/blogs/comment";

const iconMap = {
  FaFacebookF: <FaFacebookF />,
  FaTwitter: <FaTwitter />,
  FaPinterestP: <FaPinterestP />,
  FaLinkedinIn: <FaLinkedinIn />,
};

function SocialShare({ url }) {
  const links = getSocialLinks(url);
  return (
    <div className="grid grid-cols-4 border border-gray-200 rounded-lg overflow-hidden mb-10">
      {links.map(({ icon, href, label }) => (
        <a
          key={icon}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={"Share on " + label}
          className="flex items-center justify-center p-4 text-gray-500 hover:text-blue-600 transition-colors"
        >
          {iconMap[icon] || <FaFacebookF />}
        </a>
      ))}
    </div>
  );
}

function PostNavigation({ prevPost, nextPost }) {
  const fallback =
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=100&q=80";
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-12">
      <div className="flex">
        {prevPost && (
          <Link
            to={"/blog/" + prevPost.slug}
            className="flex items-center gap-4 p-5 flex-1 hover:bg-gray-50 transition-colors border-r border-gray-200"
          >
            <img
              src={prevPost.image}
              alt={prevPost.title}
              className="w-16 h-16 object-cover rounded-lg shrink-0"
              onError={(e) => {
                e.target.src = fallback;
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
            to={"/blog/" + nextPost.slug}
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
                e.target.src = fallback;
              }}
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default function GeerECommerceFeatures() {
  const { slug } = useParams();
  const { post, prevPost, nextPost } = getBlogData(slug);
  const color = categoryColor[post?.category] ?? "text-blue-600";
  const pageUrl = window.location.href;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <Link
            to="/blog"
            className="text-sm text-blue-600 hover:underline mb-6 inline-block"
          >
            Back to Blog
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

          {features.map(({ num, title, preImg, img: featureImg, text }) => (
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
                src={featureImg}
                alt={title}
                className="w-full rounded-xl object-cover"
              />
            </div>
          ))}

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
          <PostNavigation prevPost={prevPost} nextPost={nextPost} />
        </div>

        <Sidebar />
      </div>

      <RelatedPost />
      <Comment />
    </div>
  );
}
