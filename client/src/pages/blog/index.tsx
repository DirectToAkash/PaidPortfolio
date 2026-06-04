import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";

const blogPosts = [
  { slug: "best-premium-portfolio-website-india", title: "Best Premium Portfolio Website for Students, Doctors, Teachers & Professionals in India", description: "The complete guide to getting a premium, custom portfolio website in India. Covers students, doctors, teachers, and experienced professionals.", date: "April 20, 2025", readTime: "8 min read", tags: ["Premium Portfolio", "India"], featured: true },
  { slug: "portfolio-website-for-doctors-india", title: "Portfolio Website for Doctors in India — Complete Guide 2025", description: "Over 80% of patients search online before choosing a doctor. Build a professional portfolio website that attracts patients and referrals.", date: "April 21, 2025", readTime: "9 min read", tags: ["Doctors", "Medical"], featured: false },
  { slug: "portfolio-website-for-lawyers-india", title: "Portfolio Website for Lawyers & Advocates in India — Complete Guide 2025", description: "Build client trust, attract high-value cases, and grow your legal practice with a professional portfolio website.", date: "April 22, 2025", readTime: "8 min read", tags: ["Lawyers", "Legal"], featured: false },
  { slug: "portfolio-website-for-teachers-india", title: "Portfolio Website for Teachers in India — Complete Guide 2025", description: "Attract better schools, online students, and teaching opportunities with a professional teacher portfolio website.", date: "April 23, 2025", readTime: "8 min read", tags: ["Teachers", "Education"], featured: false },
  { slug: "portfolio-website-for-architects-india", title: "Portfolio Website for Architects in India — Complete Guide 2025", description: "Showcase your projects, attract high-value clients, and grow your architecture practice with a stunning portfolio website.", date: "April 24, 2025", readTime: "8 min read", tags: ["Architects", "Design"], featured: false },
  { slug: "portfolio-website-for-ca-india", title: "Portfolio Website for Chartered Accountants in India — Complete Guide 2025", description: "Win more clients online and grow your CA practice with a professional portfolio website trusted by businesses across India.", date: "April 25, 2025", readTime: "8 min read", tags: ["CA", "Finance"], featured: false },
  { slug: "portfolio-website-for-digital-marketers-india", title: "Portfolio Website for Digital Marketers in India — Complete Guide 2025", description: "Showcase campaign results, attract high-paying clients, and prove your skills with a professional digital marketing portfolio.", date: "April 26, 2025", readTime: "8 min read", tags: ["Digital Marketing", "SEO"], featured: false },
  { slug: "portfolio-website-for-software-developers-india", title: "Portfolio Website for Software Developers in India — Complete Guide 2025", description: "Get more job offers, higher salaries, and freelance clients with a custom developer portfolio website.", date: "April 27, 2025", readTime: "9 min read", tags: ["Developers", "Tech"], featured: false },
  { slug: "portfolio-website-for-graphic-designers-india", title: "Portfolio Website for Graphic Designers in India — Complete Guide 2025", description: "Showcase your work, attract direct clients, and build your design brand with a professional graphic designer portfolio website.", date: "April 28, 2025", readTime: "8 min read", tags: ["Graphic Design", "Creative"], featured: false },
  { slug: "portfolio-website-for-photographers-india", title: "Portfolio Website for Photographers in India — Complete Guide 2025", description: "Display your photography in the best light and attract premium clients with a professional photography portfolio website.", date: "April 29, 2025", readTime: "8 min read", tags: ["Photography", "Creative"], featured: false },
  { slug: "portfolio-website-for-interior-designers-india", title: "Portfolio Website for Interior Designers in India — Complete Guide 2025", description: "Showcase your interior design projects and attract high-value residential and commercial clients online.", date: "April 30, 2025", readTime: "8 min read", tags: ["Interior Design", "Creative"], featured: false },
  { slug: "portfolio-website-for-uiux-designers-india", title: "Portfolio Website for UI/UX Designers in India — Complete Guide 2025", description: "Land top product design roles and attract clients with a stunning UI/UX designer portfolio website.", date: "May 1, 2025", readTime: "9 min read", tags: ["UI/UX", "Product Design"], featured: false },
  { slug: "portfolio-website-for-data-scientists-india", title: "Portfolio Website for Data Scientists in India — Complete Guide 2025", description: "Showcase your data projects, models, and insights to land top data science roles and consulting clients.", date: "May 2, 2025", readTime: "8 min read", tags: ["Data Science", "Analytics"], featured: false },
  { slug: "portfolio-website-for-content-writers-india", title: "Portfolio Website for Content Writers in India — Complete Guide 2025", description: "Build your writing portfolio, attract high-paying clients, and establish your content writing brand online.", date: "May 3, 2025", readTime: "8 min read", tags: ["Content Writing", "Freelance"], featured: false },
  { slug: "portfolio-website-for-mba-graduates-india", title: "Portfolio Website for MBA Graduates in India — Complete Guide 2025", description: "Stand out in a competitive job market and attract consulting clients with a professional MBA portfolio website.", date: "May 4, 2025", readTime: "8 min read", tags: ["MBA", "Business"], featured: false },
  { slug: "portfolio-website-for-civil-engineers-india", title: "Portfolio Website for Civil Engineers in India — Complete Guide 2025", description: "Showcase your projects, attract employers, and grow your civil engineering career with a professional portfolio website.", date: "May 5, 2025", readTime: "8 min read", tags: ["Civil Engineering", "Construction"], featured: false },
  { slug: "portfolio-website-for-dentists-india", title: "Portfolio Website for Dentists in India — Complete Guide 2025", description: "Attract more patients, showcase your dental work, and build your practice online with a professional dentist portfolio website.", date: "May 6, 2025", readTime: "8 min read", tags: ["Dentists", "Healthcare"], featured: false },
  { slug: "portfolio-website-for-psychologists-india", title: "Portfolio Website for Psychologists and Therapists in India — Complete Guide 2025", description: "Build patient trust, grow your therapy practice, and establish your mental health brand online.", date: "May 7, 2025", readTime: "8 min read", tags: ["Psychology", "Mental Health"], featured: false },
  { slug: "portfolio-website-for-nutritionists-india", title: "Portfolio Website for Nutritionists and Dietitians in India — Complete Guide 2025", description: "Attract clients, build your nutrition brand, and grow your health coaching practice with a professional portfolio website.", date: "May 8, 2025", readTime: "8 min read", tags: ["Nutrition", "Health"], featured: false },
  { slug: "portfolio-website-for-fashion-designers-india", title: "Portfolio Website for Fashion Designers in India — Complete Guide 2025", description: "Showcase your collections, attract brands and clients, and build your fashion design career online.", date: "May 9, 2025", readTime: "8 min read", tags: ["Fashion Design", "Creative"], featured: false },
  { slug: "portfolio-website-for-financial-advisors-india", title: "Portfolio Website for Financial Advisors in India — Complete Guide 2025", description: "Build client trust, attract high-net-worth individuals, and grow your financial advisory practice online.", date: "May 10, 2025", readTime: "8 min read", tags: ["Finance", "Advisory"], featured: false },
  { slug: "portfolio-website-for-hr-professionals-india", title: "Portfolio Website for HR Professionals in India — Complete Guide 2025", description: "Build your personal brand, attract senior roles, and establish yourself as an HR thought leader online.", date: "May 11, 2025", readTime: "8 min read", tags: ["HR", "Recruitment"], featured: false },
  { slug: "portfolio-website-for-nurses-india", title: "Portfolio Website for Nurses and Paramedics in India — Complete Guide 2025", description: "Build your nursing career, attract international opportunities, and showcase your healthcare expertise online.", date: "May 12, 2025", readTime: "8 min read", tags: ["Nursing", "Healthcare"], featured: false },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Portfolio Tips &amp; Insights</h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">Expert guides on getting the best premium portfolio website — for every profession in India.</p>
        </motion.div>
        <div className="grid gap-6">
          {blogPosts.map((post, i) => (
            <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.04 }}>
              <Link href={`/blog/${post.slug}`}>
                <div className="glass border border-white/10 hover:border-white/25 rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-white/5 group">
                  {post.featured && <span className="inline-block text-xs font-semibold text-black bg-white rounded-full px-3 py-1 mb-4">Featured</span>}
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors leading-snug">{post.title}</h2>
                  <p className="text-white/50 text-sm mb-5 leading-relaxed">{post.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span>{post.date}</span>
                    {post.tags.map(tag => (<span key={tag} className="flex items-center gap-1"><Tag className="w-3 h-3" />{tag}</span>))}
                    <span className="ml-auto flex items-center gap-1 text-white/60 group-hover:text-white transition-colors font-medium">Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
