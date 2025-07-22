import Hero3D from "@/components/Hero3D";
import FeaturesGrid from "@/components/FeaturesGrid";
import VideoSection from "@/components/VideoSection";
import HeroSection from "@/components/HeroSection";
import MobileShowcase from "@/components/MobiuleShowcase";
const page = () => {
  return (
    <>
      <HeroSection/>
      {/* <Hero3D /> */}
      <FeaturesGrid />
      <MobileShowcase/>
      <VideoSection />
    </>
  );
};

export default page;