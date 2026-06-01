"use client";

import Link from "next/link";

export default function AdminButton() {
  return (
    <Link href="/admin" className="admin-btn">
      Admin
    </Link>
  );
}