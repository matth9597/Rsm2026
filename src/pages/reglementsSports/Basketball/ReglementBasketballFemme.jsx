import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementBasketballFemmeFR from './ReglementBasketballFemmeFR'
import ReglementBasketballFemmeEN from './ReglementBasketballFemmeEN'

export default function ReglementBasketballFemme() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementBasketballFemmeFR /> : <ReglementBasketballFemmeEN />}
    </>
  );
}
