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
        </tr>
        <tr>
          <td>
            <select name="os0">
              <option value="Caution Equipe Adulte (Basket/Soccer/Volley) ">
                Caution Equipe Adulte (Basket/Soccer/Volley)  $100.00 CAD
              </option>
              <option value="Caution Equipe (SoccerMixte/BasketJunior/Petanque)">
                Caution Equipe (SoccerMixte/BasketJunior/Petanque) $50.00 CAD
              </option>
              <option value="Inscription Individuelle Adulte (Basket/Soccer/Volley)">
                Inscription Individuelle Adulte (Basket/Soccer/Volley) $50.00 CAD
              </option>
              <option value="Inscription Individuelle (Soccer Mixte, BasketJunior) ">
                Inscription Individuelle (Soccer Mixte, BasketJunior)  $30.00 CAD
              </option>
              <option value="Inscription Individuelle (Petanque/TennisSimple) ">
                Inscription Individuelle (Petanque/TennisSimple)  $40.00 CAD
              </option>
              <option value="Insciption (TennisDouble)">
                Insciption (TennisDouble) $60.00 CAD
              </option>
            </select>
          </td>
        </tr>
      </table>
      <td>
          <input type="hidden" name="on1" value="Equipe et/ou Personne / Team and/or Person"/>
          2 Inscrivez l'equipe et/ou Personne / Register team and/or Person
        </td>
      </tr>
      <tr>
        <td>
          <input type="text" name="os1" maxLength="200" required  />
      </td>
      <input type="hidden" name="currency_code" value="CAD" />
      <input type="image" src="https://www.paypalobjects.com/fr_CA/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
    </form>
  `;

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      
      <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '30px' }}>
        <h2 style={{ color: '#9f1617', fontSize: '20px', fontWeight: 'bold' }}>
            {lang === 'fr' ? 'Le paiement e-Interac est notre mode de paiement recommandée.' : 'Interac e-Pay is our suggested payment method.'}
        </h2>
        <h2 className="section-title">
            {lang === 'fr' ? 'Mais vous pouvez effectuer vos paiements ici aussi' : 'But you can also make payments here.'}
        </h2>
      <div className="paypal-container" style={{ marginTop: '40px' }}>
        <p>{lang === 'fr' ? "1 Choisissez l'option :" : "1-Choose the discipline"}</p>
        <div className="paypal-wrapper">
          <div dangerouslySetInnerHTML={{ __html: paypalFormCode }} />
        </div>
      </div>
      </div>
    </div>
  );
}

