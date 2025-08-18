"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="hero" id="home">
        <h1 className="hero-title">
          From <span className="accent-word">Welcome</span> to <span className="accent-word">Workflow</span>
        </h1>
        <p className="hero-lead">AI that learns your stack, your style, your team.</p>
        <p className="hero-subtitle">AI Context-Based Onboarding</p>
        <div className="logo-wordmark" aria-label="Ignite logo">IGNITE</div>
        <p className="hero-tagline">Onboarding made easy</p>
        <div className="hero-cta">
          <a
            className="cta-button"
            href="https://calendly.com/benyebai2/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a demo
          </a>
        </div>
      </main>

      <section className="video-section" id="video">
        <div className="video-wrap">
          <iframe
            src="https://drive.google.com/file/d/1QoQqbtDOu1BA47DiYYEQ6Aa44eDmqaRR/preview"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </section>

      <section className="features-fold" id="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-inner">
              <div className="feature-content">
                <h3 className="feature-title">Admin Dashboard</h3>
                <p className="feature-text">Manage tracks, access, rewards, users, and analytics — all from one place.</p>
              </div>
              <div className="feature-media">
                <Image
                  src="/ignite-dashboard-ss.png"
                  alt="Ignite dashboard screenshot"
                  fill
                  sizes="(max-width: 1200px) 96vw, 1200px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "0% 0%",
                    transform: "scale(2.4)",
                    transformOrigin: "top left",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="feature-card top-right">
            <div className="feature-inner">
              <div className="feature-content">
                <h3 className="feature-title">Onboarding Module Generation</h3>
                <p className="feature-text">Create onboarding modules with your personal AI assistant that understands your company. Auto-generate from your docs and workflows — or start from scratch and let Spark help you build modules on any topic.</p>
              </div>
              <div className="feature-media top-right">
                <Image
                  src="/ignite-track-generation-ss.png"
                  alt="Ignite track generation screenshot"
                  fill
                  sizes="(max-width: 1200px) 96vw, 1200px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "100% 50%",
                    transform: "scale(1.9)",
                    transformOrigin: "center right",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="feature-card bottom-left">
            <div className="feature-inner">
              <div className="feature-content">
                <h3 className="feature-title">Rewards & Redemption</h3>
                <p className="feature-text">Earn rewards by creating modules and completing learning modules. Integrate your existing rewards systems for seamless redemption.</p>
              </div>
              <div className="feature-media">
                <Image
                  src="/ignite-redeem-points-ss.png"
                  alt="Ignite redeem points screenshot"
                  fill
                  sizes="(max-width: 1200px) 96vw, 1200px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "0% 0%",
                    transform: "scale(1.4)",
                    transformOrigin: "top left",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="feature-card bottom-right">
            <div className="feature-inner">
              <div className="feature-content">
                <h3 className="feature-title">Knowledge Transfer Across Roles & Sectors</h3>
                <p className="feature-text">
                  Capture proven knowledge from your veteran teammates to create onboarding tracks for new hires.
                  Organize content by teams and roles, and adapt context across companies and sectors.
                </p>
              </div>
              <div className="feature-media">
                <Image
                  src="/ignite-org-veteran-ss.png"
                  alt="Ignite org veteran screenshot"
                  fill
                  sizes="(max-width: 1200px) 96vw, 1200px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "40% 50%",
                    transform: "scale(1.55)",
                    transformOrigin: "center left",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-grid">
          <div className="onboard-card">
            <div className="onboard-glow" aria-hidden />
            <p className="onboard-kicker">Get started</p>
            <h2 className="onboard-title">ONBOARD WITH US</h2>
            <p className="onboard-text">Kick off a tailored onboarding experience for your team in minutes.</p>
            <ul className="onboard-points">
              <li>Schedule a meeting time</li>
              <li>Onboard your company</li>
              <li>We will personally onboard your team oncall</li>
            </ul>
            <a
              className="cta-button cta-dark onboard-cta"
              href="https://calendly.com/benyebai2/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start onboarding →
            </a>
          </div>

          <div className="contact-card">
            <p className="onboard-kicker">Contact</p>
            <h2 className="contact-title">GET IN TOUCH</h2>
            <p className="contact-text">Have questions or want to learn more? We’d love to hear from you.</p>
            <a className="cta-button cta-dark contact-cta" href="mailto:tryignite.dev@gmail.com">Email us</a>

            <a
              className="cta-button contact-cta"
              href="https://forms.gle/ky6QNiuCZ8kSvEiN7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit feedback
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
