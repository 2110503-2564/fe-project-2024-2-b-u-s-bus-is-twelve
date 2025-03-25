'use client'
import { useAppSelector } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

export default function BookingList() {

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems || []); 
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            {bookItems.length === 0 ? (
                <p className="text-lg text-gray-500 text-center">No Hotel Booking</p>
            ) : (
                bookItems.map((bookingItem) => (
                    <div
                        className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                        // key={bookingItem.nameLastname}
                    >
                        <div className="text-xl font-bold">{bookingItem.nameLastname}</div>
                        <div className="text-sm"> Contact : {bookingItem.tel}</div>
                        <div className="text-md"> Venue : {bookingItem.hotel}</div>
                        <div className="text-md"> Date : {bookingItem.bookDate}</div>

                        <button
                            className="block rounded-md bg-red-500 hover:bg-red-600 px-3 py-1 text-white shadow-sm mt-2"
                            onClick={() => dispatch(removeBooking(bookingItem))} 
                        >
                            Cancel Booking
                        </button>
                    </div>
                ))
            )}
        </>
    );
}
