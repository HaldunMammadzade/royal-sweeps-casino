import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Crown, Shield, Gift } from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';
import { isValidEmail } from '@/utils/helpers';
// import type { LoginCredentials } from '@/types';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || '/';

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await login(formData);
      toast.success('Welcome back to Royal Sweeps!');
      navigate(from, { replace: true });
    } catch (error) {
      toast.error('Invalid email or password');
    }
  };

  const socialLogins = [
    { name: 'Google', icon: '🔍', color: 'bg-white text-gray-900 hover:bg-gray-100' },
    { name: 'Facebook', icon: '📘', color: 'bg-blue-600 text-white hover:bg-blue-700' },
    { name: 'Apple', icon: '🍎', color: 'bg-black text-white hover:bg-gray-900' },
  ];

  return (
    <div className="min-h-screen bg-casino-dark flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-gold mb-6"
            >
              <Crown className="h-8 w-8 text-casino-dark" />
            </motion.div>
            
            <h2 className="text-3xl font-display font-bold text-gradient-gold">
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-400">
              Sign in to continue your royal gaming experience
            </p>
          </div>

          {/* Demo Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-4"
          >
            <h4 className="text-sm font-semibold text-gold-500 mb-2">Demo Account</h4>
            <p className="text-xs text-gray-300 mb-2">Use these credentials to test the platform:</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-400">Email:</span>
                <p className="text-white font-mono">john.doe@example.com</p>
              </div>
              <div>
                <span className="text-gray-400">Password:</span>
                <p className="text-white font-mono">password123</p>
              </div>
            </div>
          </motion.div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`input pl-10 ${errors.email ? 'input-error' : ''}`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              {errors.email && (
                <p className="form-error">{errors.email}</p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className={`input pl-10 pr-10 ${errors.password ? 'input-error' : ''}`}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-white" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-white" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="form-error">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 text-gold-500 focus:ring-gold-500 border-gray-300 rounded"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              loading={isLoading}
            >
              Sign In
            </Button>
          </motion.form>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600" />
            </div>
            {/* <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-casino-dark text-gray-400">Or continue with</span>
            </div> */}
          </motion.div>

          {/* Social Login */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-3"
          >
            {socialLogins.map((social, index) => (
              <motion.button
                key={social.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium transition-colors ${social.color}`}
              >
                {/* <span className="text-xl">{social.icon}</span> */}
              </motion.button>
            ))}
          </motion.div>

          {/* Sign Up Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-gold-500 hover:text-gold-400 font-medium transition-colors"
              >
                Join Royal Sweeps
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side - Hero Section */}
      <div className="hidden lg:flex lg:flex-1 lg:relative">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center px-12 relative overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 via-royal-600/20 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl font-display font-bold text-white mb-6">
                Your Royal Gaming
                <br />
                <span className="text-gradient-gold">Adventure Awaits</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience the ultimate sweepstakes casino with premium games, 
                exclusive rewards, and VIP treatment.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-gold-500" />
                </div>
                <p className="text-gray-300">Safe & Secure Gaming</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center">
                  <Gift className="w-4 h-4 text-gold-500" />
                </div>
                <p className="text-gray-300">Daily Bonuses & Rewards</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center">
                  <Crown className="w-4 h-4 text-gold-500" />
                </div>
                <p className="text-gray-300">VIP Treatment & Exclusive Games</p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-2 gap-6 mt-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-gold">500K+</div>
                <div className="text-sm text-gray-400">Happy Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-gold">$50M+</div>
                <div className="text-sm text-gray-400">Prizes Won</div>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 right-1/4 w-32 h-32 border border-gold-500/20 rounded-full"
          />
          
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-royal-500/20 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;