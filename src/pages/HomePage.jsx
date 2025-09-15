import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Sparkles, 
  Gift, 
  Shield, 
  Star, 
  TrendingUp,
  Users,
  Award,
  Play,
  ChevronRight,
  Zap
} from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';
import { getFeaturedGames, getPopularGames } from '@/data/games';
import { formatCurrency, formatCompactNumber } from '@/utils/helpers';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth();
  const featuredGames = getFeaturedGames();
  const popularGames = getPopularGames().slice(0, 6);

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500K+", label: "Active Players" },
    { icon: <Award className="w-6 h-6" />, value: "$50M+", label: "Prizes Won" },
    { icon: <Star className="w-6 h-6" />, value: "200+", label: "Premium Games" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Secure & Fair" },
  ];

  const features = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Daily Bonuses",
      description: "Log in every day to claim your free coins and exclusive rewards.",
      color: "text-gold-500"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "VIP Program",
      description: "Unlock exclusive games, higher limits, and personal account managers.",
      color: "text-royal-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Cashouts",
      description: "Convert your sweep coins to real cash prizes with instant processing.",
      color: "text-green-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Licensed and regulated gaming with bank-level security protection.",
      color: "text-blue-500"
    }
  ];

  const promotions = [
    {
      id: 1,
      title: "Welcome Package",
      subtitle: "100% Bonus on First Purchase",
      description: "Get 100,000 Gold Coins + 100 Sweep Coins",
      image: "/images/promotions/welcome.jpg",
      buttonText: "Claim Now",
      isNew: true
    },
    {
      id: 2,
      title: "Weekend Special",
      subtitle: "80% Extra Coins",
      description: "Valid this weekend only - Don't miss out!",
      image: "/images/promotions/weekend.jpg",
      buttonText: "Get Bonus",
      isLimited: true
    },
    {
      id: 3,
      title: "VIP Tournament",
      subtitle: "$10,000 Prize Pool",
      description: "Compete with other VIP players for huge prizes",
      image: "/images/promotions/tournament.jpg",
      buttonText: "Join Now",
      isExclusive: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-royal-900/20 via-casino-dark to-gold-900/20" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-gold-500/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-royal-500/10 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mb-8"
            >
              <Crown className="w-12 h-12 text-casino-dark" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="text-white">Welcome to </span>
              <span className="text-gradient-gold">Royal Sweeps</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the ultimate sweepstakes casino with premium games, 
              massive jackpots, and VIP treatment that makes you feel like royalty.
            </p>

            {!isAuthenticated ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link to="/register">
                  <Button 
                    variant="primary" 
                    size="xl"
                    leftIcon={<Crown className="w-5 h-5" />}
                    className="text-lg px-8 py-4"
                  >
                    Join the Kingdom
                  </Button>
                </Link>
                
                <Link to="/games">
                  <Button 
                    variant="outline" 
                    size="xl"
                    leftIcon={<Play className="w-5 h-5" />}
                    className="text-lg px-8 py-4"
                  >
                    Play Demo Games
                  </Button>
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <div className="balance-card inline-block">
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-400 mb-1">Gold Coins</p>
                      <p className="text-2xl font-bold text-gold-500">
                        {formatCurrency(user?.balance?.goldCoins || 0, 'gold')}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-400 mb-1">Sweep Coins</p>
                      <p className="text-2xl font-bold text-green-500">
                        {formatCurrency(user?.balance?.sweepCoins || 0, 'sweep')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/games">
                    <Button 
                      variant="primary" 
                      size="lg"
                      leftIcon={<Play className="w-5 h-5" />}
                    >
                      Play Games
                    </Button>
                  </Link>
                  
                  <Link to="/cashier">
                    <Button 
                      variant="outline" 
                      size="lg"
                      leftIcon={<Gift className="w-5 h-5" />}
                    >
                      Get More Coins
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-casino-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500/20 rounded-full text-gold-500 mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Choose <span className="text-gradient-gold">Royal Sweeps?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience premium gaming with features designed to give you the royal treatment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-casino-secondary mb-6 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 bg-casino-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                Featured <span className="text-gradient-gold">Games</span>
              </h2>
              <p className="text-gray-300">
                Discover our most popular and highest-rated games
              </p>
            </div>
            <Link to="/games">
              <Button variant="outline" rightIcon={<ChevronRight className="w-4 h-4" />}>
                View All Games
              </Button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="game-card"
              >
                <div className="aspect-video bg-casino-card rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="badge badge-gold">{game.provider}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm">{game.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-semibold text-lg">{game.name}</h3>
                    <p className="text-gray-300 text-sm">{game.maxWin} Max Win</p>
                  </div>
                  {game.isNew && (
                    <div className="absolute top-4 left-4">
                      <span className="badge bg-green-500 text-white">NEW</span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <p className="text-gray-300 text-sm mb-4">{game.description}</p>
                  <Link to={`/games/${game.id}`}>
                    <Button variant="primary" size="sm" fullWidth>
                      Play Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Exclusive <span className="text-gradient-royal">Promotions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Take advantage of our limited-time offers and boost your gaming experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card card-hover relative overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-royal-500/20 to-gold-500/20 rounded-lg mb-4 relative flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-gold-500" />
                  {promo.isNew && (
                    <div className="absolute top-2 right-2">
                      <span className="badge bg-green-500 text-white">NEW</span>
                    </div>
                  )}
                  {promo.isLimited && (
                    <div className="absolute top-2 right-2">
                      <span className="badge bg-red-500 text-white">LIMITED</span>
                    </div>
                  )}
                  {promo.isExclusive && (
                    <div className="absolute top-2 right-2">
                      <span className="badge bg-royal-500 text-white">VIP</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
                <p className="text-gold-500 font-semibold mb-3">{promo.subtitle}</p>
                <p className="text-gray-300 mb-6">{promo.description}</p>
                
                <Button variant="primary" size="md" fullWidth>
                  {promo.buttonText}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-20 bg-gradient-to-r from-royal-600/20 to-gold-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Crown className="w-16 h-16 text-gold-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Ready to Claim Your <span className="text-gradient-gold">Royal Throne?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of players who have already discovered the royal treatment. 
                Start with 100,000 Gold Coins + 100 Sweep Coins absolutely free!
              </p>
              
              <Link to="/register">
                <Button 
                  variant="primary" 
                  size="xl"
                  leftIcon={<Crown className="w-6 h-6" />}
                  className="text-lg px-12 py-4"
                >
                  Start Your Royal Journey
                </Button>
              </Link>
              
              <p className="text-sm text-gray-400 mt-4">
                No purchase necessary. Must be 18+ to play.
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;