import { useEffect, useRef, useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";
import AccountsPage from "./pages/AccountsPage";
import PaymentsTransferPage from "./pages/PaymentsTransferPage";
import CardsPage from "./pages/CardsPage";
import CustomerSupportPage from "./pages/CustomerSupportPage";
import "./App.css";

function App() {
  const { t } = useTranslation();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { to: "/accounts", label: t("navigation.accounts") },
    {
      to: "/payments-transfer",
      label: t("navigation.paymentsTransfer"),
    },
    { to: "/cards", label: t("navigation.cards") },
    {
      to: "/customer-support",
      label: t("navigation.customerSupport"),
    },
  ];

  return (
    <div className="bank-page">
      <header className="topbar">
        <div>
          <h1>{t("header.bankName")}</h1>
          <h2>{t("header.portalTitle")}</h2>
        </div>
        <div className="topbar-actions">
          <button type="button" className="pill-btn">
            {t("header.contact")}
          </button>
          <button type="button" className="pill-btn">
            {t("header.demo")}
          </button>
          <LanguageSelector />
          <div className="user-menu" ref={userMenuRef}>
            <button
              type="button"
              className="pill-btn user-pill user-menu-toggle"
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              aria-expanded={isUserMenuOpen}
              aria-haspopup="menu"
            >
              {t("header.user")}
            </button>
            {isUserMenuOpen && (
              <div className="user-dropdown" role="menu">
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => setIsUserMenuOpen(false)}
                  role="menuitem"
                >
                  {t("header.logout")}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="app-shell">
        <aside className="left-nav" aria-label={t("navigation.ariaLabel")}>
          <nav className="nav-menu">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link${isActive ? " nav-link-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <section className="content-wrap">
          <Routes>
            <Route path="/" element={<Navigate to="/accounts" replace />} />
            <Route path="/accounts" element={<AccountsPage />} />
            <Route
              path="/payments-transfer"
              element={<PaymentsTransferPage />}
            />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/customer-support" element={<CustomerSupportPage />} />
            <Route path="*" element={<Navigate to="/accounts" replace />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
