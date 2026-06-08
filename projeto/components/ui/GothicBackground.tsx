'use client';
import { useHasMounted } from '@/hooks/useHasMounted';

const GOTHIC_LETTERS = [
  // ═══ ZONA SUPERIOR ═══
  { char: 'V', x: '5%', y: '2%', size: '18rem', rotate: '-12deg', opacity: 0.18 },
  { char: 'R', x: '88%', y: '4%', size: '14rem', rotate: '15deg', opacity: 0.14 },
  { char: 'T', x: '42%', y: '1%', size: '10rem', rotate: '-5deg', opacity: 0.08 },
  { char: 'E', x: '22%', y: '6%', size: '7rem', rotate: '20deg', opacity: 0.05 },
  { char: 'B', x: '68%', y: '8%', size: '6rem', rotate: '-18deg', opacity: 0.06 },
  { char: 'A', x: '58%', y: '3%', size: '8rem', rotate: '10deg', opacity: 0.09 },
  
  // ═══ ZONA HERO PRIMEIRA SEÇÃO ═══
  { char: 'V', x: '12%', y: '15%', size: '12rem', rotate: '8deg', opacity: 0.12 },
  { char: 'E', x: '80%', y: '18%', size: '15rem', rotate: '-10deg', opacity: 0.15 },
  { char: 'R', x: '30%', y: '12%', size: '5rem', rotate: '25deg', opacity: 0.04 },
  { char: 'T', x: '50%', y: '20%', size: '6rem', rotate: '-20deg', opacity: 0.07 },
  { char: 'B', x: '95%', y: '22%', size: '4rem', rotate: '12deg', opacity: 0.05 },
  { char: 'A', x: '3%', y: '25%', size: '5rem', rotate: '-8deg', opacity: 0.06 },
  
  // ═══ ZONA INTERMEDIÁRIA 1 ═══
  { char: 'R', x: '18%', y: '32%', size: '16rem', rotate: '-15deg', opacity: 0.16 },
  { char: 'V', x: '72%', y: '35%', size: '11rem', rotate: '18deg', opacity: 0.11 },
  { char: 'E', x: '45%', y: '38%', size: '7rem', rotate: '-3deg', opacity: 0.06 },
  { char: 'T', x: '8%', y: '40%', size: '8rem', rotate: '22deg', opacity: 0.09 },
  { char: 'B', x: '38%', y: '30%', size: '5rem', rotate: '-12deg', opacity: 0.04 },
  { char: 'A', x: '90%', y: '42%', size: '6rem', rotate: '8deg', opacity: 0.07 },
  
  // ═══ ZONA INTERMEDIÁRIA 2 ═══
  { char: 'V', x: '25%', y: '52%', size: '13rem', rotate: '15deg', opacity: 0.13 },
  { char: 'R', x: '78%', y: '50%', size: '9rem', rotate: '-18deg', opacity: 0.10 },
  { char: 'E', x: '50%', y: '55%', size: '17rem', rotate: '5deg', opacity: 0.17 },
  { char: 'T', x: '5%', y: '58%', size: '6rem', rotate: '-25deg', opacity: 0.05 },
  { char: 'B', x: '60%', y: '48%', size: '5rem', rotate: '20deg', opacity: 0.06 },
  { char: 'A', x: '92%', y: '60%', size: '7rem', rotate: '-10deg', opacity: 0.08 },
  
  // ═══ ZONA INFERIOR 1 ═══
  { char: 'V', x: '15%', y: '70%', size: '8rem', rotate: '-15deg', opacity: 0.09 },
  { char: 'R', x: '85%', y: '72%', size: '14rem', rotate: '12deg', opacity: 0.14 },
  { char: 'E', x: '40%', y: '75%', size: '6rem', rotate: '25deg', opacity: 0.05 },
  { char: 'T', x: '65%', y: '68%', size: '10rem', rotate: '-8deg', opacity: 0.11 },
  { char: 'B', x: '28%', y: '78%', size: '5rem', rotate: '18deg', opacity: 0.04 },
  { char: 'A', x: '3%', y: '80%', size: '7rem', rotate: '-22deg', opacity: 0.07 },
  
  // ═══ ZONA INFERIOR 2 ═══
  { char: 'V', x: '55%', y: '88%', size: '12rem', rotate: '10deg', opacity: 0.13 },
  { char: 'R', x: '10%', y: '90%', size: '9rem', rotate: '-15deg', opacity: 0.10 },
  { char: 'E', x: '75%', y: '92%', size: '8rem', rotate: '5deg', opacity: 0.08 },
  { char: 'T', x: '35%', y: '95%', size: '15rem', rotate: '-12deg', opacity: 0.16 },
  { char: 'B', x: '90%', y: '85%', size: '6rem', rotate: '20deg', opacity: 0.06 },
  { char: 'A', x: '22%', y: '98%', size: '7rem', rotate: '-8deg', opacity: 0.07 },
  
  // ═══ EXTRA DENSIDADE — letras pequenas espalhadas ═══
  { char: 'V', x: '48%', y: '14%', size: '3rem', rotate: '35deg', opacity: 0.03 },
  { char: 'R', x: '63%', y: '28%', size: '4rem', rotate: '-30deg', opacity: 0.04 },
  { char: 'E', x: '7%', y: '48%', size: '3rem', rotate: '40deg', opacity: 0.03 },
  { char: 'T', x: '85%', y: '8%', size: '3rem', rotate: '-35deg', opacity: 0.03 },
  { char: 'B', x: '15%', y: '85%', size: '4rem', rotate: '28deg', opacity: 0.04 },
  { char: 'A', x: '70%', y: '15%', size: '3rem', rotate: '-25deg', opacity: 0.03 },
  { char: 'V', x: '35%', y: '63%', size: '4rem', rotate: '32deg', opacity: 0.04 },
  { char: 'R', x: '52%', y: '78%', size: '3rem', rotate: '-28deg', opacity: 0.03 },
];

export const GothicBackground = () => {
  const hasMounted = useHasMounted();
  
  if (!hasMounted) return null;
  
  return (
    <div className="gothic-bg" aria-hidden="true">
      {GOTHIC_LETTERS.map((letter, i) => (
        <span
          key={i}
          className="gothic-letter"
          style={{
            left: letter.x,
            top: letter.y,
            fontSize: letter.size,
            transform: `rotate(${letter.rotate})`,
            opacity: letter.opacity,
          }}
        >
          {letter.char}
        </span>
      ))}
    </div>
  );
};
