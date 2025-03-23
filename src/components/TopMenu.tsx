import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            <div className="flex justify-between items-center w-full" >

            <div className="flex items-center space-x-1 ml-20">
            <Image 
                src="/img/logo.png" 
                alt="logo" 
                width={25} 
                height={25} 
                className="object-contain" 
            />
            <span className="w-[130px] text-center my-auto font-[sans-serif] text-[15pt] font-semibold text-white">BUSTRAVEL</span>
            </div>

                <div className="absolute right-10 h-full flex items-center gap-x-1">

                <TopMenuItem title='Home' pageRef='/' className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt]"/>

                <TopMenuItem title='Explore' pageRef='/viewhotels' className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt]"/>

                <TopMenuItem title='Booking' pageRef='/booking' className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt]"/>

                {/* <TopMenuItem title='My Booking' pageRef='/mybooking' />  */}
                
                    {session ? (
                        <Link href='/api/auth/signout' className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt]">
                            Sign-Out of {session.user?.name}
                        </Link>
                    ) : (
                        <Link href='/api/auth/signin' className="w-[120px] text-center my-auto font-[sans-serif] text-[13pt] text-white hover:underline hover:text-[14pt]">
                            Sign-In
                        </Link>
                    )}
                    
                </div>

            </div>

        </div>
    );
}
