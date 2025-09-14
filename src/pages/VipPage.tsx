import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Star, 
  Gift, 
  Zap,
  Shield,
  HeadphonesIcon,
  TrendingUp,
  Calendar,
  Award,
  Users,
  Clock,
  Target,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { VIP_LEVELS } from '@/utils/constants';
import { formatCurrency } from '@/utils/helpers';

const VipPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedLevel, setSelectedLevel] = useState(user?.vipLevel?.level || 1);

  const vipLevels = [
    {
      level: 1,
      name: 'Bronze',
      color: 'from-orange-600 to-orange-800',
      textColor: 'text-orange-500',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-500/30',
      requirement: 0,
      benefits: [
        'Basic customer support',
        'Standard withdrawal processing',
        'Access to all games',
        'Basic promotions',
      ],
      bonuses: {
        depositBonus: '5%',
        cashbackRate: '1%',
        monthlyBonus: 'None',
      }
    },
    {
      level: 2,
      name: 'Silver',
      color: 'from-gray-400 to-gray-600',
      textColor: 'text-gray-400',
      bgColor: 'bg-gray-400/20',
      borderColor: 'border-gray-400/30',
      requirement: 1000,
      benefits: [
        'Priority customer support',
        'Faster withdrawal processing',
        'Exclusive silver games',
        'Enhanced promotions',
        'Weekly cashback',
      ],
      bonuses: {
        depositBonus: '10%',
        cashbackRate: '2%',
        monthlyBonus: '10,000 GC',
      }
    },
    {
      level: 3,
      name: 'Gold',
      color: 'from-yellow-400 to-yellow-600',
      textColor: 'text-yellow-500',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30',
      requirement: 5000,
      benefits: [
        'VIP customer support',
        'Express withdrawal processing',
        'Exclusive gold games',
        'Premium promotions',
        'Daily cashback',
        'Personal account manager',
      ],
      bonuses: {
        depositBonus: '15%',
        cashbackRate: '3%',
        monthlyBonus: '25,000 GC',
      }
    },
    {
      level: 4,
      name: 'Platinum',
      color: 'from-slate-300 to-slate-500',
      textColor: 'text-slate-300',
      bgColor: 'bg-slate-300/20',
      borderColor: 'border-slate-300/30',
      requirement: 15000,
      benefits: [
        'Dedicated VIP support',
        'Instant withdrawal processing',
        'Exclusive platinum games',
        'VIP-only tournaments',
        'Higher cashback rates',
        'Birthday bonuses',
        'Exclusive events invitations',
      ],
      bonuses: {
        depositBonus: '20%',
        cashbackRate: '5%',
        monthlyBonus: '50,000 GC + 50 SC',
      }
    },
    {
      level: 5,
      name: 'Diamond',
      color: 'from-cyan-300 to-cyan-500',
      textColor: 'text-cyan-400',
      bgColor: 'bg-cyan-400/20',
      borderColor: 'border-cyan-400/30',
      requirement: 50000,
      benefits: [
        'White-glove VIP service',
        'Priority withdrawal processing',
        'Exclusive diamond games',
        'Private tournaments',
        'Maximum cashback rates',
        'Luxury gifts and experiences',
        'VIP events and trips',
        'Custom betting limits',
      ],
      bonuses: {
        depositBonus: '25%',
        cashbackRate: '8%',
        monthlyBonus: '100,000 GC + 100 SC',
      }
    },
    {
      level: 6,
      name: 'Royal',
      color: 'from-purple-400 to-purple-600',
      textColor: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
      borderColor: 'border-purple-400/30',
      requirement: 150000,
      benefits: [
        'Concierge-level service',
        'Instant everything',
        'Exclusive royal games',
        'Private gaming rooms',
        'Ultimate cashback rates',
        'Luxury lifestyle perks',
        'Private jet experiences',
        'Unlimited everything',
        'Royal treatment worldwide',
      ],
      bonuses: {
        depositBonus: '30%',
        cashbackRate: '10%',
        monthlyBonus: '250,000 GC + 250 SC',
      }
    },
  ];

  const currentLevel = vipLevels.find(level => level.level === (user?.vipLevel?.level || 1));
  const nextLevel = vipLevels.find(level => level.level === (user?.vipLevel?.level || 1) + 1);
  const selectedVipLevel = vipLevels.find(level => level.level === selectedLevel);

  const vipPerks = [
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: 'Dedicated Support',
      description: 'Get priority access to our VIP support team with faster response times and personalized assistance.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Faster Withdrawals',
      description: 'Enjoy expedited withdrawal processing with higher limits and priority queue placement.',
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Exclusive Bonuses',
      description: 'Access VIP-only promotions, higher deposit bonuses, and special birthday rewards.',
      color: 'text-gold-500',
      bgColor: 'bg-gold-500/20',
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'VIP Games',
      description: 'Play exclusive games available only to VIP members with higher RTPs and better features.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/20',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cashback Rewards',
      description: 'Earn higher cashback rates on your losses with automatic weekly or daily payouts.',
      color: 'text-royal-500',
      bgColor: 'bg-royal-500/20',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'VIP Events',
      description: 'Get invitations to exclusive tournaments, live events, and luxury experiences.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/20',
    },
  ];

  const upcomingRewards = [
    {
      date: '2024-02-05',
      title: 'Weekly Cashback',
      amount: '2,500 GC',
      type: 'cashback',
    },
    {
      date: '2024-02-10',
      title: 'Monthly VIP Bonus',
      amount: '25,000 GC',
      type: 'bonus',
    },
    {
      date: '2024-02-15',
      title: 'VIP Tournament Entry',
      amount: 'Free Entry',
      type: 'tournament',
    },
    {
      date: '2024-02-20',
      title: 'Birthday Bonus',
      amount: '50,000 GC + 50 SC',
      type: 'special',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full mb-6"
          >
            <Crown className="w-10 h-10 text-casino-dark" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            VIP <span className="text-gradient-gold">Royalty Program</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the ultimate in luxury gaming with exclusive benefits, personalized service, and royal treatment.
          </p>
        </motion.div>

        {/* Current VIP Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className={`card ${currentLevel?.borderColor} relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${currentLevel?.color} opacity-10`} />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-full ${currentLevel?.bgColor} flex items-center justify-center`}>
                    <Crown className={`w-8 h-8 ${currentLevel?.textColor}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {currentLevel?.name} VIP
                    </h2>
                    <p className="text-gray-300">Current Status</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-white">
                    Level {currentLevel?.level}
                  </div>
                  <div className={`text-sm ${currentLevel?.textColor}`}>
                    Elite Member
                  </div>
                </div>
              </div>

              {/* Progress to Next Level */}
              {nextLevel && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-300">Progress to {nextLevel.name}</span>
                    <span className="text-white font-semibold">
                      {user?.vipLevel?.progress || 0}%
                    </span>
                  </div>
                  
                  <div className="w-full bg-casino-secondary rounded-full h-3 mb-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${nextLevel.color} transition-all duration-500`}
                      style={{ width: `${user?.vipLevel?.progress || 0}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>
                      ${((user?.vipLevel?.progress || 0) / 100 * nextLevel.requirement).toLocaleString()} spent
                    </span>
                    <span>
                      ${(nextLevel.requirement - ((user?.vipLevel?.progress || 0) / 100 * nextLevel.requirement)).toLocaleString()} to go
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* VIP Perks Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            VIP <span className="text-gradient-gold">Benefits</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vipPerks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="card card-hover text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${perk.bgColor} ${perk.color} mb-4`}>
                  {perk.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{perk.title}</h3>
                <p className="text-gray-300 leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VIP Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            VIP <span className="text-gradient-royal">Levels</span>
          </h2>

          {/* Level Selector */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-casino-card border border-casino-border rounded-lg p-1">
              {vipLevels.map((level) => (
                <button
                  key={level.level}
                  onClick={() => setSelectedLevel(level.level)}
                  className={`px-4 py-2 rounded-md font-medium transition-all ${
                    selectedLevel === level.level
                      ? `bg-gradient-to-r ${level.color} text-white`
                      : `text-gray-300 hover:text-white hover:bg-casino-secondary`
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Level Details */}
          {selectedVipLevel && (
            <motion.div
              key={selectedLevel}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`card ${selectedVipLevel.borderColor} relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${selectedVipLevel.color} opacity-10`} />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8">
                {/* Level Info */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-full ${selectedVipLevel.bgColor} flex items-center justify-center`}>
                      <Crown className={`w-8 h-8 ${selectedVipLevel.textColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {selectedVipLevel.name} VIP
                      </h3>
                      <p className={`${selectedVipLevel.textColor} font-semibold`}>
                        Level {selectedVipLevel.level}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {selectedVipLevel.requirement === 0 
                          ? 'Starting level' 
                          : `Requires ${selectedVipLevel.requirement.toLocaleString()} in purchases`
                        }
                      </p>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Benefits Include:</h4>
                    <ul className="space-y-2">
                      {selectedVipLevel.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${selectedVipLevel.color.replace('from-', 'bg-').replace(/to-.*/, '')}`} />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bonuses */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Bonus Rates:</h4>
                  
                  <div className="space-y-4">
                    <div className={`${selectedVipLevel.bgColor} ${selectedVipLevel.borderColor} border rounded-lg p-4`}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Deposit Bonus</span>
                        <span className={`font-bold ${selectedVipLevel.textColor}`}>
                          {selectedVipLevel.bonuses.depositBonus}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`${selectedVipLevel.bgColor} ${selectedVipLevel.borderColor} border rounded-lg p-4`}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Cashback Rate</span>
                        <span className={`font-bold ${selectedVipLevel.textColor}`}>
                          {selectedVipLevel.bonuses.cashbackRate}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`${selectedVipLevel.bgColor} ${selectedVipLevel.borderColor} border rounded-lg p-4`}>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Monthly Bonus</span>
                        <span className={`font-bold ${selectedVipLevel.textColor}`}>
                          {selectedVipLevel.bonuses.monthlyBonus}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Upgrade Button */}
                  {selectedLevel > (user?.vipLevel?.level || 1) && (
                    <div className="mt-6">
                      <Button
                        variant="primary"
                        size="lg"
                        fullWidth
                        leftIcon={<Crown className="w-5 h-5" />}
                      >
                        Reach {selectedVipLevel.name} Level
                      </Button>
                      <p className="text-center text-sm text-gray-400 mt-2">
                        Spend ${(selectedVipLevel.requirement - (user?.vipLevel?.progress || 0)).toLocaleString()} more to unlock
                      </p>
                    </div>
                  )}
                  
                  {selectedLevel === (user?.vipLevel?.level || 1) && (
                    <div className="mt-6">
                      <div className={`text-center p-4 rounded-lg ${selectedVipLevel.bgColor} ${selectedVipLevel.borderColor} border`}>
                        <Star className={`w-6 h-6 ${selectedVipLevel.textColor} mx-auto mb-2`} />
                        <span className="text-white font-semibold">Current Level</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Upcoming Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upcoming Rewards */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Calendar className="w-6 h-6 text-gold-500 mr-2" />
                Upcoming Rewards
              </h3>
              
              <div className="space-y-4">
                {upcomingRewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-casino-secondary rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        reward.type === 'cashback' ? 'bg-green-500/20 text-green-500' :
                        reward.type === 'bonus' ? 'bg-gold-500/20 text-gold-500' :
                        reward.type === 'tournament' ? 'bg-blue-500/20 text-blue-500' :
                        'bg-purple-500/20 text-purple-500'
                      }`}>
                        {reward.type === 'cashback' && <TrendingUp className="w-5 h-5" />}
                        {reward.type === 'bonus' && <Gift className="w-5 h-5" />}
                        {reward.type === 'tournament' && <Trophy className="w-5 h-5" />}
                        {reward.type === 'special' && <Sparkles className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{reward.title}</div>
                        <div className="text-sm text-gray-400">{reward.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gold-500">{reward.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VIP Statistics */}
            <div className="card">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-royal-500 mr-2" />
                Your VIP Stats
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-casino-secondary rounded-lg">
                    <div className="text-2xl font-bold text-gold-500">
                      ${((user?.vipLevel?.progress || 0) * 1000).toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-400">Total Spent</div>
                  </div>
                  <div className="text-center p-4 bg-casino-secondary rounded-lg">
                    <div className="text-2xl font-bold text-green-500">
                      {formatCurrency(85000, 'sweep')}
                    </div>
                    <div className="text-sm text-gray-400">Cashback Earned</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-casino-secondary rounded-lg">
                    <div className="text-2xl font-bold text-royal-500">156</div>
                    <div className="text-sm text-gray-400">Days as VIP</div>
                  </div>
                  <div className="text-center p-4 bg-casino-secondary rounded-lg">
                    <div className="text-2xl font-bold text-blue-500">12</div>
                    <div className="text-sm text-gray-400">VIP Bonuses</div>
                  </div>
                </div>

                <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white">Next Milestone</div>
                      <div className="text-sm text-gray-400">
                        {nextLevel ? `${nextLevel.name} VIP` : 'Maximum Level Reached'}
                      </div>
                    </div>
                    <div className="text-right">
                      {nextLevel ? (
                        <>
                          <div className="text-gold-500 font-bold">
                            ${(nextLevel.requirement - ((user?.vipLevel?.progress || 0) / 100 * nextLevel.requirement)).toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">to go</div>
                        </>
                      ) : (
                        <Crown className="w-8 h-8 text-gold-500" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VIP Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card bg-gradient-to-r from-royal-500/10 to-gold-500/10 border border-gold-500/30"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeadphonesIcon className="w-8 h-8 text-casino-dark" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Need VIP Assistance?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our dedicated VIP support team is available 24/7 to assist you with any questions 
              or special requests. Experience the royal treatment you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<HeadphonesIcon className="w-5 h-5" />}
              >
                Contact VIP Support
              </Button>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Users className="w-5 h-5" />}
              >
                Request Account Manager
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gold-500/20">
              <div className="text-center">
                <Clock className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <div className="font-semibold text-white">24/7 Support</div>
                <div className="text-sm text-gray-400">Always available</div>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <div className="font-semibold text-white">Priority Response</div>
                <div className="text-sm text-gray-400"> 5 minutes</div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                <div className="font-semibold text-white">Dedicated Team</div>
                <div className="text-sm text-gray-400">VIP specialists</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VipPage;