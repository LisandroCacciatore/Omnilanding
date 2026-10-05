export default function SectionHeader({ index, label, title, description }) {
  return (
    <div className="flex flex-col gap-2 mb-10 lg:mb-12">
      <div className="flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-label-md text-primary tracking-wider uppercase font-semibold">
          {index ? `${index} / ${label}` : label}
        </span>
        <span className="h-px w-12 bg-outline-variant ml-2" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-on-surface tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-body-md text-on-surface-variant max-w-3xl leading-relaxed mt-1">
          {description}
        </p>
      )}
    </div>
  );
}
