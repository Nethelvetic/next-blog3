"use client";

import { useEffect, useState } from 'react';

export default function Contact() {
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    // Vérifier l'API endpoint pour voir si la page doit être rafraîchie
    const checkRefresh = async () => {
      try {
        const response = await fetch('/api/refresh', { method: 'POST' });
        const data = await response.json();
        if (response.status === 200 && data.body?.message === 'Success') {
          setShouldRefresh(true);
        }
      } catch (error) {
        console.error('Erreur lors de la vérification de la mise à jour:', error);
      }
    };
    checkRefresh();
  }, []);

  useEffect(() => {
    if (shouldRefresh) {
      window.location.reload();
    }
  }, [shouldRefresh]);

  return (
    <div className="p-8 relative">
      <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
      <div className="relative">
        <iframe
          src="https://tally.so/r/3NBRWG"
          width="100%"
          height="100vh"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact Form"
          style={{ border: 'none', overflow: 'hidden', height: '100vh' }}
          scrolling="no"
        ></iframe>
        <div
          className="absolute bottom-0 left-0 w-full h-12 bg-white"
          style={{ pointerEvents: 'none' }}
        ></div>
      </div>
    </div>
  );
}
