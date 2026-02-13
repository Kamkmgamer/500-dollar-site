import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #2C1810 0%, #8B4513 50%, #D2691E 100%)",
          borderRadius: "50%",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
          border: "3px solid #F4A460",
        }}
      >
        <span style={{ fontSize: 18 }}>🍕</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
