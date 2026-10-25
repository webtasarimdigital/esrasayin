import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface LogoProps {
  light?: boolean;
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center transition-opacity hover:opacity-95 max-w-full ${className}`}>
      <div className="relative h-7 sm:h-9 md:h-10 w-auto max-w-[145px] sm:max-w-none">
        <Image
          src="/images/psikolog-esra-sayin-istanbul-logo.png"
          alt="Psikolog & Aile Danışmanı Esra Sayın"
          width={220}
          height={44}
          priority
          className="h-7 sm:h-9 md:h-10 w-auto max-w-[145px] sm:max-w-none object-contain"
        />
      </div>
    </Link>
  );
}
