import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Trash2, AlertCircle, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cancelReservation, getUserReservations } from '../../lib/reservationService';
import { Reservation } from '../../types';

export const MyReservationsView: React.FC<{ onBookNew: () => void }> = ({ onBookNew }) => {
  const { currentUser, onOpenAuth } = useAuth();
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    if (!currentUser) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const list = await getUserReservations(currentUser.uid, currentUser.email || '');
    setReservations(list);
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, [currentUser]);

  const handleCancel = async (id: string) => {
    if (confirm('정말로 이 청소 방문 일정을 취소하시겠습니까?')) {
      await cancelReservation(id);
      fetchList();
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case '예약 대기':
        return <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full text-xs">⏳ 예약 대기</span>;
      case '예약 확정':
        return <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-xs">✓ 예약 확정</span>;
      case '청소 완료':
        return <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full text-xs">✨ 청소 완료</span>;
      default:
        return <span className="bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounded-full text-xs">✕ 취소됨</span>;
    }
  };

  if (!currentUser) {
    return (
      <div className="bg-white py-24 text-center max-w-md mx-auto px-4 space-y-6">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto">
          <Calendar className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">로그인이 필요한 페이지입니다</h2>
        <p className="text-sm text-slate-500 leading-relaxed">
          CleanExpert 회원으로 로그인하신 뒤 예약 내역 확인과 실시간 방문 확정 상태를 조회해보세요.
        </p>
        <button
          onClick={onOpenAuth}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-500/25 cursor-pointer"
        >
          간편 로그인하기
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-12 sm:py-20 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">내 예약 내역 확인</h1>
            <p className="text-sm text-slate-500 mt-1">실시간 방문 예약 일정 및 진행 상태를 확인합니다.</p>
          </div>
          <button
            onClick={onBookNew}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-md cursor-pointer shrink-0"
          >
            + 새 방문 청소 예약하기
          </button>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500 font-medium">예약 데이터를 불러오는 중...</div>
        ) : reservations.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-5">
            <div className="text-4xl">🧽</div>
            <h3 className="text-xl font-bold text-slate-800">아직 예약된 청소 일정이 없습니다</h3>
            <p className="text-sm text-slate-500">원하는 날짜와 시간만 선택하시면 전문 클리너가 찾아갑니다.</p>
            <button
              onClick={onBookNew}
              className="bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              원하는 시간 예약하러 가기
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {reservations.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col lg:flex-row justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {getStatusBadge(item.status)}
                    <span className="text-sm font-bold text-blue-600">{item.serviceType}</span>
                    <span className="text-xs text-slate-400">• {item.houseType} ({item.size})</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 pt-1">
                    <div className="flex items-center gap-2 font-semibold">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span>방문 예정일: {item.reservationDate}</span>
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>희망 시간: {item.reservationTime}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2 text-slate-600">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{item.address} {item.detailAddress}</span>
                    </div>
                  </div>

                  {item.requestNote && (
                    <div className="bg-slate-50 p-3 rounded-xl text-xs text-slate-600 border border-slate-100">
                      📝 <span className="font-semibold">요청사항:</span> {item.requestNote}
                    </div>
                  )}
                </div>

                <div className="flex lg:flex-col justify-between lg:justify-end items-end gap-4 border-t lg:border-t-0 pt-4 lg:pt-0">
                  <div className="text-right">
                    <div className="text-xs text-slate-400">서비스 요금</div>
                    <div className="text-xl font-bold text-slate-900">{item.price?.toLocaleString() || '60,000'}원~</div>
                  </div>

                  {(item.status === '예약 대기' || item.status === '예약 확정') && (
                    <button
                      onClick={() => handleCancel(item.id)}
                      className="text-xs font-semibold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      예약 취소 요청
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
