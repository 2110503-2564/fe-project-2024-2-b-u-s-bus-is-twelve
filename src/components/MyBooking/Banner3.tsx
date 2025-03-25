'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { BookingResponse } from '../../../interface';

interface Booking {
  _id: string;
  nameLastname: string;
  tel: string;
  nights: number;
  hotel: string; // you can change to hotel.name if populated
  bookingDate: string;
  createdAt: string;
}

export default function Page() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  const {data:session} = useSession();
  if (!session) {
    router.push("/signin")
  }

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(`http://localhost:5003/api/v1/hotels/${session?.user.id}/bookings`, {
            headers: {
                authorization: `Bearer ${session?.user.token}`
            }
        });
        const data:BookingResponse = await res.json();
        console.log('Booking data:', data); // ✅ ดูว่าเป็น array หรือ object
  
        setBookings(data.data); // ถ้า data.bookings ค่อยเปลี่ยนตรงนี้
      } catch (err) {
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchBookings();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">All Bookings</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : bookings.count === 0 ? (
        <p className="text-center text-gray-600">No bookings found.</p>
      ) : (
        <div className="space-y-6 max-w-2xl mx-auto">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {booking.hotel}
              </h2>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Name:</span>{' '}
                {booking.nameLastname}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Phone:</span>{' '}
                {booking.tel}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Nights:</span>{' '}
                {booking.night}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Booking Date:</span>{' '}
                {dayjs(booking.bookingDate).format('D MMM YYYY')}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Created At:</span>{' '}
                {dayjs(booking.createdAt).format('D MMM YYYY, HH:mm')}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}