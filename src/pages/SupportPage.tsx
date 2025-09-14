import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Zap,
  Shield,
  CreditCard,
  Users
} from 'lucide-react';
import Button from '@/components/common/Button';

const SupportPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faq' | 'contact'>('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const tabs = [
    { id: 'faq', label: 'FAQ', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact Us', icon: <Mail className="w-5 h-5" /> },
  ];

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24h',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-gold-500',
      bgColor: 'bg-gold-500/20',
    },
  ];

  const faqCategories = [
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Account & Registration',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Click the "Join Now" button and fill out the registration form. You must be 18+ to create an account.',
        },
        {
          question: 'I forgot my password, what should I do?',
          answer: 'Click "Forgot Password" on the login page and follow the instructions sent to your email.',
        },
      ],
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: 'Payments & Coins',
      questions: [
        {
          question: 'What is the difference between Gold Coins and Sweep Coins?',
          answer: 'Gold Coins are for free play entertainment. Sweep Coins can be redeemed for cash prizes.',
        },
        {
          question: 'How do I purchase more coins?',
          answer: 'Visit the Cashier section and choose from our coin packages.',
        },
      ],
    },
  ];

  const allFaqs = faqCategories.flatMap(category =>
    category.questions.map(q => ({ ...q, category: category.title }))
  );

  const filteredFaqs = searchQuery
    ? allFaqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allFaqs;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Help & <span className="text-gradient-gold">Support</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We're here to help! Find answers to common questions or get in touch with our support team.
          </p>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {supportChannels.map((channel, index) => (
            <div key={index} className="card card-hover text-center">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${channel.bgColor} ${channel.color} mb-4`}>
                {channel.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
              <p className="text-gray-300 mb-3">{channel.description}</p>
              <div className={`text-sm font-medium ${channel.color}`}>
                {channel.availability}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-8"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Mail className="w-6 h-6 text-gold-500 mx-auto mb-2" />
              <div className="font-semibold text-white">Email</div>
              <div className="text-gray-300">support@royalsweeps.com</div>
            </div>
            <div>
              <Phone className="w-6 h-6 text-gold-500 mx-auto mb-2" />
              <div className="font-semibold text-white">Phone</div>
              <div className="text-gray-300">1-800-ROYAL-00</div>
            </div>
            <div>
              <Clock className="w-6 h-6 text-gold-500 mx-auto mb-2" />
              <div className="font-semibold text-white">Live Chat</div>
              <div className="text-gray-300">24/7 Available</div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex space-x-1 bg-casino-card border border-casino-border rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'faq' | 'contact')}
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

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="input pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="card">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-500">
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-bold text-white">{category.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      return (
                        <div key={faqIndex} className="border-b border-casino-border last:border-b-0 pb-4 last:pb-0">
                          <button
                            onClick={() => setExpandedFaq(expandedFaq === globalIndex ? null : globalIndex)}
                            className="w-full text-left flex items-center justify-between py-2 hover:text-gold-500 transition-colors"
                          >
                            <span className="font-medium text-white">{faq.question}</span>
                            {expandedFaq === globalIndex ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </button>

                          {expandedFaq === globalIndex && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pt-2"
                            >
                              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help 24/7.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gold-500" />
                    <div>
                      <div className="font-medium text-white">Email Support</div>
                      <div className="text-sm text-gray-400">support@royalsweeps.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-medium text-white">Live Chat</div>
                      <div className="text-sm text-gray-400">Available 24/7</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-medium text-white">Phone Support</div>
                      <div className="text-sm text-gray-400">1-800-ROYAL-00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Button variant="primary" fullWidth leftIcon={<MessageCircle className="w-5 h-5" />}>
                  Start Live Chat
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SupportPage;