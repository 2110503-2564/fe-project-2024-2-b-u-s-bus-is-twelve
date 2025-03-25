'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "./banner.module.css"
import { useSession } from 'next-auth/react';

export default function Banner () {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg', '/img/cover5.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()

    const { data:session } = useSession()
    console.log(session?.user.token)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % covers.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className={styles.banner} >
            <Image src={covers[index%5]} 
                alt='cover'
                fill={true}
                priority
                objectFit="cover"
            />
            <div className="relative top-[150px] z-20 text-center text-white">
            <h1 className="text-left text-4xl md:text-4xl lg:text-5xl font-bold leading-tight ml-20 mt-5 font-playfair">
                Let's Book <br />
                Your Dream <br />
                Hotel Today
            </h1>
            <p className="text-left text-lg md:text-xl lg:text-2xl text-gray-200 mt-2 ml-20 py-3">
                Discover the best deals and <br />
                unforgettable stays, just a click away.
            </p>
            </div>

            <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                {covers.map((_, i) => (
                    <div 
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out ${
                            i === index ? 'bg-white scale-125' : 'bg-gray-500 opacity-50'
                        }`}
                    />
                ))}
            </div>

            {
                session? <div className='z-30 absolute bottom-5 right-10 font-semibold text-white text-xl'>Welcome {session.user?.name}</div> : null
            }

            {/* <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={ (e)=>{ e.stopPropagation(); router.push('/venue') } }>
                Select Venue
            </button> */}
        </div>
    );
}