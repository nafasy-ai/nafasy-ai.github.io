"use client";

import { useEffect } from "react";
import Link from "next/link";

// Redirect page: /privacy_policy -> /privacy-notice
// Kept because this URL was shared externally (e.g. with the DPO office).
// GitHub Pages is a static host, so the redirect is handled client-side.
export default function PrivacyPolicyRedirect() {
  useEffect(() => {
    // Preserve any query string (e.g. ?lang=arabic) when redirecting.
    const search = typeof window !== "undefined" ? window.location.search : "";
    window.location.replace(`/privacy-notice${search}`);
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <p>
        This page has moved. Redirecting to our{" "}
        <Link href="/privacy-notice">Privacy Notice</Link>…
      </p>
      <p>
        If you are not redirected automatically, please click the link above.
      </p>
    </main>
  );
}
