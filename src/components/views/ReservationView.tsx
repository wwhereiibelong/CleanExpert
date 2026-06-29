import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { createReservation } from '../../lib/reservationService';
import { HouseType, ServiceType } from '../../types';
import { CLEANING_SERVICES } from '../../data/services';

interface ReservationViewProps {
  preselectedService?: ServiceType;
  onSuccess: () => void;
}

export const ReservationView: React.FC<ReservationViewProps> = ({ preselectedService, onSuccess }) => {
  const { currentUser, userProfile, onOpenAuth } = useAuth();
  
  const [serviceType, setServiceType] = useState<ServiceType>(preselectedService || '일반 가정 청소');
  const [houseType, setHouseType] = useState<HouseType>('아파트');
  const [size, setSize] = useState('24평');
  
  // 기본 내일 날짜
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDate = tomorrow.toISOString().split('T')[0];

  const [date, setDate] = useState(defaultDate);
  const [time, setTime] = useState('10:00');
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [requestNote, setRequestNote] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setServiceType(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (userProfile) {
      setName(userProfile.name || '');
      setEmail(userProfile.email || '');
      if (userProfile.phone) setPhone(userProfile.phone);
      if (userProfile.address) setAddress(userProfile.address);
    } else if (currentUser) {
      setName(currentUser.displayName || '');
      setEmail(currentUser.email || '');
    }
  }, [userProfile, currentUser]);

  const selectedServiceObj = CLEANING_SERVICES.find(s => s.title === serviceType);
  const basePrice = selectedServiceObj ? selectedServiceObj.basePrice : 60000;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !phone || !address || !date || !time) {
      setError('예약자 이름, 연락처, 방문 날짜 및 주소를 모두 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      await createReservation({
        userId: currentUser?.uid || 'guest_' + Date.now(),
        userName: name,
        phone,
        email: email || 'guest@cleanexpert.com',
        address,
        detailAddress,
        serviceType,
        houseType,
        size,
        reservationDate: date,
        reservationTime: time,
        requestNote: requestNote || '특이사항 없음',
        status: '예약 대기',
        price: basePrice,
        createdAt: new Date().toISOString()
      });

      setLoading(false);
      alert('방문 청소 예약 신청이 완료되었습니다! 담당자가 내용을 확인한 뒤 일정을 최종 확정해드립니다.');
      onSuccess();
    } catch (err: any) {
      setLoading(false);
      setError('예약 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <div className="bg-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Hook */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-widest">
            Online Booking
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            원하는 날짜와 시간만 선택하세요.
          </h1>
          <p className="text-lg font-bold text-blue-600">
            나머지는 CleanExpert가 깨끗하게 해결합니다.
          </p>
          <p className="text-sm text-slate-500 pt-1">
            청소가 필요한 날, 가능한 시간을 선택하고 요청사항을 남겨주세요. 담당자가 확인 뒤 방문 준비를 진행합니다.
          </p>
        </div>

        {/* Main Form Box */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-slate-200/80 space-y-10">
          
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-sm text-red-700">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Step 1: 서비스 종류 */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-mono">1</span>
              <span>청소 서비스 종류 선택</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CLEANING_SERVICES.map((s) => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => setServiceType(s.title)}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-2 transition-all cursor-pointer ${
                    serviceType === s.title 
                      ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-600/20 font-bold text-blue-900' 
                      : 'border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="text-sm">{s.title}</div>
                  <div className="text-xs text-slate-500 font-normal">{s.basePrice.toLocaleString()}원~</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: 방문 일정 */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-mono">2</span>
              <span>원하는 날짜 및 방문 시간 선택</span>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-blue-600" /> 희망 방문 날짜
                </span>
                <input 
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 outline-hidden"
                  required
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" /> 방문 희망 시간대
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((ts) => (
                    <button
                      type="button"
                      key={ts}
                      onClick={() => setTime(ts)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        time === ts 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs' 
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {ts}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: 집 정보 */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-mono">3</span>
              <span>집 유형 및 평수 크기</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                value={houseType}
                onChange={(e) => setHouseType(e.target.value as HouseType)}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 bg-white"
              >
                <option value="원룸">원룸 / 오피스텔</option>
                <option value="투룸">투룸 / 빌라</option>
                <option value="아파트">아파트</option>
                <option value="빌라">빌라 / 연립주택</option>
                <option value="단독주택">단독주택</option>
              </select>

              <input
                type="text"
                placeholder="평수 또는 공간 크기 (예: 24평)"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 bg-white"
                required
              />
            </div>
          </div>

          {/* Step 4: 방문 주소 */}
          <div className="space-y-4">
            <label className="flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-mono">4</span>
              <span>방문하실 주소</span>
            </label>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="도로명 또는 지번 주소 (예: 서울시 강남구 테헤란로 123)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800"
                required
              />
              <input
                type="text"
                placeholder="상세 주소 (동/호수, 공동현관 출입번호 등)"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800"
              />
            </div>
          </div>

          {/* Step 5: 고객 정보 */}
          <div className="space-y-4">
            <label className="flex items-center justify-between text-base font-bold text-slate-900">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-mono">5</span>
                <span>예약자 연락처 정보</span>
              </div>
              {!currentUser && (
                <span onClick={onOpenAuth} className="text-xs text-blue-600 hover:underline cursor-pointer font-medium">
                  ⚡ 로그인하면 자동 입력됩니다
                </span>
              )}
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="예약자 성함"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium"
                required
              />
              <input
                type="tel"
                placeholder="휴대폰 번호 (- 없이 입력)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium"
                required
              />
              <input
                type="email"
                placeholder="이메일 주소"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium"
              />
            </div>
          </div>

          {/* Step 6: 요청사항 Placeholder Hook */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-base font-bold text-slate-900">
              <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-mono">6</span>
              <span>클리너님에게 남길 요청사항</span>
            </label>
            <textarea
              rows={3}
              placeholder="예: 욕실 물때를 집중적으로 청소해주세요.&#13;&#10;예: 주방 후드 주변 기름때가 많아요.&#13;&#10;예: 반려동물이 있어 털 청소를 꼼꼼히 부탁드려요."
              value={requestNote}
              onChange={(e) => setRequestNote(e.target.value)}
              className="w-full border border-slate-300 rounded-2xl p-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-hidden"
            />
          </div>

          {/* Estimated Price Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">Selected Service</div>
              <div className="text-xl font-bold">{serviceType} ({size} 기준)</div>
              <div className="text-xs text-slate-400">방문 예정일: {date} {time}</div>
            </div>

            <div className="text-center sm:text-right">
              <div className="text-xs text-slate-400">표준 서비스 예상 요금</div>
              <div className="text-3xl font-black text-blue-400 font-sans">
                {basePrice.toLocaleString()}원~
              </div>
            </div>
          </div>

          {/* Final CTA Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black text-xl py-5 px-8 rounded-2xl shadow-2xl shadow-blue-600/40 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-3"
          >
            {loading ? (
              <span>예약 전송 중...</span>
            ) : (
              <>
                <ShieldCheck className="w-6 h-6" />
                <span>원하는 시간으로 방문 청소 예약하기</span>
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
};
