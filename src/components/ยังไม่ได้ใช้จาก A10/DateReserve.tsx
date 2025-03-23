'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Box, FormControl, InputLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";

export default function DateReserve() {
    return(
        <div className="flex flex-col bg-slate-100 rounded-lg space-y-4 w-fit px-5 py-5 justify-center">

            <TextField  name="Name-Lastname" id="Name-Lastname" label="Name-Lastname" variant="standard" />

            <TextField  name="Contact-Number" id="Contact-Number" label="Contact-Number" variant="standard" />

            <Select variant="standard" name="venue" id="venue" className="h-[2em] w-[100%]">
                <MenuItem value="Bloom">安娜 HOTEL</MenuItem>
                <MenuItem value="Spark">Merry House</MenuItem>
                <MenuItem value="GrandTable">Cozy Days Hotel</MenuItem>
                <MenuItem value="Bloom">Civic Haus</MenuItem>
                <MenuItem value="Spark">Cozy House</MenuItem>
                <MenuItem value="GrandTable">Seabreeze Inn</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" />
            </LocalizationProvider>

        </div>
    );
}