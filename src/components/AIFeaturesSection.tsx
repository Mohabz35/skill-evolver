import { motion } from "framer-motion";
import { 
  Scan, 
  Brain, 
  Layers, 
  Radar,
  Sparkles,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Predictive Skill Gap Analysis",
    description: "Anticipates what you'll need before you know it, staying ahead of market demands.",
    gradient: "from-primary to-purple-500",
  },
  {
    icon: Brain,
    title: "Personalized Learning Metabolism",
    description: "Adapts to your cognitive rhythm—when you learn best, how fast, and your ideal session length.",
    gradient: "from-accent to-orange-400",
  },
  {
    icon: Layers,
    title: "Cross-Industry Insight Fusion",
    description: "Connects dots between seemingly unrelated fields, revealing unique competitive advantages.",
    gradient: "from-success to-teal-400",
  },
  {
    icon: Radar,
    title: "Trend Anticipation Engine",
    description: "Identifies emerging skills 6-12 months before mainstream adoption.",
    gradient: "from-primary to-blue-400",
  },
];

export const AIFeaturesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 inline mr-2 text-primary" />
            AI Evolution Intelligence
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Intelligence That{" "}
            <span className="gradient-text">Evolves With You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our AI doesn't just respond—it anticipates, adapts, and accelerates your growth.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative h-full glass rounded-3xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-50`} />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {feature.description}
                </p>

                {/* Animated accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-full h-full text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "10K+", label: "Skills Mapped" },
            { value: "6-12mo", label: "Trend Prediction" },
            { value: "98%", label: "Path Accuracy" },
            { value: "24/7", label: "AI Mentorship" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
