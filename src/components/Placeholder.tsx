export function Placeholder({ className = "", label = "Your image here" }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-secondary/60 ${className}`}
    >
      <span className="text-xs font-semibold tracking-[0.3em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
}
