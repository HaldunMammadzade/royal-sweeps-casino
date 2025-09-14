import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gift, 
  Crown, 
  Calendar, 
  Clock, 
  Star,
  TrendingUp,
  Zap,
  Trophy,
  Target,
  Users,
  CheckCircle,
  Timer
} from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { formatCurrency, formatDate } from '@/utils/helpers';

const PromotionsPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'active' | 'completed' | 'tournaments'>('active');

  const tabs = [
    { id: 'active', label: 'Active Promotions', icon: <Gift className="w-5 h-5" /> },
    { id: 'tournaments', label: 'Tournaments', icon: <Trophy className="w-5 h-5" /> },
    { id: 'completed', label: 'Completed', icon: <CheckCircle className="w-5 h-5" /> },
  ];

  const activePromotions = [
    {
      id: 1,
      title: 'Welcome Bonus Package',
      subtitle: '100% Match + Free Coins',
      description: 'Get 100,000 Gold Coins + 100 Sweep Coins when you make your first purchase',
      image: '/images/promotions/welcome.jpg',
      type: 'bonus',
      value: '100% Match',
      validUntil: '2024-12-31',
      requirements: ['First purchase only', 'Minimum $10 purchase'],
      claimed: false,
      featured: true,
    },
    {
      id: 2,
      title: 'Daily Login Bonus',
      subtitle: 'Free Coins Every Day',
      description: 'Log in daily to receive increasing rewards. Day 7 gives massive bonus!',
      type: 'daily',
      value: 'Up to 50,000 GC',
      currentStreak: 3,
      nextReward: '10,000 GC',
      requirements: ['Log in daily', 'Claim within 24 hours'],
      claimed: true,
      canClaim: true,
    },
    {
      id: 3,
      title: 'Weekend Warrior',
      subtitle: '80% Extra Coins',
      description: 'Get 80% bonus coins on all purchases made during weekends',
      type: 'weekend',
      value: '80% Bonus',
      validUntil: '2024-02-11',
      requirements: ['Saturday & Sunday only', 'All purchase amounts'],
      claimed: false,
      isLimited: true,
    },
    {
      id: 4,
      title: 'High Roller Special',
      subtitle: 'VIP Exclusive Offer',
      description: 'Spend $100+ and get exclusive VIP treatment with personal manager',
      type: 'vip',
      value: 'VIP Access',
      requirements: ['Minimum $100 purchase', 'Gold VIP or higher'],
      claimed: false,
      vipOnly: true,
    },
    {
      id: 5,
      title: 'Spin & Win Challenge',
      subtitle: 'Weekly Mission',
      description: 'Complete 1000 spins this week and unlock mystery prize',
      type: 'challenge',
      value: 'Mystery Prize',
      progress: 450,
      target: 1000,
      validUntil: '2024-02-05',
      requirements: ['Complete before deadline', 'Any slot game counts'],
      claimed: false,
    },
  ];

  const tournaments = [
    {
      id: 1,
      name: 'Royal Slots Championship',
      description: 'Compete for the biggest wins in our exclusive slot tournament',
      prizePool: 100000,
      entryFee: 0,
      participants: 2847,
      maxParticipants: 5000,
      startTime: '2024-02-01T18:00:00Z',
      endTime: '2024-02-07T23:59:59Z',
      status: 'active',
      myRank: 156,
      myScore: 125000,
      leaderboard: [
        { rank: 1, player: 'SlotKing777', score: 2500000, prize: 25000 },
        { rank: 2, player: 'LuckyLady88', score: 2200000, prize: 15000 },
        { rank: 3, player: 'BigWinner', score: 1950000, prize: 10000 },
        { rank: 4, player: 'CasinoAce', score: 1800000, prize: 5000 },
        { rank: 5, player: 'GoldRush', score: 1650000, prize: 3000 },
      ]
    },
    {
      id: 2,
      name: 'Weekend Warriors',
      description: 'Short but intense weekend tournament with big rewards',
      prizePool: 50000,
      entryFee: 1000,
      participants: 856,
      maxParticipants: 1000,
      startTime: '2024-02-10T00:00:00Z',
      endTime: '2024-02-11T23:59:59Z',
      status: 'upcoming',
    },
    {
      id: 3,
      name: 'Monthly Mega Tournament',
      description: 'The biggest tournament of the month with massive prizes',
      prizePool: 500000,
      entryFee: 5000,
      participants: 156,
      maxParticipants: 500,
      startTime: '2024-02-15T12:00:00Z',
      endTime: '2024-02-28T23:59:59Z',
      status: 'upcoming',
      vipOnly: true,
    },
  ];

  const completedPromotions = [
    {
      id: 1,
      title: 'January Welcome Boost',
      description: 'Special new year promotion',
      completedDate: '2024-01-31',
      reward: '75,000 GC + 75 SC',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Holiday Special',
      description: 'Christmas and New Year celebration',
      completedDate: '2024-01-02',
      reward: '100,000 GC',
      status: 'completed',
    },
  ];

  const handleClaimBonus = (promotionId: number) => {
    // Handle bonus claiming logic
    console.log('Claiming promotion:', promotionId);
  };

  const handleJoinTournament = (tournamentId: number) => {
    // Handle tournament joining logic
    console.log('Joining tournament:', tournamentId);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            <span className="text-gradient-gold">Promotions</span> & Rewards
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover exclusive bonuses, exciting tournaments, and daily rewards designed to enhance your gaming experience.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="card text-center">
            <Gift className="w-8 h-8 text-gold-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">5</div>
            <div className="text-sm text-gray-400">Active Promotions</div>
          </div>
          <div className="card text-center">
            <Trophy className="w-8 h-8 text-royal-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">3</div>
            <div className="text-sm text-gray-400">Live Tournaments</div>
          </div>
          <div className="card text-center">
            <Star className="w-8 h-8 text-gold-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">12</div>
            <div className="text-sm text-gray-400">Rewards Earned</div>
          </div>
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">#156</div>
            <div className="text-sm text-gray-400">Tournament Rank</div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-casino-card border border-casino-border rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-md font-medium transition-all flex-1 justify-center ${
                  activeTab === tab.id
                    ? 'bg-gold-500 text-casino-dark'
                    : 'text-gray-300 hover:text-white hover:bg-casino-secondary'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Promotions Tab */}
        {activeTab === 'active' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {activePromotions.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`card relative overflow-hidden ${
                  promo.featured ? 'border-gold-500 shadow-lg shadow-gold-500/20' : ''
                }`}
              >
                {/* Badges */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  {promo.featured && (
                    <span className="badge bg-gold-500 text-casino-dark">FEATURED</span>
                  )}
                  {promo.isLimited && (
                    <span className="badge bg-red-500 text-white">LIMITED TIME</span>
                  )}
                  {promo.vipOnly && (
                    <span className="badge bg-royal-500 text-white">VIP ONLY</span>
                  )}
                  {promo.claimed && (
                    <span className="badge bg-green-500 text-white">CLAIMED</span>
                  )}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Promotion Image */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gold-500/20 to-royal-500/20 rounded-lg flex items-center justify-center">
                      {promo.type === 'bonus' && <Gift className="w-16 h-16 text-gold-500" />}
                      {promo.type === 'daily' && <Calendar className="w-16 h-16 text-green-500" />}
                      {promo.type === 'weekend' && <Clock className="w-16 h-16 text-blue-500" />}
                      {promo.type === 'vip' && <Crown className="w-16 h-16 text-royal-500" />}
                      {promo.type === 'challenge' && <Target className="w-16 h-16 text-orange-500" />}
                    </div>
                    
                    {promo.validUntil && (
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="bg-black/70 rounded px-2 py-1 text-xs text-white text-center">
                          <Timer className="w-3 h-3 inline mr-1" />
                          Ends {formatDate(promo.validUntil)}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Promotion Details */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{promo.title}</h3>
                        <p className="text-gold-500 font-semibold mb-2">{promo.subtitle}</p>
                        <p className="text-gray-300">{promo.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-gold-500">{promo.value}</div>
                        {promo.currentStreak && (
                          <div className="text-sm text-gray-400">Day {promo.currentStreak}/7</div>
                        )}
                      </div>
                    </div>

                    {/* Progress Bar for Challenges */}
                    {promo.progress && promo.target && (
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{promo.progress}/{promo.target}</span>
                        </div>
                        <div className="w-full bg-casino-secondary rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-gold-500 to-gold-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(promo.progress / promo.target) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Requirements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Requirements:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {promo.requirements.map((req, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="flex space-x-3">
                      {promo.claimed ? (
                        promo.canClaim ? (
                          <Button
                            variant="primary"
                            onClick={() => handleClaimBonus(promo.id)}
                            leftIcon={<Gift className="w-4 h-4" />}
                          >
                            Claim Reward
                          </Button>
                        ) : (
                          <Button variant="secondary" disabled>
                            Already Claimed
                          </Button>
                        )
                      ) : (
                        <Button
                          variant="primary"
                          onClick={() => handleClaimBonus(promo.id)}
                          leftIcon={<Star className="w-4 h-4" />}
                        >
                          Activate Promotion
                        </Button>
                      )}
                      
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Tournaments Tab */}
        {activeTab === 'tournaments' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {tournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Tournament Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
                        <p className="text-gray-300 mb-4">{tournament.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <div className="text-gray-400">Prize Pool</div>
                            <div className="text-gold-500 font-bold">
                              {formatCurrency(tournament.prizePool, 'sweep')}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400">Entry Fee</div>
                            <div className="text-white font-bold">
                              {tournament.entryFee === 0 ? 'FREE' : formatCurrency(tournament.entryFee, 'gold')}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400">Participants</div>
                            <div className="text-white font-bold">
                              {tournament.participants}/{tournament.maxParticipants}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400">Status</div>
                            <div className={`font-bold capitalize ${
                              tournament.status === 'active' ? 'text-green-500' :
                              tournament.status === 'upcoming' ? 'text-blue-500' : 'text-gray-500'
                            }`}>
                              {tournament.status}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {tournament.vipOnly && (
                        <span className="badge bg-royal-500 text-white">VIP ONLY</span>
                      )}
                    </div>

                    {/* Tournament Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Participants</span>
                        <span className="text-white">{tournament.participants}/{tournament.maxParticipants}</span>
                      </div>
                      <div className="w-full bg-casino-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-royal-500 to-royal-400 h-2 rounded-full"
                          style={{ width: `${(tournament.participants / tournament.maxParticipants) * 100}%` }}
                        />
                      </div>
                    </div>

                    {/* Time Information */}
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-gray-400">Starts</div>
                        <div className="text-white">{formatDate(tournament.startTime)}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Ends</div>
                        <div className="text-white">{formatDate(tournament.endTime)}</div>
                      </div>
                    </div>

                    {/* My Ranking (if participating) */}
                    {tournament.myRank && (
                      <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-3 mb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-400">My Ranking</div>
                            <div className="text-gold-500 font-bold">#{tournament.myRank}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-400">My Score</div>
                            <div className="text-white font-bold">
                              {formatCurrency(tournament.myScore || 0, 'gold')}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <div className="flex space-x-3">
                      {tournament.status === 'active' ? (
                        tournament.myRank ? (
                          <Button variant="outline" disabled>
                            <Trophy className="w-4 h-4 mr-2" />
                            Participating
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            onClick={() => handleJoinTournament(tournament.id)}
                            leftIcon={<Trophy className="w-4 h-4" />}
                          >
                            Join Tournament
                          </Button>
                        )
                      ) : tournament.status === 'upcoming' ? (
                        <Button
                          variant="secondary"
                          onClick={() => handleJoinTournament(tournament.id)}
                          leftIcon={<Clock className="w-4 h-4" />}
                        >
                          Register Now
                        </Button>
                      ) : (
                        <Button variant="ghost" disabled>
                          Tournament Ended
                        </Button>
                      )}
                      
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>

                  {/* Leaderboard */}
                  <div>
                    {tournament.leaderboard && (
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                          <Trophy className="w-5 h-5 text-gold-500 mr-2" />
                          Leaderboard
                        </h4>
                        
                        <div className="space-y-2">
                          {tournament.leaderboard.map((entry) => (
                            <div
                              key={entry.rank}
                              className={`flex items-center justify-between p-3 rounded-lg ${
                                entry.rank <= 3 ? 'bg-gold-500/10 border border-gold-500/30' : 'bg-casino-secondary'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                  entry.rank === 1 ? 'bg-gold-500 text-casino-dark' :
                                  entry.rank === 2 ? 'bg-gray-400 text-casino-dark' :
                                  entry.rank === 3 ? 'bg-orange-500 text-casino-dark' :
                                  'bg-casino-border text-gray-300'
                                }`}>
                                  {entry.rank}
                                </div>
                                <div>
                                  <div className="text-white font-medium text-sm">{entry.player}</div>
                                  <div className="text-gray-400 text-xs">
                                    {formatCurrency(entry.score, 'gold')}
                                  </div>
                                </div>
                              </div>
                              <div className="text-green-500 font-bold text-sm">
                                {formatCurrency(entry.prize, 'sweep')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Completed Promotions Tab */}
        {activeTab === 'completed' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {completedPromotions.length === 0 ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No completed promotions</h3>
                <p className="text-gray-400">Your completed promotions will appear here</p>
              </div>
            ) : (
              completedPromotions.map((promo, index) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{promo.title}</h3>
                        <p className="text-gray-300">{promo.description}</p>
                        <p className="text-sm text-gray-400">Completed on {formatDate(promo.completedDate)}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-500">{promo.reward}</div>
                      <div className="text-sm text-gray-400">Reward Received</div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        )}

        {/* Promotion Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-4">Promotion Terms & Conditions</h2>
            <div className="text-sm text-gray-300 space-y-2 leading-relaxed">
              <p>• All promotions are subject to our terms and conditions</p>
              <p>• Players must be 18+ and have a verified account to participate</p>
              <p>• Promotion abuse or fraud will result in account termination</p>
              <p>• Bonuses expire after 30 days unless otherwise stated</p>
              <p>• Tournament prizes are distributed within 24-48 hours of completion</p>
              <p>• Management reserves the right to modify or cancel promotions</p>
              <p>• Responsible gambling limits apply to all promotions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PromotionsPage;