import { cn } from "@/lib/utils";

interface MoleculeDecorativeProps {
  position: "left" | "right";
  className?: string;
}

export function MoleculeDecorative({ position, className }: MoleculeDecorativeProps) {
  return (
    <div className={cn("hidden lg:block absolute opacity-10 dark:opacity-5", 
      position === "left" ? "top-1/2 left-24" : "bottom-24 right-24", 
      className)}>
      <div className={cn("rounded-full border-2", 
        position === "left" ? "w-16 h-16 border-primary dark:border-blue-400" : "w-12 h-12 border-secondary dark:border-green-400"
      )}></div>
      <div className={cn("absolute rounded-full border-2", 
        position === "left" ? 
          "w-8 h-8 border-secondary dark:border-green-400 -right-12 -top-6" : 
          "w-6 h-6 border-primary dark:border-blue-400 left-16 top-4"
      )}></div>
      <div className={cn("absolute rounded-full border-2", 
        position === "left" ? 
          "w-4 h-4 border-accent dark:border-purple-400 right-4 top-16" : 
          "w-3 h-3 border-accent dark:border-purple-400 left-8 -top-8"
      )}></div>
      <div className={cn("absolute border-l-2", 
        position === "left" ? 
          "w-2 h-20 border-primary dark:border-blue-400 left-8 top-16" : 
          "w-2 h-16 border-secondary dark:border-green-400 left-6 -top-8"
      )}></div>
    </div>
  );
}
