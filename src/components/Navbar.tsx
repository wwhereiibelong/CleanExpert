import React from 'react';
import { Sparkles, Calendar, ShieldCheck, User, LogOut, Lock, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAuth: () => void;
  onOpenReservation: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAuth,
  onOpenReservation,
}) => {
  const { currentUser, userProfile, isAdmin, logout } = useAuth();

  const navItems = [
    { id: 'about', label: '서비스 소개' },
    { id: 'services', label: '청소 서비스' },
    { id: 'how-it-works', label: '이용 방법' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => setActiveTab('home')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
              Clean<span className="text-blue-600">Expert</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
              Premium
            </span>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-sm font-medium transition-colors hover:text-blue-600 relative py-2 ${
                activeTab === item.id ? 'text-blue-600 font-semibold' : 'text-slate-600'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full animate-fade-in" />
              )}
            </button>
          ))}
          
          {currentUser && (
            <button
              onClick={() => setActiveTab('my-reservations')}
              className={`text-sm font-medium transition-colors hover:text-blue-600 relative py-2 ${
                activeTab === 'my-reservations' ? 'text-blue-600 font-semibold' : 'text-slate-600'
              }`}
            >
              내 예약 내역
              {activeTab === 'my-reservations' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full animate-fade-in" />
              )}
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-lg transition-colors ${
                activeTab === 'admin' 
                  ? 'bg-amber-100 text-amber-800' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              관리자
            </button>
          )}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 py-1.5 px-3 rounded-full">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-700 max-w-[120px] truncate">
                <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="truncate">{userProfile?.name || currentUser.displayName || '회원'}님</span>
              </div>
              <button 
                onClick={logout}
                title="로그아웃" 
                className="text-slate-400 hover:text-red-500 p-1 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg transition-colors"
            >
              로그인
            </button>
          )}

          {/* Primary CTA Hook Button */}
          <button
            onClick={() => onOpenReservation()}
            className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>원하는 시간 예약하기</span>
          </button>
        </div>
      </div>

      {/* Mobile Sub-bar */}
      <div className="md:hidden flex items-center justify-around bg-slate-50 border-t border-slate-100 py-2.5 px-2 text-xs">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`font-medium ${activeTab === item.id ? 'text-blue-600 font-bold' : 'text-slate-600'}`}
          >
            {item.label}
          </button>
        ))}
        {currentUser && (
          <button
            onClick={() => setActiveTab('my-reservations')}
            className={`font-medium ${activeTab === 'my-reservations' ? 'text-blue-600 font-bold' : 'text-slate-600'}`}
          >
            내 예약
          </button>
        )}
        {isAdmin && (
          <button
            onClick={() => setActiveTab('admin')}
            className={`font-bold text-amber-700 flex items-center gap-0.5`}
          >
            <Lock className="w-3 h-3" /> 관리자
          </button>
        )}
      </div>
    </header>
  );
};
