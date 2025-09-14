# Royal Sweeps Casino 👑

Professional sweepstakes casino frontend built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### 🎰 Core Features
- **Modern Sweepstakes Casino UI** - Premium design with casino theme
- **Responsive Design** - Works perfectly on all devices
- **Authentication System** - Login/Register with demo accounts
- **Game Library** - Comprehensive slot games collection
- **Coin System** - Gold Coins and Sweep Coins management
- **VIP Program** - Tiered loyalty system
- **Promotions** - Daily bonuses and special offers

### 🛠 Technical Features
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Context API** for state management
- **Local Storage** for data persistence
- **PWA Ready** - Progressive Web App features

### 🎨 UI/UX Features
- **Dark Theme** with gold accents
- **Smooth Animations** throughout the app
- **Mobile-First** responsive design
- **Professional Casino Aesthetic**
- **Loading States** and error handling
- **Toast Notifications**

## 📁 Project Structure

```
royal-sweeps-casino/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── auth/            # Authentication components
│   │   ├── games/           # Game-related components
│   │   ├── cashier/         # Payment/coin components
│   │   ├── dashboard/       # User dashboard components
│   │   └── layout/          # Layout components
│   ├── pages/               # Page components
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React Context providers
│   ├── utils/               # Utility functions
│   ├── data/                # Mock data and constants
│   ├── types/               # TypeScript type definitions
│   ├── styles/              # Global CSS files
│   └── assets/              # Images, sounds, etc.
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## 🏃‍♂️ Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/royal-sweeps-casino.git
cd royal-sweeps-casino
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

### Demo Account
Use these credentials to test the login functionality:
- **Email:** `john.doe@example.com`
- **Password:** `password123`

## 🎮 Demo Features

### 🏠 Homepage
- Hero section with animated background
- Featured games showcase
- Promotions and bonuses
- Statistics and social proof
- Call-to-action sections

### 🔐 Authentication
- **Login Page** - Professional login form with demo credentials
- **Register Page** - Multi-step registration process
- **Protected Routes** - Secure user areas
- **Session Management** - Persistent login state

### 🎰 Games Section
- **Game Library** - Browse all available games
- **Game Categories** - Slots, Table Games, Live Casino, etc.
- **Search & Filters** - Find games easily
- **Game Details** - Detailed information for each game

### 💰 Virtual Economy
- **Gold Coins** - Free-to-play currency
- **Sweep Coins** - Prize redemption currency
- **Coin Packages** - Purchase options with bonuses
- **Balance Management** - Real-time balance updates

### 👤 User Dashboard
- **Profile Management** - Edit user information
- **Transaction History** - View all transactions
- **VIP Progress** - Track loyalty status
- **Settings** - Customize user preferences

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--gold-500: #FFD700     /* Primary gold */
--royal-500: #8B5CF6    /* Primary purple */

/* Background */
--casino-dark: #0A0A0A   /* Main background */
--casino-secondary: #1A1A1A  /* Secondary background */
--casino-card: #2A2A2A   /* Card backgrounds */

/* Accents */
--success: #00FF88       /* Success/win color */
--danger: #FF4444        /* Error/lose color */
```

### Typography
- **Display Font:** Orbitron (headings, logos)
- **Body Font:** Inter (content, UI text)

### Components
- **Buttons** - Multiple variants (primary, secondary, outline, ghost)
- **Cards** - Various card styles with hover effects
- **Forms** - Consistent form styling across the app
- **Modals** - Animated modal components
- **Badges** - Status and category indicators

## 🔧 Development

### Available Scripts
```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Testing
npm run test         # Run tests (when implemented)
```

### Code Structure

#### Components
```typescript
// Example component structure
import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';

const ExampleComponent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="card"
    >
      <Button variant="primary">Click me</Button>
    </motion.div>
  );
};

export default ExampleComponent;
```

#### Context Usage
```typescript
// Using the Auth context
import { useAuth } from '@/hooks/useAuth';

const MyComponent: React.FC = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user?.username}!</p>
      ) : (
        <button onClick={() => login(credentials)}>
          Login
        </button>
      )}
    </div>
  );
};
```

## 📱 PWA Features

The app includes Progressive Web App capabilities:

- **Installable** - Can be installed on mobile devices
- **Offline Ready** - Basic offline functionality
- **App-like Experience** - Native app feel
- **Responsive Design** - Works on all screen sizes

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🔐 Security Features

- **Age Verification** - 18+ age gate on first visit
- **Input Validation** - Form validation throughout
- **XSS Protection** - Sanitized outputs
- **Secure Headers** - Security headers in place
- **HTTPS Only** - Force HTTPS in production

## 📊 Performance

### Optimization Features
- **Code Splitting** - Lazy loading of routes
- **Tree Shaking** - Unused code elimination
- **Asset Optimization** - Optimized images and fonts
- **Caching Strategy** - Efficient caching headers
- **Bundle Analysis** - Monitor bundle size

### Performance Metrics
- **Lighthouse Score:** 95+ (target)
- **First Contentful Paint:** <1.5s
- **Largest Contentful Paint:** <2.5s
- **Time to Interactive:** <3.5s

## 🧪 Testing Strategy

### Testing Tools (when implemented)
- **Jest** - Unit testing
- **React Testing Library** - Component testing
- **Cypress** - E2E testing
- **MSW** - API mocking

### Test Coverage Goals
- **Components:** 80%+ coverage
- **Utils:** 90%+ coverage
- **Hooks:** 85%+ coverage

## 🌐 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📝 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or support:
- **Email:** support@royalsweeps.com
- **Documentation:** [Link to docs]
- **Issues:** [GitHub Issues](https://github.com/yourusername/royal-sweeps-casino/issues)

## 🗺 Roadmap

### Phase 1 (Current) ✅
- [x] Basic UI components
- [x] Authentication system
- [x] Game library display
- [x] Responsive design
- [x] Demo functionality

### Phase 2 (Next)
- [ ] Real slot game mechanics
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Advanced animations
- [ ] Sound effects

### Phase 3 (Future)
- [ ] Multiplayer features
- [ ] Live chat support
- [ ] Push notifications
- [ ] Mobile app version
- [ ] Backend integration

## 🔗 Related Links

- **Tailwind CSS:** https://tailwindcss.com/
- **Framer Motion:** https://www.framer.com/motion/
- **React Router:** https://reactrouter.com/
- **Lucide Icons:** https://lucide.dev/
- **Vite:** https://vitejs.dev/

---

**⚠️ Disclaimer:** This is a demonstration project for a sweepstakes casino. Always comply with local gambling laws and regulations when developing real gambling applications.

**🔞 Age Restriction:** This application includes age verification and is intended for users 18 years and older only.