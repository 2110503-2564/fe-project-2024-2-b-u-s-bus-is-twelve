import AddHotelsMenu from '@/components/AddHotels(Admin)/AddHotelsMenu';
import styles from './addhotels.module.css'

export default function AddHotelsLayout( {children}: {children:React.ReactNode}) {
    return(
        <div className={styles.sectionlayout}>
            <AddHotelsMenu />
            {children}
        </div>
    );
}