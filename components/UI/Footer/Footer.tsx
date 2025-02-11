import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../Container/Container";
import { EmailIcon } from "../../Icons/EmailIcon";
import { PhoneIcon } from "../../Icons/PhoneIcon";

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden   py-16 px-6">
      <div className="bg-gradient-to-b z-40 absolute inset-0 w-full overflow-hidden from-[#000000d2] to-[#00008B] to-purple-5000 py-16 px-6"></div>

      <Image
        src="/images/footer-img.png"
        alt="Osmaxin"
        width={2000}
        height={2000}
        className="absolute inset-0 z-0 w-full"
      />

      <Container className="relative z-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="space-y-6 :w-[400px]">
            <div className="bg-white inline-block rounded-tr-full rounded-br-rull px-8 py-5">
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
                <Link href="#" className="text-primary hover:text-primary rounded-full w-12 h-12 grid place-content-center bg-white">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-primary hover:text-primary rounded-full w-12 h-12 grid place-content-center bg-white">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-primary hover:text-primary rounded-full w-12 h-12 grid place-content-center bg-white">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-primary hover:text-primary rounded-full w-12 h-12 grid place-content-center bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-base font-medium uppercase">
                Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary">
                  Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-primary">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

          
            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-[#B88746]">
                    <PhoneIcon />
                  </span>
                  <a
                    href="tel:+2347042443344"
                    className="text-gray-300 hover:text-primary"
                  >
                    +254 701 913289
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#B88746]">
                    <PhoneIcon />
                  </span>
                  <a
                    href="tel:+2347042443344"
                    className="text-gray-300 hover:text-primary"
                  >
                    +254 707 420256
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-[#B88746]">
                    <EmailIcon />
                  </span>
                  <a
                    href="mailto:admin@aleodev.agency"
                    className="text-gray-300 hover:text-primary"
                  >
                    info@aleodev.com
                  </a>
                </li>
              </ul>
              {/* Social Links */}
              
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <p className="text-sm text-gray-400">
            © Copyright 2024 ALEODEV. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
