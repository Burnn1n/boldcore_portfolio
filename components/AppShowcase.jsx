"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const MOBILE_SCREENS = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];
const WEB_SCREENS    = ["/web_1.jpg", "/web_2.jpg", "/web_3.jpg", "/web_4.jpg"];
const MOBILE_STACK   = ["React Native", "Expo SDK 54", "Fastify", "PostgreSQL", "WebSocket", "FCM / APNs"];
const WEB_STACK      = ["Next.js", "React", "Node.js", "Fastify", "PostgreSQL", "JWT"];
const BACKEND_STACK  = ["Node.js", "Fastify 5", "Prisma 7", "PostgreSQL", "JWT", "WebSocket", "node-cron", "Nodemailer"];

export default function AppShowcase() {
  const { t } = useLanguage();

  return (
    <div id="work">
      {/* ── Mobile app ── */}
      <section className="showcase-section">
        <div className="container">
          <div className="showcase-head">
            <div className="eyebrow">Yavii — {t("Mobile app")}</div>
            <p className="showcase-sub">React Native · {t("iOS & Android")}</p>
            <a
              className="showcase-link"
              href="https://play.google.com/store/apps/details?id=com.burn.hothoorond"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play →
            </a>
          </div>

          <div className="phone-grid">
            {MOBILE_SCREENS.map((src, i) => (
              <div key={i} className="phone-frame">
                <Image
                  src={src}
                  alt={`Yavii mobile screen ${i + 1}`}
                  width={300}
                  height={649}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>

          <div className="showcase-stack">
            {MOBILE_STACK.map(s => <span key={s} className="chip">{s}</span>)}
          </div>
        </div>
      </section>

      {/* ── Web platform ── */}
      <section className="showcase-section">
        <div className="container">
          <div className="showcase-head">
            <div className="eyebrow">Yavii — {t("Web platform")}</div>
            <p className="showcase-sub">yavii.online</p>
            <a
              className="showcase-link"
              href="https://yavii.online/"
              target="_blank"
              rel="noopener noreferrer"
            >
              yavii.online →
            </a>
          </div>

          <div className="browser-grid">
            {WEB_SCREENS.map((src, i) => (
              <div key={i} className="browser-frame">
                <div className="browser-bar">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-url">yavii.online</span>
                </div>
                <Image
                  src={src}
                  alt={`Yavii web screen ${i + 1}`}
                  width={800}
                  height={500}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            ))}
          </div>

          <div className="showcase-stack">
            {WEB_STACK.map(s => <span key={s} className="chip">{s}</span>)}
          </div>
        </div>
      </section>
      {/* ── Backend ── */}
      <section className="showcase-section">
        <div className="container">
          <div className="showcase-head">
            <div className="eyebrow">{t("Backend API")}</div>
            <p className="showcase-sub">REST · WebSocket · Cron</p>
          </div>

          <div className="backend-card">
            <div>
              <h3>Yavii Backend</h3>
              <p>40+ endpoints · Auth · Realtime · Push notifications · File uploads · Rate limiting</p>
            </div>
            <div className="showcase-stack" style={{ margin: 0 }}>
              {BACKEND_STACK.map(s => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
