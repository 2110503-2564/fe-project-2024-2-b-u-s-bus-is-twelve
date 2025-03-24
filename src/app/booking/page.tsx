'use client';
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
  const [night, setNight] = useState(1);
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const handleBooking = () => {
    if (!nameLastname || !tel || !venue || !bookDate) {
      alert("Please fill in all fields!");
      return;
    }

    dispatch(
      addBooking({
        nameLastname,
        tel,
        night,
        venue,
        bookDate: bookDate.format("YYYY-MM-DD"),
      })
    );

    alert("Booking successful!");

    setNameLastname("");
    setTel("");
    setNight(1);
    setVenue("");
    setBookDate(null);
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center space-y-6 py-10 bg-gray-900 text-white">
      <div className="text-2xl font-semibold">Hotel Booking</div>

      <div className="flex flex-col bg-slate-100 rounded-lg space-y-5 w-[90%] max-w-md px-6 py-6">
      <TextField
        name="Name-Lastname"
        label="Name-Lastname"
        variant="standard"
        value={nameLastname}
        onChange={(e) => setNameLastname(e.target.value)}
        InputProps={{ style: { color: "#000" } }} // dark text
        InputLabelProps={{ style: { color: "#555" } }} // darker label
        sx={{
            '& .MuiInput-underline:before': { borderBottomColor: '#aaa' },
            '& .MuiInput-underline:hover:before': { borderBottomColor: '#888' },
            '& .MuiInput-underline:after': { borderBottomColor: '#000' },
        }}
        />

        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          InputProps={{ style: { color: "#000" } }}
          InputLabelProps={{ style: { color: "#555" } }}
          sx={{
            '& .MuiInput-underline:before': { borderBottomColor: '#666' },
            '& .MuiInput-underline:hover:before': { borderBottomColor: '#aaa' },
            '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
          }}
        />

        <TextField
          name="Night"
          label="Night"
          type="number"
          variant="standard"
          value={night}
          onChange={(e) => setNight(Number(e.target.value))}
          InputProps={{ style: { color: "#000" } }}
          InputLabelProps={{ style: { color: "#555" } }}
          sx={{
            '& .MuiInput-underline:before': { borderBottomColor: '#666' },
            '& .MuiInput-underline:hover:before': { borderBottomColor: '#aaa' },
            '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
          }}
        />

        <Select
        variant="standard"
        name="Hotel"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        displayEmpty
        fullWidth
        sx={{
            color: "#000", // text color inside select
            borderBottom: "1px solid #aaa",
            '&:before': {
            borderBottom: "1px solid #aaa",
            },
            '&:hover:not(.Mui-disabled):before': {
            borderBottom: "1px solid #888",
            },
            '&:after': {
            borderBottom: "1px solid #000",
            },
            '.MuiSelect-icon': { color: '#000' }, // dropdown icon color
        }}
        inputProps={{
            style: { color: '#000' }, // input text color
        }}
        renderValue={
            venue !== "" ? undefined : () => <span style={{ color: "#888" }}>Select Hotel</span>
        }
        >
        <MenuItem value="" disabled>Select Hotel</MenuItem>
        <MenuItem value="AnnaHotel">安娜 HOTEL</MenuItem>
        <MenuItem value="MerryHouse">Merry House</MenuItem>
        <MenuItem value="Cozy Days Hotel">Cozy Days Hotel</MenuItem>
        <MenuItem value="Civic Haus">Civic Haus</MenuItem>
        <MenuItem value="CozyHouse">Cozy House</MenuItem>
        <MenuItem value="SeabreezeInn">Seabreeze Inn</MenuItem>
        </Select>


        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Booking Date"
            value={bookDate}
            onChange={(date) => setBookDate(date)}
            slotProps={{
              textField: {
                variant: "standard",
                InputLabelProps: { style: { color: "#000" } },
                InputProps: { style: { color: "#555" } },
                sx: {
                  '& .MuiInput-underline:before': { borderBottomColor: '#666' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#aaa' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#fff' },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>

      <Button
        variant="contained"
        color="primary"
        name="Book Hotel"
        onClick={handleBooking}
        sx={{ mt: 2 }}
      >
        Book Hotel
      </Button>
    </main>
  );
}
