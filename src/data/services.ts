import { CustomerReview, PricingPlan, ServiceInfo } from '../types';

export const CLEANING_SERVICES: ServiceInfo[] = [
  {
    id: 'general',
    title: '일반 가정 청소',
    subtitle: '거실, 방, 주방, 욕실 등 기본 생활 공간 청소',
    description: '단순히 겉만 훔치는 청소가 아닙니다. 거실 바닥 먼지 제거 및 물걸레 청소, 주방 싱크대 주변 정리, 가구 표면 먼지 제거까지 정기적으로 가장 많이 사랑받는 표준 홈클리닝입니다.',
    ctaText: '가장 많이 선택하는 기본 홈클리닝',
    iconName: 'Home',
    basePrice: 60000,
    features: [
      '거실 및 방 전체 바닥 진공 및 물걸레 청소',
      '주방 싱크대 표면 가벼운 세척 및 정리',
      '욕실 세면대, 거울, 변기 기본 정돈',
      '가구 표면 및 쉽게 쌓이는 생활 먼지 제거',
      '쓰레기통 비우기 및 분리수거 마무리'
    ],
    recommendedFor: '바쁜 맞벌이 부부, 혼자 사는 1인 가구 정기 관리',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bathroom',
    title: '욕실 집중 청소',
    subtitle: '물때, 곰팡이, 세면대, 변기, 바닥 집중 관리',
    description: '미루고 미루다 굳어버린 물때와 실리콘 곰팡이 걱정 끝! 친환경 세정과 스팀 살균 기법을 활용하여 세면대 타일 사이사이부터 배수구 안쪽까지 쾌적하게 살균 세척합니다.',
    ctaText: '미루기 쉬운 욕실 청소를 한 번에',
    iconName: 'Droplets',
    basePrice: 75000,
    features: [
      '샤워부스 유리 물때 및 비누 찌꺼기 집중 제거',
      '변기 안쪽 살균 및 요석 세척',
      '세면대 및 수전 광택 복원',
      '타일 줄눈 및 배수구 머리카락 이물질 완벽 제거',
      '천장 및 벽면 습기 물기 닦아내기 마무리'
    ],
    recommendedFor: '환기가 어려워 습기와 곰팡이가 고민인 욕실',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kitchen',
    title: '주방 집중 청소',
    subtitle: '싱크대, 가스레인지, 후드 주변, 조리 공간 관리',
    description: '요리하면서 쌓인 끈적한 기름때와 찌든 음식물 흔적을 완벽하게 제거합니다. 후드 필터 탈거 세척부터 상하부장 겉면 기름기 제거까지 주방의 위생을 새것처럼 되살립니다.',
    ctaText: '기름때와 음식물 흔적까지 깔끔하게',
    iconName: 'Utensils',
    basePrice: 80000,
    features: [
      '가스레인지 / 인덕션 주변 찌든 기름때 분해 세척',
      '주방 환풍기(후드) 필터 탈거 기름 찌꺼기 세정',
      '싱크대 볼 배수구 음식물 물때 탈취 및 살균',
      '주방 상·하부장 겉면 지문 및 기름 얼룩 제거',
      '주방 조리대 상판 전체 위생 살균 소독'
    ],
    recommendedFor: '집에서 요리를 자주 하거나 대청소가 필요한 주방',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'moving',
    title: '이사 전후 청소',
    subtitle: '입주 전, 퇴거 후 공간 전체 정리 및 디테일 청소',
    description: '이전 거주자의 묵은 흔적이나 신축 건물의 미세 분진을 입주 전 완벽히 제거합니다. 서랍장 분리 청소, 창틀 미세먼지, 베란다 배수구까지 새 출발을 위한 필수 프리미엄 클리닝입니다.',
    ctaText: '새 출발 전 꼭 필요한 프리미엄 청소',
    iconName: 'Truck',
    basePrice: 180000,
    features: [
      '모든 방 창틀 및 베란다 바닥 미세먼지 세척',
      '붙박이장 및 신발장 서랍장 탈거 후 내부 분진 제거',
      '전등 커버 분리 후 내부 날벌레 및 먼지 닦기',
      '주방·욕실 전체 살균 스팀 및 소독 처리',
      '현관문 및 바닥 타일 정돈 완료 후 검수'
    ],
    recommendedFor: '이사 예정자, 입주 전 피톤치드 쾌적함이 필요한 공간',
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'custom',
    title: '맞춤 청소',
    subtitle: '고객 요청사항에 따른 선택형 커스텀 홈클리닝',
    description: '반려동물 털 집중 케어, 아이방 살균 소독, 냉장고 내부 세척, 대용량 다용도실 정리 등 고객님이 원하시는 특정 영역을 사전 상담을 통해 집중적으로 해결해드립니다.',
    ctaText: '필요한 공간만 골라 예약 가능',
    iconName: 'Sliders',
    basePrice: 70000,
    features: [
      '반려동물 카펫/소파 털 집중 진공 및 탈취 케어',
      '아이방 장난감 및 가구 표면 살균 소독 스팀',
      '냉장고 내부 칸칸 분리 세척 및 탈취제 비치',
      '다용도실 및 베란다 짐 묵은 먼지 정리',
      '고객 요구사항 1:1 체크리스트 맞춤 수행'
    ],
    recommendedFor: '특수한 목적이나 나만의 케어 리스트가 있는 고객',
    imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-1w-1m',
    frequency: '주 1회',
    duration: '1개월 이용권',
    subtitle: 'CleanExpert 정기구독 서비스를 가볍게 체험해보세요',
    monthlyPrice: 80000
  },
  {
    id: 'plan-1w-6m',
    frequency: '주 1회',
    duration: '6개월 이용권',
    subtitle: '6개월 정기구독 시 특별한 할인이 적용됩니다!',
    monthlyPrice: 75000,
    discountRate: '약 6% 절감',
    isPopular: true
  },
  {
    id: 'plan-2w-1m',
    frequency: '주 2회',
    duration: '1개월 이용권',
    subtitle: '깔끔한 일상을 가장 많이 추천하시는 일주일 2회 구독',
    monthlyPrice: 150000
  },
  {
    id: 'plan-2w-6m',
    frequency: '주 2회',
    duration: '6개월 이용권',
    subtitle: '특별한 할인을 더하다! CleanExpert 프리미엄 VIP 케어',
    monthlyPrice: 120000,
    discountRate: '20% 파격 할인'
  }
];

export const SAMPLE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    userName: '김*현 고객님',
    rating: 5,
    serviceType: '욕실 집중 청소',
    houseType: '아파트 (32평)',
    date: '2026.06.25',
    comment: '맞벌이라 욕실 청소 미루다가 처음 예약해봤는데 세면대랑 수전 반짝거리는 거 보고 감동했습니다. 곰팡이도 싹 사라지고 스팀 냄새도 너무 상쾌해요. 정기구독 바로 신청합니다!',
    beforeAfterImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rev-2',
    userName: '이*준 고객님',
    rating: 5,
    serviceType: '일반 가정 청소',
    houseType: '오피스텔 원룸',
    date: '2026.06.22',
    comment: '원하는 시간 예약 기능이 신의 한 수네요! 퇴근 전에 와주셔서 청소해주셨는데 집에 딱 들어오니 호텔 온 느낌이었어요. 클리너님도 친절하시고 요청사항에 남긴 고양이 털 청소도 완벽했습니다.',
    beforeAfterImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rev-3',
    userName: '박*영 고객님',
    rating: 5,
    serviceType: '주방 집중 청소',
    houseType: '빌라 (24평)',
    date: '2026.06.18',
    comment: '후드 기름때 혼자 감당 안 돼서 맡겼는데 분리해서 속까지 닦아주셨어요. 싱크대 하부장 얼룩까지 지워주셔서 요리할 맛이 납니다. 가격 대비 만족도 200%입니다.',
    beforeAfterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
  }
];
