import AdminButton from "./components/AdminButton";

export default function Home() {
  return (
    <main
      style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Segoe UI', sans-serif",
        background: "linear-gradient(135deg,#0f172a 0%,#111827 40%,#1e3a8a 100%)",
        color: "white",
      }}
    >
      <AdminButton />

      <div style={{ maxWidth: 700, padding: 40 }}>
        <img
          src="/logo-creafive.png"
          alt="Creafive"
          style={{
            display: "block",
            margin: "0 auto",
            width: "600px",
            maxWidth: "80%",
            height: "auto",
            filter: "drop-shadow(0 0 25px rgba(255,255,255,.15))",
          }}
        />

        <div
          style={{
            fontSize: 14,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,.7)",
            marginBottom: 35,
          }}
        >
          Creative • Event • Experience • Production
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 22px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.15)",
            background: "rgba(255,255,255,.08)",
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          Website Under Construction
        </div>

        <h1 style={{ fontSize: 32, marginTop: 30 }}>
          Something Creative Is Coming.
        </h1>

        <p style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.8 }}>
          We're currently building a digital home for ideas, events, visual
          experiences, presentations, and creative productions.
        </p>
      </div>
    </main>
  );
}