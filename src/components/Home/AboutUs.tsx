"use client";
import { useRouter } from "next/navigation";

export default function AboutUs(){

    const router = useRouter(); 

    return(
        <div className="flex items-center justify-between py-10 px-20 bg-white">
            <div className="w-2/3 pr-10">
                <div className="mt-4 text-3xl font-semibold font-playfair">
                    We Provide You <br />
                    perfect stay in just a few clicks! <br />
                </div>

                <div className="mt-4 py-2 text-xl text-gray-800">
                    Whether you’re looking for a luxurious getaway, a cozy retreat, or a budget-friendly option, we’ve got you covered. 
                    Our platform ensures the best deals and a seamless booking experience, so you can focus on enjoying your trip.
                    <br />
                    <br />
                    Book your next hotel stay today and make unforgettable memories!
                </div>

                <div className="mt-6">
                <button className="bg-white border border-black font-semibold py-2 px-4 rounded hover:bg-black hover:text-white hover:shadow-lg hover:border-transparent text-xl transform transition-all duration-200 hover:scale-105" onClick={() => router.push("/viewhotels")}>
                    Booking Now!
                </button>
                </div>

            </div>

            <div className="w-1/3">
                <img src="/img/aboutUs.png" alt="About Us" className="w-[80%] h-auto" />
            </div>
        </div>


    );
}
