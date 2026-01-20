import { useState } from "react";
import { Sun, Target, Moon, BookOpen } from "lucide-react";
import NotebookPage from "@/components/NotebookPage";
import DateHeader from "@/components/DateHeader";
import JournalSection from "@/components/JournalSection";
import SaveIndicator from "@/components/SaveIndicator";
import { useJournalEntry } from "@/hooks/useJournalEntry";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { entry, updateEntry, isSaving, lastSaved } = useJournalEntry(selectedDate);

  return (
    <NotebookPage>
      {/* App title and branding */}
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
      <DateHeader selectedDate={selectedDate} onDateChange={setSelectedDate} />

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

      {/* Save status footer */}
      <footer className="mt-10 pt-6 border-t section-divider flex items-center justify-between">
        <p className="text-xs ink-body">
          Your thoughts remain private, always.
        </p>
        <SaveIndicator isSaving={isSaving} lastSaved={lastSaved} />
      </footer>
    </NotebookPage>
  );
};

export default Index;
