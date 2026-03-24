import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "hi", label: "हिंदी" },
  { code: "ar", label: "العربية" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir(i18n.language);
  }, [i18n, i18n.language]);

  return (
    <select
      className="lang-select"
      value={i18n.resolvedLanguage || i18n.language || "en"}
      onChange={(event) => i18n.changeLanguage(event.target.value)}
      aria-label="Select language"
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
