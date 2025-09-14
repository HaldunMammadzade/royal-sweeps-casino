import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  User, 
  Wallet, 
  Settings, 
  LogOut,
  Crown,
  Gift,
  Bell,
  Search
} from 'lucide-react';
import Button from './Button';
import { useAuth } from '@/context/AuthContext';
import { formatCurrency } from '@/utils/helpers';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Games', href: '/games', current: location.pathname === '/games' },
    { name: 'Promotions', href: '/promotions', current: location.pathname === '/promotions' },
    { name: 'Tournaments', href: '/tournaments', current: location.pathname === '/tournaments' },
    { name: 'VIP', href: '/vip', current: location.pathname === '/vip' },
    { name: 'Support', href: '/support', current: location.pathname === '/support' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    setIsNotificationsOpen(false);
  };
  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsProfileOpen(false);
  };

  const mockNotifications = [
    { id: 1, title: 'Welcome Bonus', message: 'Your 100% bonus is ready!', time: '2 min ago', unread: true },
    { id: 2, title: 'New Game', message: 'Dragon\'s Fortune is now live!', time: '1 hour ago', unread: true },
    { id: 3, title: 'VIP Invitation', message: 'You\'re eligible for VIP status', time: '2 hours ago', unread: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-casino-border bg-casino-dark/95 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-gold-500 to-gold-600">
                <Crown className="h-6 w-6 text-casino-dark" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-display font-bold text-gradient-gold">
                  Royal Sweeps
                </h1>
                <p className="text-xs text-gray-400">Premium Casino</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  item.current 
                    ? 'text-gold-500' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex"
              leftIcon={<Search className="h-4 w-4" />}
            >
              Search
            </Button>

            {isAuthenticated ? (
              <>
                {/* Balance Display */}
                <div className="hidden lg:block">
                  <div className="bg-casino-card border border-casino-border rounded-lg px-4 py-2" style={{width: '250px'}}>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Gold Coins</p>
                        <p className="font-bold text-gold-500">
                          {formatCurrency(user?.balance?.goldCoins || 0, 'gold')}
                        </p>
                      </div>
                      <div className="w-px h-6 bg-casino-border" />
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Sweep Coins</p>
                        <p className="font-bold text-green-500">
                          {formatCurrency(user?.balance?.sweepCoins || 0, 'sweep')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notifications */}
                <div className="relative" ref={notificationRef}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleNotifications}
                    className="relative"
                  >
                    <Bell className="h-5 w-5" />
                    {mockNotifications.some(n => n.unread) && (
                      <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                    )}
                  </Button>

                  <AnimatePresence>
                    {isNotificationsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-80 bg-casino-card border border-casino-border rounded-xl shadow-xl z-50"
                      >
                        <div className="p-4 border-b border-casino-border">
                          <h3 className="text-lg font-semibold text-white">Notifications</h3>
                        </div>
                        <div className="max-h-64 overflow-y-auto">
                          {mockNotifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-4 border-b border-casino-border last:border-b-0 hover:bg-casino-secondary/50 cursor-pointer transition-colors ${
                                notification.unread ? 'bg-gold-500/5' : ''
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0">
                                  <Gift className="h-5 w-5 text-gold-500" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-white">
                                    {notification.title}
                                  </p>
                                  <p className="text-sm text-gray-400">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                                {notification.unread && (
                                  <div className="flex-shrink-0">
                                    <div className="h-2 w-2 bg-gold-500 rounded-full" />
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="p-4 border-t border-casino-border">
                          <Button variant="ghost" size="sm" fullWidth>
                            View All Notifications
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Profile Dropdown */}
                <div className="relative" ref={profileRef}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleProfile}
                    className="flex items-center space-x-2"
                  >
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-royal-500 to-royal-600 flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <span className="hidden sm:block text-sm font-medium max-w-24 truncate">
                        {user?.username}
                      </span>
                    </div>
                  </Button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-64 bg-casino-card border border-casino-border rounded-xl shadow-xl z-50"
                      >
                        <div className="p-4 border-b border-casino-border">
                          <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-royal-500 to-royal-600 flex items-center justify-center">
                              <User className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-white truncate">
                                {user?.firstName} {user?.lastName}
                              </p>
                              <p className="text-sm text-gray-400 truncate">{user?.email}</p>
                              <div className="flex items-center space-x-1 mt-1">
                                <Crown className="h-3 w-3 text-gold-500" />
                                <span className="text-xs text-gold-500">
                                  {user?.vipLevel?.name} VIP
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-2">
                          <Link
                            to="/profile"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-casino-secondary/50 transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <User className="h-4 w-4 text-gray-400" />
                            <span className="text-white">My Profile</span>
                          </Link>
                          <Link
                            to="/cashier"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-casino-secondary/50 transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Wallet className="h-4 w-4 text-gray-400" />
                            <span className="text-white">Cashier</span>
                          </Link>
                          <Link
                            to="/profile"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-casino-secondary/50 transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <Settings className="h-4 w-4 text-gray-400" />
                            <span className="text-white">Settings</span>
                          </Link>
                        </div>

                        <div className="p-2 border-t border-casino-border">
                          <button
                            onClick={() => {
                              logout();
                              setIsProfileOpen(false);
                            }}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-500/10 transition-colors text-red-400 w-full"
                          >
                            <LogOut className="h-4 w-4" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">
                    Join Now
                  </Button>
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-casino-secondary border-t border-casino-border"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Balance (if authenticated) */}
              {isAuthenticated && (
                <div className="bg-casino-card border border-casino-border rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xs text-gray-400">Gold Coins</p>
                      <p className="font-bold text-gold-500">
                        {formatCurrency(user?.balance?.goldCoins || 0, 'gold')}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Sweep Coins</p>
                      <p className="font-bold text-green-500">
                        {formatCurrency(user?.balance?.sweepCoins || 0, 'sweep')}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg font-medium transition-colors ${
                      item.current
                        ? 'bg-gold-500/20 text-gold-500'
                        : 'text-gray-300 hover:bg-casino-card hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Mobile Auth Buttons */}
              {!isAuthenticated && (
                <div className="space-y-3 pt-4 border-t border-casino-border">
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="outline" size="md" fullWidth>
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" size="md" fullWidth>
                      Join Now
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
