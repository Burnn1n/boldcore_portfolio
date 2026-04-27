"use client";

import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";

const ParticleCanvas = dynamic(() => import("./ParticleCanvas"), { ssr: false });

const TAGS = ["Three.js", "React Three Fiber", "WebGL", "BufferGeometry", "GLSL"];

export default function ParticleSection() {
  const { t } = useLanguage();

  return (
    <section className="particle-section">
      <div className="container">
        <div className="particle-stage">
          <ParticleCanvas />

          <div className="particle-overlay">
            <p className="particle-label">Three.js · WebGL</p>
            <h2 className="particle-title">{t("Interactive 3D")}</h2>
            <p className="particle-sub">{t("Mouse-reactive. Zero assets. Pure math.")}</p>
            <div className="particle-tags">
              {TAGS.map(tag => <span key={tag} className="chip chip--dim">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
