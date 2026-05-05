import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementSoccerHommeFR from './ReglementSoccerHommeFR'
import ReglementSoccerHommeEN from './ReglementSoccerHommeEN'

export default function ReglementSoccerHomme() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementSoccerHommeFR /> : <ReglementSoccerHommeEN />}
    </>
  );
}
