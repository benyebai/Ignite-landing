"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((m) => m.default),
  { ssr: false }
);

export default function SplineBackground() {
  return (
    <div className="spline-bg" aria-hidden>
      <Spline
        scene="https://prod.spline.design/Ax7taDHt3gbUCTBo/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}


