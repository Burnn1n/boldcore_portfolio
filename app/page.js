"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t, language, switchLanguage } = useLanguage();

  return (
    <div className="shell">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="site-header">
        <div className="container site-header-inner">
          <a className="brand" href="#top" aria-label="Bold Core LLC">
            <Image className="brand-mark" src="/yavii-logo.png" alt="Bold Core LLC logo" width={56} height={56} />
            <div className="brand-copy">
              <div className="eyebrow">Bold Core LLC</div>
              <p className="brand-title">{t("Digital product development")}</p>
              <p className="brand-subtitle">{t("Current brand mark is running on Yavii logo")}</p>
            </div>
          </a>
          <nav className="nav" aria-label="Main navigation">
            <a href="#about">{t("About")}</a>
            <a href="#work">{t("Work")}</a>
            <a href="#process">{t("Process")}</a>
            <a href="#contact">{t("Contact")}</a>
            <button
              onClick={() => switchLanguage(language === "en" ? "mn" : "en")}
              className="lang-toggle"
              aria-label="Toggle language"
            >
              {language === "en" ? "MN" : "EN"}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <article className="hero-card">
              <div className="eyebrow">{t("Product-centered studio")}</div>
              <h1>{t("Bold Core LLC builds brand, code, and product from one place.")}</h1>
              <p className="hero-lead">
                {t("Bold Core LLC turns ideas into real working products, not just pretty presentations. Mobile apps, backend systems, user flows, realtime operations, auth, payment logic, admin structure — every layer close to real use, built as one complete solution.")}
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#work">{t("View work")}</a>
                <a className="btn btn-secondary" href="mailto:bold.core.soft@gmail.com">{t("Email us")}</a>
              </div>
              <div className="hero-metrics">
                <div className="metric">
                  <strong>2</strong>
                  <span>{t("Full experience building both mobile and backend cores of a product from scratch")}</span>
                </div>
                <div className="metric">
                  <strong>Real-time</strong>
                  <span>{t("Development focused on message, notification, and state flow with realtime operations")}</span>
                </div>
                <div className="metric">
                  <strong>MN</strong>
                  <span>{t("Products tailored to Mongolian user behavior, language, and usage context")}</span>
                </div>
              </div>
            </article>

            <aside className="hero-side hero-card">
              <div className="logo-frame">
                <Image src="/yavii-logo.png" alt="Bold Core LLC visual using Yavii logo" width={400} height={400} priority sizes="(max-width: 1024px) 90vw, 380px" />
              </div>
              <div className="side-note">
                <div className="side-note-item">
                  <strong>{t("Current focus")}</strong>
                  <p>{t("Not a fast MVP, but a product with logical structure that works long-term.")}</p>
                </div>
                <div className="side-note-item">
                  <strong>{t("Approach")}</strong>
                  <p>{t("Interface, backend, data flow, user understanding — all viewed as one system.")}</p>
                </div>
                <div className="side-note-item">
                  <strong>{t("Brand foundation")}</strong>
                  <p>{t("Currently using the Yavii logo as the company mark, with the option to expand into its own brand system at the next stage.")}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">{t("What we do")}</div>
                <h2>{t("From idea to user.")}</h2>
              </div>
              <p>{t("Bold Core LLC doesn't just write code. It solves product flow, business logic, user interaction, operational reliability, and growth-ready architecture together.")}</p>
            </div>
            <div className="capability-grid">
              <article className="panel">
                <div className="panel-number">01</div>
                <h3>{t("Mobile product")}</h3>
                <p>{t("Expo-based React Native apps — multi-screen flows, auth, state management, push notifications, multi-language support.")}</p>
              </article>
              <article className="panel">
                <div className="panel-number">02</div>
                <h3>{t("Backend system")}</h3>
                <p>{t("API, data structures, realtime socket, file upload, permission checks, rate limiting, cron jobs, notification pipeline — a clean backend core.")}</p>
              </article>
              <article className="panel">
                <div className="panel-number">03</div>
                <h3>{t("Product experience")}</h3>
                <p>{t("Where users hesitate, which button they tap, what information should appear first — decided at the interface, copy, and sequence level.")}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">{t("Work done")}</div>
                <h2>{t("The main featured work right now is the Yavii ecosystem.")}</h2>
              </div>
              <p>{t("Behind one app — not just screens, but a full system: driver-passenger interaction, trip flow, booking, confirmation, rating, wallet, and realtime messaging.")}</p>
            </div>
            <div className="projects">
              <article className="project-card">
                <div className="project-top">
                  <div className="project-brand">
                    <Image src="/yavii-logo.png" alt="Yavii app logo" width={68} height={68} />
                    <div>
                      <div className="eyebrow">{t("Featured project")}</div>
                      <h3>{t("Yavii mobile app")}</h3>
                    </div>
                  </div>
                  <span className="tag">{t("Mobile")}</span>
                </div>
                <p>{t("A mobile app for intercity travel in Mongolia. Drivers create trips, passengers search for seats, send requests, get confirmations, and leave post-trip ratings systematically.")}</p>
                <div className="feature-list">
                  <div className="feature-item">{t("Trip creation, search, seat selection, instant confirmation and request-based approval flow")}</div>
                  <div className="feature-item">{t("Google, Facebook, email login, verification, and password recovery logic")}</div>
                  <div className="feature-item">{t("Realtime chat, push notifications, two-way driver and passenger rating")}</div>
                  <div className="feature-item">{t("Wallet, subscription, car management, Mongolian and English translation structure")}</div>
                </div>
              </article>

              <article className="project-card">
                <div className="project-top">
                  <div className="project-brand">
                    <Image src="/yavii-logo.png" alt="Yavii backend" width={68} height={68} />
                    <div>
                      <div className="eyebrow">{t("System core")}</div>
                      <h3>{t("Yavii backend platform")}</h3>
                    </div>
                  </div>
                  <span className="tag">{t("Backend")}</span>
                </div>
                <p>{t("A backend layer built on Fastify and Prisma. It serves as the foundation for all business logic, data flow, notifications, websocket, uploads, auth, rate limiting, config, and static data.")}</p>
                <div className="feature-list">
                  <div className="feature-item">{t("Trip, request, car, user, wallet, message, rating endpoint structure")}</div>
                  <div className="feature-item">{t("Realtime communication foundation using WebSocket and push fallback")}</div>
                  <div className="feature-item">{t("Cron jobs, upload storage, security middleware, rate limiting — operational safety foundation")}</div>
                  <div className="feature-item">{t("App-store-ready clean API and development structure")}</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">{t("How we work")}</div>
                <h2>{t("Not fast, but in the right order.")}</h2>
              </div>
              <p>{t("A good landing page or nice app screen alone isn't enough. How logic flows inside, what decisions the user makes, how the system scales later — all calculated from the start.")}</p>
            </div>
            <div className="timeline">
              <article className="timeline-step">
                <strong>{t("Step 1")}</strong>
                <h3>{t("Define the problem precisely")}</h3>
                <p>{t("Who it's for, exactly when users will use this product, and what core flows must work first.")}</p>
              </article>
              <article className="timeline-step">
                <strong>{t("Step 2")}</strong>
                <h3>{t("Build the core logic")}</h3>
                <p>{t("Auth, data, API, inter-screen flow, realtime state, permissions, and core business rules — reliably centered and built.")}</p>
              </article>
              <article className="timeline-step">
                <strong>{t("Step 3")}</strong>
                <h3>{t("Refine the experience")}</h3>
                <p>{t("Polish the UI, clean up copy, reduce user hesitation points, and prepare for deployment and next-stage growth.")}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="contact-card">
              <div>
                <div className="eyebrow">{t("Get in touch")}</div>
                <h2>{t("Ready to discuss a new product, site, app, or backend system.")}</h2>
                <p>{t("If you want to structure your idea properly or improve an existing system, reach out. Bold Core LLC works on real solutions that combine code, logic, and user experience.")}</p>
              </div>
              <div className="contact-meta">
                <a href="mailto:bold.core.soft@gmail.com">bold.core.soft@gmail.com</a>
                <span>{t("Send proposals and collaboration requests by email")}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© 2026 Bold Core LLC. {t("Current version uses Yavii logo as brand mark.")}</div>
      </footer>
    </div>
  );
}
