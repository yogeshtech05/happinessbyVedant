"use client";

import React, { useEffect } from "react";
import { CheckIcon, XIcon } from "./Icons";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-bounce-short">
      <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-amber-400/30 flex items-center justify-between gap-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-rose-600/30 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/40">
            <CheckIcon size={18} />
          </div>
          <p className="text-sm font-medium text-slate-100">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
          aria-label="Close notification"
        >
          <XIcon size={16} />
        </button>
      </div>
    </div>
  );
};
