import { useState } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description }) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return { toast, toasts };
} 