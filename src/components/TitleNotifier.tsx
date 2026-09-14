'use client';

import { useEffect } from 'react';
import { SITE_INFO } from '@/lib/data';

export default function TitleNotifier() {
  useEffect(() => {
    let originalTitle = document.title;
    let interval: NodeJS.Timeout;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        originalTitle = document.title;
        const messages = [`☎️ ${SITE_INFO.phoneFormatted}`, '🗓️ Randevu Al'];
        let messageIndex = 0;

        interval = setInterval(() => {
          document.title = messages[messageIndex];
          messageIndex = (messageIndex + 1) % messages.length;
        }, 2500);
      } else {
        clearInterval(interval);
        if (originalTitle) {
          document.title = originalTitle;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);

  return null;
}
