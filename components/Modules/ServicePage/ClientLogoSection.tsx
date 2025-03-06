"use client"

import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import { Container } from "@/components/Container/Container";
import Image from "next/image";

const ClientLogoSection = () => {
  return (
    <div className="px-5 lg:px-0 bg-gradient-to-b from-[#000000] overflow-hidden relative to-[#00008B] to-purple-5000 py-20  lg:pt-32 lg:pb-48">
      <ScrollReveal hidden={{ y: 100 }} visible={{ y: 0 }}>
      <Container>
        <div className="lg:max-w-8xl mx-auto">
            <h1 className="text-white mb-9 text-xl font-semibold lg:text-xl xl:text-3xl  text-center">We contributed to the success of our clients</h1>

            <p className="p-4 text-white text-sm lg:text-base bg-[#000032] max-w-[400px] mx-auto lg:-mb-20 lg:mt-12 relative z-40 border border-white/30 rounded-xl text-center">TRUSTED BY OUR CLIENTS</p>

            <div className="rounded-3xl flex-wrap lg:flex-nowrap border border-white/30 p-9 lg:p-12 xl:px-12 xl:py-20 xl:flex items-center gap-8 xl:space-x-6 w-full mt-8 lg:mt-12 lg:mx-auto">
                <Image width={200} className=" w-full" height={150} src="/images/client-logo.png" alt="client logo" />
                <Image width={200} className=" w-full" height={150} src="/images/client-logo.png" alt="client logo" />
                <Image width={200} className=" w-full" height={150} src="/images/client-logo.png" alt="client logo" />
                <Image width={200} className=" w-full" height={150} src="/images/client-logo.png" alt="client logo" />
                <Image width={200} className=" w-full" height={150} src="/images/client-logo.png" alt="client logo" />
                <Image width={200} className=" w-full" height={150} src="/images/client-logo.png" alt="client logo" />
            </div>
        </div>
      </Container>
      </ScrollReveal>
    </div>
  );
};

export default ClientLogoSection;
