import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementSoccerVeteranFR from './ReglementSoccerVeteranFR'
import ReglementSoccerVeteranEN from './ReglementSoccerVeteranEN'

export default function ReglementSoccerVeteran() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementSoccerVeteranFR /> : <ReglementSoccerVeteranEN />}
    </>
  );
}
