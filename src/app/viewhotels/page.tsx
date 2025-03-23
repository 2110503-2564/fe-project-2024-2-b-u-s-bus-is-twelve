import Banner2 from "@/components/ViewHotels/Banner2";
import Gallery from "@/components/ViewHotels/Gallery";
import Hotels from "@/components/ViewHotels/Hotels";
import Image from "next/image";

export default function ViewHotels() {
    return (
        <main>
            <Banner2 />
            <br />
            <Hotels />
            <br />
            <Gallery />
            
        </main>
    );
}