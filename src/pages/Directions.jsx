import React from 'react';
import { MapPin, Warning } from '@phosphor-icons/react'
import { useLanguage } from '../LanguageContext';

export default function Directions() {
  const googleSheetUrl = "https://google.com";
  const { lang, toggleLang, t } = useLanguage();
    const sites = [
    { nom: "École Secondaire Mont-Bleu", adresse: "389 Boulevard de la Cité-des-Jeunes, Gatineau, Québec J8Z 1W6" },
    { nom: "Cégep de l'Outaouais", adresse: "333 Boulevard de la Cité-des-Jeunes, Gatineau, Québec J8Y 6L5", parkingWaring: true },
    { nom: "Collège Heritage", adresse: "325 Boulevard de la Cité-des-Jeunes, Gatineau, Québec J8Y 6T3" },
    { nom: "Collège Nouvelles Frontières", adresse: "250 Rue Gamelin, Gatineau, QC J8Y 1W9" },
    { nom: "Parc Bisson (Tennis)", adresse: "36 Thérien Street, Gatineau, QC, J8Y 1H8" },
    { nom: "Centre Ernest Lattion", adresse: "30 Rue COURT, GATINEAU, QC, J9H 4L6 " }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
      {sites.map((site, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '15px' }}>
          <MapPin size={22} style={{ marginRight: '10px', marginTop: '3px' }} weight="bold" />
          <div>
            <div style={{ fontWeight: 'bold' }}>
              {site.nom}
              {site.parkingWaring && (
                <span style={{ display: 'inline-flex', alignItems: 'center', marginLeft: '8px', color: '#eab308', fontWeight: 'bold' }}>
                  <Warning size={18} weight="fill" style={{ marginRight: '4px' }} />
                  {t("parkingPayant")}
                </span>
              )}
            </div>
            <div>{site.adresse}</div>
          </div>
        </div>
      ))}
      <div style={{ marginBottom: '30px', width: '100%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <img 
          src="/mapRsm1.png" 
          alt="map" 
          style={{ width: '100%', height: 'auto', display: 'block' }} 
        />
      </div>
    </div>
  );
}
