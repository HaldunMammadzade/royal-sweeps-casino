// App Configuration
export const APP_CONFIG = {
  name: 'Royal Sweeps Casino',
  version: '1.0.0',
  description: 'Premium Sweepstakes Casino Experience',
  url: 'https://royalsweeps.com',
  supportEmail: 'support@royalsweeps.com',
  defaultLanguage: 'en',
};

// Game Categories
export const GAME_CATEGORIES = {
  ALL: 'all',
  SLOTS: 'slots',
  TABLE: 'table',
  LIVE: 'live',
  INSTANT: 'instant',
  JACKPOT: 'jackpot',
  EXCLUSIVE: 'exclusive',
} ;

export const GAME_CATEGORY_LABELS = {
  [GAME_CATEGORIES.ALL]: 'All Games',
  [GAME_CATEGORIES.SLOTS]: 'Slots',
  [GAME_CATEGORIES.TABLE]: 'Table Games',
  [GAME_CATEGORIES.LIVE]: 'Live Casino',
  [GAME_CATEGORIES.INSTANT]: 'Instant Win',
  [GAME_CATEGORIES.JACKPOT]: 'Jackpots',
  [GAME_CATEGORIES.EXCLUSIVE]: 'Exclusive',
} ;

// VIP Levels
export const VIP_LEVELS_CONFIG = {
  BRONZE: { level: 1, name: 'Bronze', requirement: 0, color: '#CD7F32' },
  SILVER: { level: 2, name: 'Silver', requirement: 1000, color: '#C0C0C0' },
  GOLD: { level: 3, name: 'Gold', requirement: 5000, color: '#FFD700' },
  PLATINUM: { level: 4, name: 'Platinum', requirement: 15000, color: '#E5E4E2' },
  DIAMOND: { level: 5, name: 'Diamond', requirement: 50000, color: '#B9F2FF' },
  ROYAL: { level: 6, name: 'Royal', requirement: 150000, color: '#8B5CF6' },
}  ;

// Currency Types
export const CURRENCY_TYPES = {
  USD: 'USD',
  GOLD: 'gold',
  SWEEP: 'sweep',
}  ;

export const CURRENCY_SYMBOLS = {
  [CURRENCY_TYPES.USD]: '$',
  [CURRENCY_TYPES.GOLD]: 'GC',
  [CURRENCY_TYPES.SWEEP]: 'SC',
}  ;

// Transaction Types
export const TRANSACTION_TYPES = {
  PURCHASE: 'purchase',
  CASHOUT: 'cashout',
  BONUS: 'bonus',
  WIN: 'win',
  REFUND: 'refund',
}  ;

export const TRANSACTION_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
}  ;

// Payment Methods
export const PAYMENT_METHODS = {
  CREDIT_CARD: 'credit_card',
  PAYPAL: 'paypal',
  BANK_TRANSFER: 'bank_transfer',
  CRYPTO: 'crypto',
  APPLE_PAY: 'apple_pay',
  GOOGLE_PAY: 'google_pay',
}  ;

export const PAYMENT_METHOD_LABELS = {
  [PAYMENT_METHODS.CREDIT_CARD]: 'Credit/Debit Card',
  [PAYMENT_METHODS.PAYPAL]: 'PayPal',
  [PAYMENT_METHODS.BANK_TRANSFER]: 'Bank Transfer',
  [PAYMENT_METHODS.CRYPTO]: 'Cryptocurrency',
  [PAYMENT_METHODS.APPLE_PAY]: 'Apple Pay',
  [PAYMENT_METHODS.GOOGLE_PAY]: 'Google Pay',
}  ;

// Promotion Types
export const PROMOTION_TYPES = {
  BONUS: 'bonus',
  TOURNAMENT: 'tournament',
  CASHBACK: 'cashback',
  FREESPINS: 'freespins',
  DEPOSIT: 'deposit',
}  ;

// Toast Types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
}  ;

// Modal Sizes
export const MODAL_SIZES = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
}  ;

// Validation Rules
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//   PHONE: /^\+?[\d\s\-\(\)]{10,}$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20,
  MIN_AGE: 18,
  MAX_CASHOUT_AMOUNT: 10000,
  MIN_CASHOUT_AMOUNT: 50,
}  ;

// Local Storage Keys
export const STORAGE_KEYS = {
  USER: 'royal_sweeps_user',
  AUTH_TOKEN: 'royal_sweeps_token',
  GAME_SETTINGS: 'royal_sweeps_game_settings',
  LANGUAGE: 'royal_sweeps_language',
  THEME: 'royal_sweeps_theme',
  TUTORIAL_COMPLETED: 'royal_sweeps_tutorial',
  LAST_LOGIN: 'royal_sweeps_last_login',
}  ;

// API Endpoints (Mock for now)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
  },
  USER: {
    PROFILE: '/user/profile',
    BALANCE: '/user/balance',
    TRANSACTIONS: '/user/transactions',
    UPDATE_PROFILE: '/user/update',
    VERIFY_EMAIL: '/user/verify-email',
  },
  GAMES: {
    LIST: '/games',
    CATEGORIES: '/games/categories',
    FAVORITES: '/games/favorites',
    PLAY: '/games/play',
    HISTORY: '/games/history',
  },
  CASHIER: {
    PACKAGES: '/cashier/packages',
    PURCHASE: '/cashier/purchase',
    CASHOUT: '/cashier/cashout',
    PAYMENT_METHODS: '/cashier/payment-methods',
  },
  PROMOTIONS: {
    LIST: '/promotions',
    CLAIM: '/promotions/claim',
    TOURNAMENTS: '/promotions/tournaments',
  },
}  ;

// Game Symbols
export const SLOT_SYMBOLS = {
  CHERRY: '🍒',
  LEMON: '🍋',
  ORANGE: '🍊',
  GRAPE: '🍇',
  WATERMELON: '🍉',
  BELL: '🔔',
  BAR: '🏁',
  SEVEN: '7️⃣',
  DIAMOND: '💎',
  STAR: '⭐',
  LUCKY: '🍀',
  COIN: '🪙',
  CROWN: '👑',
  FIRE: '🔥',
  LIGHTNING: '⚡',
}  ;

// Slot Payouts (multipliers)
export const SLOT_PAYOUTS = {
  [SLOT_SYMBOLS.CHERRY]: { 3: 5, 4: 15, 5: 50 },
  [SLOT_SYMBOLS.LEMON]: { 3: 5, 4: 15, 5: 50 },
  [SLOT_SYMBOLS.ORANGE]: { 3: 10, 4: 25, 5: 75 },
  [SLOT_SYMBOLS.GRAPE]: { 3: 10, 4: 25, 5: 75 },
  [SLOT_SYMBOLS.WATERMELON]: { 3: 15, 4: 40, 5: 100 },
  [SLOT_SYMBOLS.BELL]: { 3: 20, 4: 50, 5: 150 },
  [SLOT_SYMBOLS.BAR]: { 3: 25, 4: 75, 5: 200 },
  [SLOT_SYMBOLS.SEVEN]: { 3: 50, 4: 150, 5: 500 },
  [SLOT_SYMBOLS.DIAMOND]: { 3: 100, 4: 300, 5: 1000 },
  [SLOT_SYMBOLS.STAR]: { 3: 200, 4: 500, 5: 2000 },
  [SLOT_SYMBOLS.CROWN]: { 3: 500, 4: 1500, 5: 5000 },
}  ;

// Breakpoints
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
}  ;

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
  SPIN: 2000,
  WIN_CELEBRATION: 3000,
}  ;

// Sound Effects
export const SOUND_EFFECTS = {
  SPIN: '/sounds/spin.mp3',
  WIN: '/sounds/win.mp3',
  BIG_WIN: '/sounds/big-win.mp3',
  COIN: '/sounds/coin.mp3',
  BUTTON_CLICK: '/sounds/click.mp3',
  NOTIFICATION: '/sounds/notification.mp3',
  ERROR: '/sounds/error.mp3',
}  ;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_CREDENTIALS: 'Invalid email or password.',
  EMAIL_ALREADY_EXISTS: 'Email already exists.',
  USERNAME_TAKEN: 'Username is already taken.',
  INSUFFICIENT_BALANCE: 'Insufficient balance.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  PASSWORD_TOO_SHORT: `Password must be at least ${VALIDATION_RULES.PASSWORD_MIN_LENGTH} characters.`,
  PASSWORDS_DONT_MATCH: 'Passwords do not match.',
  AGE_RESTRICTION: `You must be at least ${VALIDATION_RULES.MIN_AGE} years old.`,
  TERMS_REQUIRED: 'You must agree to the terms and conditions.',
  INVALID_PHONE: 'Please enter a valid phone number.',
  CASHOUT_TOO_LOW: `Minimum cashout amount is $${VALIDATION_RULES.MIN_CASHOUT_AMOUNT}.`,
  CASHOUT_TOO_HIGH: `Maximum cashout amount is $${VALIDATION_RULES.MAX_CASHOUT_AMOUNT}.`,
  GAME_LOAD_ERROR: 'Failed to load game. Please try again.',
  SESSION_EXPIRED: 'Your session has expired. Please login again.',
}  ;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Welcome back!',
  REGISTER_SUCCESS: 'Account created successfully!',
  PROFILE_UPDATED: 'Profile updated successfully.',
  PURCHASE_SUCCESS: 'Coins purchased successfully!',
  CASHOUT_SUCCESS: 'Cashout request submitted successfully.',
  EMAIL_VERIFIED: 'Email verified successfully.',
  PASSWORD_RESET: 'Password reset successfully.',
  BONUS_CLAIMED: 'Bonus claimed successfully!',
  FAVORITE_ADDED: 'Game added to favorites.',
  FAVORITE_REMOVED: 'Game removed from favorites.',
}  ;

// Features Flags (for development)
export const FEATURE_FLAGS = {
  ENABLE_TOURNAMENTS: true,
  ENABLE_LIVE_CHAT: true,
  ENABLE_PUSH_NOTIFICATIONS: false,
  ENABLE_DARK_MODE: true,
  ENABLE_SOUND_EFFECTS: true,
  ENABLE_ANIMATIONS: true,
  ENABLE_AUTO_SPIN: true,
  ENABLE_PROGRESSIVE_JACKPOTS: false,
}  ;

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://facebook.com/royalsweeps',
  TWITTER: 'https://twitter.com/royalsweeps',
  INSTAGRAM: 'https://instagram.com/royalsweeps',
  YOUTUBE: 'https://youtube.com/royalsweeps',
  DISCORD: 'https://discord.gg/royalsweeps',
}  ;

// Legal Pages
export const LEGAL_PAGES = {
  TERMS_OF_SERVICE: '/terms-of-service',
  PRIVACY_POLICY: '/privacy-policy',
  RESPONSIBLE_GAMING: '/responsible-gaming',
  FAQ: '/faq',
  CONTACT: '/contact',
}  ;