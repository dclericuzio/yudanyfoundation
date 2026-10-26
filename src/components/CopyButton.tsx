"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="rounded-full border border-white/30 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white hover:bg-white/10"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
        } catch {
          const area = document.createElement("textarea");
          area.value = value;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.left = "-9999px";
          document.body.appendChild(area);
          area.select();
          document.execCommand("copy");
          area.remove();
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      }}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
