import React from 'react';
import { useLanguage } from '../../LanguageContext';
import RegSoccerFR from './RegSoccerFR'
import RegSoccerEN from './RegSoccerEN'

export default function Reglement() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <RegSoccerFR /> : <RegSoccerEN />}
    </>
  );
}
