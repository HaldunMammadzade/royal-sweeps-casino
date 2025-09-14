import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/context/AuthContext';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import GamesPage from '@/pages/GamesPage';
import GamePlayPage from '@/pages/GamePlayPage';
import CashierPage from '@/pages/CashierPage';
import ProfilePage from '@/pages/ProfilePage';
import PromotionsPage from '@/pages/PromotionsPage';
import TournamentsPage from '@/pages/TournamentsPage';
import VipPage from '@/pages/VipPage';
import SupportPage from '@/pages/SupportPage';
import NotFoundPage from '@/pages/NotFoundPage';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Router>
          <div className="App min-h-screen bg-casino-dark text-white">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              {/* Main Layout Routes */}
              <Route element={<MainLayout />}>
                {/* Public Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/games/:gameId" element={<GamePlayPage />} />
                <Route path="/promotions" element={<PromotionsPage />} />
                <Route path="/tournaments" element={<TournamentsPage />} />
                <Route path="/support" element={<SupportPage />} />
                
                {/* Protected Routes */}
                <Route
                  path="/cashier"
                  element={
                    <ProtectedRoute>
                      <CashierPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/vip"
                  element={
                    <ProtectedRoute>
                      <VipPage />
                    </ProtectedRoute>
                  }
                />
                
                {/* 404 Page */}
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Route>
            </Routes>

            {/* Toast Notifications */}
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 4000,
                style: {
                  background: '#2a2a2a',
                  color: '#ffffff',
                  border: '1px solid #3a3a3a',
                },
                success: {
                  iconTheme: {
                    primary: '#00ff88',
                    secondary: '#ffffff',
                  },
                },
                error: {
                  iconTheme: {
                    primary: '#ff4444',
                    secondary: '#ffffff',
                  },
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
