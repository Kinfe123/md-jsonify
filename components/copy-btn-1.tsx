"use client";

import { useState } from "react";
import { Copy , Check } from "lucide-react";
export const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button disabled={isCopied} onClick={copy}>
      {isCopied ? <Check className="W-4 h-4" /> : <Copy className="w-4 h-4" />}
    </button>
  );
};
