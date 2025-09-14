import type { Game } from '@/types';

export const mockGames: Game[] = [
  {
    id: '1',
    name: 'Golden Fortune',
    provider: 'Royal Studios',
    category: 'slots',
    thumbnail: '/images/games/golden-fortune.jpg',
    description: 'Discover treasures in this golden adventure with expanding wilds and free spins.',
    rtp: 96.5,
    volatility: 'medium',
    maxWin: '5000x',
    minBet: 10,
    maxBet: 10000,
    features: ['Free Spins', 'Expanding Wilds', 'Multipliers'],
    isNew: true,
    isPopular: true,
    playCount: 15420,
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Diamond Rush',
    provider: 'Premium Games',
    category: 'slots',
    thumbnail: '/images/games/diamond-rush.jpg',
    description: 'Rush for diamonds in this high-volatility slot with massive win potential.',
    rtp: 94.2,
    volatility: 'high',
    maxWin: '10000x',
    minBet: 20,
    maxBet: 20000,
    features: ['Bonus Game', 'Progressive', 'Wild Symbols'],
    isNew: false,
    isPopular: true,
    playCount: 28750,
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Lucky Sevens',
    provider: 'Classic Casino',
    category: 'slots',
    thumbnail: '/images/games/lucky-sevens.jpg',
    description: 'Classic slot machine with traditional symbols and simple gameplay.',
    rtp: 92.5,
    volatility: 'low',
    maxWin: '1000x',
    minBet: 5,
    maxBet: 5000,
    features: ['Classic Symbols', 'Simple Gameplay'],
    isNew: false,
    isPopular: false,
    playCount: 8930,
    rating: 4.2,
  },
  {
    id: '4',
    name: 'Mystic Forest',
    provider: 'Fantasy Games',
    category: 'slots',
    thumbnail: '/images/games/mystic-forest.jpg',
    description: 'Enter an enchanted forest filled with magical creatures and hidden treasures.',
    rtp: 95.8,
    volatility: 'medium',
    maxWin: '8000x',
    minBet: 15,
    maxBet: 15000,
    features: ['Free Spins', 'Scatter Symbols', 'Bonus Round'],
    isNew: true,
    isPopular: false,
    playCount: 5670,
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Pirate Treasure',
    provider: 'Adventure Studios',
    category: 'slots',
    thumbnail: '/images/games/pirate-treasure.jpg',
    description: 'Sail the seven seas in search of buried treasure and pirate gold.',
    rtp: 96.1,
    volatility: 'medium',
    maxWin: '6000x',
    minBet: 10,
    maxBet: 12000,
    features: ['Treasure Bonus', 'Free Spins', 'Wild Substitutions'],
    isNew: false,
    isPopular: true,
    playCount: 19840,
    rating: 4.5,
  },
  {
    id: '6',
    name: 'Space Adventure',
    provider: 'Sci-Fi Games',
    category: 'slots',
    thumbnail: '/images/games/space-adventure.jpg',
    description: 'Explore the galaxy and discover alien civilizations in this cosmic slot.',
    rtp: 97.2,
    volatility: 'high',
    maxWin: '15000x',
    minBet: 25,
    maxBet: 25000,
    features: ['Cosmic Wilds', 'Planetary Bonus', 'Galaxy Free Spins'],
    isNew: true,
    isPopular: true,
    playCount: 12560,
    rating: 4.9,
  },
  {
    id: '7',
    name: 'Royal Blackjack',
    provider: 'Table Masters',
    category: 'table',
    thumbnail: '/images/games/royal-blackjack.jpg',
    description: 'Classic blackjack with premium graphics and smooth gameplay.',
    rtp: 99.5,
    volatility: 'low',
    maxWin: '3:2',
    minBet: 50,
    maxBet: 50000,
    features: ['Insurance', 'Double Down', 'Split'],
    isNew: false,
    isPopular: true,
    playCount: 34210,
    rating: 4.4,
  },
  {
    id: '8',
    name: 'European Roulette',
    provider: 'Table Masters',
    category: 'table',
    thumbnail: '/images/games/european-roulette.jpg',
    description: 'Traditional European roulette with single zero for better odds.',
    rtp: 97.3,
    volatility: 'medium',
    maxWin: '35:1',
    minBet: 10,
    maxBet: 10000,
    features: ['Single Zero', 'En Prison Rule', 'Call Bets'],
    isNew: false,
    isPopular: true,
    playCount: 28930,
    rating: 4.3,
  },
  {
    id: '9',
    name: 'Live Casino Hold\'em',
    provider: 'Evolution Gaming',
    category: 'live',
    thumbnail: '/images/games/live-holdem.jpg',
    description: 'Play poker against the house with a live dealer in real-time.',
    rtp: 97.8,
    volatility: 'medium',
    maxWin: '100:1',
    minBet: 25,
    maxBet: 25000,
    features: ['Live Dealer', 'Side Bets', 'Chat Function'],
    isNew: false,
    isPopular: true,
    playCount: 16780,
    rating: 4.6,
  },
  {
    id: '10',
    name: 'Lightning Baccarat',
    provider: 'Evolution Gaming',
    category: 'live',
    thumbnail: '/images/games/lightning-baccarat.jpg',
    description: 'Enhanced baccarat with random multipliers up to 262,144x.',
    rtp: 98.9,
    volatility: 'medium',
    maxWin: '262144x',
    minBet: 20,
    maxBet: 20000,
    features: ['Lightning Multipliers', 'Live Dealer', 'Multiple Cameras'],
    isNew: true,
    isPopular: true,
    playCount: 22150,
    rating: 4.8,
  },
  {
    id: '11',
    name: 'Scratch Gold',
    provider: 'Instant Win',
    category: 'instant',
    thumbnail: '/images/games/scratch-gold.jpg',
    description: 'Scratch to reveal hidden prizes and instant wins.',
    rtp: 95.0,
    volatility: 'medium',
    maxWin: '10000x',
    minBet: 5,
    maxBet: 1000,
    features: ['Instant Win', 'Multiple Chances', 'Bonus Scratchers'],
    isNew: false,
    isPopular: false,
    playCount: 7420,
    rating: 4.1,
  },
  {
    id: '12',
    name: 'Mega Jackpot',
    provider: 'Jackpot Games',
    category: 'jackpot',
    thumbnail: '/images/games/mega-jackpot.jpg',
    description: 'Progressive jackpot slot with life-changing prize pools.',
    rtp: 88.5,
    volatility: 'high',
    maxWin: 'Progressive',
    minBet: 50,
    maxBet: 50000,
    features: ['Progressive Jackpot', 'Jackpot Bonus', 'Multiple Levels'],
    isNew: false,
    isPopular: true,
    playCount: 45620,
    rating: 4.7,
  },
  {
    id: '13',
    name: 'Royal Exclusive',
    provider: 'Royal Studios',
    category: 'exclusive',
    thumbnail: '/images/games/royal-exclusive.jpg',
    description: 'Exclusive slot available only at Royal Sweeps Casino.',
    rtp: 98.5,
    volatility: 'medium',
    maxWin: '20000x',
    minBet: 30,
    maxBet: 30000,
    features: ['Exclusive Game', 'Royal Wilds', 'Crown Bonus'],
    isNew: true,
    isPopular: true,
    playCount: 8930,
    rating: 4.9,
  },
  {
    id: '14',
    name: 'Fruit Fiesta',
    provider: 'Classic Casino',
    category: 'slots',
    thumbnail: '/images/games/fruit-fiesta.jpg',
    description: 'Colorful fruit-themed slot with cascading reels and multipliers.',
    rtp: 94.8,
    volatility: 'medium',
    maxWin: '4000x',
    minBet: 10,
    maxBet: 8000,
    features: ['Cascading Reels', 'Multipliers', 'Fruit Symbols'],
    isNew: false,
    isPopular: false,
    playCount: 11250,
    rating: 4.3,
  },
  {
    id: '15',
    name: 'Ancient Egypt',
    provider: 'History Games',
    category: 'slots',
    thumbnail: '/images/games/ancient-egypt.jpg',
    description: 'Uncover the mysteries of ancient Egypt with pharaohs and pyramids.',
    rtp: 96.8,
    volatility: 'high',
    maxWin: '12000x',
    minBet: 20,
    maxBet: 18000,
    features: ['Pyramid Bonus', 'Pharaoh Wilds', 'Mummy Free Spins'],
    isNew: false,
    isPopular: true,
    playCount: 26780,
    rating: 4.6,
  },
  {
    id: '16',
    name: 'Dragon\'s Fortune',
    provider: 'Mythical Games',
    category: 'slots',
    thumbnail: '/images/games/dragons-fortune.jpg',
    description: 'Face mighty dragons and claim their treasure in this epic adventure.',
    rtp: 95.5,
    volatility: 'high',
    maxWin: '25000x',
    minBet: 25,
    maxBet: 25000,
    features: ['Dragon Wilds', 'Treasure Bonus', 'Fire Free Spins'],
    isNew: true,
    isPopular: true,
    playCount: 18940,
    rating: 4.8,
  },
  {
    id: '17',
    name: 'Vegas Nights',
    provider: 'City Lights',
    category: 'slots',
    thumbnail: '/images/games/vegas-nights.jpg',
    description: 'Experience the glamour of Las Vegas with neon lights and big wins.',
    rtp: 96.2,
    volatility: 'medium',
    maxWin: '7500x',
    minBet: 15,
    maxBet: 15000,
    features: ['Neon Wilds', 'Casino Bonus', 'Night Free Spins'],
    isNew: false,
    isPopular: true,
    playCount: 21340,
    rating: 4.4,
  },
  {
    id: '18',
    name: 'Ocean Treasures',
    provider: 'Aquatic Studios',
    category: 'slots',
    thumbnail: '/images/games/ocean-treasures.jpg',
    description: 'Dive deep into the ocean to discover hidden treasures and sea creatures.',
    rtp: 95.2,
    volatility: 'medium',
    maxWin: '6500x',
    minBet: 10,
    maxBet: 12000,
    features: ['Deep Sea Bonus', 'Pearl Wilds', 'Treasure Chest Scatter'],
    isNew: false,
    isPopular: false,
    playCount: 13670,
    rating: 4.2,
  },
  {
    id: '19',
    name: 'Wild West',
    provider: 'Frontier Games',
    category: 'slots',
    thumbnail: '/images/games/wild-west.jpg',
    description: 'Ride into the sunset in this action-packed western adventure.',
    rtp: 94.9,
    volatility: 'high',
    maxWin: '9000x',
    minBet: 20,
    maxBet: 20000,
    features: ['Gunfight Bonus', 'Sheriff Wilds', 'Saloon Free Spins'],
    isNew: false,
    isPopular: true,
    playCount: 17850,
    rating: 4.5,
  },
  {
    id: '20',
    name: 'Cosmic Gems',
    provider: 'Stellar Games',
    category: 'slots',
    thumbnail: '/images/games/cosmic-gems.jpg',
    description: 'Collect cosmic gems across the universe in this stellar slot adventure.',
    rtp: 97.1,
    volatility: 'medium',
    maxWin: '11000x',
    minBet: 15,
    maxBet: 16000,
    features: ['Gem Collection', 'Cosmic Wilds', 'Stellar Multipliers'],
    isNew: true,
    isPopular: false,
    playCount: 9420,
    rating: 4.7,
  }
];

// Game providers
export const gameProviders = [
  'All Providers',
  'Royal Studios',
  'Premium Games',
  'Classic Casino',
  'Fantasy Games',
  'Adventure Studios',
  'Sci-Fi Games',
  'Table Masters',
  'Evolution Gaming',
  'Instant Win',
  'Jackpot Games',
  'History Games',
  'Mythical Games',
  'City Lights',
  'Aquatic Studios',
  'Frontier Games',
  'Stellar Games',
];

// Game features filter
export const gameFeatures = [
  'Free Spins',
  'Wild Symbols',
  'Scatter Symbols',
  'Bonus Game',
  'Progressive Jackpot',
  'Multipliers',
  'Expanding Wilds',
  'Cascading Reels',
  'Live Dealer',
  'Instant Win',
];

// Get games by category
export const getGamesByCategory = (category: string): Game[] => {
  if (category === 'all') return mockGames;
  return mockGames.filter(game => game.category === category);
};

// Get games by provider
export const getGamesByProvider = (provider: string): Game[] => {
  if (provider === 'All Providers') return mockGames;
  return mockGames.filter(game => game.provider === provider);
};

// Get popular games
export const getPopularGames = (): Game[] => {
  return mockGames.filter(game => game.isPopular);
};

// Get new games
export const getNewGames = (): Game[] => {
  return mockGames.filter(game => game.isNew);
};

// Get featured games (top rated)
export const getFeaturedGames = (): Game[] => {
  return mockGames
    .filter(game => game.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
};

// Search games
export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockGames.filter(game =>
    game.name.toLowerCase().includes(lowercaseQuery) ||
    game.provider.toLowerCase().includes(lowercaseQuery) ||
    game.description.toLowerCase().includes(lowercaseQuery) ||
    game.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};

// Get game by ID
export const getGameById = (id: string): Game | undefined => {
  return mockGames.find(game => game.id === id);
};

// Get recommended games based on a game
export const getRecommendedGames = (currentGameId: string): Game[] => {
  const currentGame = getGameById(currentGameId);
  if (!currentGame) return [];

  return mockGames
    .filter(game => 
      game.id !== currentGameId && 
      (game.category === currentGame.category || game.provider === currentGame.provider)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
};

// Get games with filters
export const getFilteredGames = (filters: {
  category?: string;
  provider?: string;
  features?: string[];
  volatility?: string;
  minRtp?: number;
  maxRtp?: number;
  isNew?: boolean;
  isPopular?: boolean;
}): Game[] => {
  return mockGames.filter(game => {
    if (filters.category && filters.category !== 'all' && game.category !== filters.category) {
      return false;
    }
    
    if (filters.provider && filters.provider !== 'All Providers' && game.provider !== filters.provider) {
      return false;
    }
    
    if (filters.features && filters.features.length > 0) {
      const hasFeature = filters.features.some(feature => 
        game.features.includes(feature)
      );
      if (!hasFeature) return false;
    }
    
    if (filters.volatility && game.volatility !== filters.volatility) {
      return false;
    }
    
    if (filters.minRtp && game.rtp < filters.minRtp) {
      return false;
    }
    
    if (filters.maxRtp && game.rtp > filters.maxRtp) {
      return false;
    }
    
    if (filters.isNew !== undefined && game.isNew !== filters.isNew) {
      return false;
    }
    
    if (filters.isPopular !== undefined && game.isPopular !== filters.isPopular) {
      return false;
    }
    
    return true;
  });
};