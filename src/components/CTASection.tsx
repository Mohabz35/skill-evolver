import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Background card */}
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-accent" />
            
            {/* Mesh overlay */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Sparkles className="w-12 h-12 mx-auto mb-6 text-white/80" />
                
                <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
                  Ready to Evolve?
                </h2>
                
                <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                  Join thousands who are transforming their careers with AI-powered skill evolution. 
                  Your future self will thank you.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    size="xl" 
                    className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 hover:shadow-xl hover:shadow-white/20"
                  >
                    Start Your Evolution
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="xl" 
                    className="w-full sm:w-auto text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
                  >
                    Schedule a Demo
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
