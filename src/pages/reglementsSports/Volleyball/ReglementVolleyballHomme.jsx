import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementVolleyballHommeFR from './ReglementVolleyballHommeFR'
import ReglementVolleyballHommeEN from './ReglementVolleyballHommeEN'

export default function ReglementVolleyballHomme() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementVolleyballHommeFR /> : <ReglementVolleyballHommeEN />}
    </>
  );
}
