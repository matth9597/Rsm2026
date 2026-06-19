export const COULEURS = {
  rougeActif: '#851c1c',       
  rougeActifFond: '#fef2f2',   
  noirText: '#1e293b',         
  grisFond: '#f8fafc',         
  grisCarte: '#ffffff',        
  grisBordure: '#e2e8f0'       
};

export const obtenirInfosDiscipline = (cleActivite, t) => {
  const cle = cleActivite.toLowerCase();
  
  if (cle.includes('basket') || cle.startsWith('quart') || cle.startsWith('semi') || cle.startsWith('demi') || cle === 'finale' || cle === 'place3' || cle === 'consolation') {
    return { id: 'basket', nom: t('basket') || 'Basketball', couleur: '#f97316' };
  }
  if (cle.includes('soccer') || cle === 'soccerfinale' || cle.startsWith('consolation1') || cle.startsWith('consolation2')) {
    return { id: 'soccer', nom: t('soccer') || 'Soccer', couleur: '#0ea5e9' };
  }
  if (cle.includes('volley')) {
    return { id: 'volley', nom: t('volleyball') || 'Volleyball', couleur: '#eab308' };
  }
  if (cle.includes('tennis')) {
    return { id: 'tennis', nom: t('tennis') || 'Tennis', couleur: '#22c55e' };
  }
  if (cle.includes('petanque')) {
    return { id: 'petanque', nom: t('petanque') || 'Pétanque', couleur: '#10b981' };
  }
  if (cle.includes('marche')) {
    return { id: 'marche', nom: t('marche5Km') || 'Walk', couleur: '#ec4899' };
  }
  if (cle.includes('zumba')) {
    return { id: 'zumba', nom: t('zumba') || 'Zumba', couleur: '#df2020' };
  }
  if (cle.startsWith('classement') || cle === 'soratononina') {
    return { id: 'culturel', nom: 'Culturel', couleur: '#a855f7' };
  }
  return { id: 'animation', nom: 'Animation', couleur: '#94a3b8' };
};

export const calculerHeureFin = (heureDebut, toutesLesHeures, cleActivite, itemFin) => {
  if (itemFin) return itemFin;
  const index = toutesLesHeures.indexOf(heureDebut);
  if (index !== -1 && index < toutesLesHeures.length - 1) {
    return toutesLesHeures[index + 1];
  }
  return heureDebut;
};
