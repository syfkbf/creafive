"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TryPage() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const [text, setText] = useState("Creafive Playground");

  useEffect(() => {
  const loggedUser = localStorage.getItem("user");

  // ❌ kalau tidak ada login
  if (!loggedUser) {
    router.replace("/admin");
    return;
  }

  // ❌ kalau bukan afi, TOLAK
  if (loggedUser !== "afi") {
    router.replace("/admin");
    return;
  }

  // ✅ hanya afi yang boleh masuk
  setUser(loggedUser);
  setChecked(true);

}, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.replace("/admin");
  };

  if (!checked) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI"
      }}>
        Checking session...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      padding: 40,
      fontFamily: "Segoe UI",
      background: "#0f172a",
      color: "white"
    }}>

      {/* TOP BAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        padding: 15,
        background: "#111827",
        borderRadius: 10
      }}>
        <div>
          Logged in as: <b>{user}</b>
        </div>

        <button
          onClick={logout}
          style={{
            padding: "8px 12px",
            background: "red",
            border: "none",
            borderRadius: 8,
            color: "white",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      {/* PLAYGROUND */}
      <h1>🎨 TRY PLAYGROUND</h1>
      <p>Eksperimen UI Creafive</p>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          marginTop: 20,
          padding: 10,
          borderRadius: 8,
          border: "none",
          width: "100%",
          maxWidth: 400
        }}
      />

      {/* PREVIEW BOX */}
      <div style={{
        marginTop: 30,
        padding: 30,
        background: "#1e293b",
        borderRadius: 12
      }}>
        <h2>{text}</h2>
        <p>Live preview playground kamu</p>
      </div>

    </div>
  );
}