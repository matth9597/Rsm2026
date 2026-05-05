import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementVolleyballFemmeFR from './ReglementVolleyballFemmeFR'
import ReglementVolleyballFemmeEN from './ReglementVolleyballFemmeEN'

export default function ReglementVolleyballFemme() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementVolleyballFemmeFR /> : <ReglementVolleyballFemmeEN />}
    </>
  );
}
