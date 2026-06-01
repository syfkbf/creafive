import AdminButton from "./components/AdminButton";

export default function Home() {
  return (
    <html lang="id">
      <head>
        <title>Creafive | Coming Soon</title>
      </head>

      <body style={{
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Segoe UI', sans-serif",
        background: "linear-gradient(135deg,#0f172a 0%,#111827 40%,#1e3a8a 100%)",
        color: "white",
      }}>

        {/* 🔐 ADMIN BUTTON */}
        <AdminButton />

        {/* MAIN CONTENT */}
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
              filter: "drop-shadow(0 0 25px rgba(255,255,255,.15))"
            }}
          />

          <div style={{
            fontSize: 14,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,.7)",
            marginBottom: 35
          }}>
            Creative • Event • Experience • Production
          </div>

          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 22px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,.15)",
            background: "rgba(255,255,255,.08)"
          }}>
            <span style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#22c55e",
            }} />
            Website Under Construction
          </div>

          <h1 style={{ fontSize: 32, marginTop: 30 }}>
            Something Creative Is Coming.
          </h1>

          <p style={{ color: "rgba(255,255,255,.75)", lineHeight: 1.8 }}>
            We're currently building a digital home for ideas,
            events, visual experiences, presentations, and creative productions.
          </p>

        </div>

        {/* STYLE */}
        <style>{`
          .admin-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 10px 16px;
            border-radius: 8px;
            background: rgba(255,255,255,0.1);
            color: white;
            text-decoration: none;
            font-size: 14px;
            border: 1px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(10px);
            transition: 0.2s;
          }

          .admin-btn:hover {
            background: rgba(255,255,255,0.2);
          }
        `}</style>

      </body>
    </html>
  );
}