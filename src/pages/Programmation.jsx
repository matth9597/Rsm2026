// Calendrier.jsx
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext'; 
import { calendarData } from '../calendarData';
import { COULEURS, obtenirInfosDiscipline } from './calendrierUtils';

export default function Calendrier() {
  const { t } = useLanguage(); 
  const clesJours = Object.keys(calendarData.programme);
  const [jourSelectionne, setJourSelectionne] = useState(clesJours[0] || '');
  const [siteFiltre, setSiteFiltre] = useState('all');
  const [sportFiltre, setSportFiltre] = useState('all'); 

  useEffect(() => {
    if (!clesJours.includes(jourSelectionne) && clesJours.length > 0) {
      setJourSelectionne(clesJours[0]);
    }
  }, [jourSelectionne, clesJours]);

  const programmeDuJour = calendarData.programme[jourSelectionne] || {};

  const optionsSports = [
    { id: 'all', nom: t('tousLesSports') || 'Tous les sports' },
    { id: 'basket', nom: t('basket') || 'Basketball' },
    { id: 'soccer', nom: t('soccer') || 'Soccer' },
    { id: 'volley', nom: t('volleyball') || 'Volleyball' },
    { id: 'tennis', nom: t('tennis') || 'Tennis' },
    { id: 'petanque', nom: t('petanque') || 'Pétanque' },
    { id: 'marche', nom: t('marche5Km') || 'Walk' },
    { id: 'zumba', nom: t('zumba') || 'Zumba' },
    { id: 'culturel', nom: 'Culturel' },
    { id: 'animation', nom: 'Animation' }
  ];

  const validerFiltres = (act) => {
    const coordSite = siteFiltre === 'all' || act.site === siteFiltre;
    const disc = obtenirInfosDiscipline(act.activite, t);
    const coordSport = sportFiltre === 'all' || disc.id === sportFiltre;
    return coordSite && coordSport;
  };

  const obtenirTimelineFusionnee = () => {
    const heuresTriees = Object.keys(programmeDuJour).sort();
    const evenementsFusionnes = [];

    heuresTriees.forEach((heure) => {
      const activites = programmeDuJour[heure];

      activites.forEach((act) => {
        const disc = obtenirInfosDiscipline(act.activite, t);
        if (!validerFiltres(act)) return;

        const matchPrecedent = evenementsFusionnes.find(
          (prev) =>
            prev.site === act.site &&
            prev.terrain === act.terrain &&
            prev.activite === act.activite &&
            prev.heureFin === heure
        );

        if (matchPrecedent) {
          matchPrecedent.heureFin = act.fin;
        } else {
          evenementsFusionnes.push({
            ...act,
            heureDebut: heure,
            heureFin: act.fin,
            discipline: disc
          });
        }
      });
    });

    const timelineRegroupee = {};
    evenementsFusionnes.forEach((evt) => {
      if (!timelineRegroupee[evt.heureDebut]) {
        timelineRegroupee[evt.heureDebut] = [];
      }
      timelineRegroupee[evt.heureDebut].push(evt);
    });

    return timelineRegroupee;
  };

  const timelineData = obtenirTimelineFusionnee();
  const heuresDebutTriees = Object.keys(timelineData).sort();

  return (
    <div style={{ padding: '16px', backgroundColor: COULEURS.grisFond, minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '800', color: COULEURS.noirText, marginBottom: '20px' }}>{t('planningTitre')}</h2>

        {/* ONGLETS DES JOURS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', marginBottom: '20px' }}>
          {clesJours.map((j) => (
            <button key={j} onClick={() => setJourSelectionne(j)} style={{ padding: '12px 6px', borderRadius: '8px', border: 'none', fontWeight: '700', fontSize: '14px', cursor: 'pointer', backgroundColor: jourSelectionne === j ? COULEURS.rougeActifFond : '#ffffff', color: jourSelectionne === j ? COULEURS.rougeActif : '#64748b', outline: 'none' }}>
              {j === 'vendredi' ? t('ven3Juillet') : j === 'samedi' ? t('sam4Juillet') : t('dim5Juillet')}
            </button>
          ))}
        </div>

        {/* FILTRES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginBottom: '24px', backgroundColor: '#ffffff', padding: '16px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>{t('filtrerLieu')}</label>
            <select value={siteFiltre} onChange={(e) => setSiteFiltre(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0', fontWeight: '600', outline: 'none', color: COULEURS.noirText }}>
              {Object.entries(calendarData.sites).map(([k, v]) => <option key={k} value={k}>{k === 'all' ? t('tousLesSites') : v.nom}</option>)}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>{t('filtrerSport')}</label>
            <select value={sportFiltre} onChange={(e) => setSiteFiltre('all', setSportFiltre(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0', fontWeight: '600', outline: 'none', color: COULEURS.noirText }}>
              {optionsSports.map((s) => <option key={s.id} value={s.id}>{s.nom}</option>)}
            </select>
          </div>
        </div>

        {/* TIMELINE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {heuresDebutTriees.map((hDebut) => (
            <div key={hDebut} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {timelineData[hDebut].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: COULEURS.grisCarte, padding: '14px', borderRadius: '10px', border: `1px solid ${COULEURS.grisBordure}`, display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '4px', height: '48px', backgroundColor: item.discipline.couleur, borderRadius: '4px', flexShrink: 0 }} />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: COULEURS.noirText, marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ backgroundColor: item.discipline.couleur, width: '5px', height: '5px', borderRadius: '50%' }}></span>
                      {item.heureDebut} — {item.heureFin}
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: item.discipline.couleur, marginBottom: '2px' }}>{item.discipline.nom}</div>
                    {/* CORRIGÉ : L'affichage direct de t(item.activite) affiche les numéros complets configurés */}
                    <div style={{ fontWeight: '700', color: COULEURS.noirText, fontSize: '14px' }}>{t(item.activite)}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>📍 {calendarData.sites[item.site]?.nom} <span style={{ color: '#cbd5e1' }}>|</span> <b>{item.terrain}</b></div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {heuresDebutTriees.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94a3b8', fontSize: '14px', backgroundColor: '#fff', borderRadius: '10px', border: `1px solid ${COULEURS.grisBordure}` }}>
              {t('aucunMatch')}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
