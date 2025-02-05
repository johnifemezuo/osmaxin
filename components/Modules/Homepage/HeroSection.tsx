import { Container } from "@/components/Container/Container";
import StarIcon from "@/components/Icons/StarIcon";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#00008B] to-purple-5000  h-[150vh]">
      <Container>
        <div className="flex flex-row items-center">
          <div className="flex flex-col  justify-center h-screen w-[700px] space-y-8">
            <h1 className="text-4xl font-bold lg:text-8xl text-white ">
              The Digital <span className="text-[#F1606F]">Partner</span> you
              need
            </h1>
            <p className="text-base lg:text-lg">
              We believe in the power of partnerships to create strategic,
              scalable, and commercially viable digital solutions
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center ">
                <button className="bg-transparent border text-white py-2 px-4 rounded-full h-12 ">
                  Get Started
                </button>
                <div className="bg-white rounded-full w-12 h-12 grid place-content-center">
                  <svg
                    width="36"
                    height="35"
                    viewBox="0 0 36 35"
                    fill="none"
                    color="#06062D"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.33335 18.9583L6.33335 16.0417L23.8333 16.0417L15.8125 8.02085L17.8833 5.95001L29.4333 17.5L17.8833 29.05L15.8125 26.9792L23.8333 18.9583L6.33335 18.9583Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center space-x-4">
                  <Image
                    src="/images/googleicon.png"
                    alt="google icon"
                    width={55}
                    height={55}
                  />

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <p>5.0</p>
                    </div>
                    <p>The highest rated web studio in Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>

        <div className="flex flex-col space-y-4 pt-12 border-t border-white/20">
          <h1 className="text-white text-lg lg:text-4xl leading-loose">
            Over the past 10 years, we’ve perfected our Design & Development
            game and are eager to help passionate Founders perfect theirs.
            Success is a team play, right? We also offer other services such as
            Linux server administration, wordpress management. Let’s aim for the
            top together!
          </h1>

          <div className="flex items-center space-x-4">
            <Link href="/" className="underline">
              LEARN MORE ABOUT US
            </Link>
            <div>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.83331 12.4583L3.83331 10.5417L15.3333 10.5417L10.0625 5.27084L11.4233 3.91L19.0133 11.5L11.4233 19.09L10.0625 17.7292L15.3333 12.4583L3.83331 12.4583Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
