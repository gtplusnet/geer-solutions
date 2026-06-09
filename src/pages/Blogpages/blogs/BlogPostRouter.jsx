import { useParams } from "react-router-dom";
import GeerECommerceFeatures from "./GeerE-CommerceFeatures";
import GeerMLMFeatures from "./GeerMLMFeatures";
import NotFoundPage from "../../NotFoundPage";

const slugToComponent = {
  "geer-e-commerce-features": GeerECommerceFeatures,
  "geer-mlm-features": GeerMLMFeatures,
};

export default function BlogPostRouter() {
  const { slug } = useParams();
  const Component = slugToComponent[slug];
  return Component ? <Component /> : <NotFoundPage />;
}
