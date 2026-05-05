import React from 'react';
import { useLanguage } from '../../../LanguageContext';
import ReglementSoccerKidsFR from './ReglementSoccerKidsFR'
import ReglementSoccerKidsEN from './ReglementSoccerKidsEN'

export default function ReglementSoccerKids() {
  const { lang } = useLanguage();

  return (
    <>
      {lang === 'fr' ? <ReglementSoccerKidsFR /> : <ReglementSoccerKidsEN />}
    </>
  );
}
