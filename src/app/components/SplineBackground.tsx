"use client";

import Script from "next/script";

export default function SplineBackground() {
  const SplineViewer = 'spline-viewer' as unknown as React.ComponentType<{
    url?: string;
    style?: React.CSSProperties;
  }>;
  return (
    <div className="spline-bg" aria-hidden>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@latest/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      {/* Web component keeps it lightweight and export-friendly */}
      <SplineViewer
        url="https://prod.spline.design/Ax7taDHt3gbUCTBo/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}


