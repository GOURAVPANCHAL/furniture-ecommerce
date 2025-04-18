import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./Components/HeroSection/Page";
import TopTrending from "./Components/TopTrending/page"
// import SpecialCards from '@/app/Components/SpecialCards/page'
import Carousel from "./Components/Carousel/page";
import ReelSection from "./Components/ReelSection/reelSection";

export default function Home() {
  return (
    <>
     <HeroSection/>
      <ReelSection/>
      <TopTrending/>
      {/* <Carousel/> */}
      {/* <SpecialCards/> */}
    </>
   
  );
}
