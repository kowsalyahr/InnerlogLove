import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen, Sun, Target, Moon, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-morning.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Peaceful morning journaling scene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-10 w-10 text-gold" />
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl ink-heading tracking-wide mb-4">
              InnerLog
            </h1>
            <p className="font-serif text-xl sm:text-2xl ink-body italic">
              A quiet space for daily reflection
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl ink-body max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Begin each day with gratitude, stay focused through intentions, 
            and close with meaningful reflection. Your private journal awaits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => navigate("/journal")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-10 py-6 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <Feather className="mr-2 h-5 w-5" />
              Open Your Journal
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-ink/30 rounded-full flex justify-center"
          >
            <motion.div className="w-1.5 h-3 bg-ink/40 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl sm:text-4xl ink-heading text-center mb-16"
          >
            Three Moments of Mindfulness
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: Sun,
                title: "Grateful Start",
                description: "Begin your morning by acknowledging what fills your heart with gratitude.",
                color: "from-amber-400 to-orange-500",
              },
              {
                icon: Target,
                title: "Daily Intentions",
                description: "Set clear intentions to guide your focus and energy throughout the day.",
                color: "from-amber-500 to-amber-700",
              },
              {
                icon: Moon,
                title: "Evening Reflection",
                description: "Close your day with presence, noting lessons learned and moments cherished.",
                color: "from-amber-600 to-amber-900",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-8 w-8 bg-gradient-to-br ${feature.color} bg-clip-text`} style={{ color: 'hsl(var(--gold-accent))' }} />
                </div>
                <h3 className="font-serif text-xl ink-heading mb-3">{feature.title}</h3>
                <p className="ink-body leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 paper-texture">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-serif text-2xl sm:text-3xl ink-heading leading-relaxed italic mb-8"
          >
            "The life of every man is a diary in which he means to write one story, and writes another."
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="ink-body text-lg"
          >
            — J.M. Barrie
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-t from-card to-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl ink-heading mb-6">
            Begin Your Story Today
          </h2>
          <p className="ink-body text-lg mb-10 leading-relaxed">
            Your thoughts remain private, always. No accounts, no sharing, 
            just you and your journal.
          </p>
          <Button
            onClick={() => navigate("/journal")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg px-10 py-6 rounded-sm shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Start Writing
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t section-divider">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <p className="ink-body text-sm flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-gold" />
            InnerLog — Your private reflection space
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
