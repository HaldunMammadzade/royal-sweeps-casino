import toast from 'react-hot-toast';
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';

// Custom toast styles
const toastStyles = {
  success: {
    style: {
      background: '#0f1419',
      color: '#ffffff',
      border: '1px solid #00ff88',
      borderRadius: '12px',
      padding: '16px',
    },
    iconTheme: {
      primary: '#00ff88',
      secondary: '#ffffff',
    },
  },
  error: {
    style: {
      background: '#0f1419',
      color: '#ffffff',
      border: '1px solid #ff4444',
      borderRadius: '12px',
      padding: '16px',
    },
    iconTheme: {
      primary: '#ff4444',
      secondary: '#ffffff',
    },
  },
  warning: {
    style: {
      background: '#0f1419',
      color: '#ffffff',
      border: '1px solid #ffaa00',
      borderRadius: '12px',
      padding: '16px',
    },
    iconTheme: {
      primary: '#ffaa00',
      secondary: '#ffffff',
    },
  },
  info: {
    style: {
      background: '#0f1419',
      color: '#ffffff',
      border: '1px solid #3b82f6',
      borderRadius: '12px',
      padding: '16px',
    },
    iconTheme: {
      primary: '#3b82f6',
      secondary: '#ffffff',
    },
  },
};

// Custom toast functions
export const showSuccess = (message: string, options?: any) => {
  return toast.success(message, {
    ...toastStyles.success,
    duration: 4000,
    ...options,
  });
};

export const showError = (message: string, options?: any) => {
  return toast.error(message, {
    ...toastStyles.error,
    duration: 5000,
    ...options,
  });
};

export const showWarning = (message: string, options?: any) => {
  return toast(message, {
    ...toastStyles.warning,
    icon: '⚠️',
    duration: 4000,
    ...options,
  });
};

export const showInfo = (message: string, options?: any) => {
  return toast(message, {
    ...toastStyles.info,
    icon: 'ℹ️',
    duration: 3000,
    ...options,
  });
};

// Game-specific toasts
export const showGameToast = {
  win: (amount: string) => showSuccess(`🎉 Big Win! You won ${amount}!`),
  bonus: (bonus: string) => showSuccess(`🎁 Bonus Activated! ${bonus}`),
  jackpot: (amount: string) => showSuccess(`💎 JACKPOT! You won ${amount}!`, { duration: 8000 }),
  levelUp: (level: string) => showSuccess(`⭐ Level Up! Welcome to ${level} VIP!`),
  purchase: (amount: string) => showSuccess(`💰 Purchase successful! ${amount} added to your balance`),
  cashout: (amount: string) => showSuccess(`💸 Cashout requested! ${amount} will be processed`),
  lowBalance: () => showWarning('⚠️ Low balance! Consider purchasing more coins'),
  sessionExpired: () => showError('Session expired. Please log in again'),
  connectionError: () => showError('Connection lost. Please check your internet'),
};

// Initialize toast configuration
export const initToast = () => {
  // Set default toast options
  toast.configure({
    position: 'top-right',
    reverseOrder: false,
    gutter: 8,
    containerStyle: {
      top: 80, // Account for header height
    },
    toastOptions: {
      className: '',
      duration: 4000,
      style: {
        background: '#2a2a2a',
        color: '#ffffff',
        border: '1px solid #3a3a3a',
        borderRadius: '12px',
        padding: '16px',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      },
    },
  });
};

export default {
  success: showSuccess,
  error: showError,
  warning: showWarning,
  info: showInfo,
  game: showGameToast,
};