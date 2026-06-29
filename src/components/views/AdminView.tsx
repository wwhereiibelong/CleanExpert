import React, { useEffect, useState } from 'react';
import { Lock, RefreshCw, CheckCircle, Clock, CheckCircle2, AlertTriangle, User, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { getAllReservations, updateReservationStatus } from '../../lib/reservationService';
import { Reservation, ReservationStatus } from '../../types';

export const AdminView: React.FC = () => {
  const [list, setList] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('전체');

  const loadData = async () => {
    setLoading(true);
    const data = await getAllReservations();
    setList(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id: string, newStatus: ReservationStatus) => {
    await updateReservationStatus(id, newStatus);
    loadData();
  };

  // 대시보드 집계
  const todayStr = new Date().toISOString().split('T')[0];
  const todayCount = list.filter(r => r.reservationDate === todayStr).length;
  const waitingCount = list.filter(r => r.status === '예약 대기').length;
  const confirmedCount = list.filter(r => r.status === '예약 확정').length;
  const completedCount = list.filter(r => r.status === '청소 완료').length;

  const filteredList = filter === '전체' ? list : list.filter(r => r.status === filter);

  return (
    <div className="bg-slate-100 py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Lock className="w-4 h-4" /> Admin Console
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight mt-1">CleanExpert 관리자 대시보드</h1>
            <p className="text-slate-400 text-sm mt-1">실시간 고객 예약 접수 현황을 확인하고 일정을 확정 관리합니다.</p>
          </div>
          <button
            onClick={loadData}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 transition-colors cursor-pointer shrink-0"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            <span>목록 새로고침</span>
          </button>
        </div>

        {/* 대시보드 통계 카드 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-1">
            <div className="text-xs font-semibold text-slate-500">오늘 방문 예정 예약</div>
            <div className="text-3xl font-black text-slate-900">{todayCount}건</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-amber-200 bg-amber-50/30 shadow-xs space-y-1">
            <div className="text-xs font-semibold text-amber-700">신규 대기 중 예약</div>
            <div className="text-3xl font-black text-amber-600">{waitingCount}건</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-blue-200 bg-blue-50/30 shadow-xs space-y-1">
            <div className="text-xs font-semibold text-blue-700">일정 확정 예약</div>
            <div className="text-3xl font-black text-blue-600">{confirmedCount}건</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-green-200 bg-green-50/30 shadow-xs space-y-1">
            <div className="text-xs font-semibold text-green-700">청소 완료 예약</div>
            <div className="text-3xl font-black text-green-600">{completedCount}건</div>
          </div>
        </div>

        {/* 필터 탭 */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl border border-slate-200 w-fit text-xs font-semibold">
          {['전체', '예약 대기', '예약 확정', '청소 완료', '예약 취소'].map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-4 py-2 rounded-xl transition-colors cursor-pointer ${
                filter === st ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {st}
            </button>
          ))}
        </div>

        {/* 예약 리스트 테이블 */}
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
          {loading ? (
            <div className="py-20 text-center text-slate-500">데이터 로딩 중...</div>
          ) : filteredList.length === 0 ? (
            <div className="py-20 text-center text-slate-400">해당 조건의 예약 내역이 없습니다.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase font-mono">
                    <th className="p-4">예약번호 / 신청일</th>
                    <th className="p-4">고객 정보</th>
                    <th className="p-4">방문 일정 및 주소</th>
                    <th className="p-4">서비스 종류 / 크기</th>
                    <th className="p-4">요청사항</th>
                    <th className="p-4 text-right">상태 관리 변경</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredList.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 align-top font-mono text-xs text-slate-400">
                        <div className="font-bold text-slate-700 truncate max-w-[100px]" title={row.id}>
                          {row.id.slice(0, 8)}...
                        </div>
                        <div>{row.createdAt?.split('T')[0]}</div>
                      </td>

                      <td className="p-4 align-top space-y-1">
                        <div className="font-bold text-slate-900">{row.userName}</div>
                        <div className="text-xs text-slate-500 font-mono">{row.phone}</div>
                      </td>

                      <td className="p-4 align-top space-y-1 max-w-xs">
                        <div className="font-bold text-blue-600 flex items-center gap-1">
                          <CalendarIcon className="w-3.5 h-3.5" /> {row.reservationDate} {row.reservationTime}
                        </div>
                        <div className="text-xs text-slate-600 truncate" title={`${row.address} ${row.detailAddress || ''}`}>
                          {row.address} {row.detailAddress}
                        </div>
                      </td>

                      <td className="p-4 align-top space-y-1">
                        <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-700">
                          {row.serviceType}
                        </span>
                        <div className="text-xs text-slate-400">{row.houseType} ({row.size})</div>
                      </td>

                      <td className="p-4 align-top max-w-[200px]">
                        <p className="text-xs text-slate-600 line-clamp-2" title={row.requestNote}>
                          {row.requestNote || '-'}
                        </p>
                      </td>

                      <td className="p-4 align-top text-right">
                        <select
                          value={row.status}
                          onChange={(e) => handleStatusChange(row.id, e.target.value as ReservationStatus)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg border cursor-pointer outline-hidden ${
                            row.status === '예약 대기' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                            row.status === '예약 확정' ? 'bg-blue-100 text-blue-900 border-blue-300' :
                            row.status === '청소 완료' ? 'bg-green-100 text-green-900 border-green-300' :
                            'bg-gray-100 text-gray-700 border-gray-300'
                          }`}
                        >
                          <option value="예약 대기">⏳ 예약 대기</option>
                          <option value="예약 확정">✓ 예약 확정</option>
                          <option value="청소 완료">✨ 청소 완료</option>
                          <option value="예약 취소">✕ 예약 취소</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
