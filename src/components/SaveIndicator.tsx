import { Check, Loader2 } from "lucide-react";
import { format } from "date-fns";

interface SaveIndicatorProps {
  isSaving: boolean;
  lastSaved: Date | null;
}

const SaveIndicator = ({ isSaving, lastSaved }: SaveIndicatorProps) => {
  if (isSaving) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        <span>Saving...</span>
      </div>
    );
  }

  if (lastSaved) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Check className="h-3.5 w-3.5 text-gold" />
        <span>Saved at {format(lastSaved, "h:mm a")}</span>
      </div>
    );
  }

  return null;
};

export default SaveIndicator;
