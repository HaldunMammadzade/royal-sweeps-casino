import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { User, AuthState, LoginCredentials, RegisterData } from '../types';
import { STORAGE_KEYS, VIP_LEVELS } from '../utils/constants';
import { getStorageItem, setStorageItem, removeStorageItem } from '../utils/helpers';

// Mock user data
const mockUser: User = {
  id: '1',
  email: 'john.doe@example.com',
  username: 'johndoe',
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1990-05-15',
  phone: '+1-555-0123',
  isVerified: true,
  balance: {
    goldCoins: 125000,
    sweepCoins: 450,
    bonusCoins: 25000,
  },
  vipLevel: VIP_LEVELS.GOLD,
  createdAt: '2024-01-15T10:30:00Z',
  lastLogin: '2024-01-20T14:22:00Z',
  avatar: '/images/avatars/default.jpg',
};

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  updateBalance: (balance: Partial<User['balance']>) => void;
}

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'UPDATE_USER'; payload: Partial<User> }
  | { type: 'UPDATE_BALANCE'; payload: Partial<User['balance']> }
  | { type: 'LOGOUT' };

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case 'UPDATE_USER':
      if (!state.user) return state;
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case 'UPDATE_BALANCE':
      if (!state.user) return state;
      return {
        ...state,
        user: {
          ...state.user,
          balance: {
            ...state.user.balance,
            ...action.payload,
          },
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedUser = getStorageItem<User | null>(STORAGE_KEYS.USER, null);
        const token = getStorageItem<string | null>(STORAGE_KEYS.AUTH_TOKEN, null);

        if (savedUser && token) {
          // In a real app, you would validate the token with the server
          dispatch({ type: 'SET_USER', payload: savedUser });
        } else {
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      } catch (error) {
        console.error('Failed to initialize auth:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Failed to initialize authentication' });
      }
    };

    initializeAuth();
  }, []);

  // Mock login function
  const login = async (credentials: LoginCredentials): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock validation
      if (credentials.email === 'john.doe@example.com' && credentials.password === 'password123') {
        const user = {
          ...mockUser,
          lastLogin: new Date().toISOString(),
        };

        // Save to localStorage
        setStorageItem(STORAGE_KEYS.USER, user);
        setStorageItem(STORAGE_KEYS.AUTH_TOKEN, 'mock-jwt-token');
        setStorageItem(STORAGE_KEYS.LAST_LOGIN, user.lastLogin);

        dispatch({ type: 'SET_USER', payload: user });
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: (error as Error).message });
      throw error;
    }
  };

  // Mock register function
  const register = async (data: RegisterData): Promise<void> => {
    dispatch({ type: 'SET_LOADING', payload: true });

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create new user object
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: data.email,
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: data.dateOfBirth,
        phone: data.phone,
        isVerified: false,
        balance: {
          goldCoins: 100000, // Welcome bonus
          sweepCoins: 100,   // Welcome bonus
          bonusCoins: 50000, // Welcome bonus
        },
        vipLevel: VIP_LEVELS.BRONZE,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };

      // Save to localStorage
      setStorageItem(STORAGE_KEYS.USER, newUser);
      setStorageItem(STORAGE_KEYS.AUTH_TOKEN, 'mock-jwt-token');

      dispatch({ type: 'SET_USER', payload: newUser });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: (error as Error).message });
      throw error;
    }
  };

  // Logout function
  const logout = (): void => {
    // Clear localStorage
    removeStorageItem(STORAGE_KEYS.USER);
    removeStorageItem(STORAGE_KEYS.AUTH_TOKEN);

    dispatch({ type: 'LOGOUT' });
  };

  // Update user profile
  const updateUser = (updates: Partial<User>): void => {
    if (!state.user) return;

    const updatedUser = {
      ...state.user,
      ...updates,
    };

    setStorageItem(STORAGE_KEYS.USER, updatedUser);
    dispatch({ type: 'UPDATE_USER', payload: updates });
  };

  // Update user balance
  const updateBalance = (balance: Partial<User['balance']>): void => {
    if (!state.user) return;

    const updatedBalance = {
      ...state.user.balance,
      ...balance,
    };

    const updatedUser = {
      ...state.user,
      balance: updatedBalance,
    };

    setStorageItem(STORAGE_KEYS.USER, updatedUser);
    dispatch({ type: 'UPDATE_BALANCE', payload: balance });
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    updateUser,
    updateBalance,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};