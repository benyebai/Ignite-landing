"use client";

import { useEffect } from "react";

export default function ScrollBlur() {
  useEffect(() => {
    const minBlurPx = 4;  // slightly less blur at the top
    const maxBlurPx = 24; // higher ceiling as you scroll

    const updateBlur = () => {
      const viewportHeight = Math.max(1, window.innerHeight);
      const scrollY = Math.max(0, window.scrollY || window.pageYOffset || 0);
      const progress = Math.min(1, scrollY / viewportHeight);
      const blur = minBlurPx + (maxBlurPx - minBlurPx) * progress;
      document.documentElement.style.setProperty("--bg-blur", `${blur.toFixed(2)}px`);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateBlur();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateBlur();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateBlur);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateBlur);
    };
  }, []);

  return null;
}


