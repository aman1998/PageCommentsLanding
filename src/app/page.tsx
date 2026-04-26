"use client";

import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import FAQ from "@/components/sections/Faq";
import Ready from "@/components/sections/Ready";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Ready />
    </>
  );
}
