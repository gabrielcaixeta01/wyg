import { ImageResponse } from "next/og";

export const alt = "WYG — Where You Going";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #06070F 0%, #0C1028 50%, #06070F 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              background: "linear-gradient(135deg, #6D28D9 0%, #1040C8 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 52,
              fontWeight: 900,
              color: "#ffffff",
            }}
          >
            W
          </div>
          <div style={{ display: "flex", fontSize: 80, fontWeight: 900, letterSpacing: -2, color: "#ffffff" }}>
            WYG
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#8BA4C4",
            maxWidth: 900,
            textAlign: "center",
            marginTop: 32,
          }}
        >
          Conecte seu bar a quem quer sair agora
        </div>
      </div>
    ),
    { ...size }
  );
}
