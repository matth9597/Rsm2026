import React from 'react';
import { MapPin } from '@phosphor-icons/react'
import { useLanguage } from '../LanguageContext';

export default function Programmation() {
  const googleSheetUrl = "https://google.com";
  const { lang, toggleLang, t } = useLanguage();
    const sites = [
    { nom: "École Secondaire Mont-Bleu", adresse: "389 Boulevard de la Cité-des-Jeunes, Gatineau, Québec J8Z 1W6" },
    { nom: "Cégep de l'Outaouais", adresse: "333 Boulevard de la Cité-des-Jeunes, Gatineau, Québec J8Y 6L5" },
    { nom: "Cégep Heritage", adresse: "325 Boulevard de la Cité-des-Jeunes, Gatineau, Québec J8Y 6T3" },
    { nom: "Collège Nouvelles Frontières", adresse: "250 Rue Gamelin, Gatineau, QC J8Y 1W9" }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
      <p style={{ color: '#9f1617', fontSize: '20px', fontWeight: 'bold' }}>{t("programmationMessage")}</p>
      <p>
      {lang === 'fr' 
        ? 'La RSM 2026 se fera à ces endroits ci-dessous. Certaines disciplines peuvent commencer le Vendredi 3 juillet dès 14h, dont le Soccer Adulte, Basketball Adulte Homme et Femmes, Volley Ball Adulte Homme et Femmes.' 
        : "The RSM 2026 will take place at the locations listed below. Some disciplines may begin on Friday, July 3rd at 2 PM, including Adult Soccer, Adult Men's and Women's Basketball, and Adult Men's and Women's Volleyball."}
      </p>
      {sites.map((site, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
          <MapPin size={22} style={{ marginRight: '10px', marginTop: '3px' }} weight="bold" />
          <div>
            <div style={{ fontWeight: 'bold' }}>{site.nom}</div>
            <div>{site.adresse}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
