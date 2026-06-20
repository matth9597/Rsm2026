// Programmation.jsx
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext'; 
import Calendrier from './Calendrier';
import Directions from './Directions';
import { COULEURS } from './calendrierUtils';
import { calendarData } from '../calendarData';

export default function Programmation() {
  const { t } = useLanguage();
  const [sousMenuActif, setSousMenuActif] = useState('sites'); 

  // Les filtres sont mémorisés ici au niveau du parent
  const clesJours = Object.keys(calendarData.programme);
  const [jourSelectionne, setJourSelectionne] = useState(clesJours[0] || '');
  const [siteFiltre, setSiteFiltre] = useState('all');
  const [sportFiltre, setSportFiltre] = useState('all'); 

  const lienCalendrierGlobal = 'https://drive.google.com/file/d/1jfffGDc_gXgT_4sC2wBpUSApDmKzpH8M/view?usp=drive_link';

  return (
    <div style={{ padding: '16px', backgroundColor: COULEURS.grisFond, minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        
        {/* SOUS-MENU DE LA PROGRAMMATION */}
        <div style={{ display: 'flex', borderBottom: '2px solid #e2e8f0', marginBottom: '24px', justifyContent: 'space-between', backgroundColor: '#ffffff', borderRadius: '8px 8px 0 0' }}>
          <button 
            onClick={() => setSousMenuActif('sites')} 
            style={{ flex: 1, padding: '14px 4px', border: 'none', background: 'none', fontWeight: '700', fontSize: '14px', color: sousMenuActif === 'sites' ? COULEURS.rougeActif : '#64748b', borderBottom: sousMenuActif === 'sites' ? `3px solid ${COULEURS.rougeActif}` : 'none', cursor: 'pointer', outline: 'none' }}
          >
            📍 {t('sites') || 'Sites'}
          </button>
          <button 
            onClick={() => {
              setSousMenuActif('global');
              window.open(lienCalendrierGlobal, '_blank');
            }} 
            style={{ flex: 1, padding: '14px 4px', border: 'none', background: 'none', fontWeight: '700', fontSize: '14px', color: sousMenuActif === 'global' ? COULEURS.rougeActif : '#64748b', borderBottom: sousMenuActif === 'global' ? `3px solid ${COULEURS.rougeActif}` : 'none', cursor: 'pointer', outline: 'none' }}
          >
            📅 {t('calendrierGlobal') || 'Calendrier Global'}
          </button>
          <button 
            onClick={() => setSousMenuActif('detaille')} 
            style={{ flex: 1, padding: '14px 4px', border: 'none', background: 'none', fontWeight: '700', fontSize: '14px', color: sousMenuActif === 'detaille' ? COULEURS.rougeActif : '#64748b', borderBottom: sousMenuActif === 'detaille' ? `3px solid ${COULEURS.rougeActif}` : 'none', cursor: 'pointer', outline: 'none' }}
          >
            📋 {t('calendrierDetaille') || 'Calendrier Détaillé'}
          </button>
        </div>

        {/* AFFICHAGE EN FONCTION DE L'ONGLET SÉLECTIONNÉ */}
        {sousMenuActif === 'sites' && <Directions />}

        {sousMenuActif === 'global' && (
          <div style={{ textAlign: 'center', padding: '40px 16px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '14px', color: '#64748b', fontWeight: '600', marginBottom: '16px' }}>
              Le calendrier global complet s'est ouvert dans un nouvel onglet de votre navigateur.
            </p>
            <button 
              onClick={() => window.open(lienCalendrierGlobal, '_blank')}
              style={{ backgroundColor: COULEURS.rougeActif, color: '#ffffff', padding: '12px 20px', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', fontSize: '14px' }}
            >
              Réouvrir le Calendrier Complet
            </button>
          </div>
        )}

        {/* Passage des variables mémorisées au Calendrier sous forme de props */}
        {sousMenuActif === 'detaille' && (
          <Calendrier 
            jourSelectionne={jourSelectionne} setJourSelectionne={setJourSelectionne}
            siteFiltre={siteFiltre} setSiteFiltre={setSiteFiltre}
            sportFiltre={sportFiltre} setSportFiltre={setSportFiltre}
            clesJours={clesJours}
          />
        )}

      </div>
    </div>
  );
}
