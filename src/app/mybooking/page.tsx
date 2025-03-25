'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { CircularProgress, Button, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import dayjs from 'dayjs';
import Banner3 from '@/components/MyBooking/Banner3';

type Hotel = {
  _id: string;
  name: string;
};

type Booking = {
  _id: string;
  nameLastname: string;
  tel: string;
  night: number;
  bookingDate: string;
  hotel: string | {
    _id: string;
    name: string;
  };
};

export default function MyBooking() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState<Booking[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!session) return;

      try {
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/`, {
          headers: {
            Authorization: `Bearer ${session.user.token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || 'Failed to fetch bookings.');
        } else {
          setBookings(data.data);
        }
      } catch (err) {
        setError('Error fetching bookings.');
      } finally {
        setLoading(false);
      }
    };

    const fetchHotels = async () => {
      try {
        const res = await fetch(`${process.env.BACKEND_URL}/api/v1/hotels`);
        const data = await res.json();
        if (res.ok) setHotels(data.data);
      } catch (err) {
        console.error('Error fetching hotels', err);
      }
    };

    fetchBookings();
    fetchHotels();
  }, [session]);

  const handleUpdate = async (bookingId: string, updatedBooking: { 
    nameLastname: string; 
    tel: string; 
    night: number; 
    bookingDate: string; 
    hotel: string | { _id: string };
  }) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${bookingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.token}`, // ป้องกัน error กรณี session เป็น undefined
        },
        body: JSON.stringify({
          nameLastname: updatedBooking.nameLastname,
          tel: updatedBooking.tel,
          night: updatedBooking.night,
          bookingDate: updatedBooking.bookingDate,
          hotel: typeof updatedBooking.hotel === "string" ? updatedBooking.hotel : updatedBooking.hotel._id,
        }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to update booking");
      }
  
      console.log("Booking updated successfully");
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };
  

  const handleDelete = async (bookingId: string) => {
    const confirmed = confirm('Are you sure you want to delete this booking?');
    if (!confirmed) return;
  
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${bookingId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session?.user?.token}`, // ป้องกัน error ถ้า session ยังไม่มีค่า
        },
      });
  
      if (!res.ok) {
        throw new Error('Failed to delete booking');
      }
  
      console.log('Booking deleted successfully');
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };
  


  if (loading) return <div className="text-center"><CircularProgress /></div>;
  if (error) return <div className="text-red-600 text-center">{error}</div>;

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Banner3 />
      <br />
      <h1 className="text-4xl font-playfair font-bold mb-8">My Bookings</h1>

      {bookings.length === 0 && (
        <div className="text-xl text-gray-500">You have no bookings yet.</div>
      )}

      {bookings.map((booking, index) => (
        <div key={index} className="w-full max-w-xl bg-gray-100 rounded-lg shadow-md p-5 mb-4">
          <FormControl fullWidth margin="normal">
            <InputLabel id={`hotel-select-label-${index}`}>Hotel</InputLabel>
            <Select
              labelId={`hotel-select-label-${index}`}
              value={typeof booking.hotel === 'object' ? booking.hotel._id : booking.hotel}
              label="Hotel"
              onChange={(e) => {
                const updatedHotel = e.target.value;
                setBookings(prev =>
                  prev.map((b, i) => i === index ? { ...b, hotel: updatedHotel } : b)
                );
              }}
            >
              {hotels.map(hotel => (
                <MenuItem key={hotel._id} value={hotel._id}>{hotel.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Name"
            value={booking.nameLastname}
            fullWidth
            margin="normal"
            onChange={(e) => {
              const value = e.target.value;
              setBookings(prev =>
                prev.map((b, i) => i === index ? { ...b, nameLastname: value } : b)
              );
            }}
          />
          <TextField
            label="Tel"
            value={booking.tel}
            fullWidth
            margin="normal"
            onChange={(e) => {
              const value = e.target.value;
              setBookings(prev =>
                prev.map((b, i) => i === index ? { ...b, tel: value } : b)
              );
            }}
          />
          <TextField
            label="Nights"
            type="number"
            value={booking.night}
            fullWidth
            margin="normal"
            onChange={(e) => {
              const value = Number(e.target.value);
              setBookings(prev =>
                prev.map((b, i) => i === index ? { ...b, night: value } : b)
              );
            }}
          />
          <TextField
            label="Booking Date"
            type="date"
            value={dayjs(booking.bookingDate).format('YYYY-MM-DD')}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              const value = e.target.value;
              setBookings(prev =>
                prev.map((b, i) => i === index ? { ...b, bookingDate: value } : b)
              );
            }}
          />

          <div className="flex gap-4 mt-4">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleUpdate(booking._id, booking)}
            >
              Update
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDelete(booking._id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </main>
  );
}