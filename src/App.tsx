import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { ServicesView } from './components/views/ServicesView';
import { ReservationView } from './components/views/ReservationView';
import { MyReservationsView } from './components/views/MyReservationsView';
import { AdminView } from './components/views/AdminView';
import { ServiceType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceType | undefined>(undefined);

  const handleOpenReservation = (service?: string) => {
    if (service) {
      setPreselectedService(service as ServiceType);
    }
    setActiveTab('reservation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-blue-900">
        
        {/* Navigation */}
        <Navbar 
          activeTab={activeTab} 
          setActiveTab={handleTabChange} 
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenReservation={handleOpenReservation}
        />

        {/* View Switcher Router */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomeView 
              onNavigate={handleTabChange} 
              onBookService={handleOpenReservation}
            />
          )}

          {activeTab === 'about' && (
            <AboutView 
              onBookNow={() => handleOpenReservation()}
            />
          )}

          {activeTab === 'services' && (
            <ServicesView 
              onSelectService={(serviceTitle) => handleOpenReservation(serviceTitle)}
            />
          )}

          {activeTab === 'how-it-works' && (
            <div className="py-12">
              <HomeView 
                onNavigate={handleTabChange} 
                onBookService={handleOpenReservation}
              />
            </div>
          )}

          {activeTab === 'reservation' && (
            <ReservationView 
              preselectedService={preselectedService}
              onSuccess={() => setActiveTab('my-reservations')}
            />
          )}

          {activeTab === 'my-reservations' && (
            <MyReservationsView 
              onBookNew={() => handleOpenReservation()}
            />
          )}

          {activeTab === 'admin' && (
            <AdminView />
          )}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleTabChange} />

        {/* Global Login Modal */}
        <AuthModal 
          isOpen={isAuthOpen} 
          onClose={() => setIsAuthOpen(false)}
        />

      </div>
    </AuthProvider>
  );
}
