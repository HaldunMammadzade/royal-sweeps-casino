// User Types
export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phone?: string;
  isVerified: boolean;
  balance: UserBalance;
  vipLevel: VipLevel;
  createdAt: string;
  lastLogin: string;
  avatar?: string;
}

export interface UserBalance {
  goldCoins: number;
  sweepCoins: number;
  bonusCoins: number;
}

export interface VipLevel {
  level: number;
  name: string;
  progress: number;
  benefits: string[];
  nextLevelRequirement: number;
}

// Auth Types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  phone?: string;
  agreeToTerms: boolean;
  agreeToMarketing?: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  phone?: string;
  agreeToTerms: boolean;
  agreeToMarketing?: boolean;
}

// Game Types
export interface Game {
  id: string;
  name: string;
  provider: string;
  category: GameCategory;
  thumbnail: string;
  description: string;
  rtp: number;
  volatility: 'low' | 'medium' | 'high';
  maxWin: string;
  minBet: number;
  maxBet: number;
  features: string[];
  isNew: boolean;
  isPopular: boolean;
  isFavorite?: boolean;
  playCount: number;
  rating: number;
}

export type GameCategory = 
  | 'slots' 
  | 'table' 
  | 'live' 
  | 'instant' 
  | 'jackpot' 
  | 'exclusive';

export interface GameSession {
  gameId: string;
  sessionId: string;
  startTime: string;
  endTime?: string;
  totalBet: number;
  totalWin: number;
  spinsCount: number;
  biggestWin: number;
}

export interface SpinResult {
  id: string;
  reels: string[][];
  winLines: WinLine[];
  totalWin: number;
  multiplier: number;
  bonusTriggered: boolean;
  freeSpinsAwarded: number;
}

export interface WinLine {
  line: number;
  symbols: string[];
  payout: number;
  multiplier: number;
}

// Transaction Types
export interface Transaction {
  id: string;
  type: 'purchase' | 'cashout' | 'bonus' | 'win' | 'refund';
  amount: number;
  currency: 'USD' | 'gold' | 'sweep';
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  description: string;
  createdAt: string;
  completedAt?: string;
  paymentMethod?: string;
  transactionHash?: string;
}

export interface CoinPackage {
  id: string;
  name: string;
  price: number;
  goldCoins: number;
  sweepCoins: number;
  bonusGold: number;
  bonusDescription?: string;
  isPopular: boolean;
  isBestValue: boolean;
  originalPrice?: number;
  discount?: number;
  validUntil?: string;
}

export interface CashoutRequest {
  amount: number;
  method: 'bank' | 'paypal' | 'crypto';
  details: Record<string, any>;
}

// Promotion Types
export interface Promotion {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'bonus' | 'tournament' | 'cashback' | 'freespins' | 'deposit';
  value: string;
  validFrom: string;
  validUntil: string;
  isActive: boolean;
  requirements: string[];
  claimed?: boolean;
  progress?: number;
}

export interface Tournament {
  id: string;
  name: string;
  description: string;
  image: string;
  gameIds: string[];
  startTime: string;
  endTime: string;
  prizePool: number;
  maxParticipants: number;
  currentParticipants: number;
  entryFee: number;
  status: 'upcoming' | 'active' | 'ended';
  leaderboard: TournamentEntry[];
}

export interface TournamentEntry {
  rank: number;
  userId: string;
  username: string;
  score: number;
  prize: number;
  avatar?: string;
}

// UI Types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}

export interface LoadingState {
  isLoading: boolean;
  message?: string;
}

// API Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'date' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: any;
  options?: { value: string; label: string }[];
}

// Game Settings
export interface GameSettings {
  soundEnabled: boolean;
  musicEnabled: boolean;
  animationsEnabled: boolean;
  autoSpin: boolean;
  fastSpin: boolean;
  quickStop: boolean;
  realityCheck: boolean;
  sessionLimit?: number;
  lossLimit?: number;
}

// Support Types
export interface SupportTicket {
  id: string;
  subject: string;
  message: string;
  status: 'open' | 'pending' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  responses: SupportResponse[];
}

export interface SupportResponse {
  id: string;
  message: string;
  isFromSupport: boolean;
  createdAt: string;
  attachments?: string[];
}