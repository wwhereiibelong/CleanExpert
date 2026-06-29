import React from 'react';
import { ShieldCheck, Users, Sparkles, CheckCircle2, Award, HeartHandshake } from 'lucide-react';

export const AboutView: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  const values = [
    {
      icon: Users,
      title: '100% 신원 검증 전문 인력',
      desc: '엄격한 서류 심사와 전문 아카데미 실습 교육을 이수한 베테랑 홈클리너만이 고객님의 공간에 방문합니다.'
    },
    {
      icon: ShieldCheck,
      title: '안전한 친환경 세정제',
      desc: '독한 화학 성분이 남지 않도록 자연 유래 친환경 인증 세정제와 고온 스팀 살균 기법을 표준으로 채택하고 있습니다.'
    },
    {
      icon: Award,
      title: '체계적인 5단계 체크리스트',
      desc: '단순히 눈에 보이는 곳만 훔치지 않습니다. 현관, 주방, 욕실, 거실, 침실 각각의 규격화된 표준 세부 항목을 완수합니다.'
    }
  ];

  return (
    <div className="bg-white pt-12 pb-24">
      {/* Top Banner */}
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6 mb-16">
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
          About CleanExpert
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans leading-tight">
          CleanExpert는 집 안의 쾌적함을 되찾아주는<br className="hidden sm:inline" />
          <span className="text-blue-600"> 홈클리닝 전문 브랜드</span>입니다.
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          우리는 단순히 귀찮은 청소를 대신하는 것이 아닙니다. 고객님이 지친 일상에서 돌아왔을 때 가장 온전하고 편안한 휴식을 누릴 수 있도록 생활 공간의 가치를 되살립니다.
        </p>
      </div>

      {/* Philosophy Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              청소는 서비스가 아닌,<br />신뢰로 짓는 공간입니다.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              가장 프라이빗한 공간인 '우리 집'에 누군가를 들인다는 것의 무거움을 잘 알고 있습니다. 그렇기에 CleanExpert는 투명한 예약 시스템, 정찰제 요금제, 파손 보상 책임제라는 3대 원칙을 철저히 지킵니다.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>원하는 날짜와 시간 100% 자율 예약제</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>예약 직후 담당 클리너 매칭 알림 및 투명 관리</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>불만족 시 24시간 이내 무상 재청소 보장 프로그램</span>
              </li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" 
              alt="Professional Cleaner"
              className="w-full h-full object-cover aspect-4/3"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 text-sm font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg w-fit">
                <HeartHandshake className="w-4 h-4 text-blue-400" />
                <span>누적 예약 만족도 98.7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">왜 CleanExpert 전문가인가요?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow text-left space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="pt-12">
          <button
            onClick={onBookNow}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            우리 집 전문가 청소 바로 예약하기
          </button>
        </div>
      </div>
    </div>
  );
};
