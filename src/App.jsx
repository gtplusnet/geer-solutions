import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import SolutionsPage from "./pages/SolutionsPage";
import AccountingPage from "./pages/solutions/AccountingPage";
import BlockchainPage from "./pages/solutions/BlockchainPage";
import BrandingPage from "./pages/solutions/BrandingPage";
import EcommercePage from "./pages/solutions/EcommercePage";
import InventoryPage from "./pages/solutions/InventoryPage";
import PayrollPage from "./pages/solutions/PayrollPage";
import PosPage from "./pages/solutions/PosPage";
import SmsPage from "./pages/solutions/SmsPage";
import MlmPage from "./pages/solutions/MlmPage";
import MlmReadyMadePage from "./pages/solutions/MlmReadyMadePage";
import EventsPage from "./pages/EventsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import UnderDevelopmentPage from "./pages/UnderDevelopmentPage";
import BlogPage from "./pages/Blogpages/BlogPage";
import BlogPostPage from "./pages/Blogpages/blogs/GeerE-CommerceFeatures";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="solutions/accounting" element={<AccountingPage />} />
        <Route path="solutions/blockchain" element={<BlockchainPage />} />
        <Route path="solutions/branding" element={<BrandingPage />} />
        <Route path="solutions/ecommerce" element={<EcommercePage />} />
        <Route path="solutions/inventory" element={<InventoryPage />} />
        <Route path="solutions/payroll" element={<PayrollPage />} />
        <Route path="solutions/pos" element={<PosPage />} />
        <Route path="solutions/sms" element={<SmsPage />} />
        <Route path="solutions/mlm" element={<MlmPage />} />
        <Route path="solutions/mlm/ready-made" element={<MlmReadyMadePage />} />
        <Route
          path="solutions/mlm/compensation-plans/:plan"
          element={<UnderDevelopmentPage />}
        />
        <Route
          path="solutions/mlm/:subpage"
          element={<UnderDevelopmentPage />}
        />
        <Route path="events" element={<EventsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
