// Calendrier.jsx
import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext'; 
import { calendarData } from '../calendarData';
import { COULEURS, obtenirInfosDiscipline } from './calendrierUtils';

export default function Calendrier({ 
  jourSelectionne, setJourSelectionne, 
  siteFiltre, setSiteFiltre, 
  sportFiltre, setSportFiltre,
  clesJours 
}) {
  const { t } = useLanguage(); 

  useEffect(() => {
    if (!clesJours.includes(jourSelectionne) && clesJours.length > 0) {
      setJourSelectionne(clesJours);
    }
  }, [jourSelectionne, clesJours, setJourSelectionne]);

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
    
    let discId = act.disciplineId; 
    if (!discId) {
      const disc = obtenirInfosDiscipline(act.activite);
      discId = disc.id;
    }
    
    const coordSport = sportFiltre === 'all' || discId === sportFiltre;
    return coordSite && coordSport;
  };

  const heuresDebutTriees = Object.keys(programmeDuJour).sort();

  const obtenirFormatBrut = (activite, disciplineNom) => {
    const cle = activite.toLowerCase();
    
    if (cle.includes('vs') && !cle.includes('5evs6e') && !cle.includes('10evs11e') && !cle.includes('12evs13e')) {
      return activite;
    }
    
    if (jourSelectionne === 'dimanche') {
      if (cle === 'basketdemi1' || cle === 'basketdemi2') {
        const phaseNum = cle.slice(-1);
        return `Basket Homme - demi${phaseNum}`;
      }
      if (cle === 'soccerdemi1' || cle === 'soccerdemi2') {
        const phaseNum = cle.slice(-1);
        return `Soccer Homme - demi${phaseNum}`;
      }
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

      if (cle.startsWith('soccer') && !precision) {
        precision = " Homme";
      }
      if (cle.startsWith('baskethommequart') && !precision) {
        precision = " Homme";
      }

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

      if (cle === 'soccerfinale') {
        precision = " Homme";
      }

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

  const aDesActivitesFiltrees = heuresDebutTriees.some(heure => 
    (programmeDuJour[heure] || []).some(act => validerFiltres(act))
  );

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

      {/* TIMELINE DE RENDU DYNAMIQUE */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {heuresDebutTriees.map((heure) => {
          const activitesDeLHeure = (programmeDuJour[heure] || []).filter(act => validerFiltres(act));
          
          if (activitesDeLHeure.length === 0) return null;

          // Regroupement par Site, puis par Terrain
          const structureRegroupee = {};
          activitesDeLHeure.forEach(act => {
            if (!structureRegroupee[act.site]) {
              structureRegroupee[act.site] = {};
            }
            if (!structureRegroupee[act.site][act.terrain]) {
              structureRegroupee[act.site][act.terrain] = [];
            }
            structureRegroupee[act.site][act.terrain].push(act);
          });

          return (
            <div key={heure} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {Object.entries(structureRegroupee).map(([siteKey, terrains]) => (
                <div key={siteKey} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* AFFICHAGE DU LIEU EN TITRE UNIQUE */}
                  <div style={{ fontSize: '12px', fontWeight: '800', color: COULEURS.rougeActif, textTransform: 'uppercase', letterSpacing: '0.5px', paddingLeft: '4px' }}>
                    📍 {calendarData.sites[siteKey]?.nom}
                  </div>

                  {/* BOUCLE SUR CHAQUE CONFIGURATION DE TERRAIN */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                    {Object.entries(terrains).map(([terrainNom, matchs]) => {
                      const discPremierMatch = matchs[0]?.disciplineId === 'basket' 
                        ? { couleur: '#ea580c', nom: 'Basketball' }
                        : obtenirInfosDiscipline(matchs[0]?.activite || "");

                      let nomPouleExtrait = "";
                      let terrainNettoye = terrainNom;
                      if (terrainNom.includes('—')) {
                        const parties = terrainNom.split('—');
                        nomPouleExtrait = parties[0].trim(); // Récupère "Pool A"
                        terrainNettoye = parties[1].trim();   // Garde uniquement "Gym 1"
                      }

                      return (
                        <div key={terrainNom} style={{ backgroundColor: COULEURS.grisCarte, padding: '16px', borderRadius: '12px', border: `1px solid ${COULEURS.grisBordure}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', display: 'flex', gap: '14px' }}>
                          <div style={{ width: '4px', backgroundColor: discPremierMatch.couleur, borderRadius: '4px', flexShrink: 0 }} />
                          
                          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            
                            {/* EN-TÊTE CORRIGÉ : Heure de début + Nom de la poule côte à côte */}
                            <div style={{ fontSize: '13px', fontWeight: '800', color: COULEURS.noirText, display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
                              <span style={{ backgroundColor: discPremierMatch.couleur, width: '5px', height: '5px', borderRadius: '50%' }}></span>
                              ~ {heure} {nomPouleExtrait ? `| ${nomPouleExtrait}` : ""}
                            </div>

                            {/* LISTE DES AFFICHES DE MATCHS */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                              {matchs.map((item, idx) => (
                                <div key={idx} style={{ fontWeight: '700', color: COULEURS.noirText, fontSize: '13.5px', lineHeight: '1.4' }}>
                                  {obtenirFormatBrut(item.activite, discPremierMatch.nom)}
                                </div>
                              ))}
                            </div>

                            {/* LE TERRAIN NETTOYÉ APPARAÎT TOUT EN BAS */}
                            <div style={{ fontSize: '11.5px', color: '#64748b', marginTop: '2px', borderTop: '1px dashed #f1f5f9', paddingTop: '6px' }}>
                              🏅 Gymnase : <b>{terrainNettoye}</b>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              ))}

            </div>
          );
        })}

        {!aDesActivitesFiltrees && (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#94a3b8', fontSize: '14px', backgroundColor: '#fff', borderRadius: '10px', border: `1px solid ${COULEURS.grisBordure}` }}>
            {t('aucunMatch')}
          </div>
        )}
      </div>
    </>
  );
}
