import { useState, useRef } from "react";
import { format } from "date-fns";
import { Sun, Target, Moon, BookOpen, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BookSpine from "@/components/BookSpine";
import DateHeader from "@/components/DateHeader";
import JournalSection from "@/components/JournalSection";
import SaveIndicator from "@/components/SaveIndicator";
import PageTurn from "@/components/PageTurn";
import { useJournalEntry } from "@/hooks/useJournalEntry";

const Journal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [direction, setDirection] = useState(0);
  const prevDateRef = useRef(selectedDate);
  const { entry, updateEntry, isSaving, lastSaved } = useJournalEntry(selectedDate);

  const handleDateChange = (newDate: Date) => {
    const prevTime = prevDateRef.current.getTime();
    const newTime = newDate.getTime();
    setDirection(newTime > prevTime ? 1 : -1);
    prevDateRef.current = newDate;
    setSelectedDate(newDate);
  };

  const pageKey = format(selectedDate, "yyyy-MM-dd");

  return (
    <div className="min-h-screen bg-background py-6 sm:py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back to home link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm ink-body hover:text-ink transition-colors group"
          >
            <Home className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Book Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Book binding effect */}
          <BookSpine />

          {/* Main notebook page with binding offset */}
          <article className="md:ml-16 bg-card notebook-shadow rounded-lg rounded-l-none overflow-hidden">
            {/* Page curl effect (top right corner) */}
            <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none hidden sm:block">
              <div 
                className="absolute top-0 right-0 w-full h-full"
                style={{
                  background: 'linear-gradient(135deg, transparent 50%, hsl(var(--paper)) 50%)',
                  boxShadow: '-2px 2px 5px rgba(0,0,0,0.1)',
                }}
              />
            </div>

            {/* Page content */}
            <div className="p-6 sm:p-10 md:p-12">
              {/* App title */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BookOpen className="h-6 w-6 text-gold" />
                  <h1 className="font-serif text-2xl sm:text-3xl ink-heading tracking-wide">
                    InnerLog
                  </h1>
                </div>
                <p className="text-sm ink-body italic">
                  A quiet space for daily reflection
                </p>
              </div>

              {/* Date navigation */}
              <DateHeader selectedDate={selectedDate} onDateChange={handleDateChange} />

              {/* Page turn animation wrapper */}
              <PageTurn pageKey={pageKey} direction={direction}>
                {/* Journal sections */}
                <div className="mt-8 space-y-10">
                  <JournalSection
                    title="Grateful Start"
                    subtitle="Begin with what fills your heart"
                    placeholder="Today I am grateful for..."
                    icon={<Sun className="h-5 w-5" />}
                    value={entry.gratefulStart}
                    onChange={(value) => updateEntry("gratefulStart", value)}
                  />

                  <div className="section-divider" />

                  <JournalSection
                    title="Daily Intentions"
                    subtitle="Set your focus for the day ahead"
                    placeholder="Today I intend to..."
                    icon={<Target className="h-5 w-5" />}
                    value={entry.dailyIntentions}
                    onChange={(value) => updateEntry("dailyIntentions", value)}
                  />

                  <div className="section-divider" />

                  <JournalSection
                    title="Evening Reflection"
                    subtitle="Close the day with presence"
                    placeholder="Looking back on today, I notice..."
                    icon={<Moon className="h-5 w-5" />}
                    value={entry.eveningReflection}
                    onChange={(value) => updateEntry("eveningReflection", value)}
                  />
                </div>
              </PageTurn>

              {/* Page footer */}
              <footer className="mt-10 pt-6 border-t section-divider flex items-center justify-between">
                <p className="text-xs ink-body">
                  Your thoughts remain private, always.
                </p>
                <SaveIndicator isSaving={isSaving} lastSaved={lastSaved} />
              </footer>

              {/* Page number */}
              <div className="mt-6 text-center">
                <span className="font-serif text-sm ink-body italic">
                  — {format(selectedDate, "d")} —
                </span>
              </div>
            </div>
          </article>

          {/* Stacked pages effect (bottom) */}
          <div className="hidden md:block absolute -bottom-1 md:left-16 right-0 h-2 bg-gradient-to-b from-card/80 to-card/40 rounded-b-lg -z-10 mx-2" />
          <div className="hidden md:block absolute -bottom-2 md:left-16 right-0 h-2 bg-gradient-to-b from-card/60 to-card/20 rounded-b-lg -z-20 mx-4" />
        </motion.div>
      </div>
    </div>
  );
};

export default Journal;
