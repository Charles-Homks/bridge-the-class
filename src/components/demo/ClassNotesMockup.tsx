import { FileText, Lightbulb, BookMarked } from "lucide-react";

export function ClassNotesMockup() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-primary/10 px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-accent/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="ml-3 text-xs font-medium text-muted-foreground">
            Class Notes — Photosynthesis
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3 pb-3 border-b border-border">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">Teacher Notes + Learner Summary</p>
            <p className="text-xs text-muted-foreground">Ready to print or share</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <BookMarked className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-foreground">Definition</p>
              <p className="text-xs text-muted-foreground">
                Photosynthesis is the process by which green plants make their own food using sunlight, water, and carbon dioxide.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-foreground">Simple Explanation</p>
              <p className="text-xs text-muted-foreground">
                Think of it like a plant's kitchen — it takes in ingredients (sunlight, water, CO₂) and makes food (glucose).
              </p>
            </div>
          </div>
          
          <div className="p-2 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-xs font-medium text-primary mb-1">Formula</p>
            <p className="text-xs text-foreground font-mono">
              6CO₂ + 6H₂O + Light → C₆H₁₂O₆ + 6O₂
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
