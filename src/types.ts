export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export type ServiceType = 
  | '일반 가정 청소' 
  | '욕실 집중 청소' 
  | '주방 집중 청소' 
  | '이사 전후 청소' 
  | '맞춤 청소';

export type HouseType = '원룸' | '투룸' | '아파트' | '빌라' | '단독주택';

export type ReservationStatus = '예약 대기' | '예약 확정' | '청소 완료' | '예약 취소';

export interface Reservation {
  id: string;
  userId: string;
  userName: string;
  phone: string;
  email: string;
  address: string;
  detailAddress?: string;
  serviceType: ServiceType;
  houseType: HouseType;
  size: string; // 평수 또는 공간 크기 (예: "24평")
  reservationDate: string; // YYYY-MM-DD
  reservationTime: string; // HH:MM
  requestNote: string;
  status: ReservationStatus;
  price: number;
  createdAt: string;
}

export interface ServiceInfo {
  id: string;
  title: ServiceType;
  subtitle: string;
  description: string;
  ctaText: string;
  iconName: string;
  basePrice: number;
  features: string[];
  recommendedFor: string;
  imageUrl: string;
}

export interface PricingPlan {
  id: string;
  frequency: string;
  duration: string;
  subtitle: string;
  monthlyPrice: number;
  discountRate?: string;
  isPopular?: boolean;
}

export interface CustomerReview {
  id: string;
  userName: string;
  rating: number;
  serviceType: ServiceType;
  date: string;
  comment: string;
  houseType: string;
  beforeAfterImage?: string;
}
