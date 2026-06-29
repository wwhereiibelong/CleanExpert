import React from 'react';
import { Calendar, ShieldCheck, Clock, Sparkles, Star, CheckCircle, ArrowRight, Smartphone, ThumbsUp } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../../data/services';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onBookService: (serviceTitle?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onBookService }) => {
  const whyPoints = [
    {
      icon: Clock,
      title: '01. 원하는 시간 예약',
      desc: '내 일정과 라이프스타일에 맞춰 방문 청소를 자율적으로 예약할 수 있습니다.'
    },
    {
      icon: ShieldCheck,
      title: '02. 전문가 방문 청소',
      desc: '엄격한 서류 심사와 가정 청소 전문 교육 과정을 수료한 베테랑 인력이 직접 방문합니다.'
    },
    {
      icon: Sparkles,
      title: '03. 공간별 맞춤 청소',
      desc: '주방, 욕실, 거실, 침실 등 대청소가 시급하거나 집중 관리가 필요한 공간만 선택할 수 있습니다.'
    },
    {
      icon: Smartphone,
      title: '04. 간편한 예약 관리',
      desc: '로그인 후 예약 내역과 실시간 진행 상태(대기/확정/완료)를 모바일로 언제든 확인 가능합니다.'
    }
  ];

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      
      {/* 1. Hero Banner Section */}
      <section className="relative bg-linear-to-b from-blue-50/70 via-white to-white pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold tracking-tight shadow-2xs">
              <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>매주 찾아가는 프리미엄 홈클리닝 정기구독 론칭</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-sans leading-[1.15]">
                깨끗한 집,<br />
                <span className="text-blue-600 bg-clip-text">오늘부터 더 쉽게.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                CleanExpert가 원하는 날짜와 시간에 직접 찾아갑니다.
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed pt-2">
                바쁜 일상 속 청소 걱정은 전문가에게 맡기세요.<br className="hidden sm:inline" />
                주방, 욕실, 거실, 침실까지 내 집처럼 꼼꼼하게 관리해드립니다.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onBookService()}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>원하는 시간 예약하기</span>
              </button>
              
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base px-7 py-4 rounded-2xl transition-colors cursor-pointer"
              >
                <span>서비스 요금 알아보기</span>
                <ArrowRight className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>가입비 없음</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% 자율 일정 선택</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>파손 보상 보험</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80" 
                alt="Clean Living Room" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-blue-600 px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider">
                  실시간 방문 예약 유도
                </span>
                <p className="text-sm font-medium leading-snug text-slate-100">
                  "예약은 간편하게, 청소는 전문가답게. 우리 집 청소 더 이상 미루지 마세요."
                </p>
              </div>
            </div>

            {/* Floating Hook Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs animate-bounce">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 fill-amber-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">고객 만족도 4.9 / 5.0</div>
                <div className="text-[11px] text-slate-500">재이용 의향 98% 달성</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 서비스 장점 (Why CleanExpert) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-widest uppercase text-blue-600">Why CleanExpert</h2>
          <p className="text-3xl font-bold text-slate-900 tracking-tight">왜 CleanExpert일까요?</p>
          <p className="text-slate-600 text-sm sm:text-base">단순히 보기에만 좋은 홈클리닝이 아닙니다. 고객 중심의 체계적인 방문 시스템을 약속합니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-blue-600 text-blue-600 group-hover:text-white shadow-sm flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 이용 방법 안내 (How It Works) */}
      <section id="how-it-works" className="bg-slate-900 text-white py-20 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400">Easy 3 Steps</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">청소 예약은 단 3단계면 충분합니다.</h2>
            <p className="text-slate-400 text-sm sm:text-base">복잡한 전화 상담이나 대기 없이 홈페이지에서 간편하게 일정을 확정하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 relative space-y-4">
              <div className="text-4xl font-extrabold font-mono text-blue-500/30 absolute top-6 right-6">STEP 01</div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-xl font-bold pt-2">로그인 또는 회원가입</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                구글 간편 로그인이나 이메일 회원가입으로 나의 예약 프로필을 빠르게 생성합니다.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-blue-500/50 ring-2 ring-blue-500/20 relative space-y-4">
              <div className="text-4xl font-extrabold font-mono text-blue-500/30 absolute top-6 right-6">STEP 02</div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-xl font-bold pt-2">원하는 날짜와 시간 선택</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                청소가 필요한 서비스 종류를 고르고 방문 가능한 날짜와 희망 시간대를 자율적으로 고릅니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 relative space-y-4">
              <div className="text-4xl font-extrabold font-mono text-blue-500/30 absolute top-6 right-6">STEP 03</div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-xl font-bold pt-2">주소와 요청사항 입력 후 완료</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                방문 주소를 입력하고 '욕실 물때 집중' 등 세부 요청을 남기면 실시간 예약이 완료됩니다.
              </p>
            </div>

          </div>

          <div className="text-center pt-4">
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800 text-blue-300 px-6 py-3 rounded-2xl text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>예약 후 관리자가 내용을 신속히 확인하여 방문 일정을 확정해드립니다.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 고객 생생 후기 (Customer Reviews) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest uppercase text-blue-600">Real Reviews</h2>
            <p className="text-3xl font-bold text-slate-900 tracking-tight">고객님들이 증명하는 CleanExpert</p>
          </div>
          <button 
            onClick={() => onNavigate('services')}
            className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            전체 서비스 보러가기 <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_REVIEWS.map((rev) => (
            <div key={rev.id} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">
                    {rev.serviceType}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {rev.beforeAfterImage && (
                <div className="rounded-xl overflow-hidden h-36 relative">
                  <img src={rev.beforeAfterImage} alt="청소 후기 이미지" className="w-full h-full object-cover" />
                  <span className="absolute bottom-2 right-2 bg-slate-900/80 text-white text-[10px] px-2 py-0.5 rounded">
                    청소 완료 공간
                  </span>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-800">{rev.userName}</span>
                <span>{rev.houseType} • {rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 예약 유도형 대형 풋터 배너 (Bottom Conversion CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-linear-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/30 space-y-8">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          
          <div className="space-y-4 relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              이번 주말, 청소 대신<br />휴식을 선택하세요.
            </h2>
            <p className="text-blue-100 text-base sm:text-lg">
              CleanExpert가 집 안의 번거로운 청소를 완벽하게 대신해드립니다.<br className="hidden sm:inline" />
              원하는 날짜와 시간을 선택하고 편안한 내일을 맞이하세요.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <button
              onClick={() => onBookService()}
              className="bg-white hover:bg-slate-100 text-blue-700 font-extrabold text-lg px-10 py-5 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-3"
            >
              <Calendar className="w-6 h-6 text-blue-600" />
              <span>방문 청소 지금 예약하기</span>
            </button>
          </div>

          <div className="text-xs text-blue-200 font-medium pt-2">
            "원하는 날짜와 시간만 선택하세요. 나머지는 CleanExpert가 깨끗하게 해결합니다."
          </div>
        </div>
      </section>

    </div>
  );
};
