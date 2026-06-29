import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { ForkKnife } from "@phosphor-icons/react";

const PRICE_PER_MEAL = 17;
const ORDER_DEADLINE = new Date("2026-07-02T23:59:59-04:00");
const INTERAC_EMAIL = "rasamia.a@gmail.com";

// ── Fill these in after creating the Google Form ──
const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSdrwKmi3y1ZWQkD_wP2rwcWmjDqanMTXyLsDhdwR4Fybw5J0Q/formResponse";
const FIELD_NOM = "entry.1600742868";
const FIELD_EMAIL = "entry.1269708811";
const FIELD_TEL = "entry.1008325512";
const FIELD_TOTAL = "entry.949376610";
const FIELD_SUMMARY = "entry.733660996";

const CATERERS = [
  {
    id: "tsak_tsak",
    name: "TSAK-TSAK",
    dishes: [
      {
        id: "ravitoto_henakisoa",
        nameMG: "Ravitoto sy henakisoa",
        descFR: "Feuilles de manioc pilées au porc",
        descEN: "Crushed cassava leaves with pork",
        fieldEntry: "entry.2086245086",
      },
      {
        id: "poulet_coco",
        nameMG: "Poulet au coco",
        descFR: "Poulet mijoté au lait de coco",
        descEN: "Chicken simmered in coconut milk",
        fieldEntry: "entry.1734784293",
      },
      {
        id: "saucisses_petits_pois",
        nameMG: "Saucisses sy petits pois",
        descFR: "Saucisses aux petits pois en sauce tomate",
        descEN: "Sausages with peas in tomato sauce",
        fieldEntry: "entry.2138505545",
      },
      {
        id: "ravitoto_omby_coco",
        nameMG: "Ravitoto sy hen'omby coco",
        descFR: "Feuilles de manioc pilées au bœuf et lait de coco",
        descEN: "Crushed cassava leaves with beef and coconut milk",
        fieldEntry: "entry.923978061",
      },
    ],
  },
  {
    id: "sucre_sale",
    name: "SUCRÉ SALÉ",
    dishes: [
      {
        id: "lelanomby_ritra",
        nameMG: "Lelan'omby ritra",
        descFR: "Langue de bœuf mijotée",
        descEN: "Slow-cooked beef tongue",
        fieldEntry: "entry.663621631",
      },
      {
        id: "manara_molotra",
        nameMG: "Manara-molotra",
        descFR:
          "Assortiment de viandes mijotées (langue de bœuf, volaille, bœuf)",
        descEN: "Slow-cooked meat assortment (beef tongue, poultry, beef)",
        fieldEntry: "entry.406632911",
      },
      {
        id: "poisson_coco",
        nameMG: "Poisson au coco",
        descFR: "Filet de tilapia mijoté au lait de coco",
        descEN: "Tilapia fillet simmered in coconut milk",
        fieldEntry: "entry.1704502518",
      },
      {
        id: "boulettes_dinde",
        nameMG: "Boulettes de dinde sauce",
        descFR: "Boulettes de dinde en sauce tomate",
        descEN: "Turkey meatballs in tomato sauce",
        fieldEntry: "entry.2101287821",
      },
      {
        id: "poulet_legumes",
        nameMG: "Poulet sauté aux légumes",
        descFR: "Poulet sauté aux légumes",
        descEN: "Stir-fried chicken with vegetables",
        fieldEntry: "entry.477929591",
      },
      {
        id: "henomby_tsaramaso",
        nameMG: "Hen'omby sy tsaramaso Kabaro",
        descFR: "Bœuf mijoté aux haricots blancs de Madagascar",
        descEN: "Slow-cooked beef with Malagasy white beans",
        fieldEntry: "entry.584857316",
      },
    ],
  },
];

function Countdown({ lang }) {
  function getTimeLeft() {
    const diff = ORDER_DEADLINE - Date.now();
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  const units = [
    { val: timeLeft.days, labelFR: "jours", labelEN: "days" },
    { val: timeLeft.hours, labelFR: "heures", labelEN: "hours" },
    { val: timeLeft.minutes, labelFR: "min", labelEN: "min" },
    { val: timeLeft.seconds, labelFR: "sec", labelEN: "sec" },
  ];

  return (
    <div className="repas-countdown">
      {units.map((u, i) => (
        <div key={i} className="repas-countdown__unit">
          <span className="repas-countdown__number">
            {String(u.val).padStart(2, "0")}
          </span>
          <span className="repas-countdown__label">
            {lang === "fr" ? u.labelFR : u.labelEN}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Repas() {
  const { lang } = useLanguage();
  const isClosed = Date.now() > ORDER_DEADLINE;

  const [quantities, setQuantities] = useState({});
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [summary, setSummary] = useState(null);

  const allDishes = CATERERS.flatMap((c) => c.dishes);
  const totalPortions = allDishes.reduce(
    (s, d) => s + (quantities[d.id] || 0),
    0,
  );
  const totalPrice = totalPortions * PRICE_PER_MEAL;

  function setQty(id, val) {
    const n = Math.max(0, Math.min(20, parseInt(val) || 0));
    setQuantities((prev) => ({ ...prev, [id]: n }));
  }

  function buildSummaryLines() {
    const lines = [];
    CATERERS.forEach((cat) => {
      cat.dishes.forEach((dish) => {
        const qty = quantities[dish.id] || 0;
        if (qty > 0) {
          const desc = lang === "fr" ? dish.descFR : dish.descEN;
          lines.push({ mg: dish.nameMG, desc, qty, caterer: cat.name });
        }
      });
    });
    return lines;
  }

  function buildSummaryText() {
    return buildSummaryLines()
      .map((l) => `${l.mg} (${l.caterer}): ${l.qty} x ${PRICE_PER_MEAL} CAD`)
      .join("\n");
  }

  function validate() {
    const errs = {};
    if (totalPortions === 0)
      errs.dishes =
        lang === "fr"
          ? "Veuillez sélectionner au moins un plat."
          : "Please select at least one dish.";
    if (!nom.trim())
      errs.nom =
        lang === "fr"
          ? "Veuillez entrer votre nom complet."
          : "Please enter your full name.";
    if (!email.trim() || !email.includes("@"))
      errs.email =
        lang === "fr"
          ? "Veuillez entrer une adresse courriel valide."
          : "Please enter a valid email address.";
    if (!tel.trim())
      errs.tel =
        lang === "fr"
          ? "Veuillez entrer votre numéro de téléphone."
          : "Please enter your phone number.";
    return errs;
  }

  async function handleSubmit() {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const summaryText = buildSummaryText();
    const fd = new FormData();
    fd.append(FIELD_NOM, nom.trim());
    fd.append(FIELD_EMAIL, email.trim());
    fd.append(FIELD_TEL, tel.trim());
    fd.append(FIELD_TOTAL, `${totalPortions} barquette(s) — ${totalPrice} CAD`);
    fd.append(FIELD_SUMMARY, summaryText);
    CATERERS.forEach((cat) =>
      cat.dishes.forEach((dish) =>
        fd.append(dish.fieldEntry, String(quantities[dish.id] || 0)),
      ),
    );

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: fd,
      });
    } catch (_) {}

    setSummary({
      nom: nom.trim(),
      email: email.trim(),
      total: totalPrice,
      portions: totalPortions,
      lines: buildSummaryLines(),
    });
    setSubmitted(true);
    setSubmitting(false);
  }

  // ── Confirmation screen ──
  if (submitted && summary) {
    return (
      <div className="details-wrapper">
        <div
          className="details-card"
          style={{ textAlign: "center", padding: "32px 20px" }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "12px" }}>✅</div>
          <p className="details-card__label">
            {lang === "fr" ? "Commande reçue !" : "Order received!"}
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "#374151",
              margin: "16px 0 8px",
              fontWeight: 600,
            }}
          >
            {lang === "fr"
              ? `Merci, ${summary.nom} !`
              : `Thank you, ${summary.nom}!`}
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#6b7280",
              marginBottom: "24px",
            }}
          >
            {lang === "fr"
              ? "Un courriel de confirmation vous sera envoyé sous peu."
              : "A confirmation email will be sent to you shortly."}
          </p>
        </div>

        {/* Order summary */}
        <div className="details-card">
          <p className="details-card__label">
            {lang === "fr" ? "Récapitulatif de la commande" : "Order summary"}
          </p>
          {summary.lines.map((line, i) => (
            <div key={i} className="section-row">
              <span className="section-row__key">{line.mg}</span>
              <span className="section-row__value" style={{ color: "#374151" }}>
                {line.qty} × {PRICE_PER_MEAL} CAD
                <span
                  style={{
                    display: "block",
                    fontSize: "0.8rem",
                    color: "#9ca3af",
                  }}
                >
                  {line.caterer} — {line.desc}
                </span>
              </span>
            </div>
          ))}
          <div
            className="section-row"
            style={{ borderTop: "2px solid #e5e7eb", marginTop: 4 }}
          >
            <span
              className="section-row__key"
              style={{ fontWeight: 700, color: "#111827" }}
            >
              Total
            </span>
            <span
              className="section-row__value"
              style={{ fontWeight: 700, color: "#9f1617", fontSize: "1.1rem" }}
            >
              {summary.total} CAD
            </span>
          </div>
        </div>

        {/* Interac instructions */}
        <div className="details-card">
          <p className="details-card__label">
            {lang === "fr" ? "Paiement par Interac" : "Interac Payment"}
          </p>
          <div className="section-row">
            <span className="section-row__key">
              {lang === "fr" ? "Envoyez à" : "Send to"}
            </span>
            <span
              className="section-row__value"
              style={{ color: "#374151", fontWeight: 600 }}
            >
              {INTERAC_EMAIL}
            </span>
          </div>
          <div className="section-row">
            <span className="section-row__key">
              {lang === "fr" ? "Montant" : "Amount"}
            </span>
            <span
              className="section-row__value"
              style={{ color: "#374151", fontWeight: 600 }}
            >
              {summary.total} CAD
            </span>
          </div>
          <div className="section-row">
            <span className="section-row__key">
              {lang === "fr" ? "Message Interac" : "Interac message"}
            </span>
            <span
              className="section-row__value"
              style={{ color: "#374151", fontWeight: 600 }}
            >
              {summary.nom} — Repas RSM 2026
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="details-wrapper">
      {/* ── Intro text ── */}
      <div className="details-card">
        <p className="details-card__label">
          {lang === "fr"
            ? "🍽️ Le grand banquet de clôture"
            : "🍽️ The grand closing banquet"}
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#374151",
            lineHeight: 1.7,
            margin: "16px 0 12px",
            padding: "0 20px",
          }}
        >
          {lang === "fr"
            ? "Que serait une soirée traditionnelle réussie sans les vraies saveurs du pays ? Les commandes de repas pour la grande soirée de clôture de la RSM 2026 sont officiellement ouvertes !"
            : "What would a traditional evening be without the real flavours of Madagascar? Meal orders for the RSM 2026 grand closing ceremony are now officially open!"}
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#374151",
            lineHeight: 1.7,
            margin: "0 0 12px",
            padding: "0 20px",
          }}
        >
          {lang === "fr"
            ? "Nos deux traiteurs exclusifs, TSAK-TSAK et SUCRÉ SALÉ, unissent leur savoir-faire pour vous offrir le meilleur de la gastronomie malagasy. Chaque barquette comprend du riz chaud, un laoka savoureux au choix, et un achard croquant."
            : "Our two exclusive caterers, TSAK-TSAK and SUCRÉ SALÉ, combine their expertise to bring you the best of Malagasy gastronomy. Each meal includes steamed rice, one savoury laoka of your choice, and a crunchy achard."}
        </p>

        {/* Countdown */}
        {!isClosed && (
          <div style={{ marginTop: "20px", padding: "0 20px 20px" }}>
            <p
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#9ca3af",
                marginBottom: "10px",
              }}
            >
              {lang === "fr"
                ? "⏳ Date limite : 2 juillet 2026"
                : "⏳ Deadline: July 2, 2026"}
            </p>
            <Countdown lang={lang} />
          </div>
        )}

        {isClosed && (
          <div
            style={{
              marginTop: "16px",
              padding: "12px 16px",
              background: "#fee2e2",
              borderRadius: "8px",
              color: "#991b1b",
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            {lang === "fr"
              ? "⚠️ Les commandes en ligne sont maintenant closes. Des repas seront disponibles sur place dans la limite des stocks."
              : "⚠️ Online orders are now closed. Meals will be available on-site while supplies last."}
          </div>
        )}
      </div>

      {!isClosed && (
        <>
          {/* ── Menu ── */}
          {CATERERS.map((cat) => (
            <div key={cat.id} className="details-card">
              <p className="details-card__label">{cat.name}</p>
              {cat.dishes.map((dish) => (
                <div key={dish.id} className="repas-dish-row">
                  <div className="repas-dish-info">
                    <span className="repas-dish-name">{dish.nameMG}</span>
                    <span className="repas-dish-desc">
                      {lang === "fr" ? dish.descFR : dish.descEN}
                    </span>
                  </div>
                  <div className="repas-dish-controls">
                    <span className="repas-dish-price">
                      {PRICE_PER_MEAL} CAD
                    </span>
                    <div className="repas-qty">
                      <button
                        className="repas-qty__btn"
                        onClick={() =>
                          setQty(dish.id, (quantities[dish.id] || 0) - 1)
                        }
                        disabled={(quantities[dish.id] || 0) === 0}
                      >
                        −
                      </button>
                      <span className="repas-qty__val">
                        {quantities[dish.id] || 0}
                      </span>
                      <button
                        className="repas-qty__btn"
                        onClick={() =>
                          setQty(dish.id, (quantities[dish.id] || 0) + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* ── Running total ── */}
          {totalPortions > 0 && (
            <div className="details-card">
              <p className="details-card__label">
                {lang === "fr" ? "Récapitulatif" : "Summary"}
              </p>
              {buildSummaryLines().map((line, i) => (
                <div key={i} className="section-row">
                  <span className="section-row__key">{line.mg}</span>
                  <span className="section-row__value">
                    {line.qty} × {PRICE_PER_MEAL} CAD ={" "}
                    {line.qty * PRICE_PER_MEAL} CAD
                  </span>
                </div>
              ))}
              <div
                className="section-row"
                style={{ borderTop: "2px solid #e5e7eb", marginTop: 4 }}
              >
                <span
                  className="section-row__key"
                  style={{ fontWeight: 700, color: "#111827" }}
                >
                  Total
                </span>
                <span
                  className="section-row__value"
                  style={{
                    fontWeight: 700,
                    color: "#9f1617",
                    fontSize: "1.1rem",
                  }}
                >
                  {totalPrice} CAD
                </span>
              </div>
            </div>
          )}

          {errors.dishes && (
            <p
              style={{
                color: "#dc2626",
                fontSize: "0.85rem",
                marginBottom: "8px",
              }}
            >
              {errors.dishes}
            </p>
          )}

          {/* ── Personal info ── */}
          <div className="details-card">
            <p className="details-card__label" style={{ marginBottom: "16px" }}>
              {lang === "fr" ? "Vos informations" : "Your information"}
            </p>

            <div className="repas-field" style={{ padding: "0 20px" }}>
              <label className="repas-label">
                {lang === "fr" ? "Nom complet" : "Full name"} *
              </label>
              <input
                className={`repas-input${errors.nom ? " repas-input--error" : ""}`}
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Rakoto Rabe"
              />
              {errors.nom && <p className="repas-error">{errors.nom}</p>}
            </div>

            <div className="repas-field" style={{ padding: "0 20px" }}>
              <label className="repas-label">
                {lang === "fr" ? "Adresse courriel" : "Email address"} *
              </label>
              <input
                className={`repas-input${errors.email ? " repas-input--error" : ""}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rakoto.rabe@exemple.com"
              />
              {errors.email && <p className="repas-error">{errors.email}</p>}
            </div>

            <div className="repas-field" style={{ padding: "0 20px 20px" }}>
              <label className="repas-label">
                {lang === "fr" ? "Numéro de téléphone" : "Phone number"} *
              </label>
              <input
                className={`repas-input${errors.tel ? " repas-input--error" : ""}`}
                type="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="(514) 555-1234"
              />
              {errors.tel && <p className="repas-error">{errors.tel}</p>}
            </div>
          </div>

          {/* ── Interac reminder ── */}
          <div className="details-card">
            <p className="details-card__label">
              {lang === "fr" ? "Paiement par Interac" : "Interac Payment"}
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#6b7280",
                margin: "12px 0 0",
                lineHeight: 1.6,
                padding: "0 20px 20px",
              }}
            >
              {lang === "fr"
                ? `Après avoir soumis votre commande, envoyez votre paiement par Interac à `
                : `After submitting your order, send your Interac payment to `}
              <strong style={{ color: "#374151" }}>{INTERAC_EMAIL}</strong>
              {lang === "fr" ? ` avec le message : ` : ` with the message: `}
              <strong style={{ color: "#374151" }}>
                {nom.trim() || (lang === "fr" ? "[Votre nom]" : "[Your name]")}{" "}
                — Repas RSM 2026
              </strong>
            </p>
          </div>

          {/* ── Submit ── */}
          <button
            className="btn-inscription"
            onClick={handleSubmit}
            disabled={submitting}
            style={{ marginTop: "8px" }}
          >
            <ForkKnife size={21} color="#ffffff" weight="duotone" />
            {submitting
              ? lang === "fr"
                ? "Envoi en cours..."
                : "Sending..."
              : lang === "fr"
                ? "Commander"
                : "Place order"}
          </button>

          <p
            style={{
              fontSize: "0.8rem",
              color: "#9ca3af",
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            {lang === "fr"
              ? "⚠️ Les commandes sans paiement Interac reçu avant le 2 juillet ne seront pas garanties."
              : "⚠️ Orders without Interac payment received before July 2 will not be guaranteed."}
          </p>
        </>
      )}
    </div>
  );
}
