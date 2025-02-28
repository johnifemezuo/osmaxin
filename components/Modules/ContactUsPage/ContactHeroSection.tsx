"use client"

import { Container } from "@/components/Container/Container";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactHeroSection = () => {
  return (
    <div className="bg-[#0E1846] py-36 lg:t-36 px-5 lg:px-0 relative">
        {/* <div className="rounded-xl absolute  bg-[#909bd6] max-w-[1400px] mx-auto h-screen mt-20 z-0"></div> */}
      <Container className="">
        <div className="h-full lg:flex lg:space-x-12 relative bg-[#1C2B72] rounded-xl p-6 lg:p-12">
          <div className="lg:w-[400px] xl:w-full">
            <h4 className="uppercase lg:text-lg text-white pb-3">about us</h4>
            <div className="flex justify-between border-y lg:space-x-6 py-6 lg:py-12 border-white relative  lg:h-auto flex-col lg:flex-row lg:items-center px-0 lg:px-5 w-full xl:px-0">
              <div className="flex flex-col lg:max-w-3xl  z-30 justify-center h-auto   w-full relative space-y-8">
                <Image
                  src="/images/bot.png"
                  alt=""
                  width={200}
                  height={200}
                  className="absolute top-0 right-0 z-0 w-[160px] lg:w-auto"
                />
                <h1 className="text-6xl font-bold lg:text-5xl xl:text-8xl capitalize text-white relative z-10 ">
                  Let`s <br /> Talk
                </h1>

                <ButtonOutline link="" text="Email us now" />
              </div>
            </div>

            <div className="py-6 lg:py-8 grid gap-4 md:flex justify-between w-full">
              <div className="flex items-center space-x-3">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  className="w-10 lg:w-12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="51"
                    height="51"
                    rx="25.5"
                    stroke="white"
                  />
                  <g clipPath="url(#clip0_111_531)">
                    <path
                      d="M31.799 27.9978C31.799 28.9638 32.0739 29.3491 32.7926 29.3491C34.3946 29.3491 35.4146 27.3078 35.4146 23.913C35.4146 18.7242 31.6334 16.2402 26.9127 16.2402C22.0562 16.2402 17.6391 19.497 17.6391 25.6518C17.6391 31.5306 21.5031 34.7322 27.4371 34.7322C29.4519 34.7322 30.8043 34.5114 32.8731 33.8214L33.317 35.6695C31.2746 36.333 29.0919 36.5251 27.4095 36.5251C19.6263 36.5251 15.4575 32.2471 15.4575 25.6507C15.4575 18.9991 20.2887 14.4727 26.9403 14.4727C33.8679 14.4727 37.5375 18.6127 37.5375 23.6911C37.5375 27.9967 36.1863 31.2811 31.9359 31.2811C30.0027 31.2811 28.7343 30.5083 28.5687 28.7959C28.0719 30.7003 26.7471 31.2811 24.9519 31.2811C22.5507 31.2811 20.5359 29.4307 20.5359 25.7059C20.5359 21.9523 22.3035 19.6339 25.4775 19.6339C27.1611 19.6339 28.2099 20.2963 28.6768 21.3451L29.4783 19.8823H31.7967V27.9978H31.799ZM28.4054 24.3546C28.4054 22.8378 27.2726 22.2018 26.3342 22.2018C25.313 22.2018 24.1826 23.0287 24.1826 25.4586C24.1826 27.3906 25.0382 28.467 26.3342 28.467C27.245 28.467 28.4054 27.8874 28.4054 26.2866V24.3546Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_111_531">
                      <rect
                        width="23"
                        height="23"
                        fill="white"
                        transform="translate(15 14)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="space-y-1">
                  <p className="text-[#8B99E0] text-xs md:text-sm">
                    EMAIL CONTACT
                  </p>
                  <p className="lg:text-xl text-white">Inquiry@osmaxin.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  className="w-10 lg:w-12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="51"
                    height="51"
                    rx="25.5"
                    stroke="white"
                  />
                  <path
                    d="M35.9999 30.92V33.92C36.0011 34.1985 35.944 34.4741 35.8324 34.7293C35.7209 34.9845 35.5572 35.2136 35.352 35.4018C35.1468 35.5901 34.9045 35.7335 34.6407 35.8227C34.3769 35.9119 34.0973 35.945 33.8199 35.92C30.7429 35.5853 27.7871 34.5338 25.1899 32.85C22.7738 31.3146 20.7253 29.2661 19.1899 26.85C17.5003 24.241 16.4485 21.2709 16.1199 18.18C16.0949 17.9034 16.1278 17.6247 16.2164 17.3616C16.3051 17.0985 16.4475 16.8567 16.6347 16.6516C16.8219 16.4465 17.0497 16.2827 17.3037 16.1705C17.5577 16.0583 17.8323 16.0002 18.1099 16H21.1099C21.5952 15.9952 22.0657 16.1671 22.4337 16.4835C22.8017 16.8 23.042 17.2394 23.1099 17.72C23.2362 18.6801 23.4711 19.6228 23.8099 20.53C23.9445 20.8879 23.9736 21.2769 23.8938 21.6509C23.8141 22.0248 23.6288 22.3681 23.3599 22.64L22.0899 23.91C23.5135 26.4135 25.5864 28.4864 28.0899 29.91L29.3599 28.64C29.6318 28.3711 29.9751 28.1858 30.3491 28.1061C30.723 28.0263 31.112 28.0554 31.4699 28.19C32.3771 28.5289 33.3198 28.7637 34.2799 28.89C34.7657 28.9585 35.2093 29.2032 35.5265 29.5775C35.8436 29.9518 36.0121 30.4296 35.9999 30.92Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="space-y-1">
                  <p className="text-[#8B99E0] text-xs md:text-sm">
                    PHONE CONTACT
                  </p>
                  <p className="lg:text-xl text-white">+234 4343 323</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
};

export default ContactHeroSection;
