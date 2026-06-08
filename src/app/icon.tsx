import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation — EarthIndia industrial favicon
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c1a2e",
          borderRadius: 7,
          position: "relative",
        }}
      >
        {/* Conveyor belt icon — two rollers + belt lines */}
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Belt lines */}
          <line x1="10" y1="10" x2="22" y2="10" stroke="#C87533" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="10" y1="22" x2="22" y2="22" stroke="#C87533" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          {/* Left roller */}
          <circle cx="10" cy="16" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
          {/* Right roller */}
          <circle cx="22" cy="16" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
          {/* Center accent dot */}
          <circle cx="16" cy="16" r="1.5" fill="#C87533" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
