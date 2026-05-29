import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "BeltForge Industries - Premium Conveyor Belt Solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "#0A0E1A",
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
        {/* Glowing border outline */}
        <div
          style={{
            position: "absolute",
            inset: 20,
            border: "2px solid rgba(249, 115, 22, 0.15)",
            borderRadius: 24,
            pointerEvents: "none",
          }}
        />

        {/* Brand Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "#F97316",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            B
          </div>
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            BeltForge
          </span>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Precision-Engineered</span>
          <span style={{ color: "#F97316" }}>Conveyor Belts</span>
          <span>Built to Last</span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 22,
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: 700,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          High-performance industrial conveyor belts designed for mining, cement, steel, 
          and power generation plants. Engineered to maximize uptime.
        </p>

        {/* Bottom Tag */}
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 80,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(249, 115, 22, 0.1)",
            padding: "10px 20px",
            borderRadius: 100,
            border: "1px solid rgba(249, 115, 22, 0.2)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#F97316",
            }}
          />
          <span
            style={{
              color: "#F97316",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ISO 9001:2015 Certified
          </span>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
