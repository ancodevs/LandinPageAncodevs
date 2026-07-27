import { cn } from "@/lib/utils";

interface SectionTagProps {
  label: string;
  dark?: boolean;
  className?: string;
}

const SectionTag = ({ label, dark = false, className }: SectionTagProps) => {
  return (
    <span className={cn("font-mono text-sm inline-flex items-baseline", className)}>
      <span className={dark ? "text-paper/40" : "text-muted-foreground"}>&lt;</span>
      <span className={dark ? "text-paper" : "text-foreground"}>{label}</span>
      <span className="text-primary">/</span>
      <span className={dark ? "text-paper/40" : "text-muted-foreground"}>&gt;</span>
    </span>
  );
};

export default SectionTag;
