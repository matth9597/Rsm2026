import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementTennisDeTableFR from './ReglementTennisDeTableFR'
import ReglementTennisDeTableEN from './ReglementTennisDeTableEN'
import ReglementTennisEN from './ReglementTennisEN'

export default function ReglementTennisDeTable() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementTennisDeTableFR /> : <ReglementTennisDeTableEN />}
    </>
  );
}
