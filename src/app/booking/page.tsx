'use client';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { MenuItem, Select, TextField, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import Banner2 from "@/components/ViewHotels/Banner2";
import Rating from "@/components/Booking/Rating";
import Blog from "@/components/Booking/Blog";
import { useSession } from "next-auth/react";

export default function Booking() {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [night, setNight] = useState(1);
  const [hotel, setHotel] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleBooking = async () => {
    if (!nameLastname || !tel || !hotel || !bookDate) {
      setErrorMsg("Please fill in all fields.");
      setSuccessMsg("");
      return;
    }

    const bookingData = {
      nameLastname: nameLastname,
      tel: tel,
      night: night,
      hotel: hotel,
      bookDate: bookDate.format("YYYY-MM-DD"),
    };
    console.log("bookingData", bookingData);

    try {
      const response = await fetch("https://bus-frontend-wine.vercel.app/api/v1/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.user.token}`
        },
        body: JSON.stringify(bookingData),
      });
      
      const result = await response.json();

      if (!response.ok) {
        if (result.message?.includes("booking limit")) {
          setErrorMsg(result.message); // Show limit error message
        } else {
          setErrorMsg("Booking failed.");
        }
        setSuccessMsg("");
        return;
      }

      dispatch(addBooking(bookingData));
      setSuccessMsg("Booking successful!");
      setErrorMsg("");

      setNameLastname("");
      setTel("");
      setNight(1);
      setHotel("");
      setBookDate(null);
    } catch (error) {
      setErrorMsg("Something went wrong during booking.");
      setSuccessMsg("");
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center space-y-6 text-white">
      <Banner2 />
      <div className="text-4xl font-semibold text-black font-playfair">Hotel Booking</div>

      <div className="flex flex-col bg-gray-100 rounded-xl shadow-lg space-y-5 w-[100%] max-w-lg px-8 py-8">
        <TextField
          label="Name-Lastname"
          variant="standard"
          value={nameLastname}
          onChange={(e) => setNameLastname(e.target.value)}
          InputProps={{ style: { color: "#000", fontSize: '1.2rem' } }}
          InputLabelProps={{ style: { color: "#555", fontSize: '1.2rem' } }}
          sx={{
            '& .MuiInput-underline:before': { borderBottomColor: '#aaa' },
            '& .MuiInput-underline:hover:before': { borderBottomColor: '#888' },
            '& .MuiInput-underline:after': { borderBottomColor: '#000' },
          }}
        />

        <TextField
          label="Contact-Number"
          variant="standard"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          InputProps={{ style: { color: "#000", fontSize: '1.2rem' } }}
          InputLabelProps={{ style: { color: "#555", fontSize: '1.2rem' } }}
          sx={{
            '& .MuiInput-underline:before': { borderBottomColor: '#666' },
            '& .MuiInput-underline:hover:before': { borderBottomColor: '#aaa' },
            '& .MuiInput-underline:after': { borderBottomColor: '#000' },
          }}
        />

        <TextField
          label="Night"
          type="number"
          variant="standard"
          value={night}
          onChange={(e) => setNight(Number(e.target.value))}
          InputProps={{ style: { color: "#000", fontSize: '1.2rem' } }}
          InputLabelProps={{ style: { color: "#555", fontSize: '1.2rem' } }}
          sx={{
            '& .MuiInput-underline:before': { borderBottomColor: '#666' },
            '& .MuiInput-underline:hover:before': { borderBottomColor: '#aaa' },
            '& .MuiInput-underline:after': { borderBottomColor: '#000' },
          }}
        />

        <Select
          variant="standard"
          value={hotel}
          onChange={(e) => setHotel(e.target.value)}
          displayEmpty
          fullWidth
          sx={{
            color: "#000",
            fontSize: '1.2rem',
            borderBottom: "1px solid #aaa",
            '&:before': { borderBottom: "1px solid #aaa" },
            '&:hover:not(.Mui-disabled):before': { borderBottom: "1px solid #888" },
            '&:after': { borderBottom: "1px solid #000" },
            '.MuiSelect-icon': { color: '#000' },
          }}
          inputProps={{
            style: { color: '#000', fontSize: '1.2rem' },
          }}
          renderValue={
            hotel !== "" ? undefined : () => <span style={{ color: "#888", fontSize: '1.2rem' }}>Select Hotel</span>
          }
        >
          <MenuItem value="" disabled>Select Hotel</MenuItem>
          <MenuItem value="Pamookkoo Resort">Pamookkoo Resort</MenuItem>
          <MenuItem value="Sametnangshe Boutique">Sametnangshe Boutique</MenuItem>
          <MenuItem value="Rarin Villas">Rarin Villas</MenuItem>
          <MenuItem value="Baan Whaya">Baan Whaya</MenuItem>
          <MenuItem value="Capella Bangkok">Capella Bangkok</MenuItem>
          <MenuItem value="Casa Damnoen Residence">Casa Damnoen Residence</MenuItem>
        </Select>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Booking Date"
            value={bookDate}
            onChange={(date) => setBookDate(date)}
            slotProps={{
              textField: {
                variant: "standard",
                InputLabelProps: { style: { color: "#000", fontSize: '1.2rem' } },
                InputProps: { style: { color: "#555", fontSize: '1.2rem' } },
                sx: {
                  '& .MuiInput-underline:before': { borderBottomColor: '#666' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#aaa' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#000' },
                },
              },
            }}
          />
        </LocalizationProvider>

        {errorMsg && <div className="text-red-600 text-lg">{errorMsg}</div>}
        {successMsg && <div className="text-green-600 text-lg">{successMsg}</div>}
      </div>

      <Button
        variant="contained"
        sx={{
          mt: 2,
          bgcolor: "black",
          color: "white",
          fontSize: '1.2rem',
          padding: '12px 24px',
          "&:hover": {
            bgcolor: "#333",
          },
        }}
        onClick={handleBooking}
      >
        Book Hotel
      </Button>

      <br />
      <Rating />
      <br />
      <Blog />
    </main>
  );
}