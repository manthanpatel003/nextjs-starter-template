import { Toast } from "react-hot-toast";

declare module "react-hot-toast" {
  import React from "react";

  export interface ToastOptions {
    duration?: number; // Duration in milliseconds
    position?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right"; // Position of the toast
    style?: React.CSSProperties; // Custom styles for the toast
    className?: string; // Custom class names for the toast
    icon?: React.ReactNode; // Custom icon for the toast
    onOpen?: () => void; // Callback function when the toast opens
    onClose?: () => void; // Callback function when the toast closes
  }

  export const Toaster: React.FC; // Exporting the Toaster component

  const toast: Toast;
  export default toast;
}
