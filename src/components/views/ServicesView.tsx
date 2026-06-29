import React from 'react';
import { Home, Droplets, Utensils, Truck, Sliders, Check, Sparkles, ChevronRight, ArrowRight } from 'lucide-react';
import { CLEANING_SERVICES, PRICING_PLANS } from '../../data/services';
import { ServiceInfo } from '../../types';

interface ServicesViewProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onSelectService }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return Home;
      case 'Droplets': return Droplets;
      case 'Utensils': return Utensils;
      case 'Truck': return Truck;
      default: return Sliders;
    }
  };

  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-blue-600 bg-blue-100/80 px-3 py-1.5 rounded-full uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            필요한 청소만 골라서 예약하세요.
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            집 전체 홈클리닝부터 미루기 쉬운 주방·욕실 집중 살균, 이사 입주 청소까지 고객님의 상황과 공간 구조에 맞춘 프리미엄 서비스를 선택할 수 있습니다.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-12">
          {CLEANING_SERVICES.map((service: ServiceInfo) => {
            const Icon = getIcon(service.iconName);
            return (
              <div 
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10"
              >
                {/* Image & Price info (Col 5) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-16/10 shadow-inner">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-blue-700 flex items-center gap-1.5 shadow-sm">
                      <Icon className="w-4 h-4 text-blue-600" />
                      <span>{service.title}</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
                    <div className="text-xs font-medium text-slate-500">표준 예상 서비스 요금</div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                        {service.basePrice.toLocaleString()}원~
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ 1회 기준 (평수에 따라 상이)</span>
                    </div>
                  </div>
                </div>

                {/* Details & CTA (Col 7) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {service.ctaText}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-4 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">표준 제공 체크리스트</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat: string, i: number) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                            <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      💡 <span className="font-semibold text-slate-700">추천 대상:</span> {service.recommendedFor}
                    </div>
                    
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all group shrink-0 cursor-pointer"
                    >
                      <span>이 서비스 예약하기</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscription Pricing Table Section */}
        <div className="pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              CleanExpert 정기구독 서비스 요금 알아보기
            </h2>
            <p className="text-sm text-slate-600">
              매주 신경 쓰지 않아도 알아서 깨끗해지는 집. 정기구독 시 특별한 파격 할인 혜택을 드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-2xl p-6 bg-white border flex flex-col justify-between relative transition-transform hover:-translate-y-1 ${
                  plan.isPopular 
                    ? 'border-blue-500 shadow-xl ring-2 ring-blue-500/20' 
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    가장 추천
                  </span>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-slate-900">{plan.frequency}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">{plan.duration}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed min-h-[36px]">
                    {plan.subtitle}
                  </p>
                  <div className="pt-2">
                    <div className="text-2xl font-extrabold text-slate-900">
                      월 {(plan.monthlyPrice / 10000)}만원
                    </div>
                    {plan.discountRate && (
                      <span className="text-xs font-bold text-red-500">{plan.discountRate} 혜택</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService('일반 가정 청소')}
                  className={`w-full mt-6 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    plan.isPopular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  정기구독 신청하기
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
