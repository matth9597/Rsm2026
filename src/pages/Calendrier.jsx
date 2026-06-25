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
    if (discId && discId.startsWith('basket')) {
      discId = 'basket';
    } else if (discId && discId.startsWith('volley')) {
      discId = 'volley';
    } else if (!discId) {
      const disc = obtenirInfosDiscipline(act.activite);
      discId = disc.id;
    }
    
    const coordSport = sportFiltre === 'all' || discId === sportFiltre;
    return coordSite && coordSport;
  };

  const heuresDebutTriees = Object.keys(programmeDuJour).sort();

  const obtenirFormatBrut = (activite, disciplineNom) => {
    if (!activite) return ""; 
    const cle = activite.toLowerCase();
    
    if (cle.includes('vs') && !cle.includes('5evs6e') && !cle.includes('10evs11e') && !cle.includes('12evs13e')) {
      return activite;
    }

    if (cle.includes('classement') || cle.includes('quart de finale') || cle.includes('demi-finale')) {
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
      return phaseTrouvee.charAt(0).toUpperCase() + phaseTrouvee.slice(1);
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
      return "Finale";
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

      {/* TIMELINE PRINCIPALE AVEC REGROUPEMENT */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {heuresDebutTriees.map((heure) => {
          const activitesDeLHeure = (programmeDuJour[heure] || []).filter(act => validerFiltres(act));
          
          if (activitesDeLHeure.length === 0) return null;

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
              {Object.entries(structureRegroupee).map(([siteKey, lesTerrainsDuSite]) => {
                const nomDuSite = calendarData.sites[siteKey]?.nom;

                return (
                  <div key={siteKey} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {Object.entries(lesTerrainsDuSite).map(([terrainNom, matchs]) => {
                      const premierMatch = matchs[0] || matchs;
                      
                      // 1. Détection stricte et finale des genres et des catégories pour l'en-tête
                      let disciplineAffichee = "";
                      let couleurPastille = "#ea580c"; 

                      const activiteBruteBas = premierMatch?.activite?.toLowerCase() || "";
                      const disciplineIdBrute = premierMatch?.disciplineId || "";

                      if (disciplineIdBrute === 'basket-homme') {
                        disciplineAffichee = "Basket Homme";
                        couleurPastille = "#ea580c";
                      } else if (disciplineIdBrute === 'basket-femme' || activiteBruteBas.includes('basketfemme')) {
                        disciplineAffichee = "Basket Femme";
                        couleurPastille = "#ea580c";
                      } else if (disciplineIdBrute === 'basket') {
                        if (activiteBruteBas.includes('junior')) {
                          disciplineAffichee = "Basket Junior";
                        } else if (activiteBruteBas.includes('kids') || activiteBruteBas.includes('u12')) {
                          disciplineAffichee = "Basket Enfants";
                        } else if (jourSelectionne === 'samedi' && heure === '10:00') {
                          disciplineAffichee = "Basket Femme";
                        } else {
                          disciplineAffichee = "Basket Homme";
                        }
                        couleurPastille = "#ea580c";
                      } else if (activiteBruteBas.includes('basketballjunior')) {
                        disciplineAffichee = "Basket Junior";
                        couleurPastille = "#ea580c";
                      } else if (activiteBruteBas.includes('basketballkids')) {
                        disciplineAffichee = "Basket Enfants";
                        couleurPastille = "#ea580c";
                      } else if (disciplineIdBrute === 'soccer' || activiteBruteBas.includes('soccer')) {
                        if (activiteBruteBas.includes('mixte')) {
                          disciplineAffichee = "Soccer Mixte";
                        } else if (activiteBruteBas.includes('veteran')) {
                          disciplineAffichee = "Soccer Vétérans";
                        } else if (activiteBruteBas.includes('kids') || activiteBruteBas.includes('enfants')) {
                          disciplineAffichee = "Soccer Enfants";
                        } else {
                          disciplineAffichee = "Soccer Homme";
                        }
                        couleurPastille = "#10b981";
                      } else if (disciplineIdBrute === 'volley-femme' || activiteBruteBas.includes('volleyfemme') || activiteBruteBas.includes('semi-final 1 vs')) {
                        disciplineAffichee = "Volley Femme";
                        couleurPastille = "#2563eb"; 
                      } else if (disciplineIdBrute === 'volley' || activiteBruteBas.includes('volleyhomme') || activiteBruteBas.includes('volleyballhommes')) {
                        disciplineAffichee = "Volley Homme";
                        couleurPastille = "#2563eb";
                      } else if (disciplineIdBrute === 'petanque') {
                        disciplineAffichee = "Pétanque";
                        couleurPastille = "#a855f7"; 
                      } else {
                        const disc = obtenirInfosDiscipline(premierMatch?.activite || "");
                        disciplineAffichee = disc.nom;
                        couleurPastille = disc.couleur;
                      }

                      let nomPouleExtrait = "";
                      let terrainNettoye = terrainNom;
                      if (terrainNom.includes('—')) {
                        const parties = terrainNom.split('—');
                        nomPouleExtrait = parties[0]?.trim() || ""; 
                        terrainNettoye = parties[1]?.trim() || terrainNom;   
                      }

                      const texteEnteteComplet = `📍 ${nomDuSite}  |  ${terrainNettoye}`;

                      return (
                        <div key={terrainNom} style={{ backgroundColor: COULEURS.grisCarte, padding: '16px', borderRadius: '12px', border: `1px solid ${COULEURS.grisBordure}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)', display: 'flex', gap: '14px', overflow: 'hidden' }}>
                          <div style={{ width: '4px', backgroundColor: couleurPastille, borderRadius: '4px', flexShrink: 0 }} />
                          
                          {/* minWidth: 0 et overflowHidden sont obligatoires pour permettre le scroll interne de ses enfants */}
                          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px', minWidth: 0, width: '100%' }}>
                            
                            {/* EN-TÊTE DU HAUT : Défilable horizontalement si l'écran est petit */}
                            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '6px', width: '100%', overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', fontWeight: '800', color: COULEURS.noirText, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.3px', WebkitOverflowScrolling: 'touch' }}>
                              {texteEnteteComplet}
                            </div>

                            {/* EN-TÊTE HORAIRE */}
                            <div style={{ fontSize: '13px', fontWeight: '800', color: COULEURS.noirText, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '-4px' }}>
                              <span style={{ backgroundColor: couleurPastille, width: '5px', height: '5px', borderRadius: '50%' }}></span>
                              ~ {heure} | {disciplineAffichee} {nomPouleExtrait ? `| ${nomPouleExtrait}` : ""}
                            </div>

                            {/* LISTE DES MATCHS : Taille fixe à 13.5px mais slider horizontal (scroll) si la ligne déborde */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '4px', width: '100%', overflow: 'hidden' }}>
                              {matchs.map((item, idx) => (
                                <div 
                                  key={idx} 
                                  style={{ 
                                    fontWeight: '700', 
                                    color: COULEURS.noirText, 
                                    whiteSpace: 'nowrap',
                                    display: 'block',
                                    width: '100%',
                                    fontSize: '13.5px', 
                                    overflowX: 'auto', // Permet le slide horizontal
                                    overflowY: 'hidden',
                                    paddingBottom: '2px',
                                    WebkitOverflowScrolling: 'touch' // Rend le scroll fluide sur iPhone/Android
                                  }}
                                >
                                  {obtenirFormatBrut(item.activite, disciplineAffichee)}
                                </div>
                              ))}
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
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
