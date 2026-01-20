import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";

interface JournalSectionProps {
  title: string;
  subtitle: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}

const JournalSection = ({
  title,
  subtitle,
  placeholder,
  icon,
  value,
  onChange,
}: JournalSectionProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="animate-fade-in">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-gold">{icon}</span>
        <div>
          <h2 className="font-serif text-xl ink-heading">{title}</h2>
          <p className="text-sm ink-body">{subtitle}</p>
        </div>
      </div>
      <div
        className={`relative transition-all duration-300 ${
          isFocused ? "scale-[1.01]" : ""
        }`}
      >
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="min-h-[140px] resize-none font-serif text-base leading-8 paper-texture border-border/50 focus:border-gold/50 focus:ring-gold/20 placeholder:text-ink-light/40 transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default JournalSection;
