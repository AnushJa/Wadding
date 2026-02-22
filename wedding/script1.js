/* ================================
   WEDDING DATE
================================ */
const weddingDate = new Date("2026-06-05T14:00:00");

/* ================================
   TRANSLATIONS
================================ */

const translations = {
  de: {
    greeting: "Liebe Gäste",
    story: "Mit großer Freude laden wir Sie herzlich zu unserer Hochzeit ein. Wir würden uns sehr freuen, diesen besonderen Tag gemeinsam mit Ihnen zu feiern.",
    date: "05 Juni 2026",
    countdown_before: "Bis zur Hochzeit",
    countdown_after: "Seit der Hochzeit vergangen",
    days: "Tage",
    hours: "Stunden",
    minutes: "Minuten",
    seconds: "Sekunden",
    program: "Tagesprogramm",
    weekday: "Freitag, 05. Juni 2026",
    ceremony: "Trauung",
    venue: "Zeremonie",
    map: "Wegbeschreibung",
    footer: "Mit großer Freude erwarten wir Sie",
    location: "05. Juni 2026 | Hamburg, Deutschland"
  },

  hy: {
    greeting: "Հարգելի հյուրեր",
    story: "Սիրով հրավիրում ենք Ձեզ մեր հարսանիքին և շատ ուրախ կլինենք, եթե այս երջանիկ օրը անցկացնեք մեզ հետ՝ մեզ նվիրելով Ձեր ներկայությունը։",
    date: "05 Հունիս 2026",
    countdown_before: "Հարսանիքին մնցել է",
    countdown_after: "Հարսանիքից անցել է",
    days: "Օր",
    hours: "Ժամ",
    minutes: "Րոպե",
    seconds: "Վայրկյան",
    program: "Օրվա ծրագիր",
    weekday: "Ուրբաթ, 05 Հունիս 2026",
    ceremony: "Պսակադրություն",
    venue: "Հանդիսություն",
    map: "Ինչպես հասնել",
    footer: "Սիրով կսպասենք Ձեզ",
    location: "05 Հունիս 2026 | Համբուրգ, Գերմանիա"
  }
};

/* ================================
   LANGUAGE HANDLING
================================ */
let currentLang = localStorage.getItem("siteLanguage") || "de";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("siteLanguage", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Active button styling
  document.querySelectorAll(".language-switcher button").forEach(btn => {
    btn.classList.remove("active");
  });

  const activeBtn = document.querySelector(
    `.language-switcher button[onclick="setLanguage('${lang}')"]`
  );
  if (activeBtn) activeBtn.classList.add("active");

  updateCountdown(); // refresh countdown text
}

/* ================================
   COUNTDOWN TIMER
================================ */
function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  const titleEl = document.getElementById("countdown-title");

  if (!titleEl) return;

  if (diff <= 0) {
    titleEl.textContent = translations[currentLang].countdown_after;

    const passed = now - weddingDate;
    document.getElementById("days").textContent =
      Math.floor(passed / (1000 * 60 * 60 * 24));
    document.getElementById("hours").textContent =
      Math.floor((passed / (1000 * 60 * 60)) % 24);
    document.getElementById("minutes").textContent =
      Math.floor((passed / (1000 * 60)) % 60);
    document.getElementById("seconds").textContent =
      Math.floor((passed / 1000) % 60);

    return;
  }

  titleEl.textContent = translations[currentLang].countdown_before;

  document.getElementById("days").textContent =
    Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").textContent =
    Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").textContent =
    Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").textContent =
    Math.floor((diff / 1000) % 60);
}

/* ================================
   SMOOTH SCROLLING
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ================================
   INITIALIZE
================================ */
setLanguage(currentLang);
updateCountdown();
setInterval(updateCountdown, 1000);