import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  animated = true,
  className,
  disabled,
  ...props
}) => {
  const baseClasses = 'btn inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-casino-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

  const variantClasses = {
    primary: 'btn-primary focus:ring-gold-500',
    secondary: 'btn-secondary focus:ring-casino-border',
    outline: 'btn-outline focus:ring-gold-500',
    ghost: 'btn-ghost focus:ring-gray-500',
    danger: 'btn-danger focus:ring-red-500',
    success: 'btn-success focus:ring-green-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg',
    xl: 'px-8 py-4 text-lg rounded-xl',
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className
  );

  const ButtonContent = () => (
    <>
      {loading && (
        <div className="spinner w-4 h-4 mr-2" />
      )}
      {!loading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!loading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </>
  );

  if (animated && !disabled && !loading) {
    return (
      <motion.button
        className={buttonClasses}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        <ButtonContent />
      </motion.button>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...(props)}
    >
      <ButtonContent />
    </button>
  );
};

export default Button;