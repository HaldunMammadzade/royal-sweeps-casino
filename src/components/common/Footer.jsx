import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Casino',
      links: [
        { name: 'All Games', href: '/games' },
        { name: 'Slots', href: '/games?category=slots' },
        { name: 'Table Games', href: '/games?category=table' },
        { name: 'Live Casino', href: '/games?category=live' },
        { name: 'Jackpots', href: '/games?category=jackpot' },
      ]
    },
    {
      title: 'Promotions',
      links: [
        { name: 'Welcome Bonus', href: '/promotions' },
        { name: 'Daily Bonuses', href: '/promotions' },
        { name: 'VIP Program', href: '/vip' },
        { name: 'Tournaments', href: '/tournaments' },
        { name: 'Loyalty Rewards', href: '/promotions' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support' },
        { name: 'Contact Us', href: '/support' },
        { name: 'Live Chat', href: '/support' },
        { name: 'FAQ', href: '/support' },
        { name: 'Game Rules', href: '/support' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Responsible Gaming', href: '/responsible-gaming' },
        { name: 'Licensing', href: '/licensing' },
        { name: 'Security', href: '/security' },
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/royalsweeps', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/royalsweeps', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/royalsweeps', name: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: 'https://youtube.com/royalsweeps', name: 'YouTube' },
  ];

  return (
    <footer className="bg-casino-secondary border-t border-casino-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-gold-500 to-gold-600">
                <Crown className="h-7 w-7 text-casino-dark" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-gradient-gold">
                  Royal Sweeps
                </h3>
                <p className="text-sm text-gray-400">Premium Casino</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the ultimate sweepstakes casino with premium games, 
              exclusive rewards, and royal treatment that makes every moment special.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-gold-500" />
                <span className="text-sm">support@royalsweeps.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-gold-500" />
                <span className="text-sm">1-800-ROYAL-00</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span className="text-sm">Licensed & Regulated</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-gold-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-casino-border" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm mr-2">Follow us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-casino-card border border-casino-border rounded-lg flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright and Legal */}
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Royal Sweeps Casino. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <Link to="/terms" className="hover:text-gray-300 transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link to="/responsible-gaming" className="hover:text-gray-300 transition-colors">
                Responsible Gaming
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-casino-border">
          <div className="bg-casino-card border border-casino-border rounded-lg p-6">
            <h5 className="text-white font-semibold mb-3 flex items-center">
              <Crown className="w-4 h-4 text-gold-500 mr-2" />
              Important Information
            </h5>
            <div className="text-xs text-gray-400 space-y-2 leading-relaxed">
              <p>
                <strong>No Purchase Necessary:</strong> You can play for free using Gold Coins. 
                Sweep Coins can be used to redeem prizes and are available through various promotional offers.
              </p>
              <p>
                <strong>Age Restriction:</strong> You must be 18 years or older to participate. 
                Void where prohibited by law.
              </p>
              <p>
                <strong>Responsible Gaming:</strong> We promote responsible gaming. 
                If you or someone you know has a gambling problem, please seek help.
              </p>
              <p>
                <strong>Legal Compliance:</strong> This is a sweepstakes-based social casino. 
                We operate legally in most states and comply with all applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center space-x-6 space-y-2">
          <div className="flex items-center space-x-2 bg-casino-card border border-casino-border rounded-lg px-4 py-2">
            <Crown className="w-5 h-5 text-gold-500" />
            <span className="text-xs text-gray-300">Licensed & Regulated</span>
          </div>
          <div className="flex items-center space-x-2 bg-casino-card border border-casino-border rounded-lg px-4 py-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-xs text-gray-300">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2 bg-casino-card border border-casino-border rounded-lg px-4 py-2">
            <span className="text-lg">🔞</span>
            <span className="text-xs text-gray-300">18+ Only</span>
          </div>
          <div className="flex items-center space-x-2 bg-casino-card border border-casino-border rounded-lg px-4 py-2">
            <span className="text-lg">⚖️</span>
            <span className="text-xs text-gray-300">Fair Gaming</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
