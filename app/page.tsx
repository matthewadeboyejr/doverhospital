import HeroSection from "@/components /homepage/HeroSection";
import HomeServices from "@/components /homepage/HomeServices";
import Offer from "@/components /homepage/Offer";
import OurDoctors from "@/components /homepage/OurDoctors";
import OverView from "@/components /homepage/OverView";
import QuickLinks from "@/components /homepage/QuickLinks";
import Testimonies from "@/components /homepage/Testimonies";

export default function Home() {
  return (
    <div className="bg-white w-full min-h-screen scroll-smooth overflow-x-hidden">
      <HeroSection />
      <QuickLinks />
      <HomeServices />
      <OverView />
      <Offer />
      <OurDoctors />
      <Testimonies />
    </div>
  );
}
