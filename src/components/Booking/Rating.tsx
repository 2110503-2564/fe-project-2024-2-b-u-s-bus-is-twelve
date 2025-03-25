'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const hotels = [
    { id: 1, image: "/img/cover.jpg", name: "Pamookkoo Resort", location: "Pamookkoo Resort, Phuket", rating: 5 },
    { id: 2, image: "/img/cover2.jpg", name: "Sametnangshe Boutique", location: "Sametnangshe Boutique, Phang-Nga", rating: 4 },
    { id: 3, image: "/img/cover3.jpg", name: "Rarin Villas", location: "Rarin Villas, Chiangmai", rating: 4 },
    { id: 4, image: "/img/cover4.jpg", name: "Baan Whaya", location: "บ้านหว่าญ่า ม่อนแจ่ม", rating: 4 },
    { id: 5, image: "/img/cover5.jpg", name: "Capella Bangkok", location: "Capella Bangkok", rating: 5 },
    { id: 6, image: "/img/cover6.jpg", name: "Casa Damnoen Residence", location: "Casa Damnoen Residence, Ratchaburi", rating: 5 },
    { id: 7, image: "/img/cover7.jpg", name: "Sea of Love", location: "Sea of Love, Pattaya", rating: 5 },
    { id: 8, image: "/img/cover8.jpg", name: "Resort De Paskani", location: "Resort De Paskani, Hua Hin", rating: 4 },
    { id: 9, image: "/img/cover9.jpg", name: "ปล่อยใจ ปลายนา", location: "ปล่อยใจ ปลายนา, Mae Hong Son", rating: 5 },
    { id: 10, image: "/img/cover10.jpg", name: "Cherlynn Resort", location: "Cherlynn Resort, Kanchanaburi", rating: 5 },
];

export default function Rating() {
    const totalCards = hotels.length;
    const cardsPerView = 4;
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[100%] mx-auto flex flex-col items-start bg-white overflow-hidden px-20">
            
            {/* Section Title */}
            <div className="mb-6 text-left">
                <h2 className="relative inline-block pb-4 text-3xl font-semibold font-playfair text-black">
                    Recommend Hotel
                    <span className="absolute left-0 bottom-0 w-[75%] h-[3px] bg-black"></span>
                </h2>
                <p className="mt-4 text-xl text-gray-800">
                    Discover your perfect getaway, from luxury stays to cozy retreats.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="relative w-[100%] flex items-center">
                <button
                    className="absolute left-4 z-10 p-3 bg-gray-700 text-white rounded-full"
                    onClick={handlePrev}
                >
                    ◀
                </button>

                <div className="w-[100%] flex overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${startIndex * (100 / cardsPerView)}%)`,
                        }}
                    >
                        {hotels.concat(hotels).map((hotel, index) => (
                            <div key={index} className="w-[10%] p-5 flex-shrink-0">
                                <div className="relative rounded-lg overflow-hidden shadow-xl border border-gray-300 transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    {/* Image */}
                                    <div className="relative w-full aspect-[4/5]">
                                        <Image
                                            src={hotel.image}
                                            alt={hotel.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Text Container */}
                                    <div className="p-4 bg-white">
                                        {/* Display stars horizontally */}
                                        <div className="flex space-x-1 mb-2">
                                            {[...Array(5)].map((_, index) => (
                                                <svg
                                                    key={index}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill={index < hotel.rating ? "orange" : "gray"}
                                                    className="w-5 h-5"
                                                >
                                                    <path
                                                        d="M12 17.75l-5.5 3.25 1.5-6.25-4.75-4.5 6.25-.5 2.25-6 2.25 6 6.25.5-4.75 4.5 1.5 6.25z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                        {/* Hotel Name */}
                                        <p className="text-lg font-semibold text-black font-playfair">{hotel.name}</p>
                                        {/* Location */}
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="absolute right-4 z-10 p-3 bg-gray-700 text-white rounded-full"
                    onClick={handleNext}
                >
                    ▶
                </button>
            </div>
        </div>
    );
}
