"use client";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState<number | null>(null);
  const router = useRouter();

  const hotels = [
    {
      name: "Pamookkoo Resort",
      location: "Pamookkoo Resort, Phuket",
      price: 3343.0,
      image: "/img/cover.jpg",
      description:
        "Pamookkoo Resort - Tropical fun awaits at Pamookoo, Phuket’s colorful family resort — with giant slides, a relaxing pool, and Kata Beach just steps away.",
    },
    {
      name: "Sametnangshe Boutique",
      location: "Sametnangshe Boutique, Phang-Nga",
      price: 3890.0,
      image: "/img/cover2.jpg",
      description:
        "Sametnangshe Boutique - Wake up to panoramic views of Phang Nga Bay at Sametnangshe Boutique. A peaceful hillside hideaway where misty mornings meet starlit skies.",
    },
    {
      name: "Rarin Villas",
      location: "Rarin Villas, Chiangmai",
      price: 1990.0,
      image: "/img/cover3.jpg",
      description:
        "Ralin Villas — A private escape in the heart of Chiang Mai. Surrounded by nature, designed for peace, and perfect for slow mornings and serene nights.",
    },
    {
      name: "Baan Whaya",
      location: "บ้านหว่าญ่า ม่อนแจ่ม",
      price: 1910.0,
      image: "/img/cover4.jpg",
      description:
        "Baan Whaya, Mon Jam — A cozy wooden stay above the clouds. Wake up to mountain mist, cool air, and endless views of northern Chiang Mai.",
    },
    {
      name: "Capella Bangkok",
      location: "Capella Bangkok",
      price: 2796.0,
      image: "/img/cover5.jpg",
      description:
        "Capella Bangkok — A riverside sanctuary of refined luxury. Experience world-class hospitality, Michelin-starred dining, and timeless tranquility by the Chao Phraya River.",
    },
    {
      name: "Casa Damnoen Residence",
      location: "Casa Damnoen Residence, Ratchaburi",
      price: 986.0,
      image: "/img/cover6.jpg",
      description:
        "Casa Damnoen Residence — A peaceful canal-side retreat in the heart of Damnoen Saduak. Blend local charm with comfort, just minutes from the famous floating market.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full px-4 md:px-20 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 leading-relaxed">
          <div className="text-4xl font-semibold font-playfair text-left">
            Your Dream <br />
            <span className="pl-6">Luxurious Hotel Room</span>
          </div>

          <div className="mt-4 md:mt-0 text-lg text-gray-800">
            <p>
              Click <strong>Select</strong> to view hotel details
              <br />
              and make a reservation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden w-full hover:shadow-xl transform ${
                selectedHotel === index ? "scale-105" : "hover:scale-100"
              } transition-all duration-300`}
            >
              <img
                src={hotel.image}
                alt={`${hotel.name} image`}
                className="w-full h-64 object-cover"
              />

              <div className="p-4 relative z-10">
                <h2 className="text-xl font-bold">{hotel.name}</h2>

                {/* ✅ Location with real Google Maps link */}
                <div className="text-sm text-gray-500 flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      hotel.location
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {hotel.location}
                  </a>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-lg font-semibold">
                    ฿{hotel.price.toLocaleString()} per night
                  </p>

                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={() => setSelectedHotel(index)}
                  >
                    {selectedHotel === index ? "Selected" : "Select"}
                  </button>
                </div>

                {selectedHotel === index && (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-gray-600">
                      {hotel.description}
                    </p>
                    <button
                      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                      onClick={() => router.push("/booking")}
                    >
                      Continue to Booking
                    </button>
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
