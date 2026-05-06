import React from 'react';
import { InstagramLogo, FacebookLogo, EnvelopeSimple, ArrowRight } from "@phosphor-icons/react";
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t, lang } = useLanguage();

  const contacts = [
    {
      id: 'insta',
      icon: <InstagramLogo size={32} weight="duotone" />,
      label: 'Instagram',
      value: '@RSMOttawa',
      url: 'https://www.instagram.com/rsm.ottawagatineau',
      color: '#E1306C'
    },
    {
      id: 'fb',
      icon: <FacebookLogo size={32} weight="duotone" />,
      label: 'Facebook',
      value: 'RSM Ottawa-Gatineau',
      url: 'https://www.facebook.com/people/RSM-Ottawa-Gatineau/61580375546106/',
      color: '#1877F2'
    },
    {
      id: 'mail',
      icon: <EnvelopeSimple size={32} weight="duotone" />,
      label: 'Email',
      value: 'rsmottawagatineau@gmail.com',
      url: 'mailto:rsmottawagatineau@gmail.com',
      color: '#9f1617'
    }
  ];

  return (
    <div className="app-container">
      <div className="contact-wrapper">
        <h1 className="section-title">
          {t("contactezNous")}
        </h1>

        <div className="contact-grid">
          {contacts.map((item) => (
            <a 
              key={item.id} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card"
            >
              <div className="contact-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
              <ArrowRight size={20} className="contact-arrow" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
