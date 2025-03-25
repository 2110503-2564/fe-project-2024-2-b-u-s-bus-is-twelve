'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const hotels = [
    { id: 1, image: "/img/cover.jpg", name: "Pamookkoo Resort", location: "Pamookkoo Resort, Phuket" },
    { id: 2, image: "/img/cover2.jpg", name: "Sametnangshe Boutique", location: "Sametnangshe Boutique, Phang-Nga" },
    { id: 3, image: "/img/cover3.jpg", name: "Rarin Villas", location: "Rarin Villas, Chiangmai" },
    { id: 4, image: "/img/cover4.jpg", name: "Baan Whaya", location: "บ้านหว่าญ่า ม่อนแจ่ม" },
    { id: 5, image: "/img/cover5.jpg", name: "Capella Bangkok", location: "Capella Bangkok" },
    { id: 6, image: "/img/cover6.jpg", name: "Casa Damnoen Residence", location: "Casa Damnoen Residence, Ratchaburi" },
    { id: 7, image: "/img/cover7.jpg", name: "Sea of Love", location: "Sea of Love, Pattaya" },
    { id: 8, image: "/img/cover8.jpg", name: "Resort De Paskani", location: "Resort De Paskani, Hua Hin" },
    { id: 9, image: "/img/cover9.jpg", name: "ปล่อยใจ ปลายนา", location: "ปล่อยใจ ปลายนา, Mae Hong Son" },
    { id: 10, image: "/img/cover10.jpg", name: "Cherlynn Resort", location: "Cherlynn Resort, Kanchanaburi" },
];

export default function RecommendHotel() {
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
                <h2 className="relative inline-block pb-4 text-3xl font-semibold font-playfair">
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
                            <div key={index} className="w-[50%] p-5 flex-shrink-0">
                                <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    {/* กำหนดอัตราส่วนของรูปภาพให้เท่ากัน */}
                                    <div className="relative w-full aspect-[4/5]">
                                        <Image
                                            src={hotel.image}
                                            alt={hotel.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* ข้อความทับบนรูปภาพ */}
                                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
                                        <p className="text-white text-xl font-semibold">{hotel.name}</p>
                                        <p className="text-white text-lg flex items-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {hotel.location}
                                        </p>
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
