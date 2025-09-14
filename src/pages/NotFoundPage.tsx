import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft, Gamepad2 } from 'lucide-react';
import Button from '@/components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-casino-dark">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-display font-bold text-gradient-gold mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full" />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto">
              Oops! The page you're looking for seems to have vanished into the casino void. 
              Don't worry, there are plenty of other exciting places to explore!
            </p>
          </motion.div>

          {/* Animated Casino Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8"
          >
            <div className="flex justify-center space-x-4 text-4xl mb-6">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎰
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                🎲
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                🃏
              </motion.span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Home className="w-5 h-5" />}
              >
                Go Home
              </Button>
            </Link>

            <Link to="/games">
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Gamepad2 className="w-5 h-5" />}
              >
                Browse Games
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.history.back()}
              leftIcon={<ArrowLeft className="w-5 h-5" />}
            >
              Go Back
            </Button>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 p-6 bg-casino-card border border-casino-border rounded-xl"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Search className="w-5 h-5 text-gold-500" />
              <h3 className="text-lg font-semibold text-white">Looking for something specific?</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Try searching for games, promotions, or visit our support page for help.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link to="/games" className="text-gold-500 hover:text-gold-400 text-sm">
                All Games
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/promotions" className="text-gold-500 hover:text-gold-400 text-sm">
                Promotions
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/vip" className="text-gold-500 hover:text-gold-400 text-sm">
                VIP Program
              </Link>
              <span className="text-gray-500">•</span>
              <Link to="/support" className="text-gold-500 hover:text-gold-400 text-sm">
                Support
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;