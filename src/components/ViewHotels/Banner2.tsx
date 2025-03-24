'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "@/components/Home/banner.module.css"
import { useSession } from 'next-auth/react';

export default function Banner2 () {

    return (
        <div className={styles.banner} >
            <Image src='/img/cover.jpg' 
                alt='cover'
                fill={true}
                priority
                objectFit="cover"
            />
            <div className="relative top-[200px] z-20 text-center text-white">
            <h1 className="text-center text-4xl md:text-4xl lg:text-5xl font-bold leading-tight ml-20 mt-5 font-playfair">
                Let's Book Your Dream Hotel Today!
            </h1>
            </div>
        </div>
    );
}