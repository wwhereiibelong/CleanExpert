import React from 'react';
import { Sparkles, Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';

export const Footer: React.FC<{ onNavigate: (tab: string) => void }> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Clean<span className="text-blue-500">Expert</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              내 집처럼 꼼꼼하게, 전문가가 직접 찾아가는 프리미엄 홈클리닝 서비스. 바쁜 일상 속 청소 걱정은 CleanExpert에게 맡기세요.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-950/50 border border-blue-900/50 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>100% 파손 보상 보험 가입</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">바로가기</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">서비스 소개</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">청소 서비스 종류</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-white transition-colors">이용 방법 안내</button></li>
              <li><button onClick={() => onNavigate('my-reservations')} className="hover:text-white transition-colors">예약 조회 및 관리</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">제공 서비스</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>일반 가정 정기 청소</li>
              <li>욕실 집중 살균 청소</li>
              <li>주방 기름때 집중 청소</li>
              <li>이사 전후 입주 청소</li>
              <li>1:1 맞춤 커스텀 청소</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white font-mono">고객 상담센터</h4>
            <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight">
              <Phone className="w-5 h-5 text-blue-500" />
              <span>02-1234-5678</span>
            </div>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>운영시간: 평일 08:00 - 20:00 (주말 휴무)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>support@cleanexpert.co.kr</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>서울시 강남구 테헤란로 123 클린타워 4층</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 CleanExpert Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer">이용약관</span>
            <span className="hover:text-slate-400 cursor-pointer font-semibold text-slate-400">개인정보처리방침</span>
            <span className="hover:text-slate-400 cursor-pointer">사업자정보확인</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
