import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementSoccerMixedFR from './ReglementSoccerMixedFR'
import ReglementSoccerMixedEN from './ReglementSoccerMixedEN'

export default function ReglementSoccerMixed() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementSoccerMixedFR /> : <ReglementSoccerMixedEN />}
    </>
  );
}
