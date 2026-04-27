"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const ShowcaseCanvas = dynamic(() => import("@/components/ShowcaseCanvas"), { ssr: false });

const COUNT  = 5;
const LABELS = ["Intro", "Mobile", "Web", "Backend", "Contact"];

const navBtn = (disabled) => ({
  width: "44px", height: "44px", borderRadius: "50%",
  border: "1px solid rgba(53,208,255,0.3)",
  background: "rgba(53,208,255,0.08)",
  color: disabled ? "rgba(255,255,255,0.2)" : "#35d0ff",
  fontSize: "20px", cursor: disabled ? "default" : "pointer",
  display: "flex", alignItems: "center", justifyContent: "center",
  transition: "background 0.2s",
});

function Chip({ label }) {
  return (
    <span style={{
      padding: "4px 12px", borderRadius: "999px",
      background: "rgba(53,208,255,0.08)", color: "#a8e6f5",
      border: "1px solid rgba(53,208,255,0.14)",
      fontSize: "11px", fontWeight: "700", letterSpacing: "0.03em",
    }}>{label}</span>
  );
}

function CarouselDots({ count, current, onSelect, accent }) {
  return (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} onClick={() => onSelect(i)} style={{
          width: i === current ? "20px" : "6px", height: "6px",
          borderRadius: "999px", cursor: "pointer",
          background: i === current ? accent : "rgba(255,255,255,0.2)",
          transition: "all 0.3s ease",
        }} />
      ))}
    </div>
  );
}

function useCarousel(count, ms) {
  const [idx, setIdx] = useState(0);
  const timer         = useRef(null);
  const dragX         = useRef(null);

  const restart = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => setIdx(i => (i + 1) % count), ms);
  }, [count, ms]);

  useEffect(() => { restart(); return () => clearInterval(timer.current); }, [restart]);

  const go   = useCallback((n) => { setIdx(n);                             restart(); }, [restart]);
  const prev = useCallback(()  => { setIdx(i => (i - 1 + count) % count); restart(); }, [count, restart]);
  const next = useCallback(()  => { setIdx(i => (i + 1) % count);         restart(); }, [count, restart]);

  const onPointerDown = useCallback((e) => {
    dragX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerUp = useCallback((e) => {
    if (dragX.current === null) return;
    const dx = e.clientX - dragX.current;
    dragX.current = null;
    if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
  }, [next, prev]);

  return { idx, go, prev, next, onPointerDown, onPointerUp };
}

/* ── Phone carousel ─────────────────────────────────────── */
const MOBILE_IMAGES = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];
const PEEK_PHONE = 26;
const GAP_PHONE  = 12;

function PhoneCarousel() {
  const [containerW, setContainerW] = useState(260);
  const containerRef = useRef(null);
  const { idx, go, prev, next, onPointerDown, onPointerUp } = useCarousel(MOBILE_IMAGES.length, 3000);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerW(el.offsetWidth);
    const obs = new ResizeObserver(([e]) => setContainerW(e.contentRect.width));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const slideW = containerW - PEEK_PHONE * 2;
  const offset = PEEK_PHONE - idx * (slideW + GAP_PHONE);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <div ref={containerRef} onPointerDown={onPointerDown} onPointerUp={onPointerUp}
        style={{ overflow: "hidden", width: "clamp(220px, 22vw, 300px)", cursor: "grab", userSelect: "none" }}>
        <div style={{ display: "flex", gap: `${GAP_PHONE}px`, transform: `translateX(${offset}px)`, transition: "transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)", willChange: "transform" }}>
          {MOBILE_IMAGES.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, width: `${slideW}px` }}>
              <div style={{ borderRadius: "28px", overflow: "hidden", border: "5px solid #0e2233", boxShadow: "0 20px 48px rgba(0,0,0,0.65)" }}>
                <Image src={src} alt="" width={240} height={520} unoptimized style={{ display: "block", width: "100%", height: "auto", pointerEvents: "none" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <button onClick={prev} style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid rgba(53,208,255,0.25)", background: "rgba(53,208,255,0.07)", color: "#35d0ff", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
        <CarouselDots count={MOBILE_IMAGES.length} current={idx} onSelect={go} accent="#35d0ff" />
        <button onClick={next} style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid rgba(53,208,255,0.25)", background: "rgba(53,208,255,0.07)", color: "#35d0ff", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
      </div>
    </div>
  );
}

/* ── Browser carousel ───────────────────────────────────── */
const WEB_IMAGES = ["/web_1.jpg", "/web_2.jpg", "/web_3.jpg", "/web_4.jpg"];
const PEEK_WEB = 20;
const GAP_WEB  = 14;

function BrowserCarousel() {
  const [containerW, setContainerW] = useState(600);
  const containerRef = useRef(null);
  const { idx, go, prev, next, onPointerDown, onPointerUp } = useCarousel(WEB_IMAGES.length, 3500);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerW(el.offsetWidth);
    const obs = new ResizeObserver(([e]) => setContainerW(e.contentRect.width));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const slideW = containerW - PEEK_WEB * 2;
  const offset = PEEK_WEB - idx * (slideW + GAP_WEB);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div ref={containerRef} onPointerDown={onPointerDown} onPointerUp={onPointerUp}
        style={{ overflow: "hidden", width: "100%", cursor: "grab", userSelect: "none" }}>
        <div style={{ display: "flex", gap: `${GAP_WEB}px`, transform: `translateX(${offset}px)`, transition: "transform 0.45s cubic-bezier(0.76, 0, 0.24, 1)", willChange: "transform" }}>
          {WEB_IMAGES.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, width: `${slideW}px` }}>
              <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid #1a2e3a", boxShadow: "0 16px 40px rgba(0,0,0,0.55)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 14px", background: "#0d1e28", borderBottom: "1px solid #1a2e3a" }}>
                  {[0,1,2].map(k => <div key={k} style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#1e3040" }} />)}
                  <span style={{ marginLeft: "8px", fontSize: "10px", color: "#9fc1c8", fontFamily: "monospace" }}>yavii.online</span>
                </div>
                <Image src={src} alt="" width={700} height={420} unoptimized style={{ display: "block", width: "100%", height: "auto", pointerEvents: "none" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <button onClick={prev} style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid rgba(134,239,82,0.25)", background: "rgba(134,239,82,0.07)", color: "#86ef52", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>←</button>
        <CarouselDots count={WEB_IMAGES.length} current={idx} onSelect={go} accent="#86ef52" />
        <button onClick={next} style={{ width: "30px", height: "30px", borderRadius: "50%", border: "1px solid rgba(134,239,82,0.25)", background: "rgba(134,239,82,0.07)", color: "#86ef52", fontSize: "13px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>→</button>
      </div>
    </div>
  );
}

/* ── Slides ──────────────────────────────────────────────── */

function SlideIntro() {
  return (
    <div style={{ padding: "0 10vw", width: "100%", maxWidth: "920px" }}>
      <p style={{ margin: "0 0 22px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "#35d0ff" }}>
        Bold Core LLC · Full-Stack Development
      </p>
      <h1 style={{ margin: "0 0 20px", fontSize: "clamp(52px, 8vw, 96px)", fontWeight: "900", lineHeight: "0.92", letterSpacing: "-0.06em", color: "#ecf7f8" }}>
        We build<br />real products.
      </h1>
      <p style={{ margin: "0 0 36px", fontSize: "clamp(15px, 1.8vw, 20px)", color: "#9fc1c8", lineHeight: "1.55" }}>
        Mobile apps. Backend systems. Realtime features.<br />From idea to app store — no bloat, no excuses.
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "44px" }}>
        {["React Native", "Next.js", "Node.js", "Three.js", "PostgreSQL", "Expo", "WebSocket", "Prisma"].map(t => <Chip key={t} label={t} />)}
      </div>
      <a href="mailto:bold.core.soft@gmail.com" style={{
        display: "inline-flex", alignItems: "center", padding: "14px 28px", borderRadius: "999px",
        fontWeight: "800", fontSize: "14px", letterSpacing: "0.02em",
        background: "linear-gradient(135deg, #35d0ff, #16c7a4)", color: "#022532", textDecoration: "none",
      }}>Email us →</a>
    </div>
  );
}

function SlideMobile() {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%", padding: "0 8vw", gap: "6vw" }}>
      <div style={{ flex: "0 0 auto", maxWidth: "380px" }}>
        <p style={{ margin: "0 0 14px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "#35d0ff" }}>01 / Mobile</p>
        <h2 style={{ margin: "0 0 14px", fontSize: "clamp(36px, 5vw, 62px)", fontWeight: "900", lineHeight: "0.94", letterSpacing: "-0.05em", color: "#ecf7f8" }}>
          Yavii<br />Ride Sharing
        </h2>
        <p style={{ margin: "0 0 22px", color: "#9fc1c8", fontSize: "14px", lineHeight: "1.6" }}>
          Mongolian ride-sharing — drivers create trips, passengers book seats. Built solo, from zero to app store.
        </p>
        <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
          {["Real-time WebSocket messaging","Google & Facebook OAuth","Expo Push Notifications (FCM + APNs)","Driver analytics dashboard","Wallet & subscription system","Mongolian / English — 700+ strings"].map(f => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px", color: "#ecf7f8", fontSize: "13px" }}>
              <span style={{ color: "#35d0ff", flexShrink: 0, marginTop: "1px" }}>▸</span>{f}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
          {["React Native", "Expo SDK 54", "Fastify 5", "Prisma", "PostgreSQL"].map(t => <Chip key={t} label={t} />)}
        </div>
        <a href="https://play.google.com/store/apps/details?id=com.burn.hothoorond" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", padding: "11px 20px", borderRadius: "999px",
          fontWeight: "800", fontSize: "12px", background: "rgba(53,208,255,0.08)",
          border: "1px solid rgba(53,208,255,0.22)", color: "#35d0ff", textDecoration: "none",
        }}>↗ Google Play</a>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 0 }}>
        <PhoneCarousel />
      </div>
    </div>
  );
}

function SlideWeb() {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%", padding: "0 8vw", gap: "6vw" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <BrowserCarousel />
      </div>
      <div style={{ flex: "0 0 auto", maxWidth: "340px" }}>
        <p style={{ margin: "0 0 14px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "#86ef52" }}>02 / Web</p>
        <h2 style={{ margin: "0 0 14px", fontSize: "clamp(36px, 4.5vw, 58px)", fontWeight: "900", lineHeight: "0.94", letterSpacing: "-0.05em", color: "#ecf7f8" }}>
          yavii.online
        </h2>
        <p style={{ margin: "0 0 22px", color: "#9fc1c8", fontSize: "14px", lineHeight: "1.6" }}>
          Full web platform for the same service. SSR, SEO-ready. Shares the same Fastify backend with the mobile app.
        </p>
        <ul style={{ margin: "0 0 24px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
          {["Next.js App Router with SSR","Shared Fastify backend with mobile","Responsive across all screen sizes","Deployed on Railway"].map(f => (
            <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "9px", color: "#ecf7f8", fontSize: "13px" }}>
              <span style={{ color: "#86ef52", flexShrink: 0, marginTop: "1px" }}>▸</span>{f}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
          {["Next.js", "React", "REST API", "Railway"].map(t => <Chip key={t} label={t} />)}
        </div>
        <a href="https://yavii.online/" target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", padding: "11px 20px", borderRadius: "999px",
          fontWeight: "800", fontSize: "12px", background: "rgba(134,239,82,0.08)",
          border: "1px solid rgba(134,239,82,0.22)", color: "#86ef52", textDecoration: "none",
        }}>↗ Visit site</a>
      </div>
    </div>
  );
}

function SlideBackend() {
  return (
    <div style={{ width: "100%", padding: "0 8vw" }}>
      <p style={{ margin: "0 0 20px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "#35d0ff" }}>03 / Backend & API</p>
      <h2 style={{ margin: "0 0 36px", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: "900", lineHeight: "0.94", letterSpacing: "-0.05em", color: "#ecf7f8" }}>
        Production-grade.<br />Zero compromise.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px", marginBottom: "24px" }}>
        {[{ num: "20+", label: "API Endpoints" },{ num: "700+", label: "i18n Strings" },{ num: "Real-time", label: "WebSocket" },{ num: "2", label: "App Stores" }].map(({ num, label }) => (
          <div key={label} style={{ padding: "18px 20px", borderRadius: "14px", border: "1px solid rgba(53,208,255,0.1)", background: "rgba(10,29,38,0.75)" }}>
            <div style={{ fontSize: "clamp(20px, 2.2vw, 34px)", fontWeight: "900", color: "#35d0ff", letterSpacing: "-0.04em", lineHeight: 1 }}>{num}</div>
            <div style={{ marginTop: "6px", fontSize: "11px", color: "#9fc1c8", fontWeight: "600", letterSpacing: "0.04em" }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginBottom: "24px" }}>
        {[{ title: "Auth", desc: "Email/password + Google + Facebook OAuth, JWT, email verification, 6-digit codes" },{ title: "Real-time", desc: "WebSocket with auth, typing indicators, online status, read receipts, multi-device" },{ title: "Push notifications", desc: "Expo SDK, Firebase (Android), APNs (iOS) — with offline fallback logic" },{ title: "Payments", desc: "Wallet, subscription model, per-seat fees, full transaction ledger" }].map(({ title, desc }) => (
          <div key={title} style={{ padding: "14px 18px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(10,29,38,0.55)" }}>
            <div style={{ fontSize: "13px", fontWeight: "800", color: "#ecf7f8", marginBottom: "4px" }}>{title}</div>
            <div style={{ fontSize: "12px", color: "#9fc1c8", lineHeight: 1.5 }}>{desc}</div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {["Fastify 5", "Prisma 7", "PostgreSQL", "JWT", "WebSocket", "Nodemailer", "node-cron", "Railway"].map(t => <Chip key={t} label={t} />)}
      </div>
    </div>
  );
}

function SlideContact() {
  return (
    <div style={{ padding: "0 10vw", width: "100%", maxWidth: "760px" }}>
      <p style={{ margin: "0 0 20px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.16em", textTransform: "uppercase", color: "#35d0ff" }}>04 / Contact</p>
      <h2 style={{ margin: "0 0 18px", fontSize: "clamp(48px, 8vw, 96px)", fontWeight: "900", lineHeight: "0.92", letterSpacing: "-0.06em", color: "#ecf7f8" }}>
        Let's build<br />something.
      </h2>
      <p style={{ margin: "0 0 40px", color: "#9fc1c8", fontSize: "clamp(14px, 1.6vw, 18px)", lineHeight: "1.55" }}>
        Available for freelance. Full-stack, mobile, frontend — shipped on time.
      </p>
      <a href="mailto:bold.core.soft@gmail.com" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "18px 24px", borderRadius: "14px", textDecoration: "none",
        background: "rgba(53,208,255,0.08)", border: "1px solid rgba(53,208,255,0.18)", maxWidth: "460px",
      }}>
        <div>
          <div style={{ fontSize: "10px", fontWeight: "700", color: "#35d0ff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3px" }}>Email</div>
          <div style={{ fontSize: "15px", fontWeight: "800", color: "#ecf7f8" }}>bold.core.soft@gmail.com</div>
        </div>
        <span style={{ color: "#35d0ff", fontSize: "18px" }}>→</span>
      </a>
    </div>
  );
}

const SLIDE_COMPONENTS = [SlideIntro, SlideMobile, SlideWeb, SlideBackend, SlideContact];

/* ── Page ────────────────────────────────────────────────── */

export default function Home() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(COUNT - 1, c + 1)), []);

  useEffect(() => {
    let last = 0;
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next();
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")  prev();
    };
    const onWheel = (e) => {
      const now = Date.now();
      if (now - last < 700) return;
      last = now;
      e.deltaY > 0 ? next() : prev();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, [next, prev]);

  return (
    <div style={{ position: "fixed", inset: 0, background: "#040d13", overflow: "hidden", fontFamily: "system-ui, sans-serif" }}>
      <ShowcaseCanvas current={current} slideCount={COUNT} />

      {/* Slide track */}
      <div style={{ position: "absolute", inset: 0, zIndex: 5, overflow: "hidden" }}>
        <div style={{
          display: "flex", height: "100%",
          width: `${COUNT * 100}%`,
          transform: `translateX(-${(current / COUNT) * 100}%)`,
          transition: "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
          willChange: "transform",
        }}>
          {SLIDE_COMPONENTS.map((SlideComp, i) => (
            <div key={i} style={{ width: `${100 / COUNT}%`, height: "100%", flexShrink: 0, display: "flex", alignItems: "center" }}>
              <SlideComp />
            </div>
          ))}
        </div>
      </div>

      {/* Counter */}
      <div style={{ position: "absolute", top: "24px", right: "32px", color: "#9fc1c8", fontSize: "13px", fontWeight: "700", zIndex: 20, fontFamily: "monospace", letterSpacing: "0.06em" }}>
        {String(current + 1).padStart(2, "0")} / {String(COUNT).padStart(2, "0")}
      </div>

      {/* Nav */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: "20px", zIndex: 20 }}>
        <button onClick={prev} disabled={current === 0} style={navBtn(current === 0)}>←</button>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {LABELS.map((label, i) => (
            <button key={i} onClick={() => setCurrent(i)} title={label} style={{
              width: i === current ? "28px" : "8px", height: "8px",
              borderRadius: "999px", border: "none",
              background: i === current ? "#35d0ff" : "rgba(255,255,255,0.2)",
              cursor: "pointer", transition: "all 0.3s ease", padding: 0,
            }} />
          ))}
        </div>
        <button onClick={next} disabled={current === COUNT - 1} style={navBtn(current === COUNT - 1)}>→</button>
      </div>

      {current === 0 && (
        <div style={{ position: "absolute", bottom: "90px", left: "50%", transform: "translateX(-50%)", color: "rgba(159,193,200,0.5)", fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", zIndex: 20, whiteSpace: "nowrap" }}>
          Scroll · Arrow keys · Click dots
        </div>
      )}
    </div>
  );
}
