import { motion } from "framer-motion";
import { 
  Route, 
  Lightbulb, 
  Puzzle, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const bridges = [
  {
    icon: Route,
    title: "Intelligent Prerequisite Mapping",
    description: "AI detects exactly what you need to learn first, eliminating wasted effort.",
    color: "primary",
  },
  {
    icon: Lightbulb,
    title: "Adaptive Learning Pathways",
    description: "Routes adjust in real-time based on your progress speed and style.",
    color: "accent",
  },
  {
    icon: Puzzle,
    title: "Real-World Project Integration",
    description: "Every skill leads to a tangible project you can showcase.",
    color: "success",
  },
  {
    icon: Users,
    title: "Peer Validation Engine",
    description: "Community-verified skill demonstrations for credibility.",
    color: "primary",
  },
  {
    icon: Award,
    title: "Industry Certification Alignment",
    description: "Direct pathways to recognized credentials and certifications.",
    color: "accent",
  },
];

const steps = [
  { label: "Current Skills", icon: CheckCircle2 },
  { label: "Prerequisites", icon: CheckCircle2 },
  { label: "Core Learning", icon: Puzzle },
  { label: "Projects", icon: Lightbulb },
  { label: "Validation", icon: Users },
  { label: "Mastery", icon: Award },
];

export const BridgeSystemSection = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container relative mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-success mb-4">
            The Bridge System™
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            We Build{" "}
            <span className="gradient-text-success">Learning Architectures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Not just courses—complete skill evolution systems designed for your unique journey.
          </p>
        </motion.div>

        {/* Visual Bridge Path */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-success rounded-full -translate-y-1/2" />
            
            {/* Steps */}
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    className={`relative w-14 h-14 rounded-xl flex items-center justify-center z-10 ${
                      index <= 1 
                        ? "bg-primary text-primary-foreground" 
                        : "glass border-2 border-muted"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="w-6 h-6" />
                    {index <= 1 && (
                      <div className="absolute inset-0 rounded-xl bg-primary blur-lg opacity-50" />
                    )}
                  </motion.div>
                  <span className="mt-3 text-sm font-medium text-muted-foreground text-center max-w-[80px]">
                    {step.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bridges.map((bridge, index) => (
            <motion.div
              key={bridge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="h-full glass rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
                  bridge.color === "primary" ? "bg-primary/20 text-primary" :
                  bridge.color === "accent" ? "bg-accent/20 text-accent" :
                  "bg-success/20 text-success"
                }`}>
                  <bridge.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {bridge.title}
                </h3>
                <p className="text-muted-foreground">
                  {bridge.description}
                </p>
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
