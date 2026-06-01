"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // 🧨 hapus semua session
    localStorage.clear();

    // 🚪 langsung balik ke admin
    router.replace("/admin");
  }, []);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Segoe UI",
      background: "#0f172a",
      color: "white"
    }}>
      Logging out...
    </div>
  );
}