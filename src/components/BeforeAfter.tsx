import { useCallback, useRef, useState } from "react";

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-4/3 w-full cursor-ew-resize overflow-hidden rounded-2xl border border-border select-none shadow-glow"
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging.current) move(e.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerLeave={() => {
        dragging.current = false;
      }}
    >
      <img src={after} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 h-full w-full object-cover grayscale-[0.35] brightness-75"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-primary shadow-glow"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xs font-bold tracking-widest text-primary-foreground">
          &lt;&gt;
        </div>
      </div>

      <span className="absolute bottom-4 left-4 rounded-full bg-card/80 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-foreground uppercase backdrop-blur">
        {beforeLabel}
      </span>
      <span className="absolute right-4 bottom-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-primary-foreground uppercase">
        {afterLabel}
      </span>
    </div>
  );
}
