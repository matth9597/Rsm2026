import React from 'react';
import { Warning } from '@phosphor-icons/react'
import { useLanguage } from '../LanguageContext';

export default function Paiement() {
  const { t, lang } = useLanguage();
  const paypalFormCodeFR = `
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="PF55G4FMKDWMQ" />
      <table>
        <tr>
          <td>
            <select name="os0">
              <option value="Caution Equipe Adulte (Basket/Soccer/Volley) ">
                Caution Equipe Adulte (Basket/Soccer/Volley)  $CAD 100.00 (+3.30)
              </option>
              <option value="Caution Equipe (SoccerMixte/BasketJunior/Petanque)">
                Caution Equipe (SoccerMixte/BasketJunior/Petanque) $CAD 50.00 (+1.80)
              </option>
              <option value="Inscription Individuelle Adulte (Basket/Soccer/Volley)">
                Inscription Individuelle Adulte (Basket/Soccer/Volley) $CAD 50.00 (+1.80)
              </option>
              <option value="Inscription Individuelle (Soccer Mixte, BasketJunior) ">
                Inscription Individuelle (Soccer Mixte, BasketJunior)  $CAD 30.00 (+1.20)
              </option>
              <option value="Inscription Individuelle (Petanque/TennisSimple) ">
                Inscription Individuelle (Petanque/TennisSimple)  $CAD 40.00 (+1.50)
              </option>
              <option value="Insciption (TennisDouble)">
                Insciption (TennisDouble) $CAD 60.00 (+2.10)
              </option>
            </select>
          </td>
        </tr>
        </table>
          <td>
            <input type="hidden" name="on1" value="Equipe et/ou Personne / Team and/or Person"/>
                2. Inscrivez la Discipline/Equipe/Personne <br/>
                (e.g. si "caution" le contenu serait "ASC ZATO") <br/>
                (e.g. si "inscription individuelle", le contenu serait "VolleyHommes ASC ZATO/Rakoto Rabe")
            }
          </td>
        </tr>
        <tr>
          <td>
          <input type="text" name="os1" length="500" required  />
          </td>
      <input type="hidden" name="currency_code" value="CAD" />
      <input type="image" src="https://www.paypalobjects.com/fr_CA/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
    </form>
  `;

  const paypalFormCodeEN = `
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="FF7UWGYZ8LUT4" />
      <table>
        <tr>
          <td>
            <select name="os0">
              <option value="Adult Team Deposit (Basket/Soccer/Volley)">
                Adult Team Deposit (Basket/Soccer/Volley) $CAD 100.00 (+3.30)
              </option>
              <option value="Team Deposit (Co-ed Soccer/BasketJunior/Petanque)">
                Team Deposit (Co-ed Soccer/BasketJunior/Petanque) $CAD 50.00 (+1.80)
              </option>
              <option value="Individual Adult Registration (Basket/Soccer/Volley)">
                Individual Adult Registration (Basket/Soccer/Volley) $CAD 50.00 (+1.80)
              </option>
              <option value="Individual Registration (Co-ed Soccer, BasketJunior)">
                Individual Registration (Co-ed Soccer, BasketJunior) $CAD 30.00 (+1.20)
              </option>
              <option value="Individual Registration (Petanque/TennisSingle)">
                Individual Registration (Petanque/TennisSingle) $CAD 40.00 (+1.50)
              </option>
              <option value="Insciption (TennisDouble)">
                Registration (TennisDouble) $CAD 60.00 (+2.10)
              </option>
            </select>
          </td>
        </tr>
        </table>
        <tr>
          <td>
            <input type="hidden" name="on1" value="Equipe et/ou Personne / Team and/or Person"/>
              2. Register Discipline/Team/Person <br/>
              (e.g. if "deposit" the content would be "ASC ZATO") <br/>
              (e.g. if "individual registration", the content would be "VolleyMen ASC ZATO/Rakoto Rabe")
          </td>
        </tr>
        <tr>
          <td>
            <input type="text" name="os1" maxLength="500" required />
          </td>
        </tr>
      <input type="hidden" name="currency_code" value="CAD" />
      <input type="image" src="https://www.paypalobjects.com/fr_CA/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
    </form>
  `;
  const paypalFormCode = lang === 'fr' ? paypalFormCodeFR : paypalFormCodeEN;
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div className="payment-warning">
        <Warning size={32} weight="fill" className="warning-icon" />
        <div className="warning-text">
          {lang === 'fr' 
            ? ( <> ATTENTION: Veuillez d'abord vous assurer d'avoir rempli le <u>formulaire d'inscription</u> situé dans la section Disciplines avant d'effectuer tout paiement. </>)
            : ( <> ATTENTION: Please ensure you have completed the <u>registration form</u> located in the Disciplines section before making any payment.</> )}
        </div>
      </div>
      <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '30px' }}>
        <h2 style={{ color: '#9f1617', fontSize: '20px', fontWeight: 'bold' }}>
            {lang === 'fr' ? 'Le paiement e-Interac est notre mode de paiement recommandé.' : 'Interac e-Pay is our suggested payment method.'}<br/>
        </h2>
        <p>
          email: rsmottawagatineau@gmail.com <br />
          <span style={{ fontStyle: 'italic' }}>
            {lang === 'fr' 
              ? 'Inscrivez la Discipline/Equipe/Personne en commentaire.' 
              : 'Register Discipline/Team/Person as comment'}
          </span>
          <br />
        </p>
        <h2 className="section-title">
            {lang === 'fr' ? 'Mais vous pouvez effectuer vos paiements ici aussi (avec frais)' : 'But you can also make payments here. (with fees)'}
        </h2>
      <div className="paypal-container" style={{ marginTop: '40px' }}>
        <p>{lang === 'fr' ? "1 Choisissez l'option" : "1 Choose an option"}</p>
        <div className="paypal-wrapper">
          <div dangerouslySetInnerHTML={{ __html: paypalFormCode }} />
        </div>
      </div>
      </div>
    </div>
  );
}

