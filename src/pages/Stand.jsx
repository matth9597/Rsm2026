import React from 'react';
import { Storefront, CheckCircle, MapPin, Envelope } from "@phosphor-icons/react";
import { useLanguage } from '../LanguageContext';

export default function Stand() {
  const { t, lang } = useLanguage();

  // Données adaptées pour les cuisiniers et la gestion des stands
  const standInfo = {
    type: lang === 'fr' ? 'Restauration / Food Court' : 'Catering / Food Court',
    format: lang === 'fr' ? 'Stand individuel' : 'Individual Booth',
    dispo: lang === 'fr' ? 'Limité (Sur sélection)' : 'Limited (Selection based)',
    frais: lang === 'fr' ? '40$ par emplacement' : '$40 per space',
    terrain: lang === 'fr' ? 'Zone Extérieure / Parking' : 'Outdoor Zone / Parking',
    coordonnateur: 'Mirado (mirado.ralijaona@gmail.com)',
    exposants: [
      {
        nom: 'Matthieu Rafetison',
        specialite:'Cuisine Malgache',
      }
    ]
  };

  return (
    <div className="app-container" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* 1. LE BOUTON D'INSCRIPTION EN HAUT POUR LES CUISINIERS */}
      <button style={{
        width: '100%',
        backgroundColor: '#548cb4',
        color: 'white',
        border: 'none',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}>
        <Storefront size={22} weight="bold" />
        {lang === 'fr' ? "Réserver un Stand — Cuisinier" : 'Book a Booth — Caterer'}
      </button>

      {/* 2. LE BLOC DES INFORMATIONS TECHNIQUES */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '25px',
        border: '1px solid #e2e8f0',
        marginBottom: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
          {lang === 'fr' ? 'INFORMATIONS SUR LES STANDS' : 'BOOTH INFORMATION'}
        </div>

        <div className="info-table" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
            <span style={{ width: '250px', fontWeight: 'bold', color: '#1e293b' }}>Type</span>
            <span style={{ color: '#475569' }}>{standInfo.type}</span>
          </div>

          <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex' }}>
              <span style={{ width: '250px', fontWeight: 'bold', color: '#1e293b' }}>Format</span>
              <span style={{ color: '#475569' }}>{standInfo.format}</span>
            </div>
            <a href="/reglements" style={{ color: '#dc2626', textDecoration: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
              {lang === 'fr' ? 'Charte Exposants →' : 'Exhibitor Rules →'}
            </a>
          </div>

          <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
            <span style={{ width: '250px', fontWeight: 'bold', color: '#1e293b' }}>{lang === 'fr' ? 'Disponibilité' : 'Availability'}</span>
            <span style={{ color: '#475569' }}>{standInfo.dispo}</span>
          </div>

          <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
            <span style={{ width: '250px', fontWeight: 'bold', color: '#1e293b' }}>{lang === 'fr' ? 'Frais d\'emplacement' : 'Space Fees'}</span>
            <span style={{ color: '#475569' }}>{standInfo.frais}</span>
          </div>

          <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
            <span style={{ width: '250px', fontWeight: 'bold', color: '#1e293b' }}>{lang === 'fr' ? 'Électricité / Logistique' : 'Power / Logistics'}</span>
            <span style={{ color: '#475569' }}>{lang === 'fr' ? 'Disponible sur demande' : 'Available on demand'}</span>
          </div>

          <div style={{ display: 'flex', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
            <span style={{ width: '250px', fontWeight: 'bold', color: '#1e293b' }}>{lang === 'fr' ? 'Zone / Emplacement' : 'Zone / Location'}</span>
            <span style={{ color: '#475569' }}>{standInfo.terrain}</span>
          </div>

          <div style={{ display: 'flex', paddingBottom: '5px' }}>
            <span style={{ width: '250px', fontWeight: 'bold', color: '#1e293b' }}>{lang === 'fr' ? 'Responsable Restauration' : 'Food Coordinator'}</span>
            <span style={{ color: '#475569' }}>{standInfo.coordonnateur}</span>
          </div>

        </div>
      </div>

      {/* 3. LE BLOC DES CUISINIERS / STANDS INSCRITS */}
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '25px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <div style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>
          {lang === 'fr' ? 'STANDS ET TRAITEURS ENREGISTRÉS' : 'REGISTERED BOOTHS & CATERERS'}
        </div>

        {standInfo.exposants.map((exposant, idx) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: idx !== standInfo.exposants.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
            <span style={{ fontWeight: '600', color: '#1e293b', fontSize: '1.05rem' }}>{exposant.nom}</span>
            
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ backgroundColor: '#eff6ff', color: '#1e40af', padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: '500' }}>
                {exposant.specialite}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
