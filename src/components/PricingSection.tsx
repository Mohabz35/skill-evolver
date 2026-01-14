import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Explorer",
    description: "Start your skill journey",
    price: "Free",
    period: "",
    icon: Sparkles,
    features: [
      "Basic skill assessment",
      "1 active learning bridge",
      "Community access",
      "Limited AI insights",
    ],
    cta: "Start Free",
    variant: "heroOutline" as const,
    popular: false,
  },
  {
    name: "Builder",
    description: "Accelerate your growth",
    price: "$29",
    period: "/month",
    icon: Zap,
    features: [
      "Unlimited bridges",
      "Advanced AI analysis",
      "Portfolio generation",
      "Certification pathways",
      "Priority community features",
    ],
    cta: "Start Building",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Pioneer",
    description: "Master your evolution",
    price: "$99",
    period: "/month",
    icon: Crown,
    features: [
      "1:1 AI mentor access",
      "Industry expert sessions",
      "Blockchain verification",
      "Premium portfolio hosting",
      "Job market intelligence",
    ],
    cta: "Go Pioneer",
    variant: "accent" as const,
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Invest in Your{" "}
            <span className="gradient-text">Evolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the path that matches your ambition. Start free, scale as you grow.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple-500 text-primary-foreground text-sm font-medium z-10">
                  Most Popular
                </div>
              )}
              
              <div className={`h-full rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? "glass-strong border-2 border-primary/50 hover:shadow-primary/20" 
                  : "glass hover:shadow-primary/10"
              }`}>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-display text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-primary" : "text-success"
                      }`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={plan.variant} size="lg" className="w-full">
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need a solution for your team?
          </p>
          <Button variant="glass" size="lg">
            Contact for Enterprise
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
