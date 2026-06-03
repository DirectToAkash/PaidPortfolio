import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function BlogArchitectPortfolio() {
  useEffect(() => {
    document.title = "Portfolio Website for Architects in India — Complete Guide 2025 | PaidPortfolio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Why every architect in India needs a professional portfolio website. Showcase your projects, attract high-value clients, and grow your architecture practice online with PaidPortfolio.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://paidportfolio.com/blog/portfolio-website-for-architects-india");
  }, []);

  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link href="/blog"><span className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 cursor-pointer transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Blog</span></Link>
        </motion.div>
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {["Portfolio Website for Architects", "Architecture Portfolio India", "Architect Website", "Premium Portfolio"].map(tag => (
              <span key={tag} className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">Portfolio Website for Architects in India — Complete Guide 2025</h1>
          <p className="text-white/50 text-base leading-relaxed mb-5">Architecture is one of the most visual professions in the world. Your work deserves to be seen — by high-value clients, real estate developers, government bodies, and international firms. A professional portfolio website is how the best architects in India make that happen.</p>
          <div className="flex items-center gap-4 text-sm text-white/30 border-t border-white/10 pt-5">
            <span>April 24, 2025</span><span>·</span><span>8 min read</span><span>·</span><span>PaidPortfolio</span>
          </div>
        </motion.header>
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="prose-custom">
          <style>{`.prose-custom h2{font-size:1.5rem;font-weight:700;color:white;margin:2.5rem 0 1rem;line-height:1.3}.prose-custom h3{font-size:1.15rem;font-weight:600;color:rgba(255,255,255,0.9);margin:2rem 0 0.75rem}.prose-custom p{color:rgba(255,255,255,0.6);line-height:1.8;margin-bottom:1.2rem;font-size:0.97rem}.prose-custom ul{margin:1rem 0 1.5rem 1.25rem}.prose-custom ul li{color:rgba(255,255,255,0.6);margin-bottom:0.5rem;font-size:0.97rem;line-height:1.7;list-style:disc}.prose-custom strong{color:rgba(255,255,255,0.9);font-weight:600}.prose-custom table{width:100%;border-collapse:collapse;margin:1.5rem 0 2rem;font-size:0.9rem}.prose-custom th{background:rgba(255,255,255,0.08);color:white;padding:0.65rem 1rem;text-align:left;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.1)}.prose-custom td{color:rgba(255,255,255,0.6);padding:0.65rem 1rem;border-bottom:1px solid rgba(255,255,255,0.06)}.prose-custom tr:last-child td{border-bottom:none}.prose-custom blockquote{border-left:3px solid rgba(255,255,255,0.2);padding-left:1.25rem;margin:1.5rem 0;color:rgba(255,255,255,0.5);font-style:italic}`}</style>

          <h2>Why Architects in India Need a Portfolio Website</h2>
          <p>Architecture clients — whether homeowners planning a dream house, developers building commercial projects, or companies commissioning office spaces — always want to see your work before they hire you. A printed portfolio or PDF attachment simply does not have the impact of a beautifully designed <strong>architect portfolio website</strong> that showcases your projects with high-quality images, descriptions, and your design philosophy.</p>
          <p>In 2025, an architect without a professional portfolio website is leaving significant business on the table.</p>

          <h2>What an Architect Portfolio Website Should Include</h2>
          <table>
            <thead><tr><th>Section</th><th>What to Include</th></tr></thead>
            <tbody>
              <tr><td><strong>Homepage</strong></td><td>Hero image of your best project, name, specialisation, CTA</td></tr>
              <tr><td><strong>About</strong></td><td>Your design philosophy, education, years of experience</td></tr>
              <tr><td><strong>Projects</strong></td><td>Residential, commercial, interior, landscape — with photos and details</td></tr>
              <tr><td><strong>Services</strong></td><td>What you offer: design, planning, supervision, consulting</td></tr>
              <tr><td><strong>Process</strong></td><td>How you work from concept to completion</td></tr>
              <tr><td><strong>Credentials</strong></td><td>B.Arch, M.Arch, COA registration, awards</td></tr>
              <tr><td><strong>Testimonials</strong></td><td>Client reviews and project feedback</td></tr>
              <tr><td><strong>Contact</strong></td><td>Office location, phone, project inquiry form</td></tr>
            </tbody>
          </table>

          <h2>7 Reasons Every Architect in India Needs a Portfolio Website</h2>

          <h3>1. Your Work is Visual — It Deserves a Visual Showcase</h3>
          <p>Architecture is one of the most visual professions that exists. A <strong>professional architecture portfolio website</strong> with high-quality project photography, renders, and drawings showcases your work in a way that no resume, PDF, or Instagram post ever can.</p>

          <h3>2. Attract High-Value Residential Clients</h3>
          <p>Homeowners in India searching for an architect for their dream home always research online. A portfolio website showing beautiful residential projects — with client testimonials and a transparent process — builds the trust needed to win premium residential commissions.</p>

          <h3>3. Win Commercial and Corporate Projects</h3>
          <p>Developers and corporations commissioning office buildings, retail spaces, hotels, and commercial complexes research architects extensively online. A professional portfolio website with your commercial project experience is essential for competing for these high-value contracts.</p>

          <h3>4. Rank on Google for Architecture in Your City</h3>
          <p>When someone searches "architect in Hyderabad" or "best residential architect Pune," a well-optimised portfolio website appears in results. This is organic, free visibility bringing potential clients directly to you every day.</p>

          <h3>5. Stand Out When Applying to Architecture Firms</h3>
          <p>For architects seeking employment at leading firms — both in India and internationally — a portfolio website is now expected. It shows your best work in the most professional format possible and signals that you take your craft seriously.</p>

          <h3>6. Showcase Sustainable and Specialised Design</h3>
          <p>If you specialise in sustainable architecture, heritage conservation, landscape design, or interior architecture — a dedicated portfolio website communicates this specialisation powerfully, attracting exactly the right clients who are looking for your specific expertise.</p>

          <h3>7. Build an International Architecture Career</h3>
          <p>Architecture firms in the Middle East, Singapore, Europe, and North America actively recruit Indian architects. A professional portfolio website in English that showcases your best projects is your ticket to international career opportunities.</p>

          <h2>Architecture Portfolio Website vs Instagram or Behance</h2>
          <table>
            <thead><tr><th>Feature</th><th>Instagram / Behance</th><th>Personal Portfolio Website</th></tr></thead>
            <tbody>
              <tr><td>Professional credibility</td><td>Moderate</td><td>High — it's your own domain</td></tr>
              <tr><td>Project descriptions</td><td>Limited</td><td>Full detailed case studies</td></tr>
              <tr><td>SEO visibility</td><td>Poor</td><td>Excellent — ranks on Google</td></tr>
              <tr><td>Contact and inquiry</td><td>DMs only</td><td>Professional inquiry form</td></tr>
              <tr><td>Ownership</td><td>Platform owns it</td><td>100% yours</td></tr>
              <tr><td>Custom branding</td><td>No</td><td>Complete control</td></tr>
            </tbody>
          </table>

          <h2>Pricing for Architect Portfolio Websites in India</h2>
          <table>
            <thead><tr><th>Package</th><th>Price Range</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td>Template Portfolio</td><td>Rs. 5,000 – Rs. 10,000</td><td>Architecture students, fresh graduates</td></tr>
              <tr><td>Custom Portfolio</td><td>Rs. 10,000 – Rs. 25,000</td><td>Practicing architects, small firms</td></tr>
              <tr><td>Premium Portfolio</td><td>Rs. 25,000 – Rs. 50,000</td><td>Senior architects, established practices</td></tr>
            </tbody>
          </table>
          <p>All PaidPortfolio packages include our <strong>Trust Guarantee — pay only after you approve the final website.</strong></p>

          <h2>Frequently Asked Questions</h2>
          <h3>Should I show all my projects or just select ones?</h3>
          <p>Quality over quantity always. Show your 6–10 best projects in full detail rather than every project you have ever done. Clients are impressed by excellence, not volume.</p>
          <h3>Do I need professional photography for my portfolio website?</h3>
          <p>High-quality images make a massive difference for architecture portfolios. If professional photography isn't possible, high-resolution renders and clean drawings work well too. PaidPortfolio can advise you on making the most of the images you have.</p>
          <h3>Can architecture students benefit from a portfolio website?</h3>
          <p>Absolutely. Architecture students who build a portfolio website during their degree stand out significantly when applying for internships, thesis projects, and first jobs at leading firms.</p>
        </motion.article>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-14 glass border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get Your Architecture Portfolio Website Today</h2>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">Showcase your best projects to the world. Pay only after you approve the work.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book"><span className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors cursor-pointer text-sm">Book Free Consultation <ArrowRight className="w-4 h-4" /></span></Link>
            <Link href="/templates"><span className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-sm">Browse Designs</span></Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
