import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementBasketballJuniorFR from './ReglementBasketballJuniorFR'
import ReglementBasketballJuniorEN from './ReglementBasketballJuniorEN'

export default function ReglementBasketballJunior() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementBasketballJuniorFR /> : <ReglementBasketballJuniorEN />}
    </>
  );
}
