import { ClipboardList, Star, MessageSquare } from "lucide-react";

export function MarkingGuideMockup() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-primary/10 px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="ml-3 text-xs font-medium text-muted-foreground">
            Marking Guide — Photosynthesis
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground text-sm">Rubric + Feedback</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {/* Rubric */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-foreground">Performance Levels</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-destructive/10 rounded-lg text-center">
                <div className="flex justify-center mb-1">
                  <Star className="w-3 h-3 text-destructive" />
                </div>
                <p className="text-xs font-medium text-destructive">Developing</p>
                <p className="text-xs text-muted-foreground">0-40%</p>
              </div>
              <div className="p-2 bg-accent/10 rounded-lg text-center">
                <div className="flex justify-center mb-1">
                  <Star className="w-3 h-3 text-accent" />
                  <Star className="w-3 h-3 text-accent" />
                </div>
                <p className="text-xs font-medium text-accent">Proficient</p>
                <p className="text-xs text-muted-foreground">41-70%</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-center">
                <div className="flex justify-center mb-1">
                  <Star className="w-3 h-3 text-primary" />
                  <Star className="w-3 h-3 text-primary" />
                  <Star className="w-3 h-3 text-primary" />
                </div>
                <p className="text-xs font-medium text-primary">Excellent</p>
                <p className="text-xs text-muted-foreground">71-100%</p>
              </div>
            </div>
          </div>
          
          {/* Feedback Examples */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" />
              <p className="text-xs font-medium text-foreground">Sample Feedback</p>
            </div>
            <div className="p-2 bg-secondary/50 rounded-lg">
              <p className="text-xs text-muted-foreground italic">
                "Good understanding of key terms. Focus on explaining the role of chlorophyll in more detail next time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
