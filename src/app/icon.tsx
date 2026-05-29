import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 20,
          background: "#0A0E1A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F97316", // Industrial Orange Accent
          fontWeight: 800,
          borderRadius: 8,
          border: "2px solid #F97316",
        }}
      >
        B
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
