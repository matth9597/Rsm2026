import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementPetanqueFR from './ReglementPetanqueFR'
import ReglementPetanqueEN from './ReglementPetanqueEN'

export default function ReglementPetanque() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementPetanqueFR /> : <ReglementPetanqueEN />}
    </>
  );
}
