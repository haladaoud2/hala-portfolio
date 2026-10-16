const languageToggle = document.getElementById("language-toggle");

let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageToggle.textContent = language === "en" ? "العربية" : "English";
  languageToggle.setAttribute(
    "aria-label",
    language === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"
  );
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "ar" : "en");
});

document.getElementById("year").textContent = new Date().getFullYear();

setLanguage("en");