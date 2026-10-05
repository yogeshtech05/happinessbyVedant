"use client";

import React from "react";
import { useCart } from "@/hooks/use-cart";
import { Toast } from "./Toast";

export const ToastWrapper: React.FC = () => {
  const { toastMessage, hideToast } = useCart();
  return <Toast message={toastMessage} onClose={hideToast} />;
};
