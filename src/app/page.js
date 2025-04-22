import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./Components/HeroSection/Page";
import TopTrending from "./Components/TopTrending/page"
import Collection from '@/app/Components/Collections/page'
import Carousel from "./Components/Carousel/page";
import ReelSection from "./Components/ReelSection/reelSection";
// import FloatingWhatsApp from "./Components/FloatingWhatsApp/page";

export default function Home() {
  return (
    <>
     <HeroSection/>
     {/* <FloatingWhatsApp/> */}
      <ReelSection/>
      <TopTrending/>
      <Carousel/>
      <Collection/>
    </>
   
  );
}
