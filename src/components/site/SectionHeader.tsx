export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${a}`}>
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-5xl leading-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-6 h-px w-24 bg-gradient-gold ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
