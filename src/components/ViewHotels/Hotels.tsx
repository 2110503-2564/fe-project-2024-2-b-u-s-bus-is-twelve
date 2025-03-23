'use client'
import { MapPin } from "lucide-react";
import { useState } from "react";

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null); // กำหนดให้รองรับทั้ง number และ null

  const hotels = [
    {
      name: "安娜 HOTEL",
      location: "Yaowarat, Bangkok",
      price: 1150.00,
      image: "/img/cover4.jpg",
      description: "A luxurious hotel room with an amazing view of the city and beach.",
    },
    {
      name: "Merry House",
      location: "Mae-Rim, Chiangmai",
      price: 890.00,
      image: "/img/cover4.jpg",
      description: "Experience comfort and luxury in the heart of Ratchaburi.",
    },
    {
      name: "Cozy Days Hotel",
      location: "Patumwan, Bangkok",
      price: 990.00,
      image: "/img/cover4.jpg",
      description: "A great place to relax and enjoy the best amenities.",
    },
    {
      name: "Civic Haus",
      location: "Hat-Yai, Songkla",
      price: 1010.00 ,
      image: "/img/cover4.jpg",
      description: "A great place to relax and enjoy the best amenities.",
    },
    {
      name: "Cozy House",
      location: "Nonthaburi",
      price: 796.00  ,
      image: "/img/cover4.jpg",
      description: "A great place to relax and enjoy the best amenities.",
    },
    {
      name: "Seabreeze Inn",
      location: "Phuket",
      price: 986.00  ,
      image: "/img/cover4.jpg",
      description: "A great place to relax and enjoy the best amenities.",
    },
    
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full px-20 py-4">
        <div className="flex items-center justify-between mt-4 leading-relaxed">
          <div className="text-4xl font-semibold font-playfair text-left">
            Your Dream <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Luxurious Hotel Room
          </div>

          <div className="ml-8 text-lg text-gray-800">
            <p>Click "Select" to view <br />
              hotel details and make a reservation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transform ${
                selectedHotel === index ? "scale-110" : "hover:scale-105"
              } transition-all duration-300`}
            >
              <img
                src={hotel.image}
                alt="Hotel Room"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{hotel.name}</h2>
                <p className="text-sm text-gray-500 flex">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hotel.location}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-semibold">฿{hotel.price} per night</p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300"
                    onClick={() =>
                      setSelectedHotel(selectedHotel === index ? null : index)
                    }
                  >
                    {selectedHotel === index ? "Booking" : "Select"}
                  </button>
                </div>
                {selectedHotel === index && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{hotel.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
