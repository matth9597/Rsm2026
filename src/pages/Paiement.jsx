import React from 'react';
import { useLanguage } from '../LanguageContext'; // Ton système de langue

export default function Paiement() {
  const { t, lang } = useLanguage();

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      
      <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '30px' }}>

        {/* MÉTHODE 1 : LIEN DE PAIEMENT DIRECT (Le plus simple) */}
        <a 
          href="TON_LIEN_PAYPAL_ICI" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#0070ba',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}
        >
          {lang === 'fr' ? 'Payer avec PayPal' : 'Pay with PayPal'}
        </a>

        <p style={{ marginTop: '20px', fontSize: '0.8rem', color: '#64748b' }}>
          {lang === 'fr' 
            ? 'Vous allez être redirigé vers la plateforme sécurisée de PayPal.' 
            : 'You will be redirected to PayPal\'s secure platform.'}
        </p>
      </div>
    </div>
  );
}
