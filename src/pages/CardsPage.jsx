import { useTranslation } from "react-i18next";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function CardsPage() {
  const { t } = useTranslation();

  const cardData = [
    { name: t("charts.cards.active"), count: 9 },
    { name: t("charts.cards.blocked"), count: 2 },
    { name: t("charts.cards.pending"), count: 4 },
  ];

  return (
    <section className="panel single-panel">
      <h2>{t("pages.cards.title")}</h2>
      <p className="subtext">{t("pages.cards.description")}</p>
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
    </section>
  );
}

export default CardsPage;
