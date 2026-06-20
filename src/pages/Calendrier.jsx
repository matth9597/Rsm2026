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
    { id: 'all', nom: t('tousLesSports') },
    { id: 'basket', nom: 'Basket' },
    { id: 'soccer', nom: 'Soccer' },
    { id: 'volley', nom: 'Volley' },
    { id: 'tennis', nom: 'Tennis' },
    { id: 'petanque', nom: 'Pétanque' },
    { id: 'marche', nom: 'Marche' },
    { id: 'zumba', nom: 'Zumba' },
    { id: 'culturel', nom: t('soratononina') },
    { id: 'animation', nom: 'Animation' }
  ];

  const validerFiltres = (act) => {
    const coordSite = siteFiltre === 'all' || act.site === siteFiltre;
    const disc = obtenirInfosDiscipline(act.activite);
    const coordSport = sportFiltre === 'all' || disc.id === sportFiltre;
    return coordSite && coordSport;
  };

  const obtenirTimelineFusionnee = () => {
    const heuresTriees = Object.keys(programmeDuJour).sort();
    const evenementsFusionnes = [];

    heuresTriees.forEach((heure) => {
      const activites = programmeDuJour[heure];

      activites.forEach((act) => {
        const disc = obtenirInfosDiscipline(act.activite);
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

  const obtenirFormatBrut = (activite, disciplineNom) => {
    const cle = activite.toLowerCase();
    
    if (jourSelectionne === 'dimanche' && (cle === 'basketdemi1' || cle === 'basketdemi2')) {
      const phaseNum = cle.slice(-1);
      return `Basket Homme - demi${phaseNum}`;
    }

    let phaseTrouvee = "";
    if (cle.includes('quart')) phaseTrouvee = "quart" + (activite.match(/\d+/) || "");
    if (cle.includes('semi')) phaseTrouvee = "semi" + (activite.match(/\d+/) || "");
    if (cle.includes('demi')) phaseTrouvee = "demi" + (activite.match(/\d+/) || "");
    if (cle.includes('3eplace')) phaseTrouvee = "3e place";
    if (cle.includes('5evs6e')) phaseTrouvee = "5e vs 6e";
    if (cle.includes('10evs11e')) phaseTrouvee = "10e vs 11e";
    if (cle.includes('12evs13e')) phaseTrouvee = "12e vs 13e";
    
    if (phaseTrouvee) {
      let precision = "";
      if (cle.includes('femme')) precision = " Femme";
      if (cle.includes('homme')) precision = " Homme";
      if (cle.includes('veterans')) precision = " Vétérans";
      if (cle.includes('kids')) precision = " Kids";

      const nomSportAffiche = disciplineNom === 'Basketball' ? 'Basket' : (disciplineNom === 'Volleyball' ? 'Volley' : disciplineNom);
      return `${nomSportAffiche}${precision} - ${phaseTrouvee}`;
    }

    if (cle.startsWith('petanque')) {
      let phaseNettoyee = activite.replace(/^petanque/i, '');
      if (phaseNettoyee === 'Classement1') phaseNettoyee = 'classement 1';
      if (phaseNettoyee === 'Classement2') phaseNettoyee = 'classement 2';
      if (phaseNettoyee === 'Classement3') phaseNettoyee = 'classement 3';
      if (phaseNettoyee === 'Quart') phaseNettoyee = 'Quart de finale';
      if (phaseNettoyee === 'Demi') phaseNettoyee = 'Demi-finale';
      if (phaseNettoyee === 'Finale') phaseNettoyee = 'Finale';
      return `Pétanque - ${phaseNettoyee}`;
    }

    if (cle.includes('finale')) {
      let precision = "";
      if (cle.includes('femme')) precision = " Femme";
      if (cle.includes('homme')) precision = " Homme";
      if (cle.includes('veterans')) precision = " Vétérans";
      if (cle.includes('kids')) precision = " Kids";

      const nomSportAffiche = disciplineNom === 'Basketball' ? 'Basket' : (disciplineNom === 'Volleyball' ? 'Volley' : disciplineNom);
      return `${nomSportAffiche}${precision} - Finale`;
    }

    if (cle.includes('junior') || cle.includes('kids')) {
      const texteDeBase = t(activite);
      if (jourSelectionne === 'dimanche') {
        return `${texteDeBase} - Finale`;
      }
      return texteDeBase;
    }
    
    return t(activite);
  };

  return (
    <>
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
          <select value={sportFiltre} onChange={(e) => setSportFiltre(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0', fontWeight: '600', outline: 'none', color: COULEURS.noirText }}>
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
                  <div style={{ fontWeight: '700', color: COULEURS.noirText, fontSize: '14px' }}>
                    {obtenirFormatBrut(item.activite, item.discipline.nom)}
                  </div>
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
    </>
  );
}
