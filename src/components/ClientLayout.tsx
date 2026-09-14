'use client';

import React, { useState } from 'react';
import Header from './Header';
import MobileBottomNav from './MobileBottomNav';
import Footer from './Footer';
import AppointmentModal from './AppointmentModal';
import TitleNotifier from './TitleNotifier';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#ff5a6e] selection:text-white">
      <TitleNotifier />
      <Header onOpenAppointment={() => setIsAppointmentOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBottomNav onOpenAppointment={() => setIsAppointmentOpen(true)} />
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
}
