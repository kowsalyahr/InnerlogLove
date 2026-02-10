import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorMessageProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

const ErrorMessage = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: ErrorMessageProps) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/50 px-4">
      <div className="w-full max-w-lg rounded-xl border border-border bg-card p-10 text-center notebook-shadow">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
          {icon || <AlertCircle className="h-7 w-7 text-gold" />}
        </div>

        <h1 className="mb-3 font-serif text-2xl font-bold text-foreground">
          {title}
        </h1>

        <p className="mb-8 font-sans text-base leading-relaxed text-muted-foreground">
          {description}
        </p>

        {actionLabel && onAction && (
          <Button
            onClick={onAction}
            className="rounded-lg px-8 py-3 text-base font-medium"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
