import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Calendar,
  Crown, 
  Shield, 
  Gift,
  CheckCircle
} from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';
import { isValidEmail, isValidPhone, isValidPassword, isValidAge } from '@/utils/helpers';
import type { RegisterData } from '@/types';
import toast from 'react-hot-toast';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phone: '',
    agreeToTerms: false,
    agreeToMarketing: false,
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);
  
  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    } else if (!isValidAge(formData.dateOfBirth)) {
      newErrors.dateOfBirth = 'You must be at least 18 years old';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isValidPassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      return;
    }

    try {
      await register(formData);
      toast.success('Account created successfully! Welcome to Royal Sweeps!');
      navigate('/');
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
    }
  };

  const welcomeBenefits = [
    {
      icon: <Gift className="w-5 h-5" />,
      title: '100,000 Gold Coins',
      description: 'Welcome bonus for new players'
    },
    {
      icon: <Crown className="w-5 h-5" />,
      title: '100 Sweep Coins',
      description: 'Start playing for real prizes'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'VIP Treatment',
      description: 'Exclusive bonuses and rewards'
    }
  ];

  return (
    <div className="min-h-screen bg-casino-dark flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:flex-1 lg:relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex flex-col justify-center px-12 relative overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-royal-600/20 via-gold-600/20 to-transparent" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h1 className="text-4xl font-display font-bold text-white mb-6">
                Join the Royal
                <br />
                <span className="text-gradient-gold">Gaming Kingdom</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Create your account and unlock exclusive games, 
                premium rewards, and VIP experiences.
              </p>
            </motion.div>

            {/* Welcome Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                Welcome Package Includes:
              </h3>
              
              {welcomeBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gold-500/10 border border-gold-500/30 rounded-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-500">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{benefit.title}</h4>
                    <p className="text-sm text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-40 h-40 border border-gold-500/10 rounded-full"
          />
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
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
              className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-royal mb-6"
            >
              <Crown className="h-8 w-8 text-white" />
            </motion.div>
            
            <h2 className="text-3xl font-display font-bold text-gradient-royal">
              Create Account
            </h2>
            <p className="mt-2 text-gray-400">
              Step {currentStep} of 2 - {currentStep === 1 ? 'Personal Information' : 'Account Setup'}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-casino-secondary rounded-full h-2">
            <motion.div
              className="bg-gradient-royal h-2 rounded-full"
              initial={{ width: "50%" }}
              animate={{ width: currentStep === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Step 1 - Personal Information */}
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className={`input pl-10 ${errors.firstName ? 'input-error' : ''}`}
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="form-error">{errors.firstName}</p>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className={`input ${errors.lastName ? 'input-error' : ''}`}
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && (
                    <p className="form-error">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className={`input pl-10 ${errors.username ? 'input-error' : ''}`}
                    placeholder="johndoe"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.username && (
                  <p className="form-error">{errors.username}</p>
                )}
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dateOfBirth" className="form-label">
                  Date of Birth
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    required
                    className={`input pl-10 ${errors.dateOfBirth ? 'input-error' : ''}`}
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.dateOfBirth && (
                  <p className="form-error">{errors.dateOfBirth}</p>
                )}
                <p className="form-help">You must be 18 or older to register</p>
              </div>

              {/* Next Button */}
              <Button
                type="button"
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleNext}
              >
                Continue
              </Button>
            </motion.div>
          )}

          {/* Step 2 - Account Setup */}
          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
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
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.email && (
                    <p className="form-error">{errors.email}</p>
                  )}
                </div>

                {/* Phone (Optional) */}
                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`input pl-10 ${errors.phone ? 'input-error' : ''}`}
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.phone && (
                    <p className="form-error">{errors.phone}</p>
                  )}
                </div>

                {/* Password */}
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
                      autoComplete="new-password"
                      required
                      className={`input pl-10 pr-10 ${errors.password ? 'input-error' : ''}`}
                      placeholder="Create a strong password"
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
                  <p className="form-help">Must be at least 8 characters long</p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      required
                      className={`input pl-10 pr-10 ${errors.confirmPassword ? 'input-error' : ''}`}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-white" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-white" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="form-error">{errors.confirmPassword}</p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        className="h-4 w-4 text-royal-500 focus:ring-royal-500 border-gray-300 rounded"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToTerms" className="text-gray-300">
                        I agree to the{' '}
                        <Link to="/terms" className="text-royal-500 hover:text-royal-400">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-royal-500 hover:text-royal-400">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                  {errors.agreeToTerms && (
                    <p className="form-error">{errors.agreeToTerms}</p>
                  )}

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToMarketing"
                        name="agreeToMarketing"
                        type="checkbox"
                        className="h-4 w-4 text-royal-500 focus:ring-royal-500 border-gray-300 rounded"
                        checked={formData.agreeToMarketing}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToMarketing" className="text-gray-300">
                        I would like to receive promotional emails and marketing communications
                      </label>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isLoading}
                    leftIcon={<Crown className="w-5 h-5" />}
                  >
                    Create Royal Account
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    fullWidth
                    onClick={handleBack}
                  >
                    Back to Step 1
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Already have account */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-royal-500 hover:text-royal-400 font-medium transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </motion.div>

          {/* Security Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-green-500/10 border border-green-500/30 rounded-lg p-4"
          >
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-green-500 mb-1">
                  Your Security Matters
                </h4>
                <p className="text-xs text-gray-300">
                  We use industry-standard encryption to protect your personal information and ensure safe gaming.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;