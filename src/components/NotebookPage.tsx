import { ReactNode } from "react";

interface NotebookPageProps {
  children: ReactNode;
}

const NotebookPage = ({ children }: NotebookPageProps) => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Notebook binding edge decoration */}
        <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/20 via-gold/40 to-gold/20 rounded-full hidden md:block" />
          
          {/* Main notebook page */}
          <article className="bg-card notebook-shadow rounded-lg p-6 sm:p-10 md:p-12 animate-page-turn">
            {/* Subtle top binding holes */}
            <div className="absolute top-6 -left-2 flex flex-col gap-8 hidden md:flex">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-br from-border to-muted"
                />
              ))}
            </div>
            
            {children}
          </article>
        </div>
      </div>
    </div>
  );
};

export default NotebookPage;
