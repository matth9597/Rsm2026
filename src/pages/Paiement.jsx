import React from 'react';
import { useLanguage } from '../LanguageContext'; // Ton système de langue

export default function Paiement() {
  const { t, lang } = useLanguage();
  const paypalFormCode = `
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="PF55G4FMKDWMQ" />
      <table>
        <tr>
          <td>
            <input type="hidden" name="on0" value="Inscription &amp; Caution RSM 2026"/>
            Inscription &amp; Caution RSM 2026
          </td>
        </tr>
        <tr>
          <td>
            <select name="os0">
              <option value="Basket / Soccer / Volley Individuel">
                Basket / Soccer / Volley Individuel $50.00 CAD
              </option>
              <option value="Tennis">
                Tennis $50.00 CAD
              </option>
              <option value="Basket / Soccer / Volley Team">
                Basket / Soccer / Volley Team $100.00 CAD
              </option>
            </select>
          </td>
        </tr>
      </table>
      <input type="hidden" name="currency_code" value="CAD" />
      <input type="image" src="https://www.paypalobjects.com/fr_CA/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
    </form>
  `;

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      
      <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '30px' }}>
        <h2 className="section-title">
          {lang === 'fr' ? 'Effectuer vos paiements pour la RSM ici' : 'Make your RSM payments here'}
        </h2>
      <div className="paypal-container" style={{ marginTop: '30px' }}>
        <p>{lang === 'fr' ? 'Cliquez sur le bouton ci-dessous pour finaliser :' : 'Click the button below to finalize:'}</p>
        <div className="paypal-wrapper">
          <div dangerouslySetInnerHTML={{ __html: paypalFormCode }} />
        </div>
      </div>
      </div>
    </div>
  );
}

