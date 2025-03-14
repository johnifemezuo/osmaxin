import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "../../Container/Container";
import { Button } from "../Button/Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
      <motion.div   id="top" className=" w-full z-50 fixed px-3 md:px-0">
      <Container>
        <nav className=" w-full  mx-auto px-2 shadow-xl bg-white md:py- mt-4 rounded-full  ">
          <div className="flex py-2
          
           items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 ml-5">
              <Image
                width={200}
                height={200}
                src="/images/logo.png"
                className="w-[140px] h-14 lg:w-40"
                alt="Aleodev Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link
                href="/services"
                className={` lg:text-base hover:text-primary transition-all uppercase ${
                  pathname === "/services" ? "text-secondary" : "text-zinc-600"
                }`}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={` lg:text-base hover:text-secondary transition-all uppercase ${
                  pathname === "/about" ? "text-secondary" : "text-zinc-600"
                }`}
              >
                About us
              </Link>
              <Link
                href="/blog"
                className={` lg:text-base hover:text-secondary transition-all uppercase ${
                  pathname === "/blog" ? "text-secondary" : "text-zinc-600"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/works"
                className={` lg:text-base hover:text-secondary transition-all uppercase ${
                  pathname === "/works" ? "text-secondary" : "text-zinc-600"
                }`}
              >
                Projects
              </Link>
              <Link
                href="/dev-hub"
                className={` lg:text-base hover:text-secondary transition-all uppercase ${
                  pathname === "/dev-hub" ? "text-secondary" : "text-zinc-600"
                }`}
              >
                devhub
              </Link>
              <Link
                href="/contact-us"
                className={` lg:text-base hover:text-secondary transition-all uppercase ${
                  pathname === "/contact-us" ? "text-secondary" : "text-zinc-600"
                }`}
              >
                Contact us
              </Link>
            </div>

            {/* Hire Us Button */}
            <div className="hidden md:block">
              <Link target="_blank" href="/https://calendly.com/">
              <Button>BOOK A CALL</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden pr-2"
            >
              <Menu className="h-8 w-8 text-primary" />
              <span className="sr-only text-red-700">Toggle menu</span>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
        </nav>

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              className="box"
              exit={{ opacity: 0, scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div
                className={` 
            "absolute left-0 mt-2 right-0 top-0 z-50 rounded-xl bg-white p-8 shadow-lg transition-transform duration-200 ease-in-out md:hidden",
            ${isOpen ? "block" : "hidden"}
        `}
              >
                <div className="flex flex-col space-y-4">
                  <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between"
                  > 
                  <Link
                    href="/services"
                    className={` text-xl uppercase py-2 hover:text-primary transition-all ${
                      pathname === "/services"
                        ? "text-primary"
                        : "text-zinc-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  </motion.div>
                  
                  <Link
                    href="/about"
                    className={` text-xl uppercase py-2 hover:text-primary transition-all ${
                      pathname === "/about" ? "text-primary" : "text-zinc-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About us
                  </Link>
                  <Link
                    href="/blog"
                    className={` text-xl uppercase py-2 hover:text-primary transition-all ${
                      pathname === "/blog" ? "text-primary" : "text-zinc-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/works"
                    className={` text-xl uppercase py-2 hover:text-primary transition-all ${
                      pathname === "/works" ? "text-primary" : "text-zinc-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Work
                  </Link>
                  <Link
                    href="/contact-us"
                    className={` text-xl uppercase py-2 hover:text-primary transition-all ${
                      pathname === "/contact-us" ? "text-primary" : "text-zinc-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >Contact us
                  </Link>

                  <Link target="_blank" href="https://calendly.com/">
                  <Button>Book us</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
}
