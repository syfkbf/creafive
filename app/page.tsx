export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Segoe UI', sans-serif",
        background:
          "linear-gradient(135deg,#0f172a 0%,#111827 40%,#1e3a8a 100%)",
        color: "white",
        overflow: "hidden",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          padding: "40px 30px",
        }}
      >
        <img
          src="/logo-creafive.png"
          alt="Creafive"
          style={{
            width: "600px",
            maxWidth: "80%",
            height: "auto",
            marginBottom: 0,
            filter: "drop-shadow(0 0 25px rgba(255,255,255,.15))",
          }}
        />

        <div
          style={{
            fontSize: "1rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,.7)",
            marginBottom: "35px",
          }}
        >
          Creative • Event • Experience • Production
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,.15)",
            background: "rgba(255,255,255,.08)",
            backdropFilter: "blur(10px)",
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
            }}
          />
          Website Under Construction
        </div>

        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          Something Creative Is Coming.
        </h1>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "rgba(255,255,255,.75)",
          }}
        >
          We're currently building a digital home for ideas, events, visual
          experiences, presentations, and creative productions.
          <br />
          <br />
          Thank you for stopping by. Creafive will be launching soon with
          something worth waiting for.
        </p>

        <div
          style={{
            marginTop: "40px",
            fontSize: ".85rem",
            color: "rgba(255,255,255,.4)",
          }}
        >
          Yogyakarta, ID. | © 2026 CREAFIVE. | PT Arta Forma Indonesia. | All
          Rights Reserved.
        </div>
      </div>
    </div>
  );
}