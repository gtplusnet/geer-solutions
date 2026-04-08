import { motion } from 'framer-motion';
import {
  Network,
  LayoutDashboard,
  Globe,
  Wallet,
  Percent,
  GitBranch,
  ShoppingCart,
  KeyRound,
  Package,
  Gift,
  Calculator,
  Building2,
  Layers,
  Clock,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import AnimatedSection from '../../components/ui/AnimatedSection';
import Button from '../../components/ui/Button';
import CTABanner from '../../components/sections/CTABanner';

const features = [
  {
    title: "Member's Dashboard",
    desc: 'Displays user wallet and current income status with real-time updates on earnings, bonuses, and network activity.',
    icon: LayoutDashboard,
  },
  {
    title: 'Website Design',
    desc: 'Professional layout with Home, About Us, Shop, Contact Us, Login & Register sections to enhance user experience and conversion.',
    icon: Globe,
  },
  {
    title: "Member's Encashment",
    desc: 'Enables members to request wallet withdrawals with streamlined processing and approval workflows.',
    icon: Wallet,
  },
  {
    title: "Member's Discount",
    desc: 'Admin capability to manage product-specific discounts based on membership tier and performance levels.',
    icon: Percent,
  },
  {
    title: 'Genealogy',
    desc: 'Tree-structured system displaying business hierarchy with comprehensive member information across organization branches.',
    icon: GitBranch,
  },
  {
    title: 'E-Commerce Ready',
    desc: 'Includes multivendor e-commerce, online payment integration, logistics, social media sharing, COD capability, and automatic shipping calculation.',
    icon: ShoppingCart,
  },
  {
    title: 'Code Generation',
    desc: 'Allows members to generate membership codes for distribution, enabling easy network expansion and member onboarding.',
    icon: KeyRound,
  },
  {
    title: "Member's Product",
    desc: 'Enables members to repurchase products using wallet funds, creating a seamless internal purchasing experience.',
    icon: Package,
  },
  {
    title: 'Gift Certification',
    desc: 'Provides trackable, printable gift certificates that can be used for promotions and member incentives.',
    icon: Gift,
  },
  {
    title: 'Basic Accounting',
    desc: 'Admin tracking of expenses, income, accounts receivable, and accounts payable for complete financial oversight.',
    icon: Calculator,
  },
  {
    title: 'Stockiest',
    desc: 'Allows administrators to establish and manage business centers for regional distribution and operations.',
    icon: Building2,
  },
  {
    title: 'Compensation Plan',
    desc: 'Supports multiple plan types including Binary, Unilevel, Matrix, and Hybrid systems with flexible configuration.',
    icon: Layers,
  },
];

const benefits = [
  'Secure, reliable, and user-friendly web-based system',
  'Easy tracking of users, sponsors, and referral hierarchies',
  'Comprehensive sales and revenue reporting',
  'Analytical and pictorial presentation of network structure',
  'Multiple compensation plan support',
  'Built-in e-commerce with payment processing',
  'Ready to launch within 2-6 weeks',
];

export default function MlmReadyMadePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-darker overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Network className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  Ready-made MLM System
                </h1>
                <p className="text-text-white/60 mt-1">Launch your MLM business with a complete, proven platform</p>
              </div>
            </div>

            <p className="text-text-white/70 text-lg leading-relaxed mt-6 max-w-2xl">
              A secure, reliable, and user-friendly web-based MLM system that provides easy tracking of users,
              sponsors, and referral hierarchies along with comprehensive reports on sales, revenue, and
              analytical presentation of your network structure.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2">
                <span className="text-sm text-text-white/60">Starting at</span>
                <span className="text-lg font-bold text-primary">₱{(90000).toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2 text-text-white/60">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Delivery: 2-6 weeks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-darker mb-2">System Features</h2>
            <p className="text-text-light mb-10 max-w-2xl">
              Everything you need to run a successful MLM business, built into one powerful platform.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.title} delay={index * 0.05}>
                  <div className="bg-surface rounded-xl p-6 border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-darker">{feature.title}</h3>
                    </div>
                    <p className="text-text-light text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + CTA Sidebar */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-darker mb-6">Why Choose Our Ready-made System?</h2>
              <p className="text-text-light text-lg leading-relaxed mb-8">
                Network marketing system designed to streamline delivery and payment processes, enabling
                business growth through various delivery options. Our platform handles order management,
                checkout functionality, item uploads, customer and dealership tracking, discount management,
                shipping and COD options, compensation plan administration, and genealogy tracking — all out of the box.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Order Management', desc: 'Full checkout and order tracking functionality' },
                  { title: 'Payment Processing', desc: 'Multiple payment gateways and COD support' },
                  { title: 'Shipping Integration', desc: 'Automated shipping calculation and logistics' },
                  { title: 'Dealer Tracking', desc: 'Complete customer and dealership management' },
                  { title: 'Discount System', desc: 'Flexible discount rules and promotions' },
                  { title: 'Compensation Admin', desc: 'Configure and manage multiple plan types' },
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-xl p-5 border border-border">
                    <h4 className="font-semibold text-darker mb-1">{item.title}</h4>
                    <p className="text-text-light text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-bold text-darker mb-4">Benefits</h3>
                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-success mt-0.5 shrink-0" />
                      <span className="text-text text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-text-light text-sm">Starting at</span>
                    <span className="text-2xl font-bold text-primary">₱{(90000).toLocaleString()}</span>
                  </div>
                  <p className="text-text-light text-xs">Delivery in 2-6 weeks</p>
                </div>

                <Button to="/contact" size="md" className="w-full">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
