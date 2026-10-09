import React from 'react';

/**
 * Exact high-luxury vector assets matching the reference video
 */

// 3D Physical Wax Seal matching the video's blush-ivory organic wax seal with monogram
export const LuxuryWaxSeal: React.FC<{
  monogram?: string;
  size?: number;
  glow?: boolean;
  className?: string;
}> = ({ monogram = 'A & U', size = 110, glow = false, className = '' }) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer ambient radiant glow during illumination */}
      {glow && (
        <div
          className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 235, 175, 0.95) 0%, rgba(217, 191, 140, 0.6) 45%, transparent 75%)',
            transform: 'scale(1.5)',
            filter: 'blur(10px)',
          }}
        />
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.55)] transition-transform duration-500"
      >
        <defs>
          {/* Subtle marble/wax gradient */}
          <radialGradient id="waxBodyGrad" cx="38%" cy="34%" r="68%">
            <stop offset="0%" stopColor="#FFF8F5" />
            <stop offset="35%" stopColor="#F5E4DD" />
            <stop offset="70%" stopColor="#E2CBC2" />
            <stop offset="100%" stopColor="#C8ACA2" />
          </radialGradient>

          {/* Antique gold edge foil */}
          <radialGradient id="waxGoldEdge" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="45%" stopColor="#D9BF8C" />
            <stop offset="75%" stopColor="#B89A67" />
            <stop offset="100%" stopColor="#7E6338" />
          </radialGradient>

          {/* Physical embossed depth filter */}
          <filter id="waxStampDepression" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.8" result="blur" />
            <feOffset dx="1" dy="1.5" />
            <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadow" />
            <feFlood floodColor="#5A3A35" floodOpacity="0.45" />
            <feComposite in2="shadow" operator="in" />
            <feComposite in2="SourceGraphic" operator="over" />
          </filter>
        </defs>

        {/* Organic irregular wax perimeter */}
        <path
          d="M70 6
             C87 5, 102 12, 114 23
             C127 35, 134 52, 134 70
             C135 88, 128 105, 115 117
             C102 129, 85 135, 68 134
             C50 134, 33 128, 22 116
             C9 103, 5 85, 6 68
             C7 50, 15 33, 28 22
             C41 10, 56 6, 70 6 Z"
          fill="url(#waxBodyGrad)"
          stroke="url(#waxGoldEdge)"
          strokeWidth="1.6"
        />

        {/* Outer stamped groove */}
        <circle
          cx="70"
          cy="70"
          r="52"
          fill="none"
          stroke="url(#waxGoldEdge)"
          strokeWidth="1.2"
          strokeDasharray="3 1.5"
          opacity="0.8"
        />

        {/* Inner depressed stamp bowl */}
        <circle
          cx="70"
          cy="70"
          r="46"
          fill="url(#waxBodyGrad)"
          stroke="url(#waxGoldEdge)"
          strokeWidth="0.8"
          opacity="0.95"
        />

        {/* Wreath / botanical filigree ring */}
        <circle
          cx="70"
          cy="70"
          r="41"
          fill="none"
          stroke="url(#waxGoldEdge)"
          strokeWidth="0.6"
          strokeDasharray="2 3"
        />

        {/* Monogram script in center */}
        <text
          x="70"
          y="76"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#785B4E"
          fontFamily="'Pinyon Script', 'Alex Brush', cursive"
          fontSize="36"
          fontWeight="400"
          filter="url(#waxStampDepression)"
        >
          {monogram}
        </text>

        {/* Bottom micro fleur */}
        <circle cx="70" cy="100" r="1.5" fill="#B89A67" />
        <path d="M63 99 Q70 102 77 99" stroke="url(#waxGoldEdge)" strokeWidth="0.8" fill="none" />
      </svg>
    </div>
  );
};

// Intricate Center Gold Diamond Mandala matching the reference video (Frame 00:00 - 00:03)
export const GoldDiamondMandala: React.FC<{
  illuminated?: boolean;
  className?: string;
}> = ({ illuminated = false, className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full transition-all duration-1000 ${
          illuminated
            ? 'stroke-[#FFE8B5] filter drop-shadow-[0_0_15px_rgba(255,232,181,0.85)]'
            : 'stroke-[#D9BF8C]'
        }`}
      >
        <defs>
          <linearGradient id="foilGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="40%" stopColor={illuminated ? '#FFF9E6' : '#E8D2A6'} />
            <stop offset="70%" stopColor={illuminated ? '#FFE4A0' : '#B89A67'} />
            <stop offset="100%" stopColor="#8A6E3B" />
          </linearGradient>
        </defs>

        {/* Outer Large Diamond */}
        <polygon
          points="200,10 390,200 200,390 10,200"
          stroke="url(#foilGoldGrad)"
          strokeWidth={illuminated ? '2.4' : '1.5'}
          fill="none"
        />

        {/* Secondary Inset Diamond */}
        <polygon
          points="200,24 376,200 200,376 24,200"
          stroke="url(#foilGoldGrad)"
          strokeWidth="0.8"
          strokeDasharray="4 2"
          fill="none"
          opacity="0.85"
        />

        {/* Third Inset Diamond */}
        <polygon
          points="200,38 362,200 200,362 38,200"
          stroke="url(#foilGoldGrad)"
          strokeWidth="1"
          fill="none"
          opacity="0.9"
        />

        {/* Corner 4-point stars at diamond vertices */}
        {[
          { x: 200, y: 10 },
          { x: 390, y: 200 },
          { x: 200, y: 390 },
          { x: 10, y: 200 },
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.x} cy={pt.y} r="3" fill="#FFE8B5" />
            <line x1={pt.x - 7} y1={pt.y} x2={pt.x + 7} y2={pt.y} stroke="url(#foilGoldGrad)" strokeWidth="1" />
            <line x1={pt.x} y1={pt.y - 7} x2={pt.x} y2={pt.y + 7} stroke="url(#foilGoldGrad)" strokeWidth="1" />
          </g>
        ))}

        {/* Lace filigree arabesque scrolls in the 4 quadrants of the diamond */}
        {/* Top Quadrant */}
        <g stroke="url(#foilGoldGrad)" strokeWidth="0.9" fill="none" opacity="0.85">
          <path d="M200 50 Q160 100 200 130 Q240 100 200 50" />
          <path d="M200 70 Q180 105 200 120 Q220 105 200 70" />
          <circle cx="200" cy="100" r="2" fill="#D9BF8C" />
          <path d="M150 140 C170 120, 190 120, 200 140 C210 120, 230 120, 250 140" />
        </g>

        {/* Bottom Quadrant */}
        <g stroke="url(#foilGoldGrad)" strokeWidth="0.9" fill="none" opacity="0.85">
          <path d="M200 350 Q160 300 200 270 Q240 300 200 350" />
          <path d="M200 330 Q180 295 200 280 Q220 295 200 330" />
          <circle cx="200" cy="300" r="2" fill="#D9BF8C" />
          <path d="M150 260 C170 280, 190 280, 200 260 C210 280, 230 280, 250 260" />
        </g>

        {/* Left Quadrant */}
        <g stroke="url(#foilGoldGrad)" strokeWidth="0.9" fill="none" opacity="0.85">
          <path d="M50 200 Q100 160 130 200 Q100 240 50 200" />
          <circle cx="100" cy="200" r="2" fill="#D9BF8C" />
        </g>

        {/* Right Quadrant */}
        <g stroke="url(#foilGoldGrad)" strokeWidth="0.9" fill="none" opacity="0.85">
          <path d="M350 200 Q300 160 270 200 Q300 240 350 200" />
          <circle cx="300" cy="200" r="2" fill="#D9BF8C" />
        </g>

        {/* Circular lace frame where wax seal sits */}
        <circle
          cx="200"
          cy="200"
          r="84"
          stroke="url(#foilGoldGrad)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          fill="none"
          opacity="0.9"
        />
        <circle
          cx="200"
          cy="200"
          r="92"
          stroke="url(#foilGoldGrad)"
          strokeWidth="0.7"
          fill="none"
          opacity="0.75"
        />
      </svg>
    </div>
  );
};

// Flap Filigree Ornaments for Top and Bottom Triangles (Frame 00:01)
export const FlapTriangleOrnament: React.FC<{
  position: 'top' | 'bottom';
  illuminated?: boolean;
}> = ({ position, illuminated = false }) => {
  return (
    <div
      className={`pointer-events-none transition-all duration-1000 ${
        position === 'bottom' ? 'scale-y-[-1]' : ''
      } ${
        illuminated
          ? 'stroke-[#FFE8B5] filter drop-shadow-[0_0_10px_rgba(255,232,181,0.8)] opacity-100'
          : 'stroke-[#D9BF8C] opacity-75'
      }`}
    >
      <svg
        viewBox="0 0 160 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 sm:w-36 h-auto"
      >
        <path
          d="M80 75 L30 10 Q80 25 130 10 Z"
          strokeWidth="1.2"
        />
        <path
          d="M80 60 L50 18 Q80 28 110 18 Z"
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
        <circle cx="80" cy="40" r="2" fill="#D9BF8C" />
        <circle cx="80" cy="75" r="3" fill="#D9BF8C" />
      </svg>
    </div>
  );
};

// Royal Floral Arabesque Divider
export const StarDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-3 select-none ${className}`}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C5A880] to-[#E2C796] opacity-70" />
      <span className="text-[#C5A880] text-xs">✦</span>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C5A880] to-[#E2C796] opacity-70" />
    </div>
  );
};

// Moorish Pointed Arch Frame for the Islamic Invitation Card (Frame 00:07)
export const PointedArchFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative max-w-lg mx-auto ${className}`}>
      {/* SVG Outline for the Pointed Arch */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 450 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cardArchGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4A877" />
            <stop offset="50%" stopColor="#DFC69B" />
            <stop offset="100%" stopColor="#A88B57" />
          </linearGradient>
        </defs>

        {/* Outer Arch */}
        <path
          d="M20 660 
             L20 180 
             C20 110, 75 60, 160 35 
             C200 24, 225 8, 225 8 
             C225 8, 250 24, 290 35 
             C375 60, 430 110, 430 180 
             L430 660 
             Z"
          stroke="url(#cardArchGold)"
          strokeWidth="1.6"
          fill="none"
        />

        {/* Inner Dotted Arch */}
        <path
          d="M30 650 
             L30 185 
             C30 120, 80 72, 165 47 
             C202 36, 225 22, 225 22 
             C225 22, 248 36, 285 47 
             C370 72, 420 120, 420 185 
             L420 650 
             Z"
          stroke="url(#cardArchGold)"
          strokeWidth="0.8"
          strokeDasharray="3 2"
          fill="none"
          opacity="0.8"
        />

        {/* Top Pinnacle Finial */}
        <circle cx="225" cy="8" r="3" fill="#D9BF8C" />
      </svg>

      <div className="relative z-10 pt-10 pb-8 px-6 sm:px-10 text-center">
        {children}
      </div>
    </div>
  );
};

// Alias WaxSeal to LuxuryWaxSeal
export const WaxSeal = LuxuryWaxSeal;

// Royal Draped Curtains at Upper Left & Right Corners (Frame 00:04)
export const DrapedCurtains: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute top-0 inset-x-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1000 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="curtainVelvet" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E231D" />
            <stop offset="40%" stopColor="#4A3830" />
            <stop offset="70%" stopColor="#6E5548" />
            <stop offset="100%" stopColor="#3A2C25" />
          </linearGradient>
          <linearGradient id="curtainGoldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A6E3B" />
            <stop offset="50%" stopColor="#E2C796" />
            <stop offset="100%" stopColor="#8A6E3B" />
          </linearGradient>
        </defs>

        {/* Top Valance / Arch Drapery */}
        <path
          d="M0 0 L1000 0 L1000 45 C800 65, 650 35, 500 55 C350 35, 200 65, 0 45 Z"
          fill="url(#curtainVelvet)"
        />
        {/* Scalloped Swags */}
        <path
          d="M0 45 Q250 140 500 60 Q750 140 1000 45 L1000 0 L0 0 Z"
          fill="#3B2C24"
          opacity="0.85"
        />
        <path
          d="M0 45 Q250 135 500 55 Q750 135 1000 45"
          stroke="url(#curtainGoldTrim)"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Left Draped Curtain Wing */}
        <g opacity="0.95">
          <path
            d="M0 0 C70 50, 160 110, 170 210 C180 270, 130 330, 80 340 L0 340 Z"
            fill="url(#curtainVelvet)"
          />
          <path d="M40 0 C90 80, 140 160, 145 250 C150 300, 110 330, 70 340" stroke="#1D1511" strokeWidth="6" opacity="0.6" />
          <path d="M15 0 C60 90, 110 180, 115 270 C120 310, 90 335, 40 340" stroke="#7E6355" strokeWidth="3" opacity="0.5" />
          <path d="M90 220 C130 225, 150 240, 140 255 C125 250, 95 235, 90 220 Z" fill="url(#curtainGoldTrim)" />
          <line x1="135" y1="255" x2="135" y2="295" stroke="url(#curtainGoldTrim)" strokeWidth="3" />
          <circle cx="135" cy="297" r="4" fill="#D9BF8C" />
        </g>

        {/* Right Draped Curtain Wing */}
        <g opacity="0.95">
          <path
            d="M1000 0 C930 50, 840 110, 830 210 C820 270, 870 330, 920 340 L1000 340 Z"
            fill="url(#curtainVelvet)"
          />
          <path d="M960 0 C910 80, 860 160, 855 250 C850 300, 890 330, 930 340" stroke="#1D1511" strokeWidth="6" opacity="0.6" />
          <path d="M985 0 C940 90, 890 180, 885 270 C880 310, 910 335, 960 340" stroke="#7E6355" strokeWidth="3" opacity="0.5" />
          <path d="M910 220 C870 225, 850 240, 860 255 C875 250, 905 235, 910 220 Z" fill="url(#curtainGoldTrim)" />
          <line x1="865" y1="255" x2="865" y2="295" stroke="url(#curtainGoldTrim)" strokeWidth="3" />
          <circle cx="865" cy="297" r="4" fill="#D9BF8C" />
        </g>
      </svg>
    </div>
  );
};

// Royal Crystal Chandelier (Frame 00:04)
export const ClassicalChandelier: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center pointer-events-none select-none ${className}`}>
      {/* Delicate suspension chain */}
      <div className="w-[1px] h-12 bg-gradient-to-b from-[#B89A67] via-[#E8D5B9] to-[#B89A67]" />

      <svg
        viewBox="0 0 240 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-36 sm:w-44 md:w-52 h-auto filter drop-shadow-[0_4px_16px_rgba(255,235,185,0.7)]"
      >
        <defs>
          <linearGradient id="chGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" />
            <stop offset="50%" stopColor="#D9BF8C" />
            <stop offset="100%" stopColor="#8A6E3B" />
          </linearGradient>
          <linearGradient id="crystalShimmer" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FAF4EB" />
            <stop offset="100%" stopColor="#D9BF8C" />
          </linearGradient>
          <radialGradient id="candleGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF7D6" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#E2BF7D" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B89A67" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Central Crown */}
        <path d="M110 10 L130 10 L125 25 L115 25 Z" fill="url(#chGold)" />
        <ellipse cx="120" cy="28" rx="14" ry="4" fill="url(#chGold)" />

        {/* Curved brass branches */}
        <path d="M120 40 C75 45, 45 75, 40 105" stroke="url(#chGold)" strokeWidth="2.2" />
        <path d="M120 40 C165 45, 195 75, 200 105" stroke="url(#chGold)" strokeWidth="2.2" />
        <path d="M120 40 C90 55, 75 85, 70 120" stroke="url(#chGold)" strokeWidth="2" />
        <path d="M120 40 C150 55, 165 85, 170 120" stroke="url(#chGold)" strokeWidth="2" />
        <path d="M120 50 C105 70, 95 100, 100 135" stroke="url(#chGold)" strokeWidth="1.8" />
        <path d="M120 50 C135 70, 145 100, 140 135" stroke="url(#chGold)" strokeWidth="1.8" />

        {/* Candle cups and glowing candle flames */}
        {[
          { x: 40, y: 105 },
          { x: 70, y: 120 },
          { x: 100, y: 135 },
          { x: 140, y: 135 },
          { x: 170, y: 120 },
          { x: 200, y: 105 },
        ].map((candle, idx) => (
          <g key={idx}>
            <path
              d={`M${candle.x - 7} ${candle.y} L${candle.x + 7} ${candle.y} L${candle.x + 4} ${
                candle.y + 7
              } L${candle.x - 4} ${candle.y + 7} Z`}
              fill="url(#chGold)"
            />
            <rect x={candle.x - 2} y={candle.y - 12} width="4" height="12" fill="#FAF6EE" />
            <circle cx={candle.x} cy={candle.y - 18} r="12" fill="url(#candleGlow)" />
            <path
              d={`M${candle.x} ${candle.y - 22} Q${candle.x + 3} ${candle.y - 16} ${candle.x} ${
                candle.y - 12
              } Q${candle.x - 3} ${candle.y - 16} ${candle.x} ${candle.y - 22}`}
              fill="#FFFBE8"
            />
            {/* Hanging crystal prism */}
            <line x1={candle.x} y1={candle.y + 7} x2={candle.x} y2={candle.y + 18} stroke="#D9BF8C" strokeWidth="0.8" />
            <polygon
              points={`${candle.x},${candle.y + 18} ${candle.x + 3},${candle.y + 24} ${candle.x},${
                candle.y + 32
              } ${candle.x - 3},${candle.y + 24}`}
              fill="url(#crystalShimmer)"
              stroke="#B89A67"
              strokeWidth="0.5"
            />
          </g>
        ))}

        {/* Central crystal garland festoons */}
        <path d="M40 105 Q80 135 120 145 Q160 135 200 105" stroke="url(#crystalShimmer)" strokeWidth="1.2" strokeDasharray="3 3" />
        <path d="M70 120 Q120 155 170 120" stroke="url(#crystalShimmer)" strokeWidth="1.2" strokeDasharray="3 3" />

        {/* Central pendant crystal drop */}
        <polygon
          points="120,150 126,162 120,185 114,162"
          fill="url(#crystalShimmer)"
          stroke="#B89A67"
          strokeWidth="0.8"
        />
        <circle cx="120" cy="190" r="2.5" fill="#FFE8B5" />
      </svg>
    </div>
  );
};
