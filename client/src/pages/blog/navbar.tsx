import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/templates", label: "Templates" },
  { href: "/custom", label: "Custom Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({ showSplash = false }: { showSplash?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 20); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-strong" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <motion.div className="flex items-center gap-2 cursor-pointer" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <motion.div className="w-8 h-8 flex items-center justify-center overflow-hidden" layoutId="brand-logo" transition={{ duration: 0.8, ease: "easeInOut" }}>
                <img src="/logo-icon.png" alt="PaidPortfolio Logo" className="w-full h-full object-cover" />
              </motion.div>
              <motion.span className="text-xl font-bold tracking-tight text-white" data-testid="text-logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: showSplash ? 0 : 1, x: showSplash ? -20 : 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}>
                PaidPortfolio
              </motion.span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${location === link.href ? "text-white bg-white/10" : "text-white/70 hover:text-white hover:bg-white/5"}`}
                  whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}
                  data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}>
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/book">
              <Button className="bg-white text-black hover:bg-white/90 glow-sm">
                <Sparkles className="w-4 h-4 mr-2" />Book a Call
              </Button>
            </Link>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="md:hidden glass-strong border-t border-white/10 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`block px-4 py-3 text-sm font-medium cursor-pointer transition-colors ${location === link.href ? "text-white" : "text-white/70 hover:text-white"}`} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="px-4 pt-3">
                <Link href="/book"><Button className="w-full bg-white text-black hover:bg-white/90"><Sparkles className="w-4 h-4 mr-2" />Book a Call</Button></Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
