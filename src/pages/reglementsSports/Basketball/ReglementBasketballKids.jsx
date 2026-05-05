import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementBasketballKidsFR from './ReglementBasketballKidsFR'
import ReglementBasketballKidsEN from './ReglementBasketballKidsEN'

export default function ReglementBasketballKids() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementBasketballKidsFR /> : <ReglementBasketballKidsEN />}
    </>
  );
}
