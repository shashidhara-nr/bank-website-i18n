import { useTranslation } from "react-i18next";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function AccountsPage() {
  const { t } = useTranslation();

  const monthlyTrend = [
    { month: t("charts.months.jan"), value: 28000 },
    { month: t("charts.months.feb"), value: 34000 },
    { month: t("charts.months.mar"), value: 31000 },
    { month: t("charts.months.apr"), value: 41000 },
    { month: t("charts.months.may"), value: 39000 },
    { month: t("charts.months.jun"), value: 47000 },
  ];

  const expenseBreakdown = [
    { name: t("charts.expense.housing"), value: 38, color: "#f07b1b" },
    { name: t("charts.expense.utilities"), value: 24, color: "#4c6fff" },
    { name: t("charts.expense.shopping"), value: 21, color: "#14b8a6" },
    { name: t("charts.expense.travel"), value: 17, color: "#7c3aed" },
  ];

  const operations = [
    { label: t("actions.transferFunds") },
    { label: t("actions.payBills") },
    { label: t("actions.openFd") },
    { label: t("actions.requestCard") },
  ];

  const cardData = [
    { name: t("charts.cards.active"), count: 9 },
    { name: t("charts.cards.blocked"), count: 2 },
    { name: t("charts.cards.pending"), count: 4 },
  ];

  return (
    <>
      <section className="page-head">
        <h2>{t("pages.accounts.title")}</h2>
        <p className="subtext">{t("pages.accounts.description")}</p>
      </section>

      <section className="cards-row">
        <article className="summary-card">
          <p>{t("summary.balanceTitle")}</p>
          <strong>₹1,98,587.37</strong>
          <span>{t("summary.balanceDesc")}</span>
        </article>
        <article className="summary-card">
          <p>{t("summary.investmentTitle")}</p>
          <strong>₹1,27,400.00</strong>
          <span>{t("summary.investmentDesc")}</span>
        </article>
        <article className="summary-card">
          <p>{t("summary.loanTitle")}</p>
          <strong>₹9,40,000.00</strong>
          <span>{t("summary.loanDesc")}</span>
        </article>
      </section>

      <section className="actions-panel">
        <h2>{t("actions.title")}</h2>
        <p className="subtext">{t("actions.description")}</p>
        <div className="actions-grid">
          {operations.map((operation) => (
            <button type="button" className="outline-btn" key={operation.label}>
              {operation.label}
            </button>
          ))}
        </div>
      </section>

      <section className="forms-grid">
        <article className="panel">
          <h3>{t("forms.transfer.title")}</h3>
          <form>
            <label>{t("forms.transfer.from")}</label>
            <input
              type="text"
              placeholder={t("forms.transfer.fromPlaceholder")}
            />

            <label>{t("forms.transfer.to")}</label>
            <input
              type="text"
              placeholder={t("forms.transfer.toPlaceholder")}
            />

            <label>{t("forms.transfer.amount")}</label>
            <input
              type="number"
              placeholder={t("forms.transfer.amountPlaceholder")}
            />

            <button type="button" className="primary-btn">
              {t("forms.transfer.submit")}
            </button>
          </form>
        </article>

        <article className="panel">
          <h3>{t("forms.account.title")}</h3>
          <form>
            <label>{t("forms.account.fullName")}</label>
            <input
              type="text"
              placeholder={t("forms.account.fullNamePlaceholder")}
            />

            <label>{t("forms.account.email")}</label>
            <input
              type="email"
              placeholder={t("forms.account.emailPlaceholder")}
            />

            <label>{t("forms.account.type")}</label>
            <select defaultValue="">
              <option value="" disabled>
                {t("forms.account.typePlaceholder")}
              </option>
              <option value="savings">
                {t("forms.account.types.savings")}
              </option>
              <option value="current">
                {t("forms.account.types.current")}
              </option>
              <option value="salary">{t("forms.account.types.salary")}</option>
            </select>

            <button type="button" className="primary-btn">
              {t("forms.account.submit")}
            </button>
          </form>
        </article>
      </section>

      <section className="charts-grid">
        <article className="panel chart-panel">
          <div className="panel-head">
            <h3>{t("charts.trendTitle")}</h3>
            <span>{t("charts.trendLabel")}</span>
          </div>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyTrend}>
                <defs>
                  <linearGradient id="incomeArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f07b1b" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#f07b1b" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ececf2" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#f07b1b"
                  fill="url(#incomeArea)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel chart-panel">
          <div className="panel-head">
            <h3>{t("charts.expenseTitle")}</h3>
          </div>
          <div className="chart-box pie-box">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseBreakdown}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {expenseBreakdown.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel chart-panel">
          <div className="panel-head">
            <h3>{t("charts.cardTitle")}</h3>
          </div>
          <div className="chart-box">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cardData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ececf2" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#4c6fff" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </article>
      </section>
    </>
  );
}

export default AccountsPage;
