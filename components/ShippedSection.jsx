"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ShippedSection() {
  const { t } = useLanguage();

  return (
    <section id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t("Shipped")}</div>
            <h2>{t("Done. Real. Working.")}</h2>
          </div>
          <p>{t("Not mockups. Not demos. Fully built products — auth, data, realtime, mobile, backend — all shipped as one working system.")}</p>
        </div>

        <div className="shipped-grid">
          <article className="shipped-card shipped-card--featured">
            <div className="shipped-top">
              <div className="shipped-brand">
                <Image src="/yavii-logo.png" alt="Yavii" width={52} height={52} />
                <div>
                  <p className="shipped-name">{t("Yavii — Intercity Ride Sharing")}</p>
                  <p className="shipped-type">{t("Mobile app + Backend system")}</p>
                </div>
              </div>
              <span className="badge-live">LIVE</span>
            </div>

            <p className="shipped-desc">{t("Full product for intercity travel in Mongolia. Drivers post trips, passengers book seats, both sides communicate in realtime. Rating, wallet, subscription, push notifications — a complete ecosystem.")}</p>

            <div className="shipped-stats">
              <div className="stat-box">
                <strong>2</strong>
                <span>{t("Apps")}</span>
              </div>
              <div className="stat-box">
                <strong>40+</strong>
                <span>{t("API endpoints")}</span>
              </div>
              <div className="stat-box">
                <strong>700+</strong>
                <span>{t("Translations")}</span>
              </div>
              <div className="stat-box">
                <strong>MN / EN</strong>
                <span>{t("Languages")}</span>
              </div>
            </div>

            <div className="shipped-stack">
              {["React Native", "Expo SDK 54", "Fastify 5", "PostgreSQL", "Prisma", "WebSocket", "JWT", "FCM / APNs"].map(s => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>

            <div className="shipped-features">
              <div className="sf-item">
                <span className="sf-icon">⚡</span>
                <span>{t("Realtime chat with WebSocket + push fallback (Expo, FCM, APNs)")}</span>
              </div>
              <div className="sf-item">
                <span className="sf-icon">🔐</span>
                <span>{t("Email, Google, Facebook OAuth — with email verification and password reset")}</span>
              </div>
              <div className="sf-item">
                <span className="sf-icon">💳</span>
                <span>{t("Wallet, per-seat fee, monthly subscription, transaction history")}</span>
              </div>
              <div className="sf-item">
                <span className="sf-icon">🗺</span>
                <span>{t("Trip creation, seat booking, instant confirm, snatch system, driver analytics")}</span>
              </div>
            </div>
          </article>

          <div className="shipped-side">
            <article className="shipped-card shipped-card--sm">
              <div className="shipped-top">
                <p className="shipped-name">{t("Yavii Backend API")}</p>
                <span className="badge-live">LIVE</span>
              </div>
              <p className="shipped-desc">{t("Fastify + Prisma backend powering the full Yavii product. Handles all business logic, cron jobs, file uploads, and realtime infrastructure.")}</p>
              <div className="shipped-stack">
                {["Node.js", "Fastify", "Prisma", "PostgreSQL", "node-cron", "Nodemailer"].map(s => (
                  <span key={s} className="chip chip--dim">{s}</span>
                ))}
              </div>
            </article>

            <article className="shipped-card shipped-card--sm">
              <div className="shipped-top">
                <p className="shipped-name">{t("Bold Core Portfolio")}</p>
                <span className="badge-wip">{t("YOU ARE HERE")}</span>
              </div>
              <p className="shipped-desc">{t("This site. Built on Next.js 16 with Tailwind CSS 4. Bilingual MN/EN. Zero external UI dependencies.")}</p>
              <div className="shipped-stack">
                {["Next.js 16", "React 19", "Tailwind 4", "i18n"].map(s => (
                  <span key={s} className="chip chip--dim">{s}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
