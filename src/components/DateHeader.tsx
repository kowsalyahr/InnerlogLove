import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateHeaderProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

const DateHeader = ({ selectedDate, onDateChange }: DateHeaderProps) => {
  const goToPreviousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const goToNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    onDateChange(newDate);
  };

  const goToToday = () => {
    onDateChange(new Date());
  };

  const isToday = format(selectedDate, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b section-divider">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPreviousDay}
          className="h-9 w-9 hover:bg-accent"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="min-w-[200px] justify-start text-left font-serif hover:bg-accent border-border/50"
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
              {format(selectedDate, "EEEE, MMMM d, yyyy")}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && onDateChange(date)}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToNextDay}
          className="h-9 w-9 hover:bg-accent"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {!isToday && (
        <Button
          variant="secondary"
          size="sm"
          onClick={goToToday}
          className="text-sm font-sans"
        >
          Return to Today
        </Button>
      )}
    </header>
  );
};

export default DateHeader;
