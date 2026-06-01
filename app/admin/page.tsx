"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");

    if (loggedUser === "afi") {
      router.replace("/try");
      return;
    }

    if (loggedUser === "aya") {
      router.replace("/aya");
      return;
    }

    setLoading(false);
  }, []);

  const handleLogin = () => {
    if (user === "afi" && pass === "afi") {
      localStorage.setItem("user", "afi");
      router.replace("/try");
      return;
    }

    if (user === "aya" && pass === "aya") {
      localStorage.setItem("user", "aya");
      router.replace("/aya");
      return;
    }

    setError("Login salah");
  };

  if (loading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI"
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
      fontFamily: "Segoe UI",
      color: "white"
    }}>

      <div style={{
        width: 320,
        padding: 30,
        background: "#111827",
        borderRadius: 12
      }}>

        <h2>Admin Login</h2>

        <input
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={input}
        />

        <input
          placeholder="Password"
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          style={input}
        />

        {error && (
          <p style={{ color: "red", fontSize: 12 }}>{error}</p>
        )}

        <button onClick={handleLogin} style={btn}>
          Login
        </button>

        <button
            onClick={() => router.replace("/")}
            style={{
             width: "100%",
             marginTop: 10,
             padding: 10,
             borderRadius: 8,
             border: "none",
             background: "rgba(255,255,255,0.1)",
             color: "white",
             cursor: "pointer"
          }}
        >
          Home
        </button>
      </div>

    </div>
  );
}

const input = {
  width: "100%",
  padding: 10,
  marginTop: 10,
  borderRadius: 8,
  border: "none"
};

const btn = {
  width: "100%",
  marginTop: 20,
  padding: 10,
  borderRadius: 8,
  border: "none",
  background: "#1e3a8a",
  color: "white",
  cursor: "pointer"
};