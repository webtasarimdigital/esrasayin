import Link from 'next/link';
import React from 'react';

interface LogoProps {
  light?: boolean;
  className?: string;
  showText?: boolean;
}

export default function Logo({ light = false, className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 ${className}`}>
      {/* Stylized Mind/Profile Icon */}
      <div className="relative w-8 h-8 md:w-9 md:h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-indigo-900/10 dark:bg-indigo-900/30 overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Head silhouette in purple tone */}
          <path
            d="M50 15 C30 15 20 30 20 50 C20 65 30 78 45 84 L45 92 L62 92 L62 82 C78 75 85 60 85 45 C85 28 70 15 50 15 Z"
            fill="#8088E6"
          />
          {/* Supporting hand / inner thought line */}
          <path
            d="M32 40 C42 45 52 50 64 45 C67 52 58 60 48 58 C38 56 34 48 32 40 Z"
            fill="#FFD2BF"
          />
          <circle cx="56" cy="36" r="4" fill="#192A3D" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`text-[10px] md:text-[11px] font-medium tracking-wide uppercase leading-tight ${light ? 'text-gray-300' : 'text-slate-500'}`}>
            Psikolog &amp; Aile Danışmanı
          </span>
          <span className={`text-base md:text-lg font-bold tracking-tight leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
            Esra <span className="uppercase">SAYIN</span>
          </span>
        </div>
      )}
    </Link>
  );
}
