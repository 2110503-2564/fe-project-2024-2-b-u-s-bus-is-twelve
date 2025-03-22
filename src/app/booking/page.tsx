'use client'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { MenuItem, Select, TextField, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export default function Booking() {
    const dispatch = useDispatch();

    const [nameLastname, setNameLastname] = useState("");
    const [tel, setTel] = useState("");
    const [venue, setVenue] = useState("");
    const [bookDate, setBookDate] = useState<Dayjs | null>(null);

    const handleBooking = () => {
        if (!nameLastname || !tel || !venue || !bookDate) {
            alert("Please fill in all fields!");
            return;
        }

        dispatch(addBooking({
            nameLastname,
            tel,
            venue,
            bookDate: bookDate.format("YYYY-MM-DD"),
        }));

        alert("Booking successful!");

        setNameLastname("");
        setTel("");
        setVenue("");
        setBookDate(null);
    };

    return (
        <main className="w-full flex flex-col items-center space-y-4 py-3">
            <div className="text-xl font-medium">Venue Booking</div>

            <div className="flex flex-col bg-slate-100 rounded-lg space-y-4 w-fit px-5 py-5">
                <TextField
                    name="Name-Lastname"
                    label="Name-Lastname"
                    variant="standard"
                    value={nameLastname}
                    onChange={(e) => setNameLastname(e.target.value)}
                />

                <TextField
                    name="Contact-Number"
                    label="Contact-Number"
                    variant="standard"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />

                <Select
                    variant="standard"
                    name="venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="h-[2em] w-full"
                >
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        className="bg-white"
                        value={bookDate}
                        onChange={(date) => setBookDate(date)}
                    />
                </LocalizationProvider>
            </div>

            <Button
                variant="contained"
                color="primary"
                name="Book Venue"
                onClick={handleBooking}
            >
                Book Venue
            </Button>
        </main>
    );
}
