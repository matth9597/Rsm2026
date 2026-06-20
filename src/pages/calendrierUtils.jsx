// calendrierUtils.js

export const COULEURS = {
  rougeActif: '#851c1c',       
  rougeActifFond: '#fef2f2',   
  noirText: '#1e293b',         
  grisFond: '#f8fafc',         
  grisCarte: '#ffffff',        
  grisBordure: '#e2e8f0'       
};

export const obtenirInfosDiscipline = (cleActivite) => {
  const cle = cleActivite.toLowerCase();
  
  if (cle.startsWith('soccer') || cle === 'soccerfinale') {
    return { id: 'soccer', nom: 'Soccer', couleur: '#0ea5e9' };
  }
  if (cle.includes('basket') || cle.startsWith('quart') || cle.startsWith('semi') || cle.startsWith('demi') || cle === 'finale' || cle === 'place3') {
    return { id: 'basket', nom: 'Basket', couleur: '#f97316' };
  }
  if (cle.includes('volley')) {
    return { id: 'volley', nom: 'Volley', couleur: '#eab308' };
  }
  if (cle.includes('tennis')) {
    return { id: 'tennis', nom: 'Tennis', couleur: '#22c55e' };
  }
  if (cle.includes('petanque')) {
    return { id: 'petanque', nom: 'Pétanque', couleur: '#10b981' };
  }
  if (cle.includes('marche')) {
    return { id: 'marche', nom: 'Marche', couleur: '#ec4899' };
  }
  if (cle === 'soratononina') {
    return { id: 'culturel', nom: 'Dictée', couleur: '#a855f7' };
  }
  if (cle.includes('zumba')) {
    return { id: 'zumba', nom: 'Zumba', couleur: '#df2020' };
  }
  // Capte l'ouverture, la clôture, le défilé et le kata pour le filtre Animation
  if (cle.includes('ouverture') || cle.includes('cloture') || cle.includes('mode') || cle.includes('kata')) {
    return { id: 'animation', nom: 'Animation', couleur: '#94a3b8' };
  }
  return { id: 'animation', nom: 'Animation', couleur: '#94a3b8' };
};
