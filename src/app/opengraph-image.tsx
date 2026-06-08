import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "EarthIndia Industries — Premium Industrial Conveyor Belt & Transmission Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation — EarthIndia premium OG image
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0c1a2e 0%, #0B1628 40%, #162d4d 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 80,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,117,51,0.06) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glowing border outline */}
        <div
          style={{
            position: "absolute",
            inset: 20,
            border: "1.5px solid rgba(200, 117, 51, 0.15)",
            borderRadius: 24,
            pointerEvents: "none",
          }}
        />

        {/* Subtle accent glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,117,51,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Brand Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 44,
          }}
        >
          {/* Logo icon */}
          <div
            style={{
              width: 52,
              height: 52,
              background: "rgba(200, 117, 51, 0.12)",
              border: "1.5px solid rgba(200, 117, 51, 0.3)",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 36 36" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
              <line x1="6" y1="14" x2="30" y2="14" stroke="#C87533" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
              <line x1="6" y1="22" x2="30" y2="22" stroke="#C87533" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
              <circle cx="10" cy="18" r="5" stroke="white" strokeWidth="1.8" fill="none" />
              <circle cx="26" cy="18" r="5" stroke="white" strokeWidth="1.8" fill="none" />
              <line x1="15" y1="13.5" x2="21" y2="13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="15" y1="22.5" x2="21" y2="22.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                display: "flex",
              }}
            >
              <span style={{ color: "#C87533" }}>Earth</span>
              <span style={{ color: "#FFFFFF" }}>India</span>
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Industries
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.12,
            marginBottom: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Precision-Engineered</span>
          <span style={{ color: "#C87533" }}>Industrial Belt Solutions</span>
          <span>Made in India</span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 20,
            color: "rgba(255, 255, 255, 0.55)",
            maxWidth: 680,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Premium conveyor belts, timing belts & transmission solutions for mining, cement,
          steel, automotive, and 50+ industries. ISO 9001:2015 certified.
        </p>

        {/* Bottom Tags */}
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 60,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(200, 117, 51, 0.1)",
              padding: "8px 18px",
              borderRadius: 100,
              border: "1px solid rgba(200, 117, 51, 0.2)",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#C87533",
              }}
            />
            <span
              style={{
                color: "#C87533",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              ISO 9001:2015 Certified
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255, 255, 255, 0.05)",
              padding: "8px 18px",
              borderRadius: 100,
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <span
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              15+ Years · 50+ Industries
            </span>
          </div>
        </div>

        {/* Bottom left — website URL */}
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 60,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.3)",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            earthindia.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
