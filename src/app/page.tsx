import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Home/Banner"
import Card from "@/components/ยังไม่ได้ใช้จาก A10/Card";
import CardPanel from "@/components/ยังไม่ได้ใช้จาก A10/CardPanel";
import AboutUs from "@/components/Home/AboutUs";
import Video from "@/components/Home/Video";
import RecommendHotel from "@/components/Home/RecommendHotel";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <Video />
      <br />
      <RecommendHotel />
    </main>
  );
}
