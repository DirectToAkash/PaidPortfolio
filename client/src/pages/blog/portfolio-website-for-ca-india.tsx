import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function BlogCAPortfolio() {
  useEffect(() => {
    document.title = "Portfolio Website for Chartered Accountants in India — Complete Guide 2025 | PaidPortfolio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Why every CA and chartered accountant in India needs a professional portfolio website. Build client trust, attract businesses, and grow your accounting practice online.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://paidportfolio.com/blog/portfolio-website-for-ca-india");
  }, []);

  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link href="/blog"><span className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 cursor-pointer transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Blog</span></Link>
        </motion.div>
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {["Portfolio Website for CA", "Chartered Accountant Website", "CA Portfolio India", "Premium Portfolio"].map(tag => (
              <span key={tag} className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">Portfolio Website for Chartered Accountants in India — Complete Guide 2025</h1>
          <p className="text-white/50 text-base leading-relaxed mb-5">India has over 3.5 lakh practising Chartered Accountants. Businesses searching for a trusted CA today start online. A professional portfolio website is how forward-thinking CAs in India win more clients, build stronger practices, and grow their revenue consistently.</p>
          <div className="flex items-center gap-4 text-sm text-white/30 border-t border-white/10 pt-5">
            <span>April 25, 2025</span><span>·</span><span>8 min read</span><span>·</span><span>PaidPortfolio</span>
          </div>
        </motion.header>
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="prose-custom">
          <style>{`.prose-custom h2{font-size:1.5rem;font-weight:700;color:white;margin:2.5rem 0 1rem;line-height:1.3}.prose-custom h3{font-size:1.15rem;font-weight:600;color:rgba(255,255,255,0.9);margin:2rem 0 0.75rem}.prose-custom p{color:rgba(255,255,255,0.6);line-height:1.8;margin-bottom:1.2rem;font-size:0.97rem}.prose-custom ul{margin:1rem 0 1.5rem 1.25rem}.prose-custom ul li{color:rgba(255,255,255,0.6);margin-bottom:0.5rem;font-size:0.97rem;line-height:1.7;list-style:disc}.prose-custom strong{color:rgba(255,255,255,0.9);font-weight:600}.prose-custom table{width:100%;border-collapse:collapse;margin:1.5rem 0 2rem;font-size:0.9rem}.prose-custom th{background:rgba(255,255,255,0.08);color:white;padding:0.65rem 1rem;text-align:left;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.1)}.prose-custom td{color:rgba(255,255,255,0.6);padding:0.65rem 1rem;border-bottom:1px solid rgba(255,255,255,0.06)}.prose-custom tr:last-child td{border-bottom:none}.prose-custom blockquote{border-left:3px solid rgba(255,255,255,0.2);padding-left:1.25rem;margin:1.5rem 0;color:rgba(255,255,255,0.5);font-style:italic}`}</style>

          <h2>Why CAs in India Need a Portfolio Website in 2025</h2>
          <p>When a startup founder, a small business owner, or an individual needs a Chartered Accountant, they no longer ask only for referrals — they search online. A <strong>portfolio website for CAs in India</strong> ensures that when potential clients search for accounting, taxation, or audit services in your city, they find you first.</p>
          <p>Beyond client acquisition, a CA portfolio website builds the professional credibility that commands higher fees, attracts better clients, and establishes your practice as a trusted name in your field.</p>

          <h2>What a CA Portfolio Website Should Include</h2>
          <table>
            <thead><tr><th>Section</th><th>What to Include</th></tr></thead>
            <tbody>
              <tr><td><strong>Homepage</strong></td><td>Your name, services overview, years of practice, strong CTA</td></tr>
              <tr><td><strong>About</strong></td><td>Your CA journey, firm details, professional values</td></tr>
              <tr><td><strong>Services</strong></td><td>Taxation, audit, GST, company registration, financial consulting</td></tr>
              <tr><td><strong>Credentials</strong></td><td>ICAI membership, specialisations, certifications</td></tr>
              <tr><td><strong>Client Types</strong></td><td>Startups, SMEs, individuals, NRIs, corporates</td></tr>
              <tr><td><strong>Testimonials</strong></td><td>Client reviews building trust</td></tr>
              <tr><td><strong>Blog</strong></td><td>Tax tips, GST updates, financial planning articles</td></tr>
              <tr><td><strong>Contact</strong></td><td>Office address, phone, consultation request form</td></tr>
            </tbody>
          </table>

          <h2>8 Reasons Every CA in India Needs a Portfolio Website</h2>

          <h3>1. Businesses Search for CAs Online</h3>
          <p>Startups, SMEs, and individuals searching for a CA in India increasingly use Google — searching "CA near me," "GST consultant in Delhi," or "startup CA in Bangalore." A <strong>CA portfolio website</strong> with proper SEO puts you in front of these searches every day.</p>

          <h3>2. Build Trust with New Clients</h3>
          <p>Financial matters require the highest level of trust. A professional portfolio website with your ICAI credentials, services, experience, and client testimonials builds that trust before the first meeting — converting more inquiries into actual clients.</p>

          <h3>3. Attract Startups and Growing Businesses</h3>
          <p>Startups and growing businesses are among the most valuable clients for a CA practice. These tech-savvy founders always research their CA online before engaging them. A modern, professional portfolio website makes you the obvious choice over CAs with no online presence.</p>

          <h3>4. Showcase Your Specialisation</h3>
          <p>Are you a GST specialist, an international taxation expert, an NRI taxation consultant, or a startup CFO advisor? A portfolio website communicates your exact specialisation clearly — attracting the right clients rather than generic inquiries.</p>

          <h3>5. Rank on Google for Accounting Services in Your City</h3>
          <p>With proper SEO, your CA portfolio website can rank for searches like "chartered accountant in Mumbai" or "income tax consultant Noida." This brings high-intent clients to you organically — without spending on advertising.</p>

          <h3>6. Establish Thought Leadership Through a Blog</h3>
          <p>CAs who write about taxation changes, GST updates, investment strategies, and financial planning build enormous credibility online. A blog section on your portfolio website drives ongoing traffic and establishes you as the go-to expert in your field.</p>

          <h3>7. Attract NRI and International Clients</h3>
          <p>NRIs managing assets, income, and taxation in India actively search online for qualified CAs. A professional English-language portfolio website is essential for attracting this high-value client segment who cannot rely on local word-of-mouth referrals.</p>

          <h3>8. Justify Premium Fees</h3>
          <p>A professional portfolio website signals expertise and seriousness. CAs with a strong online presence consistently command higher fees than those without one — because clients perceive them as more credible, established, and trustworthy.</p>

          <h2>CA Portfolio Website Pricing in India</h2>
          <table>
            <thead><tr><th>Package</th><th>Price Range</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td>Template Portfolio</td><td>Rs. 4,000 – Rs. 8,000</td><td>Fresh CAs starting practice</td></tr>
              <tr><td>Custom Portfolio</td><td>Rs. 8,000 – Rs. 20,000</td><td>Practising CAs, small firms</td></tr>
              <tr><td>Premium Portfolio</td><td>Rs. 20,000 – Rs. 40,000</td><td>Senior CAs, large practices</td></tr>
            </tbody>
          </table>
          <p>All packages include our <strong>Trust Guarantee — pay only after you approve the completed website.</strong></p>

          <h2>Frequently Asked Questions</h2>
          <h3>Is a portfolio website allowed for CAs under ICAI guidelines?</h3>
          <p>Yes. A professional portfolio website presenting your credentials, services, and contact information is completely appropriate under ICAI guidelines. It is an informational professional presence. Thousands of CAs across India maintain professional portfolio websites successfully.</p>
          <h3>What makes a CA portfolio website different from a general professional website?</h3>
          <p>A CA portfolio website specifically highlights your ICAI credentials, service specialisations (taxation, audit, GST, etc.), client types served, and positions you as a trusted financial expert. It is designed to build the high level of trust that financial clients require before engaging a CA.</p>
          <h3>Can a fresh CA articled assistant benefit from a portfolio website?</h3>
          <p>Yes — especially for building a personal brand early, positioning yourself for better job opportunities at top CA firms, and establishing the foundation for an independent practice in the future.</p>
        </motion.article>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-14 glass border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get Your CA Portfolio Website Today</h2>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">Win more clients online. Pay only after you approve the completed work.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book"><span className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors cursor-pointer text-sm">Book Free Consultation <ArrowRight className="w-4 h-4" /></span></Link>
            <Link href="/templates"><span className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-sm">Browse Designs</span></Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
