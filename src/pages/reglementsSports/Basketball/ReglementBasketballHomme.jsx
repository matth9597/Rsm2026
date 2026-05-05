import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementBasketballHommeFR from './ReglementBasketballHommeFR'
import ReglementBasketballHommeEN from './ReglementBasketballHommeEN'

export default function ReglementBasketballHomme() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementBasketballHommeFR /> : <ReglementBasketballHommeEN />}
    </>
  );
}
