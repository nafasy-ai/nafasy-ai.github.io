"use client";

import { useState, useEffect } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  iconSize?: number;
}

/**
 * Renders an email link that is invisible to scrapers/bots.
 * Static HTML shows "user [at] domain" with no mailto href.
 * After client-side mount the real mailto link is assembled and rendered.
 */
export default function ObfuscatedEmail({
  user,
  domain,
  className = "",
  iconSize = 15,
}: ObfuscatedEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

  if (!mounted) {
    // Bots see plain text — no @ symbol, no mailto href
    return (
      <span className={className}>
        {icon}
        {user}&nbsp;[at]&nbsp;{domain}
      </span>
    );
  }

  const email = `${user}@${domain}`;
  return (
    <a href={`mailto:${email}`} className={className}>
      {icon}
      {email}
    </a>
  );
}
