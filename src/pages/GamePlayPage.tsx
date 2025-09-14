import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Volume2, 
  VolumeX,
  Maximize,
  Heart,
  Share2,
  Info
} from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { getGameById } from '@/data/games';
import { SLOT_SYMBOLS } from '@/utils/constants';
import { formatCurrency, randomChoice } from '@/utils/helpers';
import toast from 'react-hot-toast';

const GamePlayPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const { user, updateBalance } = useAuth();
  
  const [game] = useState(() => getGameById(gameId || ''));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [betAmount, setBetAmount] = useState(100);
  const [autoSpin, setAutoSpin] = useState(false);
  const [autoSpinCount, setAutoSpinCount] = useState(0);
  
  // Game state
  const [reels, setReels] = useState([
    [SLOT_SYMBOLS.CHERRY, SLOT_SYMBOLS.LEMON, SLOT_SYMBOLS.ORANGE],
    [SLOT_SYMBOLS.LEMON, SLOT_SYMBOLS.CHERRY, SLOT_SYMBOLS.GRAPE],
    [SLOT_SYMBOLS.ORANGE, SLOT_SYMBOLS.WATERMELON, SLOT_SYMBOLS.CHERRY],
    [SLOT_SYMBOLS.GRAPE, SLOT_SYMBOLS.BELL, SLOT_SYMBOLS.LEMON],
    [SLOT_SYMBOLS.WATERMELON, SLOT_SYMBOLS.SEVEN, SLOT_SYMBOLS.ORANGE],
  ]);
  
  const [lastWin, setLastWin] = useState(0);
  const [totalWin, setTotalWin] = useState(0);

  const symbols = Object.values(SLOT_SYMBOLS);
  const betOptions = [10, 25, 50, 100, 250, 500, 1000];

  useEffect(() => {
    if (!game) {
      navigate('/games');
      return;
    }
  }, [game, navigate]);

  const generateRandomReel = () => {
    return [
      randomChoice(symbols),
      randomChoice(symbols),
      randomChoice(symbols),
    ];
  };

  const checkWin = (newReels: string[][]) => {
    let winAmount = 0;
    const middleRow = newReels.map(reel => reel[1]);
    
    // Check for matching symbols in middle row
    const symbolCounts: Record<string, number> = {};
    middleRow.forEach(symbol => {
      symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1;
    });
    
    Object.entries(symbolCounts).forEach(([symbol, count]) => {
      if (count >= 3) {
        // Simple win calculation - 3+ matching symbols
        const multiplier = count === 3 ? 2 : count === 4 ? 5 : 10;
        winAmount += betAmount * multiplier;
      }
    });
    
    return winAmount;
  };

  const handleSpin = async () => {
    if (!user || user.balance.goldCoins < betAmount) {
      toast.error('Insufficient balance!');
      return;
    }

    setIsSpinning(true);
    setLastWin(0);

    // Deduct bet amount
    updateBalance({
      goldCoins: user.balance.goldCoins - betAmount,
    });

    // Simulate spinning animation
    setTimeout(() => {
      const newReels = Array.from({ length: 5 }, generateRandomReel);
      setReels(newReels);
      
      const winAmount = checkWin(newReels);
      setLastWin(winAmount);
      setTotalWin(prev => prev + winAmount);
      
      if (winAmount > 0) {
        updateBalance({
          goldCoins: (user.balance.goldCoins - betAmount) + winAmount,
        });
        toast.success(`You won ${formatCurrency(winAmount, 'gold')}!`);
      }
      
      setIsSpinning(false);
      
      // Auto spin logic
      if (autoSpin && autoSpinCount > 1) {
        setAutoSpinCount(prev => prev - 1);
        setTimeout(handleSpin, 1000);
      } else if (autoSpinCount <= 1) {
        setAutoSpin(false);
        setAutoSpinCount(0);
      }
    }, 2000);
  };

  const handleAutoSpin = (count: number) => {
    setAutoSpin(true);
    setAutoSpinCount(count);
    handleSpin();
  };

  const stopAutoSpin = () => {
    setAutoSpin(false);
    setAutoSpinCount(0);
  };

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Game not found</h2>
          <Button onClick={() => navigate('/games')}>
            Back to Games
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-dark to-casino-secondary">
      {/* Header */}
      <div className="bg-casino-card border-b border-casino-border px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/games')}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Games
            </Button>
            
            <div>
              <h1 className="text-xl font-bold text-white">{game.name}</h1>
              <p className="text-sm text-gray-400">{game.provider}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSoundEnabled(!soundEnabled)}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
            
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              <Maximize className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Game Area */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="slot-machine"
            >
              {/* Balance Display */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Balance</div>
                    <div className="text-xl font-bold text-gold-500">
                      {formatCurrency(user?.balance?.goldCoins || 0, 'gold')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Last Win</div>
                    <div className="text-xl font-bold text-green-500">
                      {formatCurrency(lastWin, 'gold')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Total Won</div>
                    <div className="text-xl font-bold text-royal-500">
                      {formatCurrency(totalWin, 'gold')}
                    </div>
                  </div>
                </div>
                
                {autoSpin && (
                  <div className="text-center">
                    <div className="text-sm text-gray-400">Auto Spins Left</div>
                    <div className="text-xl font-bold text-blue-500">{autoSpinCount}</div>
                  </div>
                )}
              </div>

              {/* Slot Reels */}
              <div className="reel-container">
                {reels.map((reel, reelIndex) => (
                  <div
                    key={reelIndex}
                    className={`reel ${isSpinning ? 'spinning' : ''}`}
                  >
                    {reel.map((symbol, symbolIndex) => (
                      <div
                        key={symbolIndex}
                        className="symbol"
                        style={{
                          transform: `translateY(${symbolIndex * -100}%)`,
                        }}
                      >
                        {symbol}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Win Lines Indicator */}
              {lastWin > 0 && !isSpinning && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center mt-4"
                >
                  <div className="text-2xl font-bold text-green-500 win-glow">
                    🎉 WIN! {formatCurrency(lastWin, 'gold')} 🎉
                  </div>
                </motion.div>
              )}

              {/* Controls */}
              <div className="mt-8 bg-casino-card rounded-xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {/* Bet Amount */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Bet Amount</label>
                    <select
                      className="input w-full"
                      value={betAmount}
                      onChange={(e) => setBetAmount(Number(e.target.value))}
                      disabled={isSpinning || autoSpin}
                    >
                      {betOptions.map(bet => (
                        <option key={bet} value={bet}>
                          {formatCurrency(bet, 'gold')}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Max Bet Button */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Quick Bet</label>
                    <Button
                      variant="outline"
                      size="md"
                      fullWidth
                      onClick={() => setBetAmount(1000)}
                      disabled={isSpinning || autoSpin}
                    >
                      Max Bet
                    </Button>
                  </div>

                  {/* Auto Spin */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Auto Spin</label>
                    <select
                      className="input w-full"
                      onChange={(e) => {
                        const count = Number(e.target.value);
                        if (count > 0) handleAutoSpin(count);
                      }}
                      disabled={isSpinning || autoSpin}
                      value={0}
                    >
                      <option value={0}>Manual</option>
                      <option value={10}>10 Spins</option>
                      <option value={25}>25 Spins</option>
                      <option value={50}>50 Spins</option>
                      <option value={100}>100 Spins</option>
                    </select>
                  </div>

                  {/* Spin Controls */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Controls</label>
                    {autoSpin ? (
                      <Button
                        variant="danger"
                        size="md"
                        fullWidth
                        onClick={stopAutoSpin}
                        leftIcon={<Pause className="w-4 h-4" />}
                      >
                        Stop Auto
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        size="md"
                        fullWidth
                        onClick={handleSpin}
                        disabled={isSpinning || (user?.balance?.goldCoins || 0) < betAmount}
                        leftIcon={isSpinning ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                      >
                        {isSpinning ? 'Spinning...' : 'SPIN'}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Game Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-casino-border text-center text-sm">
                  <div>
                    <div className="text-gray-400">RTP</div>
                    <div className="text-white font-semibold">{game.rtp}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Volatility</div>
                    <div className="text-white font-semibold capitalize">{game.volatility}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Max Win</div>
                    <div className="text-white font-semibold">{game.maxWin}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Game Info */}
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Info className="w-5 h-5 text-gold-500 mr-2" />
                Game Information
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Provider:</span>
                  <span className="text-white">{game.provider}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="text-white capitalize">{game.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Min Bet:</span>
                  <span className="text-white">{formatCurrency(game.minBet, 'gold')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Bet:</span>
                  <span className="text-white">{formatCurrency(game.maxBet, 'gold')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rating:</span>
                  <span className="text-white">⭐ {game.rating}/5</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-casino-border">
                <h4 className="text-white font-semibold mb-2">Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {game.features.map((feature, index) => (
                    <span
                      key={index}
                      className="badge bg-casino-secondary text-gray-300 text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Paytable */}
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4">Symbol Paytable</h3>
              
              <div className="space-y-2 text-sm">
                {Object.entries(SLOT_SYMBOLS).slice(0, 8).map(([name, symbol]) => (
                  <div key={name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{symbol}</span>
                      <span className="text-gray-400 capitalize">{name.toLowerCase()}</span>
                    </div>
                    <div className="text-white">
                      3x = {betAmount * 2} • 4x = {betAmount * 5} • 5x = {betAmount * 10}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Wins */}
            <div className="card">
              <h3 className="text-lg font-bold text-white mb-4">Recent Big Wins</h3>
              
              <div className="space-y-3">
                {[
                  { player: 'John D.', amount: 50000, time: '2 min ago' },
                  { player: 'Sarah M.', amount: 25000, time: '5 min ago' },
                  { player: 'Mike R.', amount: 75000, time: '8 min ago' },
                  { player: 'Emma L.', amount: 30000, time: '12 min ago' },
                ].map((win, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div>
                      <div className="text-white font-medium">{win.player}</div>
                      <div className="text-gray-400">{win.time}</div>
                    </div>
                    <div className="text-green-500 font-semibold">
                      {formatCurrency(win.amount, 'gold')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlayPage;