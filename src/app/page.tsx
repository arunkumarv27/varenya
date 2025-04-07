/* eslint-disable */
"use client";

import { useRef } from "react";
import Head from "next/head"; // Import Head for favicon
import Analytics from "./Analytics";
import HomePage from "@/components/HomePage";
import { OurClients } from "@/components/OurClients";
import FeatureSectionTwo from "@/components/FeatureSectionTwo";
import { HeroSectionDemo } from "./demo";
import DigitalServicesCards from "@/components/DigitalServicesCards";
import Features from "@/components/Features";
import FullScreenBanner from "@/components/FullScreenBanner";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import Testimonals from "@/components/Testimonals";
import { Footerdemo } from "@/components/ui/footer-section";
import ContactSection from "@/components/ContactSection";
import FeatrueSectionAnother from "@/components/FeatureSectionAnother";
import VarenyaSplash from "@/components/VarenyaSplash";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
<Head>
  <link rel="icon" href="/VarenyaHorizontalpng.png" />
  <title>Varenya - Home</title>
</Head>


      <Analytics />
      <NavigationBar />

      
      <HomePage onContactClick={scrollToContact} />
      <OurClients />
      
      <FeatureSectionTwo />
      <FeaturesSectionWithHoverEffects />
      <Features />
      
      <div className="hidden md:block">
        <DigitalServicesCards />
      </div>
      <FullScreenBanner />
      <Testimonals />
      <Footerdemo />
    </div>
  );
}