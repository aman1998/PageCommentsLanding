"use client";

import Hero from "../components/sections/Hero";
import VideoSection from "../components/sections/VideoSection";
import WhoItsFor from "../components/sections/WhoItsFor";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import FAQ from "@/components/sections/Faq";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <WhoItsFor />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
}
