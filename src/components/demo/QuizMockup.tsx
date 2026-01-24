import { CheckSquare, CheckCircle2, XCircle } from "lucide-react";

export function QuizMockup() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-primary/10 px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="ml-3 text-xs font-medium text-muted-foreground">
            Quiz + Answer Key — Photosynthesis
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground text-sm">10 Questions</span>
          </div>
          <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
            Multiple choice + Short answer
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="p-3 bg-secondary/50 rounded-lg">
            <p className="text-xs font-medium text-foreground mb-2">
              Q1. What is the main purpose of photosynthesis?
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-muted-foreground">A) To release oxygen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span className="text-primary font-medium">B) To produce food for plants</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-muted-foreground">C) To absorb water</span>
              </div>
            </div>
          </div>
          
          <div className="p-3 bg-secondary/50 rounded-lg">
            <p className="text-xs font-medium text-foreground mb-2">
              Q2. Which gas do plants absorb during photosynthesis?
            </p>
            <div className="flex items-center gap-2 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-medium">Carbon dioxide (CO₂)</span>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground text-center py-2">
            + 8 more questions with answers
          </div>
        </div>
      </div>
    </div>
  );
}
