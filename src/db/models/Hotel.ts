import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxLength:[50,'Name can not be more than 50 characters']
    },

    location:{
        type: String,
        required: [true, 'Please add a location']
    },

    price:{
        type: Number,
        required: [true, 'Please add a price']
    },

    image:{
        type: String,
        required: [true, 'Please add a picture']
    },

    description:{
        type: String,
        required: [true, 'Please add a description'],
    },

    // tel: { 
    //     type: String,
    //     required: [true, 'Please add a telephone number'],
    //     maxlength:[10,'Telephone number can not be more than 10 digits']
    // },

    // region: {
    //     type: String,
    //     required: [true, 'Please add a region']
    // },

});

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema)
export default Hotel