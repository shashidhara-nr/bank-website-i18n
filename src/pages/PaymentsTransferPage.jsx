import { useTranslation } from "react-i18next";

function PaymentsTransferPage() {
  const { t } = useTranslation();

  return (
    <section className="panel single-panel">
      <h2>{t("pages.paymentsTransfer.title")}</h2>
      <p className="subtext">{t("pages.paymentsTransfer.description")}</p>
      <form>
        <label>{t("forms.transfer.from")}</label>
        <input type="text" placeholder={t("forms.transfer.fromPlaceholder")} />

        <label>{t("forms.transfer.to")}</label>
        <input type="text" placeholder={t("forms.transfer.toPlaceholder")} />

        <label>{t("forms.transfer.amount")}</label>
        <input
          type="number"
          placeholder={t("forms.transfer.amountPlaceholder")}
        />

        <button type="button" className="primary-btn">
          {t("forms.transfer.submit")}
        </button>
      </form>
    </section>
  );
}

export default PaymentsTransferPage;
