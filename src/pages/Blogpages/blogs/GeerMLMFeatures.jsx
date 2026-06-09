import { useParams, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import { categoryColor } from "../../../data/testimonial";
import {
  img10,
  img11,
  img12,
  img13,
  img4,
  img5,
  img6,
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
          {iconMap[icon]}
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

function ReadMore() {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors mb-8">
      Read More
    </button>
  );
}

export default function GeerMLMFeatures() {
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
            src={img10}
            alt="Geer MLM Features"
            className="w-full object-cover mb-8"
          />

          <p className="text-gray-800 font-bold text-lg mb-8">
            Are You Ready To Start Your Multi-Level Marketing Business?
          </p>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              1. Create Your Own Brand
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You can choose from our array of products and create your own
              brand.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
              <li>Coffee</li>
              <li>Soaps</li>
              <li>Perfumes</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              2. Logo and Branding
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A Logo is a company's first introduction to consumers. If designed
              well, it can pique the interest of the public and invite them to
              learn more about the company.
            </p>
            <img
              src={img11}
              alt="Logo and Branding"
              className="w-full rounded-xl object-cover mb-6"
            />
            <ReadMore />
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              3. Ready Made Platform
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You will have a ready made platform for your products.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li>Walleting System</li>
              <li>Reward Platform</li>
              <li>Genealogy</li>
              <li>Member's Dashboard</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              This feature allows the members to see their wallet and current
              income.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li>Member's Encashment</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              This feature allows member to request their wallet.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li>Member's Discount</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              This feature allows the administrators to manage discount of every
              product depending on the membership.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li>Code Generation</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              This feature allows the administrators to generate codes that can
              be used for membership.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li>Member's Product</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              This feature allows the member to re-purchase product using their
              wallet.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li>Gift Certificate</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              This feature allows the member to earn printable gift certificates
              that can be tracked.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
              <li>Basic E-Commerce and Cart System</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              This feature allows guest to purchase on the website. Cart system
              already included.
            </p>
            <img
              src={img12}
              alt="Ready Made Platform"
              className="w-full rounded-xl object-cover mb-6"
            />
            <ReadMore />
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              4. E-Commerce Ready
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Indicates the ability of individuals and/or the community to use
              ICT for online transactions including payments, buying and selling
              of different products and services.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-6">
              <li>Cash on Delivery Ready</li>
              <li>Shareable Products to Social Media</li>
              <li>Multivendor E-Commerce</li>
              <li>Payment Option</li>
              <li>Ready Made Logistics with AI Payo</li>
              <li>Ready Made Online Payment (ipay88, and dragonpay, etc.)</li>
              <li>Designs for your Website</li>
            </ul>
            <img
              src={img13}
              alt="E-Commerce Ready"
              className="w-full rounded-xl object-cover mb-6"
            />
            <ReadMore />
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              5. Transfer Wallet
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This feature allows the members to transfer wallet from one member
              to another.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              6. Basic Accounting
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This feature allows the administrators to track expenses, income,
              account receivables, and even account payables.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              7. Stockist
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This feature allows the administrators to create business centers.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              8. Compensation Plan
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Basic Compensation Plan are typical ways to earn that are commonly
              used by the companies.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              According to the modern Multi Level Marketing System or MLM
              Strategies, there are a number of network marketing plans you can
              choose from. We offer the best and the customized MLM compensation
              plan for all MLM companies to run their MLM business more
              effectively.
            </p>

            <img
              src={img4}
              alt="Binary Plan Diagram"
              className="w-full rounded-xl object-cover mb-6"
            />
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li className="font-bold text-gray-800">Binary Plan</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Binary MLM Plan known as (2 x n) Matrix Plan whereas the 'n'
              represents infinity. Binary MLM Plan is very easy to use and
              highly profitable for users and plans owners simultaneously.
            </p>
            <ReadMore />

            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li className="font-bold text-gray-800">Binary MLM System</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Binary MLM System is a web application that helps to manage binary
              networks such as to keep track on downline's incomes and
              expenditure.
            </p>
            <ReadMore />

            <img
              src={img5}
              alt="Matrix Plan Diagram"
              className="w-full rounded-xl object-cover mb-6"
            />
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li className="font-bold text-gray-800">Matrix MLM System</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Matrix MLM System is a web-based application that follows the
              Matrix MLM plan and helps to keep track of on downline's income
              and expenditure.
            </p>
            <ReadMore />

            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li className="font-bold text-gray-800">Unilevel MLM System</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unilevel MLM System is a web-based application that assists the
              Unilevel MLM plan and monitors downline income and expenditure.
            </p>
            <ReadMore />

            <img
              src={img6}
              alt="Matrix Plan"
              className="w-full rounded-xl object-cover mb-6"
            />
            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li className="font-bold text-gray-800">Matrix Plan</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-4">
              Matrix MLM Plan follows the fixed depth and width structure. It is
              one of the trendy MLM Plans available in the market now.
            </p>
            <ReadMore />

            <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
              <li className="font-bold text-gray-800">Board Plan</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              Board MLM Plan is also known as Revolving Matrix Plan. In this,
              the board always split when it is filled and the board leader
              graduates to the second board that is revolving.
            </p>
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
