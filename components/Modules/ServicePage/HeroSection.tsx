import { Container } from "@/components/Container/Container";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import RateUi from "@/components/UI/RateUi";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#00008B] to-purple-5000 h-auto ">
      <div className="w-full h-[190vh] lg:h-[150vh] xl:h-[170vh] 2xl:h-[145vh] z-10 bg-gradient-to-r from-[#0a0f293b] to-[#11154b98] absolute inset-0 "></div>

      <Container>
        <div className="h-[190vh] lg:h-[150vh] xl:h-[170vh] 2xl:h-[145vh] relative py-36 lg:pt-60 ">
          <div className="flex relative h-[100vh] lg:h-auto flex-col lg:flex-row lg:items-center px-5 w-full xl:px-0">
            <div className="flex flex-col lg:-mt-12 z-30 justify-center h-auto xl:pt-12  lg:w-full xl:w-[700px] space-y-8">
              <h1 className="text-4xl font-bold lg:text-6xl xl:text-8xl text-white ">
                The Digital <span className="text-[#F1606F]">Partner</span> you
                need
              </h1>
              <p className="text-base lg:text-lg">
                We believe in the power of partnerships to create strategic,
                scalable, and commercially viable digital solutions
              </p>

              <div className="xl:flex items-center justify-between space-y-8 xl:space-y-0">
                <div className="flex items-center ">
                  <ButtonOutline text="Get Started" link="/" />
                </div>

                <div>
                  <RateUi />
                </div>
              </div>
            </div>

            <div className="mt-12 lg:-mt-[350px] xl:mt-0 relative xl:absolute w-full xl:right-0 lg:w-[700px] xl:w-[800px] 2xl:w-[700px] z-0 xl:h-[650px]">
              <Image
                width={1000}
                height={2000}
                src="/images/slide-1.png"
                alt="hero"
                className="w-[200px] absolute top-20 -translate-y-[40px] xl:translate-y-[92px] -translate-x-[20px] xl:w-[400px] h-auto z-10"
              />
              <Image
                width={1000}
                height={2000}
                src="/images/slide-2.png"
                alt="hero"
                className="w-[200px] z-0 absolute xl:w-[300px] -translate-y-[40px] translate-x-[90px] xl:translate-x-[140px] h-auto top-8"
              />
              <Image
                width={1000}
                height={2000}
                src="/images/slide-3.png"
                alt="hero"
                className="w-[200px] absolute top-20 translate-y-[90px] xl:translate-y-[167px] translate-x-[140px] xl:translate-x-[230px] xl:w-[400px] h-auto z-10"
              />
              <Image
                width={1000}
                height={2000}
                src="/images/slide-4.png"
                alt="hero"
                className="w-[200px] z-0 absolute xl:w-[300px] translate-x-[150px] xl:translate-x-[360px] xl:translate-y-[40px] h-auto top-8"
              />
              <Image
                width={1000}
                height={2000}
                src="/images/slide-5.png"
                alt="hero"
                className="w-[200px] absolute top-20  translate-y-[50px] -translate-x-[40px] xl:translate-y-[80px] xl:translate-x-[430px] xl:w-[400px] h-auto z-10"
              />
              <Image
                width={1000}
                height={2000}
                src="/images/slide-6.png"
                alt="hero"
                className="w-[150px] z-0 absolute xl:w-[200px] translate-x-[200px] xl:translate-x-[540px] -translate-y-[20px] h-auto top-8"
              />
            </div>
          </div>

          <div className="flex relative z-30 flex-col space-y-4 pt-12 mt-36 xl:mt-52 border-t border-white/20 px-5 xl:px-0">
            <h1 className="text-white text-lg lg:text-3xl xl:text-4xl -20">
              Over the past 10 years, we’ve perfected our Design & Development
              game and are eager to help passionate Founders perfect theirs.
              Success is a team play, right? We also offer other services such
              as Linux server administration, wordpress management. Let’s aim
              for the top together!
            </h1>

            <div className="flex items-center space-x-4 mt-5">
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
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
