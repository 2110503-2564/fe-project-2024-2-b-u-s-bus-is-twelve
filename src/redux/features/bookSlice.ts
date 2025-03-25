import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface";

type BookState = {
    bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems = state.bookItems.filter(
                (item) => !(item.hotel === action.payload.hotel && item.bookDate === action.payload.bookDate)
            );

            state.bookItems.push(action.payload);
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems = state.bookItems.filter(
                (obj) =>
                    obj.nameLastname !== action.payload.nameLastname ||
                    obj.tel !== action.payload.tel ||
                    obj.hotel !== action.payload.hotel ||
                    obj.bookDate !== action.payload.bookDate
            );
        },
    },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
