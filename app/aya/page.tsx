"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AyaPage() {
  const router = useRouter();
  const [user, setUser] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
  const loggedUser = localStorage.getItem("user");

  // ❌ kalau belum login
  if (!loggedUser) {
    router.replace("/admin");
    return;
  }

  // ❌ hanya allow aya & afi
  if (loggedUser !== "aya" && loggedUser !== "afi") {
    router.replace("/admin");
    return;
  }

  setUser(loggedUser);
  setChecked(true);

}, []);

  const logout = () => {
    localStorage.removeItem("user");
    router.replace("/admin");
  };

  if (!checked) return null;

  return (
    <div style={{
      minHeight: "100vh",
      padding: 40,
      fontFamily: "Segoe UI",
      background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
      color: "white"
    }}>

      {/* TOP BAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 30,
        padding: 15,
        background: "rgba(255,255,255,0.05)",
        borderRadius: 12
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

      {/* CONTENT */}
      <div style={{
        maxWidth: 800,
        margin: "0 auto",
        textAlign: "center"
      }}>

        <h1 style={{ fontSize: 42, marginBottom: 20 }}>
          To Aya
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
          I don’t really know how to start something like this without sounding too much,
          but I’ll try to keep it simple and honest.
          <br /><br />

          Meeting you made things feel different in a way I didn’t expect.
          Not loud, not dramatic… just calm, like something in my life finally made sense
          without needing to be explained.
          <br /><br />

          I like the way you exist in my world. Not because everything is perfect,
          but because somehow even the quiet moments feel meaningful when it involves you.
          <br /><br />

          I’m not here to promise something unrealistic or pretend I have everything figured out.
          I just know that when it comes to you, I care more than I usually do about anything.
          <br /><br />

          If feelings had a direction, mine would probably keep finding its way back to you,
          even when I try to act like it doesn’t.
          <br /><br />

          Maybe this is just a small digital space, but for me it carries something real.
          A reminder that some people don’t need big reasons to matter.
          They just do.
        </p>

        <div style={{
          marginTop: 50,
          fontStyle: "italic",
          color: "rgba(255,255,255,0.6)"
        }}>
          — made quietly, for you
        </div>

      </div>
    </div>
  );
}