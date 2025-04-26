import HeroSection from "./Components/HeroSection/Page";
import TopTrending from "./Components/TopTrending/page"
import Collection from '@/app/Components/Collections/page'
import Carousel from "./Components/Carousel/page";
import ReelSection from "./Components/ReelSection/reelSection";
import FloatingWhatsApp from "./Components/FloatingWhatsApp/page";
import AnimatedMedia from "./Components/AnimatedGif/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQ from "./Components/Faq/FAQ";
export default function Home() {
  return (
    <>
     <HeroSection/>
     <FloatingWhatsApp/>
      <ReelSection/>
      <TopTrending/>
      <AnimatedMedia src="/AnimatedGif.webp" alt="Loading animation" />
      <Collection/>
      <Carousel/>
      <FAQ />
    </>
   
  );
}
