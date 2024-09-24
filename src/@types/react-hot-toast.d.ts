// @types/react-hot-toast.d.ts
declare module 'react-hot-toast' {
  import React from 'react';

  export interface ToastOptions {
    duration?: number; // Duration in milliseconds
    position?: 
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right'; // Position of the toast
    style?: React.CSSProperties; // Custom styles for the toast
    className?: string; // Custom class names for the toast
    icon?: React.ReactNode; // Custom icon for the toast
    onOpen?: () => void; // Callback function when the toast opens
    onClose?: () => void; // Callback function when the toast closes
  }

  export interface Toast {
    (message: string, options?: ToastOptions): void;
    success(message: string, options?: ToastOptions): void;
    error(message: string, options?: ToastOptions): void;
    loading(message: string, options?: ToastOptions): void;
    dismiss(id?: string): void; // Function to dismiss a toast
    remove(id: string): void; // Function to remove a toast
  }

  const toast: Toast;
  export default toast;
}
