import { BookOpen, Clock, Target, ListChecks } from "lucide-react";

export function LessonPlanMockup() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-primary/10 px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="ml-3 text-xs font-medium text-muted-foreground">
            Lesson Plan — Photosynthesis
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-border">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Basic Science — JSS2</p>
            <p className="text-xs text-muted-foreground">40 minutes • Week 5, Term 2</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-foreground">Objectives</p>
              <p className="text-xs text-muted-foreground">Define photosynthesis • Identify requirements • Explain importance</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-foreground">Timing</p>
              <div className="text-xs text-muted-foreground space-y-0.5">
                <p>• Introduction: 5 min</p>
                <p>• Main content: 25 min</p>
                <p>• Activity + Recap: 10 min</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <ListChecks className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-foreground">Key Terms</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {["Chlorophyll", "Glucose", "Carbon dioxide", "Sunlight"].map((term) => (
                  <span key={term} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                    {term}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
