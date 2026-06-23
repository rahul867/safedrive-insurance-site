interface SectionHeadingProps {
  label: string;
  title: string;
  body?: string;
  light?: boolean;
}

export default function SectionHeading({ label, title, body, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <span className="font-montserrat font-semibold text-xs uppercase tracking-[0.12em] text-teal mb-4 block">
        {label}
      </span>
      <h2 className={`font-montserrat font-bold text-2xl md:text-4xl leading-tight ${light ? 'text-white' : 'text-teal-dark'}`}>
        {title}
      </h2>
      {body && (
        <p className={`font-opensans text-base mt-3 max-w-xl mx-auto ${light ? 'text-white/70' : 'text-slate-500'}`}>
          {body}
        </p>
      )}
    </div>
  );
}
