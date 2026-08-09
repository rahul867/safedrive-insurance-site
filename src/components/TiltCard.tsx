import { useEffect, useRef, useCallback } from 'react';
import { Shield, MousePointerClick, MessageCircle } from 'lucide-react';

class GyroTilt {
  card: HTMLElement;
  bounds: DOMRect | null = null;
  centerX = 0;
  centerY = 0;
  mouseX = 0;
  mouseY = 0;
  currentX = 0;
  currentY = 0;
  targetX = 0;
  targetY = 0;
  rafId: number | null = null;

  constructor(cardElement: HTMLElement) {
    this.card = cardElement;
    this.reset();
  }

  reset() {
    this.mouseX = 0;
    this.mouseY = 0;
    this.currentX = 0;
    this.currentY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.rafId = requestAnimationFrame(() => this.update());
  }

  updateBounds() {
    this.bounds = this.card.getBoundingClientRect();
    this.centerX = this.bounds.left + this.bounds.width / 2;
    this.centerY = this.bounds.top + this.bounds.height / 2;
  }

  onMouseMove(e: MouseEvent) {
    this.updateBounds();
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.targetY = ((this.mouseX - this.centerX) / (window.innerWidth / 2)) * 15;
    this.targetX = -((this.mouseY - this.centerY) / (window.innerHeight / 2)) * 15;
  }

  update() {
    this.currentX += (this.targetX - this.currentX) * 0.1;
    this.currentY += (this.targetY - this.currentY) * 0.1;
    this.card.style.transform = `rotateX(${this.currentX}deg) rotateY(${this.currentY}deg)`;
    this.rafId = requestAnimationFrame(() => this.update());
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  getCurrentX() {
    return this.currentX;
  }

  getCurrentY() {
    return this.currentY;
  }
}

export default function TiltCard() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const gyroRef = useRef<GyroTilt | null>(null);
  const isFlippedRef = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    gyroRef.current?.onMouseMove(e);
  }, []);

  const handleClick = useCallback(() => {
    if (!cardRef.current || !gyroRef.current) return;
    isFlippedRef.current = !isFlippedRef.current;
    const isFlipped = isFlippedRef.current;
    const currentX = gyroRef.current.getCurrentX();
    const currentY = gyroRef.current.getCurrentY();
    cardRef.current.style.transform = `rotateX(${currentX}deg) rotateY(${currentY + (isFlipped ? 180 : 0)}deg)`;
    if (isFlipped) {
      cardRef.current.classList.add('flipped');
    } else {
      cardRef.current.classList.remove('flipped');
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const gyro = new GyroTilt(card);
    gyroRef.current = gyro;

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      gyro.destroy();
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={sceneRef}
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
      <div ref={cardRef} className="card">
        {/* Front Face */}
        <div className="card-face card-front">
          <span className="absolute top-4 left-4 text-[10px] font-montserrat font-semibold uppercase tracking-wider text-white/80 z-10">
            POLICYBAZAAR POSP
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
