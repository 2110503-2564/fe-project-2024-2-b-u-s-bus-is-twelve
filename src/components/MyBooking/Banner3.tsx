'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "@/components/Home/banner.module.css"
import { useSession } from 'next-auth/react';

export default function Banner3 () {

    return (
        <div className={styles.banner}>
        <Image
            src="/img/cover6.jpg"
            alt="cover"
            fill
            priority
            className="object-cover"
        />
        <div className="absolute top-[200px] w-full text-center text-white z-20">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight font-playfair">
              View and Manage booking here!
            </h1>
        </div>
        </div>
    );
}