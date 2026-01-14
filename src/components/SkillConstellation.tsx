import { motion } from "framer-motion";

const skills = [
  { id: 1, name: "AI/ML", x: 50, y: 30, size: 20, color: "primary" },
  { id: 2, name: "Design", x: 25, y: 45, size: 16, color: "accent" },
  { id: 3, name: "Code", x: 75, y: 50, size: 18, color: "success" },
  { id: 4, name: "Data", x: 40, y: 65, size: 14, color: "primary" },
  { id: 5, name: "Strategy", x: 65, y: 25, size: 12, color: "accent" },
  { id: 6, name: "Writing", x: 20, y: 70, size: 10, color: "success" },
  { id: 7, name: "Leadership", x: 80, y: 75, size: 15, color: "primary" },
  { id: 8, name: "Analytics", x: 55, y: 80, size: 11, color: "accent" },
];

const connections = [
  [1, 3], [1, 5], [2, 4], [3, 7], [4, 8], [5, 7], [6, 2], [1, 4], [3, 4], [2, 6]
];

const colorClasses = {
  primary: {
    bg: "bg-primary",
    shadow: "shadow-primary/50",
    glow: "from-primary/40 to-transparent",
  },
  accent: {
    bg: "bg-accent",
    shadow: "shadow-accent/50",
    glow: "from-accent/40 to-transparent",
  },
  success: {
    bg: "bg-success",
    shadow: "shadow-success/50",
    glow: "from-success/40 to-transparent",
  },
};

export const SkillConstellation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {connections.map(([from, to], index) => {
          const fromSkill = skills.find((s) => s.id === from);
          const toSkill = skills.find((s) => s.id === to);
          if (!fromSkill || !toSkill) return null;
          return (
            <motion.line
              key={index}
              x1={`${fromSkill.x}%`}
              y1={`${fromSkill.y}%`}
              x2={`${toSkill.x}%`}
              y2={`${toSkill.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2, delay: index * 0.1 }}
            />
          );
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(230, 70%, 55%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(165, 70%, 45%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
      
      {skills.map((skill, index) => {
        const colors = colorClasses[skill.color as keyof typeof colorClasses];
        return (
          <motion.div
            key={skill.id}
            className="absolute"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.15,
              type: "spring",
              stiffness: 200,
            }}
          >
            {/* Glow effect */}
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-radial ${colors.glow} blur-xl`}
              style={{
                width: skill.size * 4,
                height: skill.size * 4,
                marginLeft: -skill.size * 1.5,
                marginTop: -skill.size * 1.5,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
            
            {/* Core node */}
            <motion.div
              className={`relative rounded-full ${colors.bg} shadow-lg ${colors.shadow}`}
              style={{
                width: skill.size,
                height: skill.size,
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
            
            {/* Label */}
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 mt-2 text-xs font-medium text-muted-foreground whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: index * 0.15 + 0.5 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
};
