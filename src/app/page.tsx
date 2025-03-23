import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner"
import Card from "@/components/Card";
import CardPanel from "@/components/CardPanel";
import AboutUs from "@/components/AboutUs";
import Video from "@/components/Video";

export default function Home() {
  return (
    <main>
      <Banner />
      <AboutUs />
      <Video />
    </main>
  );
}
