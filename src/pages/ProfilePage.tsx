import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Crown, 
  Shield,
  Edit,
  Save,
  X,
  Eye,
  EyeOff,
  Settings,
  Award,
  TrendingUp,
  Clock,
  Lock,
  CreditCard,
  Gift,
  Trophy
} from 'lucide-react';
import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { formatCurrency, formatDate } from '@/utils/helpers';
import toast from 'react-hot-toast';

const ProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'preferences' | 'activity'>('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dateOfBirth || '',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'preferences', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
    { id: 'activity', label: 'Activity', icon: <Clock className="w-5 h-5" /> },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = () => {
    if (user) {
      updateUser(formData);
      setIsEditing(false);
      toast.success('Profile updated successfully!');
    }
  };

  const handleCancelEdit = () => {
    setFormData({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phone: user?.phone || '',
      dateOfBirth: user?.dateOfBirth || '',
    });
    setIsEditing(false);
  };

  const handlePasswordUpdate = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (passwordData.newPassword.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }
    
    toast.success('Password updated successfully!');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const mockActivity = [
    { id: 1, action: 'Played Golden Fortune', time: '2 hours ago', type: 'game' },
    { id: 2, action: 'Purchased Gold Coins', amount: '$19.99', time: '1 day ago', type: 'purchase' },
    { id: 3, action: 'Big Win!', amount: '15,000 GC', time: '2 days ago', type: 'win' },
    { id: 4, action: 'Claimed Daily Bonus', amount: '5,000 GC', time: '3 days ago', type: 'bonus' },
    { id: 5, action: 'Level Up to Gold VIP', time: '1 week ago', type: 'achievement' },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-royal-500 to-royal-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold text-white">
                {user.firstName} {user.lastName}
              </h1>
              <div className="flex items-center space-x-4 text-gray-300">
                <span>@{user.username}</span>
                <div className="flex items-center space-x-1">
                  <Crown className="w-4 h-4 text-gold-500" />
                  <span className="text-gold-500">{user.vipLevel?.name} VIP</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="card text-center">
            <div className="text-2xl font-bold text-gold-500 mb-1">
              {formatCurrency(user.balance.goldCoins, 'gold')}
            </div>
            <div className="text-sm text-gray-400">Gold Coins</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-green-500 mb-1">
              {formatCurrency(user.balance.sweepCoins, 'sweep')}
            </div>
            <div className="text-sm text-gray-400">Sweep Coins</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-royal-500 mb-1">
              {user.vipLevel?.level}
            </div>
            <div className="text-sm text-gray-400">VIP Level</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-blue-500 mb-1">
              {formatDate(user.createdAt).split(',')[0]}
            </div>
            <div className="text-sm text-gray-400">Member Since</div>
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

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Personal Information</h2>
                {!isEditing ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                    leftIcon={<Edit className="w-4 h-4" />}
                  >
                    Edit
                  </Button>
                ) : (
                  <div className="flex space-x-2">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleSaveProfile}
                      leftIcon={<Save className="w-4 h-4" />}
                    >
                      Save
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleCancelEdit}
                      leftIcon={<X className="w-4 h-4" />}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="input"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="input"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="form-label">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      className="input pl-10"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      className="input pl-10"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      className="input pl-10"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Account Status</label>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${user.isVerified ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className={user.isVerified ? 'text-green-500' : 'text-red-500'}>
                      {user.isVerified ? 'Verified' : 'Unverified'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP Progress */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Crown className="w-6 h-6 text-gold-500 mr-2" />
                VIP Progress
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                      <Crown className="w-6 h-6 text-gold-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{user.vipLevel?.name} VIP</div>
                      <div className="text-sm text-gray-400">Level {user.vipLevel?.level}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Progress to next level</div>
                    <div className="text-gold-500 font-semibold">{user.vipLevel?.progress}%</div>
                  </div>
                </div>
                
                <div className="vip-progress" style={{ '--progress': `${user.vipLevel?.progress}%` } as any} />
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {user.vipLevel?.benefits?.map((benefit, index) => (
                    <div key={index} className="text-center">
                      <Award className="w-6 h-6 text-gold-500 mx-auto mb-2" />
                      <div className="text-sm text-gray-300">{benefit}</div>
                    </div>
                  )) || (
                    <div className="col-span-4 text-center text-gray-400">
                      No VIP benefits available
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 text-green-500 mr-2" />
                Change Password
              </h2>
              
              <form className="max-w-md space-y-4" onSubmit={(e) => { e.preventDefault(); handlePasswordUpdate(); }}>
                <div>
                  <label className="form-label">Current Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="currentPassword"
                      className="input pl-10 pr-10"
                      placeholder="Enter current password"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className="input"
                    placeholder="Enter new password"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                
                <div>
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="input"
                    placeholder="Confirm new password"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  disabled={!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
                >
                  Update Password
                </Button>
              </form>
            </div>

            {/* Two-Factor Authentication */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Two-Factor Authentication</h2>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">Authenticator App</h3>
                  <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable 2FA
                </Button>
              </div>
            </div>

            {/* Login Sessions */}
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Active Sessions</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-casino-secondary rounded-lg">
                  <div>
                    <div className="font-semibold text-white">Current Session</div>
                    <div className="text-sm text-gray-400">Chrome on Windows • Canada</div>
                    <div className="text-xs text-green-500">Active now</div>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-casino-secondary rounded-lg">
                  <div>
                    <div className="font-semibold text-white">Mobile Session</div>
                    <div className="text-sm text-gray-400">Safari on iPhone • Canada</div>
                    <div className="text-xs text-gray-400">2 hours ago</div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Revoke
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Preferences Tab */}
        {activeTab === 'preferences' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Game Preferences</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Sound Effects</h3>
                    <p className="text-gray-400 text-sm">Play sounds during games</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Background Music</h3>
                    <p className="text-gray-400 text-sm">Play background music in games</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Animations</h3>
                    <p className="text-gray-400 text-sm">Enable game animations and effects</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Auto-spin</h3>
                    <p className="text-gray-400 text-sm">Allow automatic spinning in slots</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Notifications</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Email Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive updates about bonuses and promotions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Push Notifications</h3>
                    <p className="text-gray-400 text-sm">Get notified about new games and features</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">SMS Notifications</h3>
                    <p className="text-gray-400 text-sm">Receive SMS for important account updates</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-white mb-6">Privacy</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Profile Visibility</h3>
                    <p className="text-gray-400 text-sm">Show your profile in leaderboards</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">Data Analytics</h3>
                    <p className="text-gray-400 text-sm">Help us improve by sharing usage data</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold-500"></div>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-xl font-bold text-white mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 text-blue-500 mr-2" />
              Recent Activity
            </h2>

            <div className="space-y-4">
              {mockActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-4 bg-casino-secondary rounded-lg">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'game' ? 'bg-blue-500/20 text-blue-500' :
                    activity.type === 'purchase' ? 'bg-gold-500/20 text-gold-500' :
                    activity.type === 'win' ? 'bg-green-500/20 text-green-500' :
                    activity.type === 'bonus' ? 'bg-purple-500/20 text-purple-500' :
                    'bg-orange-500/20 text-orange-500'
                  }`}>
                    {activity.type === 'game' && <User className="w-5 h-5" />}
                    {activity.type === 'purchase' && <CreditCard className="w-5 h-5" />}
                    {activity.type === 'win' && <TrendingUp className="w-5 h-5" />}
                    {activity.type === 'bonus' && <Gift className="w-5 h-5" />}
                    {activity.type === 'achievement' && <Award className="w-5 h-5" />}
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-white">{activity.action}</div>
                    <div className="text-sm text-gray-400">{activity.time}</div>
                  </div>
                  
                  {activity.amount && (
                    <div className={`font-semibold ${
                      activity.type === 'purchase' ? 'text-gold-500' :
                      activity.type === 'win' || activity.type === 'bonus' ? 'text-green-500' :
                      'text-white'
                    }`}>
                      {activity.amount}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">
                Load More Activity
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;