import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useCurrency } from "@/hooks/use-currency";

const pricingPlans = [
  {
    name: "Starter Template",
    price: 10,
    priceInr: 950,
    description: "Perfect for students and beginners",
    features: [
      "Pre-designed template",
      "Mobile responsive",
      "Easy customization",
      "Documentation included",
      "1 year of updates",
      "Email support",
    ],
    popular: false,
    cta: "Browse Templates",
    href: "/templates",
  },
  {
    name: "Custom Portfolio",
    price: 80,
    priceInr: 6500,
    description: "For professionals who want to stand out",
    features: [
      "Fully custom design",
      "Unique animations",
      "SEO optimization",
      "Mobile first approach",
      "Unlimited revisions",
      "Priority support",
      "Free hosting setup",
      "1 year maintenance",
    ],
    popular: true,
    cta: "Get Custom Portfolio",
    href: "/custom",
  },
];

export function PricingSection() {
  const { currency, formatPrice } = useCurrency();

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Invest in Your<span className="text-glow"> Future</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include our satisfaction guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-semibold bg-white text-black">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`glass rounded-xl p-8 h-full ${plan.popular
                  ? "border-2 border-white/30 glow"
                  : "border border-white/10"
                  }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-white/50 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price, plan.priceInr)}
                    </span>
                    <span className="text-white/50">one-time</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href={plan.href}>
                  <Button
                    className={`w-full ${plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    data-testid={`button-pricing-${plan.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/40 text-sm mt-8"
        >
          All prices in {currency}. No hidden fees. 30-day money-back guarantee.
        </motion.p>
      </div>
    </section>
  );
}
