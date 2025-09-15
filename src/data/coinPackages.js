

export const coinPackages = [
  {
    id: 'starter',
    name: 'Starter Pack',
    price: 9.99,
    goldCoins: 100000,
    sweepCoins: 100,
    bonusGold: 50000,
    bonusDescription: '50% Bonus Gold Coins',
    isPopular: false,
    isBestValue: false,
  },
  {
    id: 'popular',
    name: 'Popular Choice',
    price: 19.99,
    goldCoins: 250000,
    sweepCoins: 250,
    bonusGold: 125000,
    bonusDescription: '50% Bonus Gold Coins',
    isPopular: true,
    isBestValue: false,
    originalPrice: 24.99,
    discount: 20,
  },
  {
    id: 'value',
    name: 'Great Value',
    price: 39.99,
    goldCoins: 500000,
    sweepCoins: 500,
    bonusGold: 300000,
    bonusDescription: '60% Bonus Gold Coins',
    isPopular: false,
    isBestValue: true,
    originalPrice: 49.99,
    discount: 20,
  },
  {
    id: 'premium',
    name: 'Premium Pack',
    price: 49.99,
    goldCoins: 750000,
    sweepCoins: 750,
    bonusGold: 500000,
    bonusDescription: '67% Bonus Gold Coins',
    isPopular: false,
    isBestValue: false,
    originalPrice: 59.99,
    discount: 17,
  },
  {
    id: 'mega',
    name: 'Mega Package',
    price: 79.99,
    goldCoins: 1250000,
    sweepCoins: 1250,
    bonusGold: 875000,
    bonusDescription: '70% Bonus Gold Coins',
    isPopular: false,
    isBestValue: false,
    originalPrice: 99.99,
    discount: 20,
  },
  {
    id: 'royal',
    name: 'Royal Package',
    price: 99.99,
    goldCoins: 1750000,
    sweepCoins: 1750,
    bonusGold: 1250000,
    bonusDescription: '71% Bonus Gold Coins + VIP Treatment',
    isPopular: false,
    isBestValue: false,
    originalPrice: 129.99,
    discount: 23,
  },
];

// Daily bonus packages (smaller amounts)
export const dailyBonusPackages = [
  {
    id: 'daily-small',
    name: 'Daily Boost',
    price: 4.99,
    goldCoins: 50000,
    sweepCoins: 50,
    bonusGold: 25000,
    bonusDescription: '50% Bonus Gold Coins',
    isPopular: false,
    isBestValue: false,
  },
  {
    id: 'daily-medium',
    name: 'Daily Power',
    price: 14.99,
    goldCoins: 150000,
    sweepCoins: 150,
    bonusGold: 100000,
    bonusDescription: '67% Bonus Gold Coins',
    isPopular: true,
    isBestValue: false,
  },
];

// Special promotion packages
export const promotionPackages  = [
  {
    id: 'welcome',
    name: 'Welcome Package',
    price: 9.99,
    goldCoins: 100000,
    sweepCoins: 100,
    bonusGold: 100000,
    bonusDescription: '100% Bonus Gold Coins (First Purchase Only)',
    isPopular: false,
    isBestValue: true,
    validUntil: '2024-12-31',
  },
  {
    id: 'weekend',
    name: 'Weekend Special',
    price: 29.99,
    goldCoins: 350000,
    sweepCoins: 350,
    bonusGold: 280000,
    bonusDescription: '80% Bonus Gold Coins (Weekend Only)',
    isPopular: true,
    isBestValue: false,
    originalPrice: 39.99,
    discount: 25,
    validUntil: '2024-12-15',
  },
  {
    id: 'holiday',
    name: 'Holiday Mega',
    price: 49.99,
    goldCoins: 750000,
    sweepCoins: 750,
    bonusGold: 750000,
    bonusDescription: '100% Bonus Gold Coins + Holiday Surprise',
    isPopular: false,
    isBestValue: true,
    originalPrice: 79.99,
    discount: 38,
    validUntil: '2024-12-25',
  },
];

// VIP exclusive packages
export const vipPackages  = [
  {
    id: 'vip-gold',
    name: 'VIP Gold',
    price: 199.99,
    goldCoins: 3000000,
    sweepCoins: 3000,
    bonusGold: 2250000,
    bonusDescription: '75% Bonus Gold Coins + VIP Perks',
    isPopular: false,
    isBestValue: false,
  },
  {
    id: 'vip-platinum',
    name: 'VIP Platinum',
    price: 299.99,
    goldCoins: 5000000,
    sweepCoins: 5000,
    bonusGold: 4000000,
    bonusDescription: '80% Bonus Gold Coins + Platinum Benefits',
    isPopular: true,
    isBestValue: false,
  },
  {
    id: 'vip-diamond',
    name: 'VIP Diamond',
    price: 499.99,
    goldCoins: 9000000,
    sweepCoins: 9000,
    bonusGold: 8100000,
    bonusDescription: '90% Bonus Gold Coins + Diamond Elite Status',
    isPopular: false,
    isBestValue: true,
  },
];

// Get packages by type
export const getPackagesByType = (type) => {
  switch (type) {
    case 'daily':
      return dailyBonusPackages;
    case 'promotion':
      return promotionPackages;
    case 'vip':
      return vipPackages;
    default:
      return coinPackages;
  }
};

// Get popular packages
export const getPopularPackages = ()  => {
  return [...coinPackages, ...dailyBonusPackages, ...promotionPackages]
    .filter(pkg => pkg.isPopular);
};

// Get best value packages
export const getBestValuePackages = ()  => {
  return [...coinPackages, ...promotionPackages, ...vipPackages]
    .filter(pkg => pkg.isBestValue);
};

// Get package by ID
export const getPackageById = (id) => {
  const allPackages = [
    ...coinPackages,
    ...dailyBonusPackages,
    ...promotionPackages,
    ...vipPackages,
  ];
  return allPackages.find(pkg => pkg.id === id);
};

// Calculate coin value (coins per dollar)
export const calculateCoinValue = (pkg) => {
  const totalGoldCoins = pkg.goldCoins + pkg.bonusGold;
  return Math.round(totalGoldCoins / pkg.price);
};

// Calculate sweep coin value
export const calculateSweepValue = (pkg) => {
  return Math.round((pkg.sweepCoins / pkg.price) * 100) / 100;
};

// Get recommended package based on user spending
export const getRecommendedPackage = (userSpending) => {
  if (userSpending < 20) return coinPackages[0]; // Starter
  if (userSpending < 50) return coinPackages[1]; // Popular
  if (userSpending < 100) return coinPackages[2]; // Value
  if (userSpending < 200) return coinPackages[4]; // Mega
  return vipPackages[0]; // VIP Gold
};

// Sort packages by value
export const sortPackagesByValue = (packages )  => {
  return [...packages].sort((a, b) => {
    const valueA = calculateCoinValue(a);
    const valueB = calculateCoinValue(b);
    return valueB - valueA; // Descending order (best value first)
  });
};

// Check if package is on sale
export const isPackageOnSale = (pkg) => {
  return !!(pkg.originalPrice && pkg.discount);
};

// Calculate savings amount
export const calculateSavings = (pkg) => {
  if (!pkg.originalPrice) return 0;
  return pkg.originalPrice - pkg.price;
};

// Check if package is still valid
export const isPackageValid = (pkg) => {
  if (!pkg.validUntil) return true;
  return new Date(pkg.validUntil) > new Date();
};

// Get active packages (not expired)
export const getActivePackages = (packages )  => {
  return packages.filter(isPackageValid);
};