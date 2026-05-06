import React from 'react';
import { useLanguage } from '../LanguageContext';

export default function Programmation() {
  const googleSheetUrl = "https://google.com";
  const { lang, toggleLang, t } = useLanguage();

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
      <p>{t("programmationMessage")}</p>
    </div>
  );
}
