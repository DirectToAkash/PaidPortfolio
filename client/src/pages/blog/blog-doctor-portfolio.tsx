import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect } from "react";

export default function BlogDoctorPortfolio() {

  useEffect(() => {
    document.title = "Portfolio Website for Doctors in India — Complete Guide 2025 | PaidPortfolio";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Complete guide to getting a professional portfolio website for doctors in India. Build trust with patients, attract referrals, and grow your medical practice online. Custom doctor websites by PaidPortfolio.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://paidportfolio.com/blog/portfolio-website-for-doctors-india");
  }, []);

  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <Link href="/blog">
            <span className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 cursor-pointer transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </span>
          </Link>
        </motion.div>

        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {["Portfolio Website for Doctors", "Doctor Website India", "Medical Professional Portfolio", "Premium Portfolio"].map(tag => (
              <span key={tag} className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1">{tag}</span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Portfolio Website for Doctors in India — Complete Guide 2025
          </h1>
          <p className="text-white/50 text-base leading-relaxed mb-5">
            Over 80% of patients in India search online before choosing a doctor. If you don't have a professional portfolio website, you're invisible to most of them. This complete guide covers everything a doctor needs to know about building a powerful online presence — and how to get it done without the hassle.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/30 border-t border-white/10 pt-5">
            <span>April 20, 2025</span><span>·</span><span>9 min read</span><span>·</span><span>PaidPortfolio</span>
          </div>
        </motion.header>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="prose-custom">
          <style>{`
            .prose-custom h2 { font-size: 1.5rem; font-weight: 700; color: white; margin: 2.5rem 0 1rem; line-height: 1.3; }
            .prose-custom h3 { font-size: 1.15rem; font-weight: 600; color: rgba(255,255,255,0.9); margin: 2rem 0 0.75rem; }
            .prose-custom p { color: rgba(255,255,255,0.6); line-height: 1.8; margin-bottom: 1.2rem; font-size: 0.97rem; }
            .prose-custom ul { margin: 1rem 0 1.5rem 1.25rem; }
            .prose-custom ul li { color: rgba(255,255,255,0.6); margin-bottom: 0.5rem; font-size: 0.97rem; line-height: 1.7; list-style: disc; }
            .prose-custom strong { color: rgba(255,255,255,0.9); font-weight: 600; }
            .prose-custom table { width: 100%; border-collapse: collapse; margin: 1.5rem 0 2rem; font-size: 0.9rem; }
            .prose-custom th { background: rgba(255,255,255,0.08); color: white; padding: 0.65rem 1rem; text-align: left; font-weight: 600; border-bottom: 1px solid rgba(255,255,255,0.1); }
            .prose-custom td { color: rgba(255,255,255,0.6); padding: 0.65rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.06); }
            .prose-custom tr:last-child td { border-bottom: none; }
            .prose-custom blockquote { border-left: 3px solid rgba(255,255,255,0.2); padding-left: 1.25rem; margin: 1.5rem 0; color: rgba(255,255,255,0.5); font-style: italic; }
          `}</style>

          <h2>Why Every Doctor in India Needs a Portfolio Website in 2025</h2>
          <p>Think about what happens when a patient hears your name for the first time. The very first thing they do is Google you. What do they find? An outdated Practo listing? A hospital page with a tiny photo and 3 lines of text? Or nothing at all?</p>
          <p>A <strong>professional portfolio website for doctors</strong> changes this completely. It gives patients a full, trustworthy picture of who you are — your qualifications, your experience, your specialisation, your values — before they even walk through your door.</p>
          <p>In India's rapidly growing digital healthcare landscape, doctors with a strong online presence attract more patients, build more trust, and grow their practice faster than those without one. It is no longer optional.</p>

          <h2>What Is a Doctor Portfolio Website?</h2>
          <p>A <strong>doctor portfolio website</strong> is a personal professional website that belongs entirely to you — not to a hospital, not to Practo, not to Justdial. It is your own corner of the internet where you control 100% of what patients, colleagues, and institutions see about you.</p>
          <p>It is different from a clinic website (which focuses on the clinic) or a hospital profile (which is generic). Your portfolio website is about <strong>you as a medical professional</strong> — your story, your expertise, your achievements, and why patients should trust you with their health.</p>

          <h2>8 Reasons Doctors in India Need a Portfolio Website Right Now</h2>

          <h3>1. Patients Google You Before They Visit</h3>
          <p>Studies show over 80% of patients in India search online before choosing a doctor. If they Google your name and find nothing professional, many will move on to a doctor who does have a strong online presence. A portfolio website ensures that when patients search for you, they find exactly what you want them to see.</p>

          <h3>2. Build Trust Before the First Appointment</h3>
          <p>Trust is everything in medicine. A well-designed portfolio website with your photo, qualifications, publications, and patient testimonials builds trust <strong>before</strong> the patient even calls your clinic. They arrive already confident in your expertise — which makes the consultation smoother and more productive.</p>

          <h3>3. Rank on Google for Your Specialisation</h3>
          <p>When someone searches "cardiologist in Delhi," "best dermatologist Noida," or "gynecologist near Pune," a doctor with an SEO-optimised portfolio website has a real chance of appearing in those results. This is free, organic visibility that brings new patients to you every single day — without paying for ads.</p>

          <h3>4. Showcase Your Qualifications and Research</h3>
          <p>MBBS, MD, DM, FRCS, published papers, international fellowships, conference presentations — your credentials deserve a proper showcase. A LinkedIn profile simply doesn't do justice to a 15-year medical career. Your portfolio website gives each achievement the space and prominence it deserves.</p>

          <h3>5. Attract Referrals from Other Doctors</h3>
          <p>Referrals are the lifeblood of specialist practice in India. When a general physician wants to refer a patient to a specialist, they often look online to verify credentials and specialisation. A professional portfolio website makes you the obvious, trustworthy choice for referrals in your field.</p>

          <h3>6. Grow Beyond Your Current City or Hospital</h3>
          <p>A portfolio website has no geographic boundary. Patients from other cities, NRIs seeking specialist opinions, international medical institutions looking for collaborators — all of them can find you online. Many senior doctors in India have expanded their consultancy and speaking careers significantly through their online presence.</p>

          <h3>7. Position Yourself for Speaking, Teaching, and Consulting</h3>
          <p>Medical conferences, hospital CMEs, pharmaceutical companies, medical colleges — all of them look online when selecting speakers, consultants, and faculty. A professional portfolio website positions you as a thought leader in your specialisation, opening doors that would otherwise remain closed.</p>

          <h3>8. You Own It — Unlike Hospital Profiles or Third-Party Listings</h3>
          <p>Your Practo profile, hospital website entry, or Justdial listing can change or disappear at any time. Your personal portfolio website belongs entirely to you. It goes with you through every job change, every career transition, every new achievement — building and growing throughout your entire career.</p>

          <h2>What Should a Doctor's Portfolio Website Include?</h2>
          <table>
            <thead><tr><th>Section</th><th>What to Include</th></tr></thead>
            <tbody>
              <tr><td><strong>Homepage</strong></td><td>Your name, specialisation, photo, hospital/clinic, quick CTA to book</td></tr>
              <tr><td><strong>About Me</strong></td><td>Your medical journey, values, why you chose your specialisation</td></tr>
              <tr><td><strong>Qualifications</strong></td><td>MBBS, MD, DM, fellowships, certifications, awards</td></tr>
              <tr><td><strong>Specialisations</strong></td><td>Detailed list of conditions treated and procedures performed</td></tr>
              <tr><td><strong>Research & Publications</strong></td><td>Published papers, conference presentations, contributions</td></tr>
              <tr><td><strong>Patient Testimonials</strong></td><td>Reviews and feedback from patients (anonymised if needed)</td></tr>
              <tr><td><strong>Contact & Booking</strong></td><td>Clinic address, hours, phone, online appointment form</td></tr>
              <tr><td><strong>Blog / Health Tips</strong></td><td>Short articles on your specialisation — builds SEO and trust</td></tr>
            </tbody>
          </table>

          <h2>Doctor Portfolio Website vs Practo / Justdial — What's the Difference?</h2>
          <p>Many doctors assume that a Practo profile or a hospital website is enough. Here's why it isn't:</p>
          <table>
            <thead><tr><th>Feature</th><th>Practo / Justdial</th><th>Your Own Portfolio Website</th></tr></thead>
            <tbody>
              <tr><td>Ownership</td><td>Platform owns your profile</td><td>You own it 100%</td></tr>
              <tr><td>Branding</td><td>Same as every other doctor</td><td>Fully custom to you</td></tr>
              <tr><td>Control</td><td>Limited — platform decides what shows</td><td>Complete control</td></tr>
              <tr><td>Google ranking</td><td>Ranks for platform, not for you</td><td>Ranks for your name directly</td></tr>
              <tr><td>Referral credibility</td><td>Low — anyone can list</td><td>High — it's your professional site</td></tr>
              <tr><td>Research showcase</td><td>Not possible</td><td>Full publications section</td></tr>
              <tr><td>Speaking/consulting</td><td>Not possible</td><td>Yes — positions you as expert</td></tr>
            </tbody>
          </table>
          <p>Practo and Justdial serve a purpose — but they are directories, not personal brands. Your portfolio website <strong>is</strong> your personal brand.</p>

          <h2>Which Doctors Benefit Most from a Portfolio Website?</h2>
          <ul>
            <li><strong>Specialist doctors</strong> (cardiologists, dermatologists, orthopedic surgeons, neurologists) — attract direct patient inquiries</li>
            <li><strong>General physicians in private practice</strong> — build local visibility and patient trust</li>
            <li><strong>Dentists and dental surgeons</strong> — showcase before/after work, attract cosmetic dentistry patients</li>
            <li><strong>Gynecologists and obstetricians</strong> — build trust with patients on sensitive health matters</li>
            <li><strong>Pediatricians</strong> — reassure parents with professional credentials and warm personal presentation</li>
            <li><strong>Doctors seeking academic or research positions</strong> — showcase publications and academic work</li>
            <li><strong>Doctors building a consulting or speaking career</strong> — establish thought leadership online</li>
            <li><strong>MBBS freshers and postgraduate students</strong> — build a professional presence from day one</li>
          </ul>

          <h2>How Much Does a Doctor Portfolio Website Cost in India?</h2>
          <p>The cost of a professional doctor portfolio website in India varies depending on what you need:</p>
          <table>
            <thead><tr><th>Type</th><th>Price Range</th><th>Best For</th></tr></thead>
            <tbody>
              <tr><td>Basic template portfolio</td><td>Rs. 3,000 – Rs. 8,000</td><td>MBBS freshers, residents</td></tr>
              <tr><td>Custom professional portfolio</td><td>Rs. 8,000 – Rs. 20,000</td><td>Practicing specialists, GPs</td></tr>
              <tr><td>Premium portfolio with blog + SEO</td><td>Rs. 20,000 – Rs. 40,000</td><td>Senior consultants, academics</td></tr>
            </tbody>
          </table>
          <p>At <strong>PaidPortfolio</strong>, we offer all three tiers with a Trust Guarantee — you pay only after seeing and approving the completed website. No risk, no upfront commitment.</p>

          <h2>How PaidPortfolio Builds Doctor Websites</h2>
          <p>We have built portfolio websites for doctors, specialists, and healthcare professionals across India. Here is our process:</p>
          <ul>
            <li><strong>Step 1 — Free consultation call</strong> — we understand your specialisation, goals, and target audience</li>
            <li><strong>Step 2 — Custom design</strong> — we build a professional, medical-grade design that reflects your expertise</li>
            <li><strong>Step 3 — Content setup</strong> — we structure your qualifications, specialisations, and achievements professionally</li>
            <li><strong>Step 4 — SEO optimisation</strong> — we optimise for keywords like "your name + doctor + city" and your specialisation</li>
            <li><strong>Step 5 — Review and approve</strong> — you review the completed site and request any changes</li>
            <li><strong>Step 6 — Pay and go live</strong> — only after you're 100% happy</li>
          </ul>

          <h2>Frequently Asked Questions</h2>

          <h3>Do I need a portfolio website if I already have a hospital profile?</h3>
          <p>Yes. A hospital profile belongs to the hospital, not to you. When you change institutions, retire from that hospital, or build a private practice, that profile is gone. Your personal portfolio website stays with you your entire career and grows with every new achievement.</p>

          <h3>Will patients actually find my website on Google?</h3>
          <p>Yes — if it's built with proper SEO. Every website PaidPortfolio builds includes SEO optimisation for your name, specialisation, and location so patients searching for you or doctors like you can find your website in Google results.</p>

          <h3>I'm not tech-savvy. Can I still have a portfolio website?</h3>
          <p>Absolutely. PaidPortfolio handles everything — design, development, content setup, and going live. You don't write a single line of code or touch any technical settings. You just provide your information and we build it for you.</p>

          <h3>How is a doctor portfolio website different from a clinic website?</h3>
          <p>A clinic website is about the clinic — its services, location, and team. A doctor portfolio website is about <strong>you specifically</strong> — your personal brand, your qualifications, your research, your story. Both can be useful, but for personal credibility and career growth, a portfolio website is essential.</p>

          <h3>Can I get a portfolio website as an MBBS fresher or medical student?</h3>
          <p>Yes — and it's actually one of the smartest things you can do early in your career. A professional portfolio website sets you apart when applying for postgraduate seats, research positions, hospital jobs, or international opportunities from the very beginning.</p>
        </motion.article>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-14 glass border border-white/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get Your Doctor Portfolio Website Today</h2>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">Join hundreds of professionals who trust PaidPortfolio to build their online presence. Pay only after you approve the work.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/book">
              <span className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors cursor-pointer text-sm">
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link href="/templates">
              <span className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-sm">
                Browse Designs
              </span>
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
