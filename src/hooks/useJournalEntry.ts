import { useState, useEffect } from "react";
import { format } from "date-fns";

export interface JournalEntry {
  gratefulStart: string;
  dailyIntentions: string;
  eveningReflection: string;
}

const STORAGE_KEY_PREFIX = "innerlog_entry_";

export const useJournalEntry = (date: Date) => {
  const dateKey = format(date, "yyyy-MM-dd");
  const storageKey = `${STORAGE_KEY_PREFIX}${dateKey}`;

  const [entry, setEntry] = useState<JournalEntry>({
    gratefulStart: "",
    dailyIntentions: "",
    eveningReflection: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  // Load entry from localStorage when date changes
  useEffect(() => {
    const savedEntry = localStorage.getItem(storageKey);
    if (savedEntry) {
      try {
        setEntry(JSON.parse(savedEntry));
      } catch {
        setEntry({
          gratefulStart: "",
          dailyIntentions: "",
          eveningReflection: "",
        });
      }
    } else {
      setEntry({
        gratefulStart: "",
        dailyIntentions: "",
        eveningReflection: "",
      });
    }
    setLastSaved(null);
  }, [storageKey]);

  // Auto-save with debounce
  useEffect(() => {
    const hasContent =
      entry.gratefulStart || entry.dailyIntentions || entry.eveningReflection;

    if (!hasContent) return;

    setIsSaving(true);
    const timeoutId = setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(entry));
      setIsSaving(false);
      setLastSaved(new Date());
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [entry, storageKey]);

  const updateEntry = (field: keyof JournalEntry, value: string) => {
    setEntry((prev) => ({ ...prev, [field]: value }));
  };

  return {
    entry,
    updateEntry,
    isSaving,
    lastSaved,
  };
};
