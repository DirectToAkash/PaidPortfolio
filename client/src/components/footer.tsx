import { Link } from "wouter";
import { Mail, MapPin, Phone, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Templates", href: "/templates" },
    { label: "Custom Portfolio", href: "/custom" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Features", href: "/#features" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative">
        <div className="h-px w-full gradient-line" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Link href="/">
                <div className="flex items-center gap-2 cursor-pointer mb-4">
                  <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                    <img src="/logo-icon.png" alt="PaidPortfolio Logo" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white">
                    PaidPortfolio
                  </span>
                </div>
              </Link>
              <p className="text-white/60 max-w-sm mb-6">
                We craft job-winning portfolio websites for students, developers, and creators.
                Your skills deserve to be showcased professionally.
              </p>

              <div className="space-y-3">
                <a
                  href="mailto:hello@paidportfolio.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="w-4 h-4" />
                  directtoakash@gmail.com
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4" />
                  Noida , India
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-4 h-4" />
                  +91 9984709265
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-white/60 hover:text-white transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-white/10 my-12" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              {new Date().getFullYear()} PaidPortfolio. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
