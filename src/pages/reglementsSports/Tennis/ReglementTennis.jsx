import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementTennisFR from './ReglementTennisFR'
import ReglementTennisEN from './ReglementTennisEN'

export default function ReglementTennis() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementTennisFR /> : <ReglementTennisEN />}
    </>
  );
}
