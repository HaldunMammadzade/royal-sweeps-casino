import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Wallet, 
  Gift, 
  TrendingUp, 
  Shield, 
  Clock,
  Star,
  Crown,
  Zap,
  CheckCircle,
  Info
} from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { coinPackages, getPackagesByType, calculateCoinValue } from '@/data/coinPackages';
import { formatCurrency } from '@/utils/helpers';
import toast from 'react-hot-toast';

const CashierPage = () => {
  const [activeTab, setActiveTab] = useState('purchase');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [cashoutAmount, setCashoutAmount] = useState('');
  const [cashoutMethod, setCashoutMethod] = useState('paypal');
  
  const { user, updateBalance } = useAuth();

  const tabs = [
    { id: 'purchase', label: 'Buy Coins', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'cashout', label: 'Cash Out', icon: <Wallet className="w-5 h-5" /> },
    { id: 'history', label: 'History', icon: <Clock className="w-5 h-5" /> },
  ];

  const paymentMethods = [
    { id: 'paypal', name: 'PayPal', icon: '💳', fee: '0%' },
    { id: 'bank', name: 'Bank Transfer', icon: '🏦', fee: '2%' },
    { id: 'crypto', name: 'Cryptocurrency', icon: '₿', fee: '1%' },
  ];

  const handlePurchase = (packageId) => {
    const pkg = coinPackages.find(p => p.id === packageId);
    if (!pkg || !user) return;

    // Simulate purchase
    const newBalance = {
      goldCoins: user.balance.goldCoins + pkg.goldCoins + pkg.bonusGold,
      sweepCoins: user.balance.sweepCoins + pkg.sweepCoins,
    };

    updateBalance(newBalance);
    toast.success(`Successfully purchased ${pkg.name}!`);
    setSelectedPackage(null);
  };

  const handleCashout = () => {
    const amount = parseFloat(cashoutAmount);
    if (!amount || amount < 50 || amount > (user?.balance.sweepCoins || 0)) {
      toast.error('Invalid cashout amount');
      return;
    }

    // Simulate cashout
    if (user) {
      updateBalance({
        sweepCoins: user.balance.sweepCoins - amount,
      });
      toast.success(`Cashout request submitted for $${amount}`);
      setCashoutAmount('');
    }
  };

  const mockTransactions = [
    { id: 1, type: 'Purchase', amount: '$19.99', coins: '250,000 GC + 250 SC', date: '2024-01-20', status: 'Completed' },
    { id: 2, type: 'Cashout', amount: '$150.00', coins: '150 SC', date: '2024-01-18', status: 'Processing' },
    { id: 3, type: 'Bonus', amount: 'Free', coins: '50,000 GC', date: '2024-01-17', status: 'Completed' },
    { id: 4, type: 'Purchase', amount: '$9.99', coins: '100,000 GC + 100 SC', date: '2024-01-15', status: 'Completed' },
  ];

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
            <span className="text-gradient-gold">Cashier</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Purchase coins, cash out winnings, and manage your transactions
          </p>
        </motion.div>

        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="balance-card mb-8"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold-500 mb-2">
                {formatCurrency(user?.balance?.goldCoins || 0, 'gold')}
              </div>
              <div className="text-gray-400">Gold Coins</div>
              <div className="text-sm text-gray-500 mt-1">For free play</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">
                {formatCurrency(user?.balance?.sweepCoins || 0, 'sweep')}
              </div>
              <div className="text-gray-400">Sweep Coins</div>
              <div className="text-sm text-gray-500 mt-1">For cash prizes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-royal-500 mb-2">
                {user?.vipLevel?.name || 'Bronze'}
              </div>
              <div className="text-gray-400">VIP Level</div>
              <div className="text-sm text-gray-500 mt-1">
                <Crown className="w-3 h-3 inline mr-1" />
                Exclusive benefits
              </div>
            </div>
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
                onClick={() => setActiveTab(tab.id)}
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

        {/* Purchase Tab */}
        {activeTab === 'purchase' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Special Offers */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Gift className="w-6 h-6 text-gold-500 mr-2" />
                Special Offers
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {getPackagesByType('promotion').map((pkg) => (
                  <div key={pkg.id} className="card relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <span className="badge bg-red-500 text-white">LIMITED</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                        <p className="text-gold-500 font-semibold">{pkg.bonusDescription}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gold-500">
                          ${pkg.price}
                        </div>
                        {pkg.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">
                            ${pkg.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <div className="text-gold-500 font-semibold">
                          {formatCurrency(pkg.goldCoins + pkg.bonusGold, 'gold')}
                        </div>
                        <div className="text-gray-400">Gold Coins</div>
                      </div>
                      <div>
                        <div className="text-green-500 font-semibold">
                          {formatCurrency(pkg.sweepCoins, 'sweep')}
                        </div>
                        <div className="text-gray-400">Sweep Coins</div>
                      </div>
                    </div>

                    <Button
                      variant="primary"
                      fullWidth
                      onClick={() => handlePurchase(pkg.id)}
                    >
                      Purchase Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Regular Packages */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Wallet className="w-6 h-6 text-royal-500 mr-2" />
                Coin Packages
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coinPackages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ scale: 1.02 }}
                    className={`card relative cursor-pointer transition-all ${
                      pkg.isPopular ? 'border-gold-500 shadow-lg shadow-gold-500/20' : ''
                    }`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="badge bg-gold-500 text-casino-dark px-4 py-1">
                          <Star className="w-3 h-3 inline mr-1" />
                          POPULAR
                        </span>
                      </div>
                    )}

                    {pkg.isBestValue && (
                      <div className="absolute -top-3 right-4">
                        <span className="badge bg-green-500 text-white">BEST VALUE</span>
                      </div>
                    )}

                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-gold-500 mb-1">
                        ${pkg.price}
                      </div>
                      {pkg.originalPrice && (
                        <div className="text-lg text-gray-400 line-through">
                          ${pkg.originalPrice}
                        </div>
                      )}
                      <div className="text-sm text-gray-400">
                        {calculateCoinValue(pkg)} coins per $1
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Gold Coins:</span>
                        <span className="text-gold-500 font-semibold">
                          {formatCurrency(pkg.goldCoins, 'gold')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Sweep Coins:</span>
                        <span className="text-green-500 font-semibold">
                          {formatCurrency(pkg.sweepCoins, 'sweep')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Bonus Gold:</span>
                        <span className="text-royal-500 font-semibold">
                          {formatCurrency(pkg.bonusGold, 'gold')}
                        </span>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <div className="text-sm text-gold-500 font-medium">
                        {pkg.bonusDescription}
                      </div>
                    </div>

                    <Button
                      variant={pkg.isPopular ? "primary" : "secondary"}
                      fullWidth
                      onClick={() => handlePurchase(pkg.id)}
                    >
                      Select Package
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Cashout Tab */}
        {activeTab === 'cashout' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Wallet className="w-6 h-6 text-green-500 mr-2" />
                Cash Out Sweep Coins
              </h2>

              {/* Available Balance */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">Available for cashout</div>
                    <div className="text-2xl font-bold text-green-500">
                      {formatCurrency(user?.balance?.sweepCoins || 0, 'sweep')}
                    </div>
                  </div>
                  <div className="text-green-500">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                </div>
              </div>

              {/* Cashout Form */}
              <div className="space-y-6">
                {/* Amount */}
                <div>
                  <label className="form-label">Cashout Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="number"
                      className="input pl-8"
                      placeholder="50.00"
                      min="50"
                      max={user?.balance?.sweepCoins || 0}
                      value={cashoutAmount}
                      onChange={(e) => setCashoutAmount(e.target.value)}
                    />
                  </div>
                  <div className="form-help">
                    Minimum: $50 • Maximum: ${user?.balance?.sweepCoins || 0}
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="form-label">Payment Method</label>
                  <div className="grid gap-3">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          cashoutMethod === method.id
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-casino-border hover:border-gray-500'
                        }`}
                      >
                        <input
                          type="radio"
                          name="cashoutMethod"
                          value={method.id}
                          checked={cashoutMethod === method.id}
                          onChange={(e) => setCashoutMethod(e.target.value)}
                          className="sr-only"
                        />
                        <span className="text-2xl mr-3">{method.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-white">{method.name}</div>
                          <div className="text-sm text-gray-400">Fee: {method.fee}</div>
                        </div>
                        <div className="ml-2">
                          {cashoutMethod === method.id && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Important Information */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-300">
                      <h4 className="font-semibold text-blue-500 mb-2">Cashout Information</h4>
                      <ul className="space-y-1 text-xs">
                        <li>• Processing time: 1-3 business days</li>
                        <li>• Minimum cashout: $50</li>
                        <li>• Maximum per day: $2,500</li>
                        <li>• ID verification may be required</li>
                        <li>• Tax reporting applies for winnings over $600</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleCashout}
                  disabled={!cashoutAmount}
                  leftIcon={<Zap className="w-5 h-5" />}
                >
                  Request Cashout
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="card">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 text-blue-500 mr-2" />
                Transaction History
              </h2>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 mb-6">
                <select className="input w-auto">
                  <option>All Transactions</option>
                  <option>Purchases</option>
                  <option>Cashouts</option>
                  <option>Bonuses</option>
                </select>
                <select className="input w-auto">
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                  <option>Last 90 days</option>
                  <option>All time</option>
                </select>
              </div>

              {/* Transactions Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-casino-border">
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Type</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Amount</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Coins</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Date</th>
                      <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-casino-border hover:bg-casino-secondary/50">
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full ${
                              transaction.type === 'Purchase' ? 'bg-gold-500' :
                              transaction.type === 'Cashout' ? 'bg-green-500' : 'bg-blue-500'
                            }`} />
                            <span className="text-white">{transaction.type}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-white font-medium">
                          {transaction.amount}
                        </td>
                        <td className="py-4 px-4 text-gray-300">
                          {transaction.coins}
                        </td>
                        <td className="py-4 px-4 text-gray-300">
                          {transaction.date}
                        </td>
                        <td className="py-4 px-4">
                          <span className={`badge ${
                            transaction.status === 'Completed' ? 'badge-green' :
                            transaction.status === 'Processing' ? 'badge-blue' : 'badge-red'
                          }`}>
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {mockTransactions.length === 0 && (
                <div className="text-center py-12">
                  <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No transactions yet</h3>
                  <p className="text-gray-400">Your transaction history will appear here</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Security Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <div className="bg-casino-card border border-casino-border rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Secure & Protected Transactions
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All transactions are protected with bank-level SSL encryption. We never store your 
                  payment information and work only with trusted payment processors. Your funds and 
                  personal information are always secure.
                </p>
                <div className="flex items-center space-x-4 mt-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>SSL Protected</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>PCI Compliant</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Crown className="w-4 h-4 text-gold-500" />
                    <span>Licensed & Regulated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CashierPage;