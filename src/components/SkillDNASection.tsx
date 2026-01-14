import { motion } from "framer-motion";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Sparkles, 
  Users, 
  Network, 
  Heart, 
  BarChart3,
  Clock
} from "lucide-react";

const dimensions = [
  { icon: Brain, label: "Proficiency Matrix", value: 78, color: "primary" },
  { icon: TrendingUp, label: "Growth Potential", value: 92, color: "success" },
  { icon: Target, label: "Market Alignment", value: 85, color: "accent" },
  { icon: Sparkles, label: "Future Relevance", value: 88, color: "primary" },
  { icon: Users, label: "Learning Style", value: 70, color: "success" },
  { icon: Network, label: "Adjacent Skills", value: 65, color: "accent" },
  { icon: Heart, label: "Confidence Level", value: 73, color: "primary" },
  { icon: BarChart3, label: "Peer Benchmark", value: 81, color: "success" },
  { icon: Clock, label: "Time to Mastery", value: 67, color: "accent" },
];

const colorMap = {
  primary: {
    bg: "bg-primary/20",
    fill: "bg-primary",
    text: "text-primary",
    glow: "shadow-primary/30",
  },
  success: {
    bg: "bg-success/20",
    fill: "bg-success",
    text: "text-success",
    glow: "shadow-success/30",
  },
  accent: {
    bg: "bg-accent/20",
    fill: "bg-accent",
    text: "text-accent",
    glow: "shadow-accent/30",
  },
};

export const SkillDNASection = () => {
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
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-accent mb-4">
            Skill DNA Engine™
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Your Unique{" "}
            <span className="gradient-text-accent">9-Dimensional</span>{" "}
            Skill Fingerprint
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every learner is unique. Our AI maps your complete skill profile across nine 
            dimensions that evolve in real-time.
          </p>
        </motion.div>

        {/* DNA Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: 3D-ish Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-border/50 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-primary/30" />
              <div className="absolute inset-8 rounded-full border border-success/30" />
              
              {/* Center core */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-purple-500 to-accent flex items-center justify-center">
                    <span className="font-display text-3xl font-bold text-primary-foreground">DNA</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-purple-500 to-accent blur-2xl opacity-50" />
                </div>
              </motion.div>

              {/* Orbiting nodes */}
              {dimensions.slice(0, 6).map((dim, index) => {
                const angle = (index * 60 - 90) * (Math.PI / 180);
                const radius = 45; // percentage from center
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                const colors = colorMap[dim.color as keyof typeof colorMap];
                
                return (
                  <motion.div
                    key={dim.label}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      className={`w-14 h-14 rounded-xl glass flex items-center justify-center ${colors.glow} shadow-lg`}
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <dim.icon className={`w-6 h-6 ${colors.text}`} />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Metrics list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {dimensions.map((dim, index) => {
              const colors = colorMap[dim.color as keyof typeof colorMap];
              
              return (
                <motion.div
                  key={dim.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="glass rounded-xl p-4 hover:bg-card/80 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                      <dim.icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{dim.label}</span>
                        <span className={`font-display font-bold ${colors.text}`}>
                          {dim.value}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full ${colors.bg} overflow-hidden`}>
                        <motion.div
                          className={`h-full rounded-full ${colors.fill}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${dim.value}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + 0.3, duration: 0.8 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
