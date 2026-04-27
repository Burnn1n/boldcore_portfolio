"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/contexts/LanguageContext";

const CarCanvas = dynamic(() => import("./CarCanvas"), { ssr: false });

const BODY_COLORS = [
  { label: "Obsidian Black", value: "#0f0f0f" },
  { label: "Polar White",    value: "#f0eeeb" },
  { label: "Magma Red",      value: "#b81c1c" },
  { label: "AMG Yellow",     value: "#e8b800" },
  { label: "Iridium Silver", value: "#8a8c8e" },
  { label: "AMG Green",      value: "#004d3a" },
];

const WHEEL_COLORS = [
  { label: "Gunmetal",  value: "#1e1e1e" },
  { label: "Platinum",  value: "#c0c0c0" },
  { label: "Gold",      value: "#c8a951" },
];

const CALIPER_COLORS = [
  { label: "Red",    value: "#cc1a1a" },
  { label: "Yellow", value: "#f5c400" },
  { label: "Black",  value: "#111111" },
  { label: "Blue",   value: "#1a3acc" },
];

const SPECS = [
  { label: "Engine",     value: "4.0L V8 Biturbo" },
  { label: "Power",      value: "510 hp" },
  { label: "Torque",     value: "700 Nm" },
  { label: "0 – 100",    value: "3.6 s" },
  { label: "Top speed",  value: "293 km/h" },
  { label: "Weight",     value: "1,445 kg" },
  { label: "Drive",      value: "RWD" },
  { label: "Gearbox",    value: "7-spd DCT" },
];

function Swatches({ colors, active, onChange }) {
  return (
    <div className="color-swatches">
      {colors.map(c => (
        <button
          key={c.value}
          className={`swatch${active === c.value ? " swatch--active" : ""}`}
          style={{ background: c.value }}
          title={c.label}
          onClick={() => onChange(c.value)}
        />
      ))}
    </div>
  );
}

export default function CarSection() {
  const { t } = useLanguage();
  const [bodyColor,    setBodyColor]    = useState("#cc1a1a");
  const [wheelColor,   setWheelColor]   = useState("#1e1e1e");
  const [caliperColor, setCaliperColor] = useState("#cc1a1a");
  const [isInterior,   setIsInterior]   = useState(false);

  return (
    <section id="car" className="car-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">{t("Interactive 3D")}</div>
            <h2>Mercedes-AMG GT4</h2>
          </div>
          <p>{t("Configure color and view the interior. Built with Three.js and React Three Fiber.")}</p>
        </div>
      </div>

      <div className="car-stage">
        <div className="car-controls-panel">
          <div className="color-group">
            <span className="color-label">{t("Body")}</span>
            <Swatches colors={BODY_COLORS} active={bodyColor} onChange={setBodyColor} />
          </div>
          <div className="color-group">
            <span className="color-label">{t("Wheels")}</span>
            <Swatches colors={WHEEL_COLORS} active={wheelColor} onChange={setWheelColor} />
          </div>
          <div className="color-group">
            <span className="color-label">{t("Calipers")}</span>
            <Swatches colors={CALIPER_COLORS} active={caliperColor} onChange={setCaliperColor} />
          </div>
          <button
            className={`view-toggle${isInterior ? " view-toggle--active" : ""}`}
            onClick={() => setIsInterior(v => !v)}
          >
            {isInterior ? `← ${t("Exterior")}` : `${t("Interior")} →`}
          </button>
        </div>

        <div className="car-canvas-area">
          <CarCanvas
            bodyColor={bodyColor}
            wheelColor={wheelColor}
            caliperColor={caliperColor}
            isInterior={isInterior}
          />
        </div>

        <div className="car-specs-panel">
          <p className="specs-title">2018 AMG GT4</p>
          {SPECS.map(s => (
            <div key={s.label} className="spec-row">
              <span className="spec-label">{s.label}</span>
              <span className="spec-value">{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
