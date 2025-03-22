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
            <div className="flex justify-between items-center w-full">
                <div className="absolute left-0 h-full flex items-center px-2">
                    {session ? (
                        <Link href='/api/auth/signout' className="text-cyan-600 text-sm">
                            Sign-Out of {session.user?.name}
                        </Link>
                    ) : (
                        <Link href='/api/auth/signin' className="text-cyan-600 text-sm">
                            Sign-In
                        </Link>
                    )}

                <TopMenuItem title='My Booking' pageRef='/mybooking' /> 
                
                </div>

            </div>

            <TopMenuItem title='Booking' pageRef='/booking'/>

            <Image src={'/img/logo.png'} className={styles.logoimg} alt='logo' width={0} height={0} sizes='100vh' />
        </div>
    );
}
