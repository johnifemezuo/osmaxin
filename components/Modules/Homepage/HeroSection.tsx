import { Container } from "@/components/Container/Container";
import { ButtonOutline } from "@/components/UI/Button/ButtonOutline";
import RateUi from "@/components/UI/RateUi";
import Image from "next/image";
import Link from "next/link";
import { delay, motion, stagger } from "framer-motion";
import { ScrollReveal } from "@/components/Animations/ScrollReveal";
import Reveal from "@/components/Animations/Reveal";
import { Appear } from "@/components/Animations/Appear";

const HeroSection = () => {
  const introTextVariants = {
    from: {
      y: 90,
      opacity: 0,
      delay:  stagger(0.3),
    },
    to: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const bounceAnimation = {
    y: [-40, -55, -40], // This creates the bounce effect
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // For different delays, create variants
  const bounceWithDelay = (delay: number) => ({
    y: [-40, -55, -40],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay
    }
  });
  

  return (
    <div className="bg-gradient-to-b from-[#000000] to-[#00008B] to-purple-5000 h-auto ">
      <div className="w-full h-[190vh] lg:h-[150vh] xl:h-[170vh] 2xl:h-[145vh] z-10 bg-gradient-to-r from-[#0a0f293b] to-[#11154b98] absolute inset-0 "></div>

      <Container>
        <div className="h-[190vh] lg:h-[150vh] xl:h-[170vh] 2xl:h-[145vh] relative py-36 lg:pt-60 ">
          <div className="flex relative h-[100vh] lg:h-auto flex-col lg:flex-row lg:items-center px-5 w-full xl:px-0">
            <div className="flex flex-col lg:-mt-12 z-30 justify-center h-auto xl:pt-12  lg:w-full xl:w-[700px] space-y-8">
            <motion.h1
            variants={introTextVariants}
            initial="from"
            animate="to" 
            className="text-4xl font-bold lg:text-6xl xl:text-8xl text-white ">
                The Digital <span className="text-[#F1606F]">Partner</span> you
                need
              </motion.h1>
              <motion.p  variants={introTextVariants}
            initial="from"
            animate="to"
             className="text-base lg:text-lg">
                We believe in the power of partnerships to create strategic,
                scalable, and commercially viable digital solutions
              </motion.p>

              <motion.div 
              variants={introTextVariants}
            initial="from"
            animate="to"
              className="xl:flex items-center justify-between space-y-8 xl:space-y-0">
                <div className="flex items-center ">
                  <ButtonOutline text="Get Started" link="/" />
                </div>

                <div>
                  <RateUi />
                </div>
              </motion.div>
            </div>

            <div className="mt-12 lg:-mt-[30px] xl:mt-0 relative xl:absolute w-full xl:right-0 lg:w-[700px] xl:w-[800px] 2xl:w-[700px] z-0 xl:h-[650px]">
                <Appear>
                <motion.div
                  animate={bounceWithDelay(0)}
                  className="absolute top-20 z-10"
                >
                  <Image
                    width={1000}
                    height={2000}
                    src="/images/slide-1.png"
                    alt="hero"
                    className="w-[200px] xl:w-[400px] h-auto -translate-x-[20px] xl:translate-y-[92px]"
                  />
                </motion.div>
                </Appear>


                <Appear>
                <motion.div
                  animate={bounceWithDelay(1)}
                  className="absolute top-8 z-0"
                >
                  <Image
                    width={1000}
                    height={2000}
                    src="/images/slide-2.png"
                    alt="hero"
                    className="w-[200px] xl:w-[300px] h-auto translate-x-[90px] xl:translate-x-[140px]"
                  />
                </motion.div>
                </Appear>


                <Appear>
                <motion.div
                  animate={bounceWithDelay(2)}
                  className="absolute top-20 z-10"
                >
                  <Image
                    width={1000}
                    height={2000}
                    src="/images/slide-3.png"
                    alt="hero"
                    className="w-[200px] xl:w-[400px] h-auto translate-x-[140px] translate-y-[90px] xl:translate-y-[167px] xl:translate-x-[230px]"
                  />
                </motion.div>
                </Appear>

                <Appear>
                <motion.div
                  animate={bounceWithDelay(3)}
                  className="absolute top-8 z-0"
                >
                  <Image
                    width={1000}
                    height={2000}
                    src="/images/slide-4.png"
                    alt="hero"
                    className="w-[200px] xl:w-[300px] h-auto translate-x-[150px] xl:translate-x-[360px] xl:translate-y-[40px]"
                  />
                </motion.div>
                </Appear>


                <Appear>
                <motion.div
                  animate={bounceWithDelay(4)}
                  className="absolute top-20 z-10"
                >
                  <Image
                    width={1000}
                    height={2000}
                    src="/images/slide-5.png"
                    alt="hero"
                    className="w-[200px] xl:w-[400px] h-auto -translate-x-[40px] translate-y-[50px] xl:translate-y-[80px] xl:translate-x-[430px]"
                  />
                </motion.div>
                </Appear>

                <Appear>
                <motion.div
                  animate={bounceWithDelay(5)}
                  className="absolute top-8 z-0"
                >
                  <Image
                    width={1000}
                    height={2000}
                    src="/images/slide-6.png"
                    alt="hero"
                    className="w-[150px] xl:w-[200px] h-auto translate-x-[200px] xl:translate-x-[540px] -translate-y-[20px]"
                  />
                </motion.div>
                </Appear>
            </div>
          </div>

          <Appear>
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
          </Appear>	
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
