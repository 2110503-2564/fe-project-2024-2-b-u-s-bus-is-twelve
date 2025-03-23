"use client";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ App Router

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);
  const router = useRouter(); // ✅

  const hotels = [
    {
      name: "安娜 HOTEL",
      location: "Yaowarat, Bangkok",
      price: 1150.0,
      image: "/img/cover.jpg",
      description:
        "安娜 HOTEL — A peaceful stay in the heart of Yaowarat. Discover the soul of Chinatown, one street and flavor at a time.",
    },
    {
      name: "Merry House",
      location: "Mae-Rim, Chiangmai",
      price: 880.0,
      image: "/img/cover2.jpg",
      description:
        "Merry House, Chiangmai — Where slow mornings and soft sunsets live. Feel at home, far from the noise.",
    },
    {
      name: "Cozy Days Hotel",
      location: "Patumwan, Bangkok",
      price: 990.0,
      image: "/img/cover3.jpg",
      description:
        "Cozy Days Hotel — Slow mornings in fast-moving Bangkok. Designed for rest, right where life happens.",
    },
    {
      name: "Civic Haus",
      location: "Hat-Yai, Songkla",
      price: 1010.0,
      image: "/img/cover4.jpg",
      description:
        "Civic Haus — Stay sharp. Stay central. In the heart of Hat Yai, where the city meets style.",
    },
    {
      name: "Cozy House",
      location: "Nonthaburi",
      price: 796.0,
      image: "/img/cover5.jpg",
      description:
        "Cozy House — Your home in Nonthaburi. Peaceful, personal, and perfectly local.",
    },
    {
      name: "Seabreeze Inn",
      location: "Phuket",
      price: 986.0,
      image: "/img/cover6.jpg",
      description:
        "Seabreeze Inn, Phuket — Where every breeze feels like a welcome. Walk to the beach. Stay for the peace.",
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
            <p>
              Click "Select" to view <br />
              hotel details and make a reservation.
            </p>
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
                  <p className="text-lg font-semibold">
                    ฿{hotel.price} per night
                  </p>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300"
                    onClick={() => {
                      if (selectedHotel === index) {
                        router.push("/booking"); // ✅ Redirect to /booking
                      } else {
                        setSelectedHotel(index); // ✅ Select hotel
                      }
                    }}
                  >
                    {selectedHotel === index ? "Booking" : "Select"}
                  </button>
                </div>
                {selectedHotel === index && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      {hotel.description}
                    </p>
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
