import { useTranslation } from "react-i18next";

function CustomerSupportPage() {
  const { t } = useTranslation();

  return (
    <section className="panel single-panel">
      <h2>{t("pages.customerSupport.title")}</h2>
      <p className="subtext">{t("pages.customerSupport.description")}</p>

      <div className="support-grid">
        <article className="support-item">
          <h3>{t("pages.customerSupport.phoneLabel")}</h3>
          <p>{t("pages.customerSupport.phoneValue")}</p>
        </article>
        <article className="support-item">
          <h3>{t("pages.customerSupport.emailLabel")}</h3>
          <p>{t("pages.customerSupport.emailValue")}</p>
        </article>
        <article className="support-item">
          <h3>{t("pages.customerSupport.timingLabel")}</h3>
          <p>{t("pages.customerSupport.timingValue")}</p>
        </article>
      </div>
    </section>
  );
}

export default CustomerSupportPage;
