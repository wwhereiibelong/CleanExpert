import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Reservation, ReservationStatus } from '../types';

const RESERVATIONS_COLLECTION = 'reservations';

export const createReservation = async (reservationData: Omit<Reservation, 'id'>): Promise<Reservation> => {
  try {
    const docRef = await addDoc(collection(db, RESERVATIONS_COLLECTION), reservationData);
    return { id: docRef.id, ...reservationData };
  } catch (error) {
    console.error('Error creating reservation:', error);
    throw error;
  }
};

export const getAllReservations = async (): Promise<Reservation[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, RESERVATIONS_COLLECTION));
    const list: Reservation[] = [];
    querySnapshot.forEach((docSnap) => {
      list.push({ id: docSnap.id, ...docSnap.data() } as Reservation);
    });
    // 메모리 내 정렬을 통해 파이어베이스 복합 인덱스 오류 방지
    return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch (error) {
    console.error('Error fetching all reservations:', error);
    return [];
  }
};

export const getUserReservations = async (userId: string, userEmail: string): Promise<Reservation[]> => {
  try {
    const all = await getAllReservations();
    return all.filter(r => r.userId === userId || (userEmail && r.email === userEmail));
  } catch (error) {
    console.error('Error fetching user reservations:', error);
    return [];
  }
};

export const updateReservationStatus = async (reservationId: string, newStatus: ReservationStatus): Promise<void> => {
  try {
    const docRef = doc(db, RESERVATIONS_COLLECTION, reservationId);
    await updateDoc(docRef, { status: newStatus });
  } catch (error) {
    console.error('Error updating status:', error);
    throw error;
  }
};

export const cancelReservation = async (reservationId: string): Promise<void> => {
  return updateReservationStatus(reservationId, '예약 취소');
};
