'use client'
import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react"; 
import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import Link from 'next/link';

export default function TopMenu() {

    const { data: session } = useSession();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 h-[50px] z-30 flex flex-row justify-end transition-all duration-300 
        ${isScrolled ? "bg-black bg-opacity-90 backdrop-blur-sm shadow-md" : "bg-transparent"}`}>        


            <div className="flex justify-between items-center w-full" >

            <div className="flex items-center space-x-1 ml-20">
            <Image 
                src="/img/logo.png" 
                alt="logo" 
                width={25} 
                height={25} 
                className="object-contain" 
            />

            <span className="w-[130px] text-center my-auto font-[sans-serif] text-[15pt] font-semibold text-white">
                BUSTRAVEL
            </span>
            
            </div>

                <div className="absolute right-10 h-full flex items-center gap-x-1">

                <TopMenuItem
                    title='Home'
                    pageRef='/'
                    className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt] transform transition-all duration-200 hover:scale-105 "
                />

                <TopMenuItem
                    title='Explore'
                    pageRef='/viewhotels'
                    className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt] transform transition-all duration-200 hover:scale-105 "
                />

                <TopMenuItem
                    title='Booking'
                    pageRef='/booking'
                    className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt] transform transition-all duration-200 hover:scale-105 "
                />

                {session ? (
                    <TopMenuItem
                    title="MyBooking"
                    pageRef="/mybooking"
                    className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt] transform transition-all duration-200 hover:scale-105"
                    />
                ) : ("")
                }


                    {/* <TopMenuItem title='My Booking' pageRef='/mybooking' /> */}

                {session ? (
                <Link
                    href='/api/auth/signout'
                    className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt] transform transition-all duration-200 hover:scale-105 "
                >
                    Sign-Out of {session.user?.name}
                </Link>
                ) : (
                <Link
                    href='/api/auth/register'
                    className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt] transform transition-all duration-200 hover:scale-105 "
                >
                    Register
                </Link>
                )}
                </div>

            </div>

        </div>
    );
}
