import styles from './topmenu.module.css';
import Link from 'next/link';

interface TopMenuItemProps {
    title: string;
    pageRef: string;
    className?: string; 
}

export default function TopMenuItem({ title, pageRef, className }: TopMenuItemProps) {
    return (
        <Link href={pageRef} className={`${className} block`}>
            {title}
        </Link>
    );
}
