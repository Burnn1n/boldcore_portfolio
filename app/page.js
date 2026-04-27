"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import AppShowcase from "@/components/AppShowcase";

export default function Home() {
  const { t, language, switchLanguage } = useLanguage();

  return (
    <div className="shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="site-header">
        <div className="container site-header-inner">
          <a className="brand" href="#top" aria-label="Bold Core LLC">
            <Image className="brand-mark" src="/yavii-logo.png" alt="Bold Core LLC" width={44} height={44} />
            <span className="brand-title">Bold Core LLC</span>
          </a>
          <nav className="nav">
            <a href="#work">{t("Work")}</a>
            <a href="#contact">{t("Contact")}</a>
            <button onClick={() => switchLanguage(language === "en" ? "mn" : "en")} className="lang-toggle">
              {language === "en" ? "MN" : "EN"}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero hero--slim">
          <div className="container">
            <div className="eyebrow">Bold Core LLC</div>
            <h1>{t("We build real products.")}</h1>
            <p className="hero-sub">{t("Mobile apps, backend systems, realtime features.")}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">{t("See work")}</a>
              <a className="btn btn-secondary" href="mailto:bold.core.soft@gmail.com">{t("Email us")}</a>
            </div>
          </div>
        </section>

        <AppShowcase />

        <section id="contact" className="contact-slim">
          <div className="container">
            <div className="contact-card">
              <h2>{t("Let's build something.")}</h2>
              <a href="mailto:bold.core.soft@gmail.com">bold.core.soft@gmail.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© 2026 Bold Core LLC</div>
      </footer>
    </div>
  );
}
