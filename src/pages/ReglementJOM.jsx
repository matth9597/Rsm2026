import React from 'react';
import { useLanguage } from '../LanguageContext';
import ReglementJOMFR from './ReglementJOMFR';
import ReglementJOMEN from './ReglementJOMEN';

export default function ReglementJOM() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementJOMFR /> : <ReglementJOMEN />}
    </>
  );
}
