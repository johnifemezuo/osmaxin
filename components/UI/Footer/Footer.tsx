import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../Container/Container";
import RateUi from "../RateUi";

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden   py-16 px-6">
      <div className="bg-gradient-to-b z-40 absolute inset-0 w-full overflow-hidden from-[#000000d2] to-[#020255] to-purple-5000 py-16 px-6"></div>

      <Image
        src="/images/footer-img.png"
        alt="Osmaxin"
        width={2000}
        height={2000}
        className="absolute inset-0 z-0 w-full"
      />

      <Container className="relative z-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="space-y-6 :w-[400px]">
            <div className="bg-white inline-block rounded-tr-full rounded-br-full px-8 py-5">
              <img
                src="/images/logo.png"
                alt=""
                className="w-[140px] lg:w-40"
              />
            </div>

            <p className="text-gray-300 text-base w-full lg:text-xl">
              Creative web & product design agency, based in Awka Nigeria.
            </p>

            <div className="flex gap-4 pt-4">
              <Link
                href="#"
                className="text-primary hover:text-primary rounded-full w-12 h-12 grid place-content-center bg-white"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-primary hover:text-primary rounded-full w-12 h-12 grid place-content-center bg-white"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-primary hover:text-primary rounded-full w-12 h-12 grid place-content-center bg-white"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-primary hover:text-primary rounded-full w-12 h-12 grid place-content-center bg-white"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-white">Business Hours:</h4>
              <p className="text-white">Mon - Fri: 9am to 5pm</p>
              <p className="text-white">Sat - Sun: Close</p>
            </div>
          </div>

          <div className="">
            {/* Services */}
            <div className="space-y-6 lg:space-y-12">
              <h3 className="text-base font-medium uppercase text-white/50">
                Links
              </h3>
              <ul className="space-y-3 lg:space-y-5">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white/30 transition-all lg:text-2xl font-medium"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white/30 transition-all lg:text-2xl font-medium"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white/30 transition-all lg:text-2xl font-medium"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white/30 transition-all lg:text-2xl font-medium"
                  >
                    Faq
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white/30 transition-all lg:text-2xl font-medium"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact */}
          </div>

          <div className="space-y-6 lg:space-y-12">
            <h3 className="text-base font-medium uppercase text-white/50">
              Contact us
            </h3>
            <ul className="space-y-3 lg:space-y-5">
              <li className="flex text-basetext-xl items-center gap-2">
                <span className="text-white`">Email:</span>
                <p className="text-secondary hover:text-primary">
                  hello@osmaxinn.com
                </p>
              </li>

              <li className="flex items-center text-basetext-xl gap-2">
                <span className="text-white">Tel:</span>
                <p className="text-secondary ">+254 707 420256</p>
              </li>

              <li className="flex items-center text-basetext-xl gap-2">
                Osmaxin, The Old Dairy B, Greatworth Hall, Banbury, Oxfordshire,
                OX17 2DH
              </li>

             <div className="pt-9 lg:mt-0">
             <RateUi />
              </div>
            </ul>
            {/* Social Links */}
          </div>
        </div>

        {/* Copyright */}
        <div className="grid gap-5 lg:flex items-center justify-between border-t border-gray-800 mt-16 pt-8">
          <div className="space-x-4 flex-1 items-center">
            <a href="terms" className="text-white/70 text-sm hover:text-white">
              Terms of Use
            </a>
            <a href="terms" className="text-white/70 text-sm hover:text-white">
              Privacy Policy
            </a>
          </div>
          <p className="text-sm text-gray-400">
            © Copyright 2024 Osmaxin. All Rights Reserved.
          </p>

        </div>
      </Container>
    </footer>
  );
};
