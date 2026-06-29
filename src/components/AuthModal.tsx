import React, { useState } from 'react';
import { X, Sparkles, LogIn, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const { loginWithGoogle, toggleAdminSimulate, isSimulatedAdmin } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    try {
      await loginWithGoogle();
      setLoading(false);
      onSuccess?.();
      onClose();
    } catch (err: any) {
      setLoading(false);
      setError('구글 로그인에 실패했습니다. 팝업 차단 설정을 확인해주세요.');
    }
  };

  const handleDemoAdmin = () => {
    toggleAdminSimulate();
    onSuccess?.();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3 mb-8">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-sans">
            CleanExpert 시작하기
          </h3>
          <p className="text-sm text-slate-500">
            CleanExpert 회원으로 간편하게 예약하고 방문 일정을 실시간으로 확인해보세요.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2.5 text-xs text-red-600">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-medium py-3.5 px-4 rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <img 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="Google Logo" 
              className="w-5 h-5"
            />
            <span>Google 계정으로 빠른 간편 로그인</span>
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-3 text-gray-400 font-semibold">미리보기 편의 기능</span></div>
          </div>

          <button
            onClick={handleDemoAdmin}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-all border ${
              isSimulatedAdmin 
                ? 'bg-amber-500 text-white border-amber-500 shadow-md' 
                : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-200'
            }`}
          >
            <ShieldAlert className="w-4 h-4" />
            <span>{isSimulatedAdmin ? '✓ 현재 관리자 모드 체험 중 (클릭 시 해제)' : '⚡ 관리자 대시보드 모드 체험하기'}</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 space-y-2 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span>로그인 시 개인정보는 안전하게 보호됩니다.</span>
          </div>
        </div>

      </div>
    </div>
  );
};
