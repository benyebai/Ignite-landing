import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollBlur from "./components/ScrollBlur";
import SplineBackground from "./components/SplineBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const logoFont = Bebas_Neue({
  variable: "--font-logo",
  weight: "400",
  subsets: ["latin"],
});

const accentFont = Playfair_Display({
  variable: "--font-accent",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ignite Landing",
  description: "Ignite landing page",
  icons: {
    icon: "/IGNITE-LOGO.png",
    shortcut: "/IGNITE-LOGO.png",
    apple: "/IGNITE-LOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${logoFont.variable} ${accentFont.variable}`}>
        <ScrollBlur />
        <SplineBackground />
        <nav className="floating-nav" aria-label="Primary Navigation">
          <span className="brand">IGNITE</span>
          <div className="links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            className="cta-button cta-dark"
            href="https://calendly.com/benyebai2/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Onboard
          </a>
        </nav>
        {children}
        <footer className="big-footer" aria-label="Footer">
          <div className="footer-content">
            <span className="footer-brand">Ignite</span>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="sep">•</span>
              <a href="#terms">Terms & Conditions</a>
            </div>
            <span className="footer-copy">© {new Date().getFullYear()} Ignite. All rights reserved.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
