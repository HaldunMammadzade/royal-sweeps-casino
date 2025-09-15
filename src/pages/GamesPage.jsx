import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Flame, 
  Crown,
  Play,
  Heart,
  Grid,
  List
} from 'lucide-react';
import Button from '@/components/common/Button';
import { mockGames, gameProviders, gameFeatures } from '@/data/games';
import { GAME_CATEGORIES, GAME_CATEGORY_LABELS } from '@/utils/constants';
import { formatCompactNumber } from '@/utils/helpers';

const GamesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProvider, setSelectedProvider] = useState('All Providers');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort games
  const filteredGames = useMemo(() => {
    let games = [...mockGames];

    // Search filter
    if (searchQuery) {
      games = games.filter(game =>
        game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      games = games.filter(game => game.category === selectedCategory);
    }

    // Provider filter
    if (selectedProvider !== 'All Providers') {
      games = games.filter(game => game.provider === selectedProvider);
    }

    // Features filter
    if (selectedFeatures.length > 0) {
      games = games.filter(game =>
        selectedFeatures.some(feature => game.features.includes(feature))
      );
    }

    // Sort games
    switch (sortBy) {
      case 'name':
        games.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        games.sort((a, b) => b.rating - a.rating);
        break;
      case 'popular':
        games.sort((a, b) => b.playCount - a.playCount);
        break;
      case 'new':
        games.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rtp':
        games.sort((a, b) => b.rtp - a.rtp);
        break;
    }

    return games;
  }, [searchQuery, selectedCategory, selectedProvider, selectedFeatures, sortBy]);

  const handleFeatureToggle = (feature) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedProvider('All Providers');
    setSelectedFeatures([]);
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Game <span className="text-gradient-gold">Library</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Discover our collection of premium games with exciting features and big win potential
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="card text-center py-4">
            <div className="text-2xl font-bold text-gold-500">
              {mockGames.length}
            </div>
            <div className="text-sm text-gray-400">Total Games</div>
          </div>
          <div className="card text-center py-4">
            <div className="text-2xl font-bold text-green-500">
              {mockGames.filter(g => g.isNew).length}
            </div>
            <div className="text-sm text-gray-400">New Games</div>
          </div>
          <div className="card text-center py-4">
            <div className="text-2xl font-bold text-royal-500">
              {mockGames.filter(g => g.category === 'exclusive').length}
            </div>
            <div className="text-sm text-gray-400">Exclusive</div>
          </div>
          <div className="card text-center py-4">
            <div className="text-2xl font-bold text-blue-500">
              {mockGames.filter(g => g.category === 'jackpot').length}
            </div>
            <div className="text-sm text-gray-400">Jackpots</div>
          </div>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search games..."
                className="input pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                className="input min-w-[140px]"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Most Popular</option>
                <option value="name">A-Z</option>
                <option value="rating">Highest Rated</option>
                <option value="new">Newest</option>
                <option value="rtp">Highest RTP</option>
              </select>

              {/* View Mode */}
              <div className="flex bg-casino-card border border-casino-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gold-500 text-casino-dark' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-gold-500 text-casino-dark' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Filters Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                leftIcon={<Filter className="w-4 h-4" />}
              >
                Filters
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2">
            {Object.entries(GAME_CATEGORY_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === key
                    ? 'bg-gold-500 text-casino-dark'
                    : 'bg-casino-card text-gray-300 hover:bg-casino-secondary hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Filters Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="card mb-8"
          >
            <div className="grid md:grid-cols-3 gap-6">
              {/* Provider Filter */}
              <div>
                <label className="form-label">Game Provider</label>
                <select
                  className="input w-full"
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                >
                  {gameProviders.map(provider => (
                    <option key={provider} value={provider}>
                      {provider}
                    </option>
                  ))}
                </select>
              </div>

              {/* Features Filter */}
              <div className="md:col-span-2">
                <label className="form-label">Features</label>
                <div className="flex flex-wrap gap-2">
                  {gameFeatures.map(feature => (
                    <button
                      key={feature}
                      onClick={() => handleFeatureToggle(feature)}
                      className={`px-3 py-1 rounded-full text-sm transition-all ${
                        selectedFeatures.includes(feature)
                          ? 'bg-royal-500 text-white'
                          : 'bg-casino-secondary text-gray-300 hover:bg-casino-border'
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-6 pt-6 border-t border-casino-border">
              <div className="text-sm text-gray-400">
                {filteredGames.length} games found
              </div>
              <Button variant="ghost" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          </motion.div>
        )}

        {/* Games Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filteredGames.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎰</div>
              <h3 className="text-xl font-semibold text-white mb-2">No games found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search or filters</p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredGames.map((game, index) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`game-card ${viewMode === 'list' ? 'flex' : ''}`}
                >
                  {/* Game Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 h-32' : 'aspect-video'
                  } bg-casino-secondary rounded-lg mb-4`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Game Badges */}
                    <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                      {game.isNew && (
                        <span className="badge bg-green-500 text-white text-xs">NEW</span>
                      )}
                      {game.isPopular && (
                        <span className="badge bg-red-500 text-white text-xs">HOT</span>
                      )}
                      {game.category === 'exclusive' && (
                        <span className="badge bg-royal-500 text-white text-xs">EXCLUSIVE</span>
                      )}
                    </div>

                    {/* Favorite Button */}
                    <button className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
                      <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-casino-dark ml-1" />
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="badge badge-gold text-xs">{game.provider}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-white text-xs">{game.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className={viewMode === 'list' ? 'flex-1 ml-4' : ''}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {game.name}
                      </h3>
                      <div className="text-right ml-2">
                        <div className="text-sm text-gold-500 font-medium">
                          {game.maxWin}
                        </div>
                        <div className="text-xs text-gray-400">Max Win</div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {game.description}
                    </p>

                    {/* Game Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                      <div className="text-center">
                        <div className="text-white font-medium">{game.rtp}%</div>
                        <div className="text-gray-400">RTP</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-medium capitalize">{game.volatility}</div>
                        <div className="text-gray-400">Volatility</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-medium">
                          {formatCompactNumber(game.playCount)}
                        </div>
                        <div className="text-gray-400">Plays</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {game.features.slice(0, 3).map(feature => (
                        <span
                          key={feature}
                          className="badge bg-casino-secondary text-gray-300 text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {game.features.length > 3 && (
                        <span className="badge bg-casino-secondary text-gray-300 text-xs">
                          +{game.features.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Play Button */}
                    <Link to={`/games/${game.id}`}>
                      <Button variant="primary" size="sm" fullWidth>
                        <Play className="w-4 h-4 mr-2" />
                        Play Now
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Load More Button */}
        {filteredGames.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Games
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GamesPage;