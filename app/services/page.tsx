"use client"

import BookSection from "@/components/Modules/Homepage/BookSection";
import OurProcess from "@/components/Modules/Homepage/OurProcess/OurProcess";
import ClientLogoSection from "@/components/Modules/ServicePage/ClientLogoSection";
import DesignServiceSection from "@/components/Modules/ServicePage/DesignServiceSection";
import DesktopAppServiceSection from "@/components/Modules/ServicePage/DesktopAppServiceSection";
import MobileDevSection from "@/components/Modules/ServicePage/MobileDevSection";
import SEODevSection from "@/components/Modules/ServicePage/SEODevSection";
import ServicePageHeroSection from "@/components/Modules/ServicePage/ServicePageHeroSection";
import WebDevSection from "@/components/Modules/ServicePage/WebDevSection";

export default function ServicesPage() {
  return (
    <div>
      <ServicePageHeroSection />
      <WebDevSection />
        <DesignServiceSection />
      
      <MobileDevSection />
      <DesktopAppServiceSection />
      <SEODevSection />
      <ClientLogoSection />
      <OurProcess />
      <BookSection />
    </div>
  );
}
