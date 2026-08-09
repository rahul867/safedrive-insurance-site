import { useCallback, useState } from 'react';
import { Shield, MousePointerClick, MessageCircle } from 'lucide-react';

export default function TiltCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <div
      className="card-scene"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="Insurance card - tap to flip and see details"
    >
      <div className="sphere-1 light-sphere" />
      <div className="sphere-2 light-sphere" />
      <div className="sphere-3 light-sphere" />
      <div className={`card${isFlipped ? ' flipped' : ''}`}>
        {/* Front Face */}
        <div className="card-face card-front">
          <span className="absolute top-4 left-4 text-[10px] font-montserrat font-semibold uppercase tracking-wider text-white/80 z-10">
            Authorized Insurance Agent with Policybazaar
          </span>
          <div className="flex flex-col items-center gap-3 z-10">
            <Shield className="w-12 h-12 text-white" strokeWidth={1.5} />
            <span className="font-montserrat font-bold text-[22px] text-white tracking-wide">
              SafeDrive
            </span>
          </div>
          <div className="absolute bottom-4 flex items-center gap-2 text-white/70 z-10">
            <MousePointerClick className="w-3.5 h-3.5" />
            <span className="text-xs">Tap to see details</span>
          </div>
        </div>

        {/* Back Face */}
        <div className="card-face card-back">
          <span className="absolute top-4 left-4 text-[10px] font-montserrat font-semibold uppercase tracking-wider text-teal z-10">
            SAFEDRIVE INSURANCE
          </span>
          <div className="flex flex-col items-start gap-2.5 z-10 mt-4">
            <p className="text-sm text-ink leading-relaxed">
              <span className="font-semibold">Coverage:</span> TP | Comprehensive | Zero Dep
            </p>
            <p className="text-sm text-ink leading-relaxed">
              <span className="font-semibold">Areas:</span> Gurgaon, Delhi-NCR, Meerut
            </p>
            <p className="text-sm text-ink leading-relaxed">
              <span className="font-semibold">Claim:</span> 24/7 Assistance Available
            </p>
          </div>
          <div className="absolute bottom-4 flex items-center gap-2 text-teal-dark z-10">
            <MessageCircle className="w-5 h-5" />
            <span className="font-montserrat font-semibold text-[13px]">
              WhatsApp for Instant Quote
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
