import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  Users,
  Star,
  Crown,
  Target,
  Zap,
  Gift,
  TrendingUp,
  Award,
  Timer
} from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { formatCurrency, formatDate } from '@/utils/helpers';

const TournamentsPage: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'active' | 'upcoming' | 'completed'>('active');

  const tabs = [
    { id: 'active', label: 'Active', icon: <Zap className="w-5 h-5" /> },
    { id: 'upcoming', label: 'Upcoming', icon: <Clock className="w-5 h-5" /> },
    { id: 'completed', label: 'Completed', icon: <Award className="w-5 h-5" /> },
  ];

  const activeTournaments = [
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
      ]
    },
    {
      id: 2,
      name: 'Golden Spins Challenge',
      description: 'Daily tournament with quick rounds and instant prizes',
      prizePool: 25000,
      entryFee: 1000,
      participants: 543,
      maxParticipants: 1000,
      startTime: '2024-02-14T12:00:00Z',
      endTime: '2024-02-14T23:59:59Z',
      status: 'active',
    },
  ];

  const upcomingTournaments = [
    {
      id: 3,
      name: 'Weekend Warriors',
      description: 'Short but intense weekend tournament with big rewards',
      prizePool: 50000,
      entryFee: 1000,
      participants: 0,
      maxParticipants: 1000,
      startTime: '2024-02-17T00:00:00Z',
      endTime: '2024-02-18T23:59:59Z',
      status: 'upcoming',
    },
    {
      id: 4,
      name: 'Monthly Mega Tournament',
      description: 'The biggest tournament of the month with massive prizes',
      prizePool: 500000,
      entryFee: 5000,
      participants: 0,
      maxParticipants: 500,
      startTime: '2024-02-25T12:00:00Z',
      endTime: '2024-02-28T23:59:59Z',
      status: 'upcoming',
      vipOnly: true,
    },
  ];

  const completedTournaments = [
    {
      id: 5,
      name: 'Valentine Special',
      description: 'Love was in the air and prizes were won!',
      prizePool: 75000,
      entryFee: 2000,
      participants: 1200,
      maxParticipants: 1500,
      endTime: '2024-02-14T23:59:59Z',
      status: 'completed',
      myRank: 45,
      myPrize: 1500,
    },
  ];

  const handleJoinTournament = (tournamentId: number) => {
    console.log('Joining tournament:', tournamentId);
  };

  const currentTournaments = 
    activeTab === 'active' ? activeTournaments :
    activeTab === 'upcoming' ? upcomingTournaments :
    completedTournaments;

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
            <span className="text-gradient-gold">Tournaments</span> & Competitions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Compete against players worldwide in exciting tournaments and climb the leaderboards for amazing prizes.
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
            <Trophy className="w-8 h-8 text-gold-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">12</div>
            <div className="text-sm text-gray-400">Tournaments Won</div>
          </div>
          <div className="card text-center">
            <Target className="w-8 h-8 text-royal-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">#156</div>
            <div className="text-sm text-gray-400">Current Rank</div>
          </div>
          <div className="card text-center">
            <Star className="w-8 h-8 text-gold-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">{formatCurrency(85000, 'sweep')}</div>
            <div className="text-sm text-gray-400">Total Winnings</div>
          </div>
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold text-white">89%</div>
            <div className="text-sm text-gray-400">Win Rate</div>
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
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tournaments List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {currentTournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card relative overflow-hidden"
            >
              {tournament.vipOnly && (
                <div className="absolute top-4 right-4">
                  <span className="badge bg-royal-500 text-white">VIP ONLY</span>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-6">
                {/* Tournament Info */}
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
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
                  </div>

                  {/* Time Information */}
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    {tournament.startTime && (
                      <div>
                        <div className="text-gray-400">
                          {tournament.status === 'completed' ? 'Started' : 'Starts'}
                        </div>
                        <div className="text-white">{formatDate(tournament.startTime)}</div>
                      </div>
                    )}
                    <div>
                      <div className="text-gray-400">
                        {tournament.status === 'completed' ? 'Ended' : 'Ends'}
                      </div>
                      <div className="text-white">{formatDate(tournament.endTime)}</div>
                    </div>
                  </div>

                  {/* My Performance */}
                  {tournament.myRank && (
                    <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400">My Ranking</div>
                          <div className="text-gold-500 font-bold">#{tournament.myRank}</div>
                        </div>
                        {tournament.myScore && (
                          <div>
                            <div className="text-sm text-gray-400">My Score</div>
                            <div className="text-white font-bold">
                              {formatCurrency(tournament.myScore, 'gold')}
                            </div>
                          </div>
                        )}
                        {tournament.myPrize && (
                          <div>
                            <div className="text-sm text-gray-400">Prize Won</div>
                            <div className="text-green-500 font-bold">
                              {formatCurrency(tournament.myPrize, 'sweep')}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Participants</span>
                      <span className="text-white">{tournament.participants}/{tournament.maxParticipants}</span>
                    </div>
                    <div className="w-full bg-casino-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-royal-500 to-royal-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(tournament.participants / tournament.maxParticipants) * 100}%` }}
                      />
                    </div>
                  </div>

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

          {currentTournaments.length === 0 && (
            <div className="text-center py-12">
              <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                No {activeTab} tournaments
              </h3>
              <p className="text-gray-400">
                {activeTab === 'active' && 'There are no active tournaments at the moment.'}
                {activeTab === 'upcoming' && 'No upcoming tournaments scheduled yet.'}
                {activeTab === 'completed' && 'No completed tournaments to show.'}
              </p>
            </div>
          )}
        </motion.div>

        {/* Tournament Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="card">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <Award className="w-6 h-6 text-royal-500 mr-2" />
              Tournament Rules & Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">General Rules</h3>
                <ul className="space-y-1">
                  <li>• Players must be 18+ and have a verified account</li>
                  <li>• One entry per player per tournament</li>
                  <li>• Tournament abuse will result in disqualification</li>
                  <li>• Prizes are distributed within 24-48 hours</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">Scoring System</h3>
                <ul className="space-y-1">
                  <li>• Points are based on total winnings</li>
                  <li>• Minimum bet requirements may apply</li>
                  <li>• Final rankings determined at tournament end</li>
                  <li>• Ties are broken by earliest achievement time</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TournamentsPage;
